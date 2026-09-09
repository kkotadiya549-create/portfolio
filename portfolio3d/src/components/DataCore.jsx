import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const dataCoreVertexShader = `
  uniform float uTime;
  uniform float uDeconstruct;
  
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vViewPosition;
  varying float vNoise;

  // Classic Simplex 3D Noise
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

    i = mod(i, 289.0 );
    vec4 p = permute( permute( permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                  dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    
    // Animate noise displacement on the surface
    float noiseVal = snoise(position * 2.2 + vec3(0.0, uTime * 0.45, uTime * 0.2));
    vNoise = noiseVal;
    
    // When deconstructing, fragments expand outwards
    float displacement = noiseVal * 0.18 + (uDeconstruct * noiseVal * 0.85);
    vec3 newPosition = position + normal * displacement;
    
    vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const dataCoreFragmentShader = `
  uniform float uTime;
  uniform float uDeconstruct;
  uniform vec3 uColorTeal;
  uniform vec3 uColorViolet;
  uniform vec3 uColorAmber;
  
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vViewPosition;
  varying float vNoise;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vViewPosition);

    // Fresnel effect for glowing holographic edge
    float fresnel = dot(viewDir, normal);
    fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
    float fresnelPow = pow(fresnel, 2.6);

    // Hologram scan lines
    float scanline = sin((vPosition.y + uTime * 0.6) * 45.0) * 0.5 + 0.5;
    scanline = pow(scanline, 3.0) * 0.35;

    // Energy pulse
    float pulse = sin(uTime * 2.0 - length(vPosition) * 4.0) * 0.5 + 0.5;

    // Color mixing between teal, violet, and amber telemetry
    vec3 baseColor = mix(uColorTeal, uColorViolet, vNoise * 0.5 + 0.5);
    baseColor = mix(baseColor, uColorAmber, pulse * 0.35);

    // Final color with bright rim glow and holographic scan
    vec3 finalColor = baseColor * (0.35 + scanline * 0.5) + (uColorTeal * fresnelPow * 1.1);
    finalColor += uColorViolet * pow(fresnel, 5.0) * 0.8;

    // Alpha fades when deconstructed
    float alpha = clamp(fresnelPow * 1.5 + 0.25 - (uDeconstruct * 0.9), 0.0, 1.0);

    // Add bright cyber lattice
    float grid = step(0.92, fract(vPosition.x * 6.0)) + step(0.92, fract(vPosition.y * 6.0));
    finalColor += uColorTeal * grid * 0.45;

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

export default function DataCore({ scrollProgress = 0 }) {
  const meshRef = useRef();
  const innerRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uDeconstruct: { value: 0 },
      uColorTeal: { value: new THREE.Color("#14b8a6") },
      uColorViolet: { value: new THREE.Color("#8b5cf6") },
      uColorAmber: { value: new THREE.Color("#f59e0b") },
    }),
    []
  );

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = time;
      
      // Deconstruct as user scrolls past hero (0.0 -> 0.35)
      const deconstructFactor = THREE.MathUtils.clamp(scrollProgress * 2.5, 0, 1);
      meshRef.current.material.uniforms.uDeconstruct.value = deconstructFactor;
      
      // Smooth slow core rotation
      meshRef.current.rotation.y += delta * 0.35;
      meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.15;
    }

    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.6;
      innerRef.current.rotation.z += delta * 0.2;
      const scale = THREE.MathUtils.lerp(0.75, 0.05, THREE.MathUtils.clamp(scrollProgress * 3.0, 0, 1));
      innerRef.current.scale.set(scale, scale, scale);
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.x = time * 0.4;
      ringRef1.current.rotation.y = time * 0.6;
      ringRef1.current.scale.setScalar(1 + scrollProgress * 1.5);
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.z = -time * 0.5;
      ringRef2.current.rotation.x = time * 0.3;
      ringRef2.current.scale.setScalar(1 + scrollProgress * 2.0);
    }
  });

  return (
    <group position={[1.2, 0.2, 0]}>
      {/* Outer Holographic Data Core with Custom Shader */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.25, 64, 64]} />
        <shaderMaterial
          vertexShader={dataCoreVertexShader}
          fragmentShader={dataCoreFragmentShader}
          uniforms={uniforms}
          transparent={true}
          side={THREE.DoubleSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Inner Dense Processing Core (Icosahedron wireframe) */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.75, 2]} />
        <meshBasicMaterial
          color="#a78bfa"
          wireframe={true}
          transparent={true}
          opacity={0.65}
        />
      </mesh>

      {/* Orbital Quantum Containment Ring 1 */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[1.65, 0.015, 16, 100]} />
        <meshBasicMaterial
          color="#14b8a6"
          transparent={true}
          opacity={Math.max(0.1, 0.7 - scrollProgress * 1.2)}
        />
      </mesh>

      {/* Orbital Security Ring 2 */}
      <mesh ref={ringRef2}>
        <torusGeometry args={[1.9, 0.012, 16, 100]} />
        <meshBasicMaterial
          color="#f59e0b"
          transparent={true}
          opacity={Math.max(0.05, 0.5 - scrollProgress * 1.0)}
        />
      </mesh>
    </group>
  );
}
