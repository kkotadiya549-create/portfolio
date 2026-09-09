import { useRef, useMemo, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function NeuralGalaxy({ scrollProgress = 0, count = 180 }) {
  const meshRef = useRef();
  const pointsRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate particle orbit data
  const particles = useMemo(() => {
    const temp = [];
    const colors = [
      new THREE.Color("#14b8a6"), // Teal
      new THREE.Color("#5eead4"), // Bright Cyan
      new THREE.Color("#8b5cf6"), // Violet
      new THREE.Color("#a78bfa"), // Light Violet
      new THREE.Color("#f59e0b"), // Amber
    ];

    for (let i = 0; i < count; i++) {
      const radius = 1.8 + Math.random() * 3.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.7; // Disc-like spread
      const speed = (0.2 + Math.random() * 0.5) * (Math.random() > 0.5 ? 1 : -1);
      const size = 0.02 + Math.random() * 0.04;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const yOffset = (Math.random() - 0.5) * 1.5;

      temp.push({ radius, theta, phi, speed, size, color, yOffset });
    }
    return temp;
  }, [count]);

  // Points cloud for deeper galaxy dust
  const dustPositions = useMemo(() => {
    const pos = new Float32Array(count * 6);
    for (let i = 0; i < count * 2; i++) {
      const r = 1.5 + Math.random() * 6.0;
      const a = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 3.5;
      pos[i * 3] = Math.cos(a) * r;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(a) * r;
    }
    return pos;
  }, [count]);

  useLayoutEffect(() => {
    if (!meshRef.current) return;
    particles.forEach((particle, i) => {
      meshRef.current.setColorAt(i, particle.color);
    });
    meshRef.current.instanceColor.needsUpdate = true;
  }, [particles]);

  useFrame(({ clock }, delta) => {
    const time = clock.getElapsedTime();

    if (meshRef.current) {
      // As scroll increases, galaxy expands outward
      const expansion = 1.0 + scrollProgress * 2.2;

      particles.forEach((p, i) => {
        const currentTheta = p.theta + time * p.speed * 0.35;
        const r = p.radius * expansion;
        
        const x = Math.cos(currentTheta) * Math.cos(p.phi) * r;
        const y = Math.sin(p.phi) * r * 0.6 + p.yOffset + Math.sin(time + i) * 0.1;
        const z = Math.sin(currentTheta) * Math.cos(p.phi) * r;

        dummy.position.set(x, y, z);
        dummy.rotation.set(time * p.speed, time * p.speed * 1.5, 0);
        
        // Pulse size slightly
        const scale = p.size * (1 + Math.sin(time * 2 + i) * 0.25);
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();

        meshRef.current.setMatrixAt(i, dummy.matrix);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
      meshRef.current.rotation.y += delta * 0.05;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.03;
    }
  });

  return (
    <group position={[1.2, 0.2, 0]}>
      {/* Instanced floating neural nodes */}
      <instancedMesh ref={meshRef} args={[null, null, count]}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial transparent opacity={0.85} />
      </instancedMesh>

      {/* Sparse background neural dust */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count * 2}
            array={dustPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.025}
          color="#5eead4"
          transparent
          opacity={Math.max(0.15, 0.5 - scrollProgress * 0.4)}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
