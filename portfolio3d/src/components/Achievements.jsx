import React from "react";
import { achievements } from "../data";

export default function Achievements() {
  return (
    <section className="section-container" id="achievements">
      <div className="section-header">
        <div className="section-tag">
          <span className="section-tag-dot text-amber">03</span> CERTIFICATIONS &amp; ACCOMPLISHMENTS
        </div>
        <h2 className="section-title">Validated learning across AI, cloud, and product engineering.</h2>
        <p className="section-subtitle">
          Continuous skill-building across artificial intelligence, cloud infrastructure, software
          engineering, and practical application development.
        </p>
      </div>

      <div className="achievement-grid">
        {achievements.map((item, idx) => (
          <article key={idx} className="achievement-card glass-panel">
            <div className="achievement-meta">
              <span className="achievement-year font-mono">{item.year}</span>
              <span className="achievement-category font-mono">{item.category}</span>
            </div>
            <h3 className="achievement-title">{item.title}</h3>
            <p className="achievement-issuer">{item.issuer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
