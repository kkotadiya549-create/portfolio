import { useState, useEffect, useRef } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Lightfall from "./components/Lightfall";

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
  const highestThresholdRef = useRef(0);

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
            highestThresholdRef.current = clamped;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="portfolio-app-root">
      <div className="lightfall-bg" aria-hidden="true">
        <Lightfall
          colors={["#dff7ff", "#7dd3fc", "#8b5cf6", "#f9a8d4", "#5eead4"]}
          backgroundColor="#040b1d"
          speed={1.1}
          streakCount={7}
          streakWidth={1.1}
          streakLength={1.2}
          glow={2.4}
          density={1.1}
          twinkle={0.9}
          zoom={1.5}
          backgroundGlow={1.0}
          opacity={1}
          mouseInteraction={true}
          mouseStrength={0.75}
          mouseRadius={0.8}
          mouseDampening={0.18}
          mixBlendMode="screen"
        />
      </div>

      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-grid" />
        <div className="ambient-orb orb-one" />
        <div className="ambient-orb orb-two" />
        <div className="ambient-orb orb-three" />
      </div>

      {/* Cyberpunk HUD Navigation */}
      <Nav />

      {/* Main HTML Content Sections */}
      <main className="content-layers">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
