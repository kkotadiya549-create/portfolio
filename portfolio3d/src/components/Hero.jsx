import React from "react";
import { profile } from "../data";

export default function Hero({ onOpenCLI }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-pulse" />
          <span className="badge-text">// AGENTIC AI &amp; CYBERSECURITY ENGINEER</span>
        </div>

        <h1 className="hero-title">
          <span className="gradient-text-hero">Agentic Systems</span> <br />
          <span className="gradient-text-teal">Built</span> for{" "}
          <span className="gradient-text-violet">Secure Execution</span>.
        </h1>

        <p className="hero-tagline">{profile.tagline}</p>

        <p className="hero-description">
          Operator: <strong className="text-light">{profile.name}</strong> · Based in{" "}
          <span className="text-teal">{profile.location}</span>. I build practical AI workflows,
          multi-agent systems, and resilient product experiences that are designed to ship and hold up
          under real-world pressure.
        </p>

        <div className="hero-cta-group">
          <a href="#projects" className="btn-primary">
            Explore Architectures
          </a>
          <button className="btn-secondary" onClick={onOpenCLI}>
            <span className="btn-icon">&gt;_</span> Launch CLI Terminal
          </button>
        </div>

        <div className="hero-telemetry-strip">
          <div className="telemetry-item">
            <span className="telemetry-label">CORE ARCHITECTURE</span>
            <span className="telemetry-val text-teal">LangGraph &amp; Multi-Agent Swarms</span>
          </div>
          <div className="telemetry-divider" />
          <div className="telemetry-item">
            <span className="telemetry-label">SECURITY POSTURE</span>
            <span className="telemetry-val text-amber">Adversarial Red-Teaming Active</span>
          </div>
          <div className="telemetry-divider" />
          <div className="telemetry-item">
            <span className="telemetry-label">3D SCENE FLOW</span>
            <span className="telemetry-val text-violet">Scroll Down to Deconstruct Core</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="scroll-text">SCROLL TO TRAVEL 3D GRAPH</span>
      </div>
    </section>
  );
}
