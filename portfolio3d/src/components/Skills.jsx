import React from "react";
import LogoLoop from "./LogoLoop";
import { skills } from "../data";

export default function Skills() {
  const getGroupBadgeColor = (group) => {
    if (group.toLowerCase().includes("agentic")) return "teal";
    if (group.toLowerCase().includes("security")) return "amber";
    return "violet";
  };

  const techLogos = [
    { node: <span className="logo-chip">React</span>, title: "React" },
    { node: <span className="logo-chip">Vite</span>, title: "Vite" },
    { node: <span className="logo-chip">Node</span>, title: "Node.js" },
    { node: <span className="logo-chip">Python</span>, title: "Python" },
    { node: <span className="logo-chip">LangChain</span>, title: "LangChain" },
    { node: <span className="logo-chip">LangGraph</span>, title: "LangGraph" },
    { node: <span className="logo-chip">n8n</span>, title: "n8n" },
    { node: <span className="logo-chip">MongoDB</span>, title: "MongoDB" },
    { node: <span className="logo-chip">Tailwind</span>, title: "Tailwind CSS" },
    { node: <span className="logo-chip">Kotlin</span>, title: "Kotlin" },
    { node: <span className="logo-chip">AI</span>, title: "AI Systems" },
    { node: <span className="logo-chip">Security</span>, title: "Security" },
  ];

  return (
    <section className="section-container" id="skills">
      <div className="section-header">
        <div className="section-tag">
          <span className="section-tag-dot text-violet">02</span> ARSENAL &amp; CAPABILITIES
        </div>
        <h2 className="section-title">Cognitive &amp; Defense Toolchains</h2>
        <p className="section-subtitle">
          Autonomous orchestration platforms, secure API architectures, and simulated attack
          environments.
        </p>
      </div>

      <div className="tech-loop-shell">
        <div className="tech-loop-header">
          <span className="tech-loop-title">Core stack</span>
          <span className="tech-loop-badge">Live build</span>
        </div>
        <LogoLoop
          logos={techLogos}
          speed={68}
          direction="left"
          logoHeight={42}
          gap={18}
          hoverSpeed={30}
          pauseOnHover
          fadeOut
          fadeOutColor="#0b1017"
          scaleOnHover
          ariaLabel="Technology stack marquee"
          className="tech-loop"
        />
      </div>

      <div className="skills-grid">
        {skills.map((skillGroup, idx) => {
          const accentColor = getGroupBadgeColor(skillGroup.group);
          return (
            <div key={idx} className={`skill-node-card glass-panel accent-${accentColor}`}>
              <div className="card-header-bar">
                <span className={`card-status-dot ${accentColor}`} />
                <span className="skill-group-name">{skillGroup.group}</span>
                <span className="card-header-meta">NODES: {skillGroup.items.length}</span>
              </div>

              <div className="skill-tags-cloud">
                {skillGroup.items.map((item, itemIdx) => (
                  <div key={itemIdx} className={`skill-tag-pill ${accentColor}`}>
                    <span className="pill-dot" />
                    <span className="pill-label">{item}</span>
                  </div>
                ))}
              </div>

              <div className="skill-card-footer">
                <span className="security-hash">
                  SEC_{accentColor.toUpperCase()}_0{idx + 1} // VERIFIED
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
