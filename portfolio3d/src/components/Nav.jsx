import React from "react";

export default function Nav({ onOpenCLI, soundEnabled, onToggleSound }) {
  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="nav">
      <div className="nav-left">
        <a href="#home" className="nav-logo">
          <span className="nav-logo-bracket">[</span>
          <span className="nav-logo-name">krunal.kotadiya</span>
          <span className="nav-logo-bracket">]</span>
        </a>
        <div className="nav-status-badge">
          <span className="status-indicator-dot" />
          <span className="status-indicator-text">SYSTEM: DEFENSE_GRID_ARMED</span>
        </div>
      </div>

      <div className="nav-links">
        {links.map(([label, href]) => (
          <a key={href} href={href} className="nav-link-item">
            {label}
          </a>
        ))}
      </div>

      <div className="nav-right nav-controls">
        <button
          className="speaker-toggle"
          onClick={onToggleSound}
          title={soundEnabled ? "Mute system audio" : "Enable quiet system audio"}
          aria-label={soundEnabled ? "Mute sound" : "Enable sound"}
        >
          <span>{soundEnabled ? "🔊" : "🔇"}</span>
        </button>
        <button
          className="nav-cli-toggle"
          onClick={onOpenCLI}
          title="Open Retro CLI Terminal (or press ~)"
        >
          <span className="cli-toggle-symbol">&gt;_</span>
          <span className="cli-toggle-label">CLI TERMINAL</span>
        </button>
      </div>
    </nav>
  );
}
