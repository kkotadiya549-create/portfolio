import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Html } from "@react-three/drei";
import * as THREE from "three";

export default function AgentGraph({ scrollProgress = 0 }) {
  const groupRef = useRef();

  // Agent nodes defining autonomous agentic AI + cybersecurity architecture
  const nodes = useMemo(
    () => [
      {
        id: "planner",
        label: "PLANNER",
        role: "Intent routing + task DAG",
        pos: [0, 1.6, 0],
        color: "#5eead4",
        type: "agent",
      },
      {
        id: "reasoning",
        label: "REASONER",
        role: "Context synthesis + LangChain",
        pos: [-1.8, 0.4, 0.6],
        color: "#a78bfa",
        type: "agent",
      },
      {
        id: "toolExec",
        label: "TOOL CALL",
        role: "n8n / API execution",
        pos: [1.9, 0.5, -0.4],
        color: "#14b8a6",
        type: "agent",
      },
      {
        id: "memory",
        label: "MEMORY",
        role: "Vector store + state recall",
        pos: [-1.2, -1.3, -0.5],
        color: "#8b5cf6",
        type: "agent",
      },
      {
        id: "sentinel",
        label: "RED-TEAM SENTINEL",
        role: "Adversarial Prompt Guard",
        pos: [1.3, -1.2, 0.8],
        color: "#f59e0b",
        type: "security",
      },
      {
        id: "sandbox",
        label: "SECURE SANDBOX",
        role: "Isolated Runtime Execution",
        pos: [0, -1.8, 0.2],
        color: "#fbbf24",
        type: "security",
      },
    ],
    []
  );

  // Network connections between agent nodes
  const connections = useMemo(
    () => [
      [0, 1], // Planner -> Reasoning
      [0, 2], // Planner -> Tool Executor
      [1, 3], // Reasoning -> Memory
      [2, 4], // Tool Executor -> Sentinel
      [3, 5], // Memory -> Sandbox
      [4, 5], // Sentinel -> Sandbox
      [1, 4], // Cross validation: Reasoning <-> Sentinel
      [0, 5], // Direct audit link
    ],
    []
  );

  // Active traveling data packets along the graph
  const packetCount = 10;
  const packets = useMemo(() => {
    return Array.from({ length: packetCount }, (_, i) => ({
      connIndex: i % connections.length,
      speed: 0.3 + (i % 4) * 0.15,
      offset: (i / packetCount),
      color: i % 3 === 0 ? "#f59e0b" : i % 2 === 0 ? "#5eead4" : "#a78bfa",
    }));
  }, [connections.length]);

  const packetRefs = useRef([]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Smooth visibility window for the agent graph (visible roughly between scroll 0.18 and 0.65)
    let opacity = 0;
    if (scrollProgress >= 0.15 && scrollProgress <= 0.65) {
      if (scrollProgress < 0.32) {
        opacity = THREE.MathUtils.smoothstep(scrollProgress, 0.15, 0.32);
      } else if (scrollProgress > 0.5) {
        opacity = 1 - THREE.MathUtils.smoothstep(scrollProgress, 0.5, 0.65);
      } else {
        opacity = 1;
      }
    }

    if (groupRef.current) {
      groupRef.current.position.y = -2.5 + scrollProgress * 5.0;
      groupRef.current.rotation.y = time * 0.12;
      groupRef.current.visible = opacity > 0.01;
    }

    // Animate data packets sliding across the connection lines
    packets.forEach((p, idx) => {
      const mesh = packetRefs.current[idx];
      if (mesh) {
        const [aIdx, bIdx] = connections[p.connIndex];
        const aPos = new THREE.Vector3(...nodes[aIdx].pos);
        const bPos = new THREE.Vector3(...nodes[bIdx].pos);
        
        const progress = (time * p.speed + p.offset) % 1;
        const currentPos = new THREE.Vector3().lerpVectors(aPos, bPos, progress);
        mesh.position.copy(currentPos);
      }
    });
  });

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      {/* Network Connection Lines */}
      {connections.map(([a, b], idx) => (
        <Line
          key={idx}
          points={[nodes[a].pos, nodes[b].pos]}
          color={idx % 2 === 0 ? "#14b8a6" : "#8b5cf6"}
          lineWidth={1.5}
          transparent
          opacity={0.35}
        />
      ))}

      {/* Traveling Data Packets */}
      {packets.map((p, idx) => (
        <mesh
          key={`pkt-${idx}`}
          ref={(el) => (packetRefs.current[idx] = el)}
        >
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color={p.color} />
        </mesh>
      ))}

      {/* Agent Nodes */}
      {nodes.map((node, i) => (
        <group key={node.id} position={node.pos}>
          {/* Outer wireframe sphere */}
          <mesh>
            <icosahedronGeometry args={[0.22, 1]} />
            <meshBasicMaterial
              color={node.color}
              wireframe={true}
              transparent
              opacity={0.7}
            />
          </mesh>

          {/* Glowing node center */}
          <mesh>
            <sphereGeometry args={[0.11, 16, 16]} />
            <meshBasicMaterial color={node.color} />
          </mesh>

          {/* Pulse aura ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.28, 0.32, 32]} />
            <meshBasicMaterial
              color={node.color}
              transparent
              opacity={0.3}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Cyber HUD Label */}
          <Html
            distanceFactor={9}
            position={[0, 0.45, 0]}
            center
            style={{ pointerEvents: "none" }}
          >
            <div
              style={{
                background: "rgba(8, 10, 16, 0.85)",
                border: `1px solid ${node.color}66`,
                color: "#e2e8f0",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "10px",
                padding: "3px 7px",
                borderRadius: "3px",
                whiteSpace: "nowrap",
                boxShadow: `0 0 10px ${node.color}33`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
                backdropFilter: "blur(4px)",
              }}
            >
              <div style={{ color: node.color, fontWeight: 700 }}>
                {node.label}
              </div>
              <div style={{ color: "#94a3b8", fontSize: "8.5px" }}>
                {node.role}
              </div>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}
