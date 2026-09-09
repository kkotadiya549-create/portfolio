import React from "react";
import { profile } from "../data";

export default function About() {
  return (
    <section className="section-container" id="about">
      <div className="section-header">
        <div className="section-tag">
          <span className="section-tag-dot text-teal">01</span> SYSTEM DOSSIER
        </div>
        <h2 className="section-title">AI systems, hardened by design.</h2>
        <p className="section-subtitle">
          I build agentic workflows and software products from the ground up, then stress-test them
          from the outside to make sure they remain dependable, secure, and useful.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-intel-card glass-panel">
          <div className="card-header-bar">
            <span className="card-status-dot teal" />
            <span className="card-header-title">OPERATOR_PROFILE.LOG</span>
            <span className="card-header-meta">CLEARANCE: LVL_4</span>
          </div>
          <div className="about-bio-content">
            {profile.bio.map((paragraph, idx) => (
              <p key={idx} className="about-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mission-badges">
            <div className="mission-badge teal">
              <span className="badge-bullet">◆</span> LangGraph Swarms
            </div>
            <div className="mission-badge violet">
              <span className="badge-bullet">◆</span> Secure MLOps
            </div>
            <div className="mission-badge amber">
              <span className="badge-bullet">◆</span> Threat Remediation
            </div>
          </div>
        </div>

        <div className="about-metrics-card glass-panel">
          <div className="card-header-bar">
            <span className="card-status-dot violet" />
            <span className="card-header-title">TELEMETRY_PARAMETERS</span>
          </div>

          <div className="metrics-list">
            <div className="metric-row">
              <span className="metric-label">CURRENT STATUS</span>
              <span className="metric-val text-teal">React.js Intern @ Appify Infotech</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">ACADEMIC PATH</span>
              <span className="metric-val text-light">B.Tech CS/IT · P P Savani Univ (2027)</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">BASE STATION</span>
              <span className="metric-val text-violet">{profile.location}</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">SPECIALIZATION</span>
              <span className="metric-val text-amber">Agentic AI &amp; Red-Teaming Guardrails</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">FIELD WORK</span>
              <span className="metric-val text-light">Freelance Arch for Gujarat SMBs</span>
            </div>
          </div>

          <div className="quote-callout">
            <span className="quote-bracket">“</span>
            {profile.tagline}
            <span className="quote-bracket">”</span>
          </div>
        </div>
      </div>
    </section>
  );
}
