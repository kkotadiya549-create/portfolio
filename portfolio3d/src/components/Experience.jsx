import React from "react";
import { experience } from "../data";

export default function Experience() {
  return (
    <section className="section-container" id="experience">
      <div className="section-header">
        <div className="section-tag">
          <span className="section-tag-dot text-teal">04</span> TRACK RECORD
        </div>
        <h2 className="section-title">Operations &amp; Engagements</h2>
        <p className="section-subtitle">
          Hands-on production frontend development, SMB portal engineering, and continuous
          agentic AI specialization.
        </p>
      </div>

      <div className="timeline-cyber-wrap">
        <div className="timeline-spine-line" />

        <div className="timeline-nodes-list">
          {experience.map((item, idx) => (
            <div key={idx} className="timeline-node-item">
              <div className="timeline-node-marker">
                <div className="marker-inner-core" />
              </div>

              <div className="timeline-node-content glass-panel">
                <div className="timeline-header-row">
                  <div>
                    <h3 className="timeline-role-title">{item.role}</h3>
                    <div className="timeline-org-name text-teal">{item.org}</div>
                  </div>
                  <div className="timeline-period-badge font-mono">{item.period}</div>
                </div>

                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
