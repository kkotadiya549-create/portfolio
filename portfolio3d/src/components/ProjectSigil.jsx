import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Maps project tag categories to geometry + color configs.
 * Each geometry mirrors a shape already present in the background scene,
 * tying the card visual language directly to the 3D world.
 */
const SIGIL_MAP = {
  // OctahedronGeometry — mirrors FirewallGrid's hologram pylons
  amber: {
    color: "#fbbf24",
    glowColor: "rgba(245,158,11,0.55)",
    createGeo: () => new THREE.OctahedronGeometry(0.78, 0),
    rotSpeed: { x: 0.009, y: 0.022 },
  },
  // IcosahedronGeometry — mirrors DataCore's inner wireframe core
  teal: {
    color: "#5eead4",
    glowColor: "rgba(20,184,166,0.55)",
    createGeo: () => new THREE.IcosahedronGeometry(0.72, 1),
    rotSpeed: { x: 0.014, y: 0.017 },
  },
  // TorusGeometry — mirrors DataCore's orbital containment rings
  violet: {
    color: "#a78bfa",
    glowColor: "rgba(139,92,246,0.55)",
    createGeo: () => new THREE.TorusGeometry(0.54, 0.22, 8, 16),
    rotSpeed: { x: 0.016, y: 0.011 },
  },
  // TetrahedronGeometry — sharp structural form for mobile/native
  rose: {
    color: "#fb7185",
    glowColor: "rgba(251,113,133,0.55)",
    createGeo: () => new THREE.TetrahedronGeometry(0.82, 0),
    rotSpeed: { x: 0.011, y: 0.025 },
  },
  // TorusKnotGeometry — complex, analytical form for data/research work
  cyan: {
    color: "#22d3ee",
    glowColor: "rgba(34,211,238,0.55)",
    createGeo: () => new THREE.TorusKnotGeometry(0.46, 0.16, 48, 8, 2, 3),
    rotSpeed: { x: 0.008, y: 0.019 },
  },
};

export default function ProjectSigil({ accent = "teal", size = 64 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const cfg = SIGIL_MAP[accent] ?? SIGIL_MAP.teal;

    // ── Renderer ────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(size, size, false); // false = don't update style size
    renderer.setClearColor(0x000000, 0);

    // ── Scene + Camera ───────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 10);
    camera.position.z = 2.6;

    // ── Wireframe sigil mesh ─────────────────────────────────────────────
    const geo = cfg.createGeo();
    const wireMat = new THREE.MeshBasicMaterial({
      color: cfg.color,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    const wireMesh = new THREE.Mesh(geo, wireMat);

    // Solid inner fill — very subtle depth hint
    const solidGeo = cfg.createGeo();
    const solidMat = new THREE.MeshBasicMaterial({
      color: cfg.color,
      transparent: true,
      opacity: 0.06,
    });
    const solidMesh = new THREE.Mesh(solidGeo, solidMat);

    scene.add(solidMesh);
    scene.add(wireMesh);

    // ── Animation loop ───────────────────────────────────────────────────
    let frameId;
    let t = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      t += 1;

      const rx = t * cfg.rotSpeed.x;
      const ry = t * cfg.rotSpeed.y;
      wireMesh.rotation.x = rx;
      wireMesh.rotation.y = ry;
      solidMesh.rotation.x = rx;
      solidMesh.rotation.y = ry;

      // Subtle breathing pulse
      const pulse = 1 + Math.sin(t * 0.038) * 0.055;
      wireMesh.scale.setScalar(pulse);
      solidMesh.scale.setScalar(pulse);

      renderer.render(scene, camera);
    };
    animate();

    // ── Cleanup ──────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      geo.dispose();
      wireMat.dispose();
      solidGeo.dispose();
      solidMat.dispose();
    };
  }, [accent, size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{ display: "block", width: size, height: size, flexShrink: 0 }}
    />
  );
}
