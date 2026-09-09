import { useState, useRef, useEffect } from "react";
import { profile, skills, projects, experience, contact, resume } from "../data";

export default function RetroCLI({ isOpen, onClose, onNavigate, onOpenLink }) {
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "==========================================================",
    },
    {
      type: "system",
      text: "  KRUNAL_OS // AGENTIC AI & CYBERSECURITY SENTINEL v2.4",
    },
    {
      type: "system",
      text: "  STATUS: ALL DEFENSE GRIDS ARMED · MULTI-AGENT SWARM READY",
    },
    {
      type: "system",
      text: "==========================================================",
    },
    {
      type: "info",
      text: "Type 'help' to inspect available system commands.",
    },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim();
    const command = trimmed.toLowerCase();
    const newHistory = [...history, { type: "input", text: `$ ${cmdStr}` }];

    if (trimmed) {
      setCommandHistory((prev) => [...prev, cmdStr]);
      setHistoryIndex(-1);
    }

    const routeToSection = (section) => {
      if (typeof onNavigate === "function") {
        onNavigate(section);
      }
      newHistory.push({ type: "teal", text: `> Route established: ${section.toUpperCase()} // section lock acquired.` });
    };

    const openProjectLink = (name) => {
      const match = projects.find((project) => project.name.toLowerCase().includes(name));
      if (match?.link && typeof onOpenLink === "function") {
        onOpenLink(match.link);
        newHistory.push({ type: "teal", text: `> Opening external payload: ${match.link}` });
      } else if (match && typeof onNavigate === "function") {
        onNavigate("projects");
        newHistory.push({ type: "teal", text: `> Project section synced: ${match.name}` });
      }
    };

    switch (command) {
      case "help":
      case "--help":
      case "?":
        newHistory.push(
          { type: "info", text: "Available System Commands:" },
          { type: "output", text: "  help             - Display this diagnostic guide" },
          { type: "output", text: "  whoami           - Print active operator identity" },
          { type: "output", text: "  about            - Display operator background and mission profile" },
          { type: "output", text: "  skills           - Output agentic AI, security, and full-stack capabilities" },
          { type: "output", text: "  projects        - Query autonomous systems and cybersecurity builds" },
          { type: "output", text: "  experience      - Print professional history and active engagements" },
          { type: "output", text: "  contact         - Retrieve encrypted comms channels" },
          { type: "output", text: "  cat resume.txt   - Review operator CV summary" },
          { type: "output", text: "  open <section>   - Jump to a site section (about, skills, projects, contact, etc.)" },
          { type: "output", text: "  open cyberrange  - Jump to the CyberRange project section" },
          { type: "output", text: "  sudo hire krunal - Initiate hiring workflow" },
          { type: "output", text: "  scan            - Run heuristic cybersecurity penetration audit" },
          { type: "output", text: "  clear           - Purge terminal stdout buffer" },
          { type: "output", text: "  exit            - Close this terminal overlay" }
        );
        break;

      case "whoami":
        newHistory.push(
          { type: "highlight", text: `[OPERATOR]: ${profile.name} // ${profile.role}` },
          { type: "output", text: `[REALM]: ${profile.subrole}` },
          { type: "output", text: `[CLEARANCE]: AGENTIC_AI / CYBERSECURITY / PRODUCT_BUILD` },
          { type: "output", text: `[STATUS]: ONLINE · READY FOR DEPLOYMENT` }
        );
        break;

      case "about":
        newHistory.push(
          { type: "highlight", text: `[OPERATOR]: ${profile.name} // ${profile.role}` },
          { type: "output", text: `[LOCATION]: ${profile.location}` },
          { type: "output", text: `[TAGLINE]: "${profile.tagline}"` },
          ...profile.bio.map((b) => ({ type: "output", text: `> ${b}` }))
        );
        break;

      case "skills":
        newHistory.push({ type: "highlight", text: "=== SYSTEM CAPABILITIES MATRIX ===" });
        skills.forEach((grp) => {
          newHistory.push({
            type: "output",
            text: `[${grp.group.toUpperCase()}]: ${grp.items.join(" · ")}`,
          });
        });
        break;

      case "projects":
        newHistory.push({ type: "highlight", text: "=== DEPLOYED AGENTS & CYBER DEFENSE BUILDS ===" });
        projects.forEach((p, idx) => {
          newHistory.push({
            type: "info",
            text: `0${idx + 1}. ${p.name} [${p.tag}]`,
          });
          newHistory.push({ type: "output", text: `   ${p.description}` });
          newHistory.push({
            type: "dim",
            text: `   Stack: ${p.stack.join(" | ")} ${p.link ? `-> ${p.link}` : ""}`,
          });
        });
        break;

      case "experience":
        newHistory.push({ type: "highlight", text: "=== ACTIVE ENGAGEMENT TIMELINE ===" });
        experience.forEach((e) => {
          newHistory.push({
            type: "info",
            text: `${e.role} @ ${e.org} (${e.period})`,
          });
          newHistory.push({ type: "output", text: `  ${e.description}` });
        });
        break;

      case "contact":
        newHistory.push(
          { type: "highlight", text: "=== SECURE TRANSMISSION CHANNELS ===" },
          { type: "output", text: `Email:    ${contact.email}` },
          { type: "output", text: `GitHub:   ${contact.github}` },
          { type: "output", text: `LinkedIn: ${contact.linkedin}` }
        );
        break;

      case "run":
      case "scan":
        newHistory.push(
          { type: "amber", text: "[AUDIT_START]: Initiating heuristic security scan across subnets..." },
          { type: "output", text: "  [0.12s] Checking agent vector stores... 0 vulnerabilities detected." },
          { type: "output", text: "  [0.28s] Inspecting LLM prompt pipelines... Guardrails active." },
          { type: "output", text: "  [0.45s] Verifying JWT & PII boundaries... 100% compliant." },
          { type: "teal", text: "[AUDIT_RESULT]: ALL DEFENSE MATRICES OPTIMAL. NO BREACH DETECTED." }
        );
        break;

      case "cat resume.txt":
      case "cat /home/krunal/resume.txt":
      case "resume":
        newHistory.push(
          { type: "highlight", text: "=== /home/krunal/resume.txt ===" },
          ...resume.map((line) => ({ type: "output", text: line }))
        );
        if (typeof onNavigate === "function") onNavigate("about");
        break;

      case "ls":
      case "ls -la":
        newHistory.push(
          { type: "info", text: "total 12" },
          { type: "output", text: "drwxr-xr-x  2 krunal krunal 4096 about" },
          { type: "output", text: "drwxr-xr-x  2 krunal krunal 4096 skills" },
          { type: "output", text: "drwxr-xr-x  2 krunal krunal 4096 projects" },
          { type: "output", text: "-rw-r--r--  1 krunal krunal  529 resume.txt" }
        );
        break;

      case "pwd":
        newHistory.push({ type: "output", text: "/home/krunal/portfolio" });
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
        onClose();
        return;

      case "":
        break;

      default:
        if (command.startsWith("open ")) {
          const target = command.replace("open ", "").trim();

          if (target === "cyberrange") {
            routeToSection("projects");
            openProjectLink("cyberrange");
            break;
          }

          if (target === "home" || target === "about" || target === "skills" || target === "projects" || target === "experience" || target === "contact") {
            routeToSection(target);
            break;
          }

          if (target === "resume") {
            routeToSection("about");
            newHistory.push(
              { type: "highlight", text: "=== /home/krunal/resume.txt ===" },
              ...resume.map((line) => ({ type: "output", text: line }))
            );
            break;
          }

          newHistory.push({ type: "amber", text: `Unknown navigation target: '${target}'. Try: home, about, skills, projects, experience, contact, cyberrange.` });
          break;
        }

        if (command.startsWith("sudo ")) {
          const suffix = command.replace("sudo ", "").trim();
          if (suffix === "hire krunal" || suffix === "hire") {
            if (typeof onOpenLink === "function") onOpenLink(`mailto:${contact.email}?subject=Hiring%20Krunal&body=Hi%20Krunal,%20I%27d%20like%20to%20chat%20about%20a%20role.`);
            routeToSection("contact");
            newHistory.push({ type: "teal", text: "[AUTH_OK]: hiring workflow initialized. Secure message channel opened." });
            break;
          }
        }

        newHistory.push({
          type: "amber",
          text: `Command not recognized: '${trimmed}'. Type 'help' for available commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex =
          historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInputVal("");
        } else {
          setHistoryIndex(nextIndex);
          setInputVal(commandHistory[nextIndex]);
        }
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cli-overlay">
      <div className="cli-backdrop" onClick={onClose} />
      <div className="cli-window">
        {/* Terminal Titlebar */}
        <div className="cli-header">
          <div className="cli-title">
            <span className="cli-dot red" onClick={onClose} title="Close (Esc)" />
            <span className="cli-dot yellow" />
            <span className="cli-dot green" />
            <span className="cli-title-text">krunal@sentinel-agentic-core:~ (tty1)</span>
          </div>
          <div className="cli-actions">
            <span className="cli-badge">[PRESS ESC TO EXIT]</span>
            <button className="cli-close-btn" onClick={onClose}>
              ✕
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="cli-body" onClick={() => inputRef.current?.focus()}>
          {history.map((line, i) => {
            let className = "cli-line";
            if (line.type === "system") className += " cli-system";
            else if (line.type === "highlight") className += " cli-highlight";
            else if (line.type === "info") className += " cli-info";
            else if (line.type === "amber") className += " cli-amber";
            else if (line.type === "teal") className += " cli-teal";
            else if (line.type === "dim") className += " cli-dim";
            else if (line.type === "input") className += " cli-input-echo";

            return (
              <div key={i} className={className}>
                {line.text}
              </div>
            );
          })}
          <div ref={terminalEndRef} />
        </div>

        {/* Command Input Prompt */}
        <div className="cli-input-bar">
          <span className="cli-prompt">krunal@sentinel:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="cli-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help', 'projects', 'scan'..."
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
