import React from "react";
import ParticleText from "./ParticleText";
import ProfileCard from "./ProfileCard";
import { profile } from "../data";

export default function Hero({ onOpenCLI }) {
  return (
    <section className="hero" id="home">
      <div className="hero-layout">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse" />
            <span className="badge-text">// WEB &amp; AI DEVELOPER</span>
          </div>

          <div className="hero-particle-wrap" aria-label="Agentic Systems built for secure execution">
            <ParticleText
              text="Agentic Systems"
              particleSize={2.2}
              density={4}
              color="#ffd6f5"
              highlightColor="#ff4fd8"
              scatter={200}
              gatherDuration={1800}
              stagger={420}
              pointerRepel={28}
              repelRadius={110}
              idleDrift={0.7}
              trigger="hover"
              fontSize="clamp(3rem, 7vw, 7rem)"
              fontWeight={800}
              fontFamily="'Space Grotesk', sans-serif"
              glow
              className="hero-particle-text"
              style={{ width: "100%", height: "clamp(120px, 12vw, 160px)" }}
            />
          </div>

          <p className="hero-tagline">{profile.tagline}</p>

          <p className="hero-description">
            Operator: <strong className="text-light">{profile.name}</strong> · Based in{" "}
            <span className="text-teal">{profile.location}</span>. I design AI systems, agent workflows,
            and software products that are practical to ship and resilient under real-world pressure.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">
              Explore Architectures
            </a>
            <a href="#contact" className="btn-secondary">
              <span className="btn-icon">✦</span> Let&apos;s Connect
            </a>
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
              <span className="telemetry-label">SYSTEM MODE</span>
              <span className="telemetry-val text-violet">Product First, Secure by Default</span>
            </div>
          </div>
        </div>

        <div className="hero-visual-column">
          <ProfileCard />
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="scroll-text">SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}
