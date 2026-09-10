import React from "react";

export default function Nav() {
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
      </div>

      <div className="nav-links">
        {links.map(([label, href]) => (
          <a key={href} href={href} className="nav-link-item">
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
