import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import * as THREE from "three";

import DataCore from "./DataCore";
import NeuralGalaxy from "./NeuralGalaxy";
import AgentGraph from "./AgentGraph";
import FirewallGrid from "./FirewallGrid";
import ContactTerminal3D from "./ContactTerminal3D";

function CameraController({ scrollProgress }) {
  const { camera, pointer } = useThree();
  const currentPos = useRef(new THREE.Vector3(0, 0, 4.2));
  const currentLookAt = useRef(new THREE.Vector3(0.6, 0.1, 0));
  // Damped mouse parallax accumulator — updated each frame toward live pointer
  const mouseParallax = useRef(new THREE.Vector2(0, 0));

  // Defined camera path waypoints according to section scroll progress
  const waypoints = useMemo(
    () => [
      { p: 0.0, pos: new THREE.Vector3(0, 0, 4.2), target: new THREE.Vector3(0.6, 0.1, 0) }, // Hero: Data Core
      { p: 0.25, pos: new THREE.Vector3(0.5, 0.4, 3.6), target: new THREE.Vector3(0.2, 0.2, -0.8) }, // Deconstruct
      { p: 0.45, pos: new THREE.Vector3(0.0, 0.6, 3.2), target: new THREE.Vector3(0, 0.1, -1.8) }, // Agent-Node Graph
      { p: 0.72, pos: new THREE.Vector3(-0.4, 0.4, 2.4), target: new THREE.Vector3(0, -1.2, -3.8) }, // Firewall Grid
      { p: 1.0, pos: new THREE.Vector3(-0.6, 0.1, 3.4), target: new THREE.Vector3(1.4, 0.0, -0.6) }, // Terminal Contact
    ],
    []
  );

  useFrame(({ clock }, delta) => {
    const p = THREE.MathUtils.clamp(scrollProgress, 0, 1);
    const time = clock.getElapsedTime();

    // --- Mouse parallax: damp toward live NDC pointer each frame ---
    // pointer is in [-1, 1] — lerp at 0.04 for a silky, lazy feel
    mouseParallax.current.lerp(pointer, 0.04);
    const mx = mouseParallax.current.x; // [-1, 1]
    const my = mouseParallax.current.y; // [-1, 1]

    // Interpolate between path waypoints
    let targetPos = waypoints[0].pos;
    let targetLook = waypoints[0].target;

    for (let i = 0; i < waypoints.length - 1; i++) {
      const w1 = waypoints[i];
      const w2 = waypoints[i + 1];
      if (p >= w1.p && p <= w2.p) {
        const factor = (p - w1.p) / (w2.p - w1.p);
        targetPos = new THREE.Vector3().lerpVectors(w1.pos, w2.pos, factor);
        targetLook = new THREE.Vector3().lerpVectors(w1.target, w2.target, factor);
        break;
      }
    }

    // Subtle organic breathing drift (unchanged)
    const driftX = Math.sin(time * 0.4) * 0.05;
    const driftY = Math.cos(time * 0.5) * 0.03;

    // Camera position: subtle parallax nudge keeps the scene alive without feeling twitchy
    const posParallaxX = mx * 0.08;
    const posParallaxY = my * 0.05;

    currentPos.current.lerp(
      new THREE.Vector3(
        targetPos.x + driftX + posParallaxX,
        targetPos.y + driftY + posParallaxY,
        targetPos.z
      ),
      0.08
    );

    // Look-at target: restrained shift keeps the camera elegant and cinematic
    const lookParallaxX = mx * 0.18;
    const lookParallaxY = my * 0.12;

    currentLookAt.current.lerp(
      new THREE.Vector3(
        targetLook.x + lookParallaxX,
        targetLook.y + lookParallaxY,
        targetLook.z
      ),
      0.08
    );

    camera.position.copy(currentPos.current);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}

export default function Scene3D({ scrollProgress = 0 }) {
  const chromOffset = useMemo(() => new THREE.Vector2(0.0015, 0.0015), []);

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <color attach="background" args={["#080a10"]} />
      <fog attach="fog" args={["#080a10", 3, 14]} />

      <ambientLight intensity={0.25} />
      <pointLight position={[3, 2, 2]} intensity={0.8} color="#14b8a6" />
      <pointLight position={[-3, -1, 1]} intensity={0.7} color="#8b5cf6" />
      <pointLight position={[0, 3, -2]} intensity={0.5} color="#f59e0b" />

      <Suspense fallback={null}>
        {/* Stage 1: Hero Data Core & Neural Galaxy */}
        <DataCore scrollProgress={scrollProgress} />
        <NeuralGalaxy scrollProgress={scrollProgress} />

        {/* Stage 2: Agentic Node Graph */}
        <AgentGraph scrollProgress={scrollProgress} />

        {/* Stage 3: Cybersecurity Firewall Grid */}
        <FirewallGrid scrollProgress={scrollProgress} />

        {/* Stage 4: Holographic Terminal Contact Monolith */}
        <ContactTerminal3D scrollProgress={scrollProgress} />

        {/* Scroll-driven Camera Controller */}
        <CameraController scrollProgress={scrollProgress} />

        {/* Postprocessing: Bloom & Subtle Chromatic Aberration */}
        <EffectComposer disableNormalPass multisampling={0}>
          <Bloom
            luminanceThreshold={0.52}
            luminanceSmoothing={0.9}
            intensity={0.42}
            mipmapBlur
          />
          <ChromaticAberration offset={chromOffset} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
