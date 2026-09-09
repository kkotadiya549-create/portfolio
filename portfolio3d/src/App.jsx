import { useState, useEffect, useRef } from "react";
import Scene3D from "./components/Scene3D";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import RetroCLI from "./components/RetroCLI";

const CLI_SECTION_MAP = {
  home: "home",
  about: "about",
  skills: "skills",
  projects: "projects",
  experience: "experience",
  contact: "contact",
  cyberrange: "projects",
  resume: "about",
};

function playSystemTone({ frequency = 520, duration = 0.09, type = "triangle", gain = 0.015 }) {
  if (typeof window === "undefined") return;
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextCtor) return;

  const audioContext = new AudioContextCtor();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gainNode.gain.value = 0;

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  const now = audioContext.currentTime;
  gainNode.gain.setValueAtTime(0.0001, now);
  gainNode.gain.exponentialRampToValueAtTime(gain, now + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  oscillator.start(now);
  oscillator.stop(now + duration + 0.04);
  oscillator.onended = () => audioContext.close();
}

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCLIOpen, setIsCLIOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [uptimeSeconds, setUptimeSeconds] = useState(0);
  const [glitchCycle, setGlitchCycle] = useState(0);
  const highestThresholdRef = useRef(0);

  const openExternalLink = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const scrollToSection = (sectionId) => {
    const targetId = CLI_SECTION_MAP[sectionId] || sectionId;
    const section = document.getElementById(targetId);

    if (!section) return;

    const offsetTop = section.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  };

  useEffect(() => {
    const uptimeTicker = window.setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);

    return () => window.clearInterval(uptimeTicker);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

          if (totalHeight > 0) {
            const current = window.scrollY / totalHeight;
            const clamped = Math.min(Math.max(current, 0), 1);
            setScrollProgress(clamped);

            const thresholds = [0.25, 0.45, 0.72];
            const activeThresholdCount = thresholds.reduce((count, threshold) => {
              return clamped >= threshold ? count + 1 : count;
            }, 0);

            if (activeThresholdCount > highestThresholdRef.current) {
              setGlitchCycle((prev) => prev + 1);
              if (soundEnabled) {
                playSystemTone({ frequency: 420 + activeThresholdCount * 80, duration: 0.12, type: "square", gain: 0.008 });
              }
              highestThresholdRef.current = activeThresholdCount;
            } else if (activeThresholdCount < highestThresholdRef.current) {
              highestThresholdRef.current = activeThresholdCount;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const handleKeyDown = (e) => {
      if (e.key === "`" || e.key === "~") {
        e.preventDefault();
        if (soundEnabled) {
          playSystemTone({ frequency: 680, duration: 0.08, type: "triangle", gain: 0.012 });
        }
        setIsCLIOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [soundEnabled]);

  const formatUptime = (value) => {
    const hours = String(Math.floor(value / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((value % 3600) / 60)).padStart(2, "0");
    const seconds = String(value % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="portfolio-app-root">
      <div key={glitchCycle} className="crt-glitch-layer" aria-hidden="true" />
      <div className="system-status-hud font-mono" aria-live="polite">
        <div className="status-hud-row">
          <span className="hud-label">SYS_PROGRESS</span>
          <span className="hud-value">{Math.round(scrollProgress * 100)}%</span>
        </div>
        <div className="status-hud-row">
          <span className="hud-label">UPTIME</span>
          <span className="hud-value">{formatUptime(uptimeSeconds)}</span>
        </div>
      </div>
      {/* Background 3D Canvas with Scroll-driven Camera & Postprocessing */}
      <Scene3D scrollProgress={scrollProgress} />

      {/* Cyberpunk HUD Navigation */}
      <Nav
        onOpenCLI={() => {
          if (soundEnabled) playSystemTone({ frequency: 630, duration: 0.08, type: "triangle", gain: 0.012 });
          setIsCLIOpen(true);
        }}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
      />

      {/* Main HTML Content Sections */}
      <main className="content-layers">
        <Hero onOpenCLI={() => setIsCLIOpen(true)} />
        <About />
        <Skills />
        <Projects onOpenCLI={() => setIsCLIOpen(true)} />
        <Experience />
        <Contact onOpenCLI={() => setIsCLIOpen(true)} />
      </main>

      {/* Floating Tactical Terminal Trigger in bottom-right */}
      <button
        className="floating-terminal-trigger font-mono"
        onClick={() => setIsCLIOpen(true)}
        title="Toggle Retro CLI (~)"
      >
        <span className="trigger-icon">&gt;_</span>
        <span className="trigger-label">CLI_TERMINAL</span>
        <span className="trigger-key">[~]</span>
      </button>

      {/* Retro CLI Modal Overlay */}
      <RetroCLI
        isOpen={isCLIOpen}
        onClose={() => setIsCLIOpen(false)}
        onNavigate={scrollToSection}
        onOpenLink={openExternalLink}
        soundEnabled={soundEnabled}
      />
    </div>
  );
}
