import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ContactTerminal3D({ scrollProgress = 0 }) {
  const groupRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Active at end of scroll (0.75 - 1.0)
    let opacity = 0;
    if (scrollProgress >= 0.72) {
      opacity = THREE.MathUtils.smoothstep(scrollProgress, 0.72, 0.92);
    }

    if (groupRef.current) {
      groupRef.current.position.y = 1.0 - (1 - scrollProgress) * 4.0;
      groupRef.current.visible = opacity > 0.01;
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.z = time * 0.4;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.z = -time * 0.6;
    }
  });

  return (
    <group ref={groupRef} position={[2.0, 0, -1]}>
      {/* Outer Holographic Terminal Monolith Wireframe */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.8, 2.6, 0.4]} />
        <meshBasicMaterial
          color="#5eead4"
          wireframe={true}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Internal Monolith Glass */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.76, 2.56, 0.36]} />
        <meshBasicMaterial
          color="#080a10"
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Cyber Encryption Concentric Rings */}
      <group position={[0, 0.3, 0.22]}>
        <mesh ref={ringRef1}>
          <ringGeometry args={[0.35, 0.39, 32]} />
          <meshBasicMaterial color="#a78bfa" side={THREE.DoubleSide} transparent opacity={0.8} />
        </mesh>
        <mesh ref={ringRef2}>
          <ringGeometry args={[0.24, 0.27, 24]} />
          <meshBasicMaterial color="#f59e0b" side={THREE.DoubleSide} transparent opacity={0.9} />
        </mesh>
        <mesh>
          <circleGeometry args={[0.12, 16]} />
          <meshBasicMaterial color="#14b8a6" />
        </mesh>
      </group>

      {/* Horizontal Data Bus Bars */}
      {[-0.6, -0.75, -0.9].map((y, idx) => (
        <mesh key={idx} position={[0, y, 0.21]}>
          <planeGeometry args={[1.4, 0.04]} />
          <meshBasicMaterial
            color={idx === 1 ? "#f59e0b" : "#5eead4"}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}
