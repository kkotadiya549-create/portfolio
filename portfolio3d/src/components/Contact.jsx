import React, { useState } from "react";
import { profile, contact } from "../data";

export default function Contact({ onOpenCLI }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section className="section-container contact-section" id="contact">
      <div className="section-header">
        <div className="section-tag">
          <span className="section-tag-dot text-amber">05</span> ENCRYPTED TRANSMISSION
        </div>
        <h2 className="section-title">Initiate Uplink</h2>
        <p className="section-subtitle">
          Ready to collaborate on autonomous multi-agent architectures, security audits, or full-stack
          engineering.
        </p>
      </div>

      <div className="contact-terminal-box glass-panel">
        <div className="terminal-header-bar">
          <div className="terminal-dots">
            <span className="term-dot red" />
            <span className="term-dot yellow" />
            <span className="term-dot green" />
          </div>
          <span className="terminal-header-title font-mono">
            SECURE_CHANNEL_v4.09 // RSA_4096_GCM
          </span>
          <span className="terminal-status-tag font-mono text-teal">LISTENING...</span>
        </div>

        <div className="terminal-content-grid">
          <div className="terminal-left-pane">
            <div className="terminal-log-stream font-mono">
              <div className="log-line text-muted">
                [00:00:01] Initializing handshake with {profile.name}...
              </div>
              <div className="log-line text-muted">
                [00:00:02] Establishing TLS 1.3 socket to Surat station...
              </div>
              <div className="log-line text-teal">
                [00:00:03] Public key exchange verified. Secure comms open.
              </div>
            </div>

            <div className="terminal-direct-prompt">
              <h3 className="contact-headline">Send Direct Transmission</h3>
              <p className="contact-subtext">
                Whether you need an autonomous agent workflow built with LangGraph, a TryHackMe-style
                training lab, or a production React portal — reach out directly.
              </p>

              <div className="terminal-email-card">
                <div className="email-meta font-mono">PRIMARY INBOX:</div>
                <div className="email-val font-mono">{contact.email}</div>
                <div className="email-action-row">
                  <a href={`mailto:${contact.email}`} className="btn-primary-small">
                    Compose Dispatch ↗
                  </a>
                  <button onClick={handleCopyEmail} className="btn-secondary-small font-mono">
                    {copied ? "[COPIED TO CLIPBOARD]" : "[COPY ADDRESS]"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="terminal-right-pane">
            <div className="channels-label font-mono text-muted">// PERIMETER LINKS</div>

            <div className="contact-links-stack">
              <a
                href={contact.neetcode}
                target="_blank"
                rel="noreferrer"
                className="contact-channel-card"
              >
                <div className="channel-icon-block">
                  <span className="channel-sym font-mono">&gt;</span>
                </div>
                <div className="channel-info">
                  <span className="channel-name">NeetCode</span>
                  <span className="channel-url font-mono text-muted">@RelentlessKakarot527</span>
                </div>
                <span className="channel-arrow font-mono">↗</span>
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="contact-channel-card"
              >
                <div className="channel-icon-block">
                  <span className="channel-sym font-mono">&gt;</span>
                </div>
                <div className="channel-info">
                  <span className="channel-name">GitHub Matrix</span>
                  <span className="channel-url font-mono text-muted">@kkotadiya549-create</span>
                </div>
                <span className="channel-arrow font-mono">↗</span>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-channel-card"
              >
                <div className="channel-icon-block">
                  <span className="channel-sym font-mono">&gt;</span>
                </div>
                <div className="channel-info">
                  <span className="channel-name">LinkedIn Dossier</span>
                  <span className="channel-url font-mono text-muted">
                    linkedin.com/in/krunal-kotadiya-b98057278
                  </span>
                </div>
                <span className="channel-arrow font-mono">↗</span>
              </a>

              <div
                className="contact-channel-card cli-shortcut-card"
                onClick={onOpenCLI}
                role="button"
                tabIndex={0}
              >
                <div className="channel-icon-block amber">
                  <span className="channel-sym font-mono">&gt;_</span>
                </div>
                <div className="channel-info">
                  <span className="channel-name">Launch Terminal Shell</span>
                  <span className="channel-url font-mono text-amber">
                    Interactive CLI with all data
                  </span>
                </div>
                <span className="channel-arrow font-mono">ENTER</span>
              </div>
            </div>

            <div className="terminal-security-badge font-mono">
              <span className="shield-icon">🛡</span>
              <span>ZERO-TRUST TRANSMISSION PROTOCOL VERIFIED</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-bar font-mono">
        <div className="footer-left">
          <span>KRUNAL // AGENTIC AI &amp; CYBERSECURITY ARCHITECT</span>
        </div>
        <div className="footer-center">
          <span className="footer-pulse-dot" />
          <span>ALL SYSTEMS FUNCTIONAL</span>
        </div>
        <div className="footer-right">
          <span>B.TECH CS/IT · 2027</span>
        </div>
      </footer>
    </section>
  );
}
