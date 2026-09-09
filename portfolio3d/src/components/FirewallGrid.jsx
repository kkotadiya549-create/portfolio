import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

export default function FirewallGrid({ scrollProgress = 0 }) {
  const groupRef = useRef();
  const scanBeamRef = useRef();
  const breachPulseRef1 = useRef();
  const breachPulseRef2 = useRef();

  // Grid dimensions
  const gridWidth = 14;
  const gridDepth = 18;

  // Breach anomaly nodes
  const breaches = useMemo(
    () => [
      {
        id: "breach-1",
        pos: [-2.4, -0.4, -1.5],
        label: "PROMPT_INJECTION_DEFLECTED",
        code: "CVE-2026-X09",
      },
      {
        id: "breach-2",
        pos: [2.6, -0.4, -3.2],
        label: "UNAUTHORIZED_VECTOR_LEAK",
        code: "AUTH_BYPASS_ATTEMPT",
      },
    ],
    []
  );

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Fade in/out window for Firewall Grid (around scroll 0.42 to 0.88)
    let opacity = 0;
    if (scrollProgress >= 0.4 && scrollProgress <= 0.88) {
      if (scrollProgress < 0.52) {
        opacity = THREE.MathUtils.smoothstep(scrollProgress, 0.4, 0.52);
      } else if (scrollProgress > 0.78) {
        opacity = 1 - THREE.MathUtils.smoothstep(scrollProgress, 0.78, 0.88);
      } else {
        opacity = 1;
      }
    }

    if (groupRef.current) {
      groupRef.current.position.y = -1.6 + (scrollProgress - 0.6) * 3.5;
      groupRef.current.visible = opacity > 0.01;
    }

    // Scan line beam sweeps forward and backward
    if (scanBeamRef.current) {
      const zPos = Math.sin(time * 1.5) * 6 - 2;
      scanBeamRef.current.position.z = zPos;
    }

    // Animate breach repair cycle (Amber alert -> Teal repair pulse)
    const cycle = (time * 0.8) % 4.0;
    const isRepaired = cycle > 2.0;

    if (breachPulseRef1.current) {
      const s = 1 + (time * 2) % 2;
      breachPulseRef1.current.scale.set(s, s, s);
      breachPulseRef1.current.material.color.set(isRepaired ? "#14b8a6" : "#f59e0b");
      breachPulseRef1.current.material.opacity = Math.max(0, 0.7 - ((time * 2) % 2) * 0.35);
    }

    if (breachPulseRef2.current) {
      const s = 1 + ((time + 1.2) * 2) % 2;
      breachPulseRef2.current.scale.set(s, s, s);
      breachPulseRef2.current.material.color.set(isRepaired ? "#5eead4" : "#f59e0b");
      breachPulseRef2.current.material.opacity = Math.max(0, 0.7 - (((time + 1.2) * 2) % 2) * 0.35);
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.8, -4]}>
      {/* Primary Cyber Defense Grid floor */}
      <gridHelper
        args={[gridWidth, 24, "#8b5cf6", "#1e293b"]}
        position={[0, -0.6, -2]}
      />

      {/* Raised Hex / Circuit Shield Lines */}
      <mesh position={[0, -0.58, -2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[gridWidth, 16]} />
        <meshBasicMaterial
          color="#080a10"
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* Active Laser Scan Line across the grid */}
      <group ref={scanBeamRef} position={[0, -0.55, 0]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.025, 0.025, gridWidth, 16]} />
          <meshBasicMaterial color="#5eead4" />
        </mesh>
        {/* Glow halo for scan beam */}
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[gridWidth, 0.6]} />
          <meshBasicMaterial
            color="#14b8a6"
            transparent
            opacity={0.25}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* Breach Anomaly & Repair Stations */}
      {breaches.map((b, idx) => (
        <group key={b.id} position={b.pos}>
          {/* Anomaly base marker */}
          <mesh>
            <cylinderGeometry args={[0.3, 0.3, 0.05, 6]} />
            <meshBasicMaterial color="#0f172a" />
          </mesh>

          {/* Hologram Firewall Pylon */}
          <mesh position={[0, 0.45, 0]}>
            <octahedronGeometry args={[0.18, 0]} />
            <meshBasicMaterial color="#f59e0b" wireframe={true} />
          </mesh>

          {/* Expanding breach/repair shockwave ring */}
          <mesh
            ref={idx === 0 ? breachPulseRef1 : breachPulseRef2}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0.05, 0]}
          >
            <ringGeometry args={[0.35, 0.42, 32]} />
            <meshBasicMaterial
              color="#f59e0b"
              transparent
              opacity={0.6}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Breach Status Overlay HUD */}
          <Html
            distanceFactor={8}
            position={[0, 0.9, 0]}
            center
            style={{ pointerEvents: "none" }}
          >
            <div
              style={{
                background: "rgba(10, 14, 23, 0.9)",
                border: "1px solid rgba(245, 158, 11, 0.5)",
                color: "#f59e0b",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "9.5px",
                padding: "3px 8px",
                borderRadius: "3px",
                whiteSpace: "nowrap",
                boxShadow: "0 0 12px rgba(245, 158, 11, 0.25)",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                backdropFilter: "blur(4px)",
              }}
            >
              <div style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: "5px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
                DEFENSE_ACTIVE // {b.code}
              </div>
              <div style={{ color: "#5eead4", fontSize: "8.5px" }}>
                [AUTO-PATCH: 100% SECURE]
              </div>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}
