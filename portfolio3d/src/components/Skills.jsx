import React from "react";
import { skills } from "../data";

export default function Skills() {
  const getGroupBadgeColor = (group) => {
    if (group.toLowerCase().includes("agentic")) return "teal";
    if (group.toLowerCase().includes("security")) return "amber";
    return "violet";
  };

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
