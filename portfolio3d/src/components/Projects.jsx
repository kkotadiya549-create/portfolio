import React from "react";
import { projects } from "../data";
import ProjectSigil from "./ProjectSigil";

/**
 * Maps a project tag string to:
 *   - CSS accent class (teal / amber / violet / rose / cyan)
 *   - Sigil accent key (same string, fed to ProjectSigil)
 *
 * The accent keys deliberately mirror the geometry vocabulary of the
 * background scene: octahedron=amber(cyber), icosahedron=teal(AI),
 * torus=violet(fullstack), tetrahedron=rose(mobile), torusknot=cyan(data).
 */
function resolveAccent(tag) {
  const t = tag.toLowerCase();
  if (t.includes("cyber") || t.includes("security")) return "amber";
  if (t.includes("agent") || t.includes("ai"))        return "teal";
  if (t.includes("mobile") || t.includes("b2b"))      return "rose";
  if (t.includes("data") || t.includes("content"))    return "cyan";
  return "violet"; // full-stack, generic
}

/** Glow border color matching each accent, for the sigil wrapper */
const ACCENT_GLOW = {
  amber:  "rgba(245,158,11,0.45)",
  teal:   "rgba(20,184,166,0.45)",
  violet: "rgba(139,92,246,0.45)",
  rose:   "rgba(251,113,133,0.45)",
  cyan:   "rgba(34,211,238,0.45)",
};

/** CSS class suffix for the tag badge (index.css already has teal/amber/violet) */
function badgeClass(accent) {
  // rose and cyan fall back to their closest existing CSS variant
  if (accent === "rose") return "amber";
  if (accent === "cyan")  return "teal";
  return accent;
}

export default function Projects({ onOpenCLI }) {
  return (
    <section className="section-container" id="projects">
      <div className="section-header">
        <div className="section-tag">
          <span className="section-tag-dot text-amber">03</span> DEPLOYED CONSTRUCTS
        </div>
        <h2 className="section-title">Autonomous Agents &amp; Security Deployments</h2>
        <p className="section-subtitle">
          Real-world platforms spanning offensive cybersecurity ranges, multi-agent shop-floor
          copilots, and full-stack enterprise portals.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((proj, idx) => {
          const accent = resolveAccent(proj.tag);
          const badge  = badgeClass(accent);

          return (
            <div key={idx} className={`project-card glass-panel`}>

              {/* ── Card header: sys index + sigil ─────────────────── */}
              <div className="project-card-header">
                <div className="project-header-left">
                  <div className="project-index font-mono">SYS_0{idx + 1}</div>
                  <span className={`project-tag-badge ${badge}`}>
                    <span className="tag-pulse-dot" />
                    {proj.tag}
                  </span>
                </div>

                {/* Spinning 3D wireframe sigil — geometry mirrors the scene */}
                <div
                  className="project-sigil-wrap"
                  style={{ boxShadow: `0 0 14px ${ACCENT_GLOW[accent]}, inset 0 0 8px ${ACCENT_GLOW[accent]}` }}
                >
                  <ProjectSigil accent={accent} size={64} />
                </div>
              </div>

              {/* ── Title & description ─────────────────────────────── */}
              <h3 className="project-title">{proj.name}</h3>
              <p className="project-description">{proj.description}</p>

              {/* ── Tech stack pills ────────────────────────────────── */}
              <div className="project-stack-wrap">
                <div className="stack-label font-mono">DEPENDENCIES:</div>
                <div className="stack-pills">
                  {proj.stack.map((tech, sIdx) => (
                    <span key={sIdx} className="stack-pill">{tech}</span>
                  ))}
                </div>
              </div>

              {/* ── Footer: link + CLI inspect ──────────────────────── */}
              <div className="project-card-footer">
                {proj.link ? (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-link"
                  >
                    <span>Launch Live Uplink</span>
                    <span className="link-arrow">↗</span>
                  </a>
                ) : (
                  <span className="project-internal-badge">
                    <span>Internal Architecture</span>
                  </span>
                )}
                <button
                  className="project-inspect-btn font-mono"
                  onClick={onOpenCLI}
                  title="Inspect via Retro CLI"
                >
                  &gt;_ CLI
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
