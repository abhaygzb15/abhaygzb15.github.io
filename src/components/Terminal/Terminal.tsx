import { useState, useRef, useEffect, KeyboardEvent } from "react";

interface TerminalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface Line {
  type: "cmd" | "output" | "error" | "banner";
  text: string;
}

const BANNER: Line[] = [
  {
    type: "banner",
    text: 'Terminal ready. Type "/" to see commands or "help" for list.',
  },
  { type: "banner", text: "" },
];

const SLASH_OPTIONS: { cmd: string; desc: string }[] = [
  { cmd: "help", desc: "Show all available commands" },
  { cmd: "about", desc: "Learn about me" },
  { cmd: "skills", desc: "View my tech stack" },
  { cmd: "experience", desc: "See my work history" },
  { cmd: "projects", desc: "See my work" },
  { cmd: "resume", desc: "View my resume" },
  { cmd: "achievements", desc: "My achievements" },
  { cmd: "blogs", desc: "Read my blogs" },
  { cmd: "publications", desc: "My research work" },
  { cmd: "contact", desc: "Get in touch" },
  { cmd: "clear", desc: "Clear the terminal" },
  { cmd: "exit", desc: "Close the terminal" },
];

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands: about | skills | experience | projects | resume | achievements | blogs | publications | contact | clear | exit |",
  ],

  about: [
    "Abhay Pawar — B.Tech IT & Mathematical Innovation",
    "University of Delhi | CGPA: 8.97",
    "Published researcher (Cryobiology, 2026)",
    "Hackathon finalist (SIH 2024, national level)",
    "Based in New Delhi, India",
  ],

  skills: [
    "Languages   : Python, C, Kotlin, MATLAB",
    "Mobile/Web  : Flutter, Streamlit, Firebase",
    "Data & AI   : AI/ML, Data Analysis, MySQL",
    "Tools       : Git, Figma, Canva, Dialogflow",
    "Analytics   : Power BI, MS Excel",
  ],

  experience: [
    "Research Intern | IIT Bombay (Nov 2024)",
    "  Cryo-bio ML model; paper published in Cryobiology",
    "",
    "App Dev Intern | Uttarakhand IT Dev Agency",
    "  Agri advisory Flutter app; reached 500+ farmers",
    "",
    "ML Intern | Graminnovation (Jun–Jul 2024)",
    "  Crop & soil prediction models (95%+ accuracy)",
  ],

  projects: [
    "CiceroneAI       — AI travel planner (Flutter + Gemini)",
    "DigiLocker Bot   — Dialogflow + GCP deployment",
    "SpeakMed         — multilingual healthcare app (SIH 2024)",
    "Krishak Mitra    — agri advisory Flutter app",
    "Cryobiology ML   — predictive model for IIT Bombay",
  ],

  resume: ["Opening resume...", "→ https://drive.google.com/your-resume-link"],

  achievements: [
    "🏆 SIH 2024 Finalist — National Level Hackathon",
    "📄 Published in Cryobiology (Elsevier, 2026)",
    "    DOI: 10.1016/j.cryobiol.2026.105619",
    "🤝 Research Collaboration — IIT Bombay",
    "🌾 Deployed agri app reaching 500+ farmers",
    "🎓 CGPA: 8.97 — Cluster Innovation Centre, DU",
  ],

  blogs: [
    "Read my blogs on Medium:",
    "→ medium.com/@abhaygzb15",
    "",
    "Or visit /blogs on this site.",
  ],

  publications: [
    "Title  : ML-based cryoprotectant optimization",
    "         for platelet cryopreservation",
    "Journal: Cryobiology (Elsevier) | 2026",
    "DOI    : 10.1016/j.cryobiol.2026.105619",
    "Role   : Co-author (IIT Bombay collaboration)",
  ],

  contact: [
    "Email   : abhaygzb15@gmail.com",
    "Phone   : +91-9310753131",
    "GitHub  : github.com/abhaygzb15",
    "LinkedIn: linkedin.com/in/abhay-pawar-7aa32b251",
    "Medium  : medium.com/@abhaygzb15",
    "Location: New Delhi, India",
  ],
};

const processCommand = (raw: string): Line[] => {
  const cmd = raw.trim().toLowerCase().replace(/^\//, "");
  if (!cmd) return [];
  if (cmd === "clear" || cmd === "exit") return [];
  const response = COMMANDS[cmd];
  if (response)
    return response.map((t) => ({ type: "output" as const, text: t }));
  return [
    {
      type: "error",
      text: `command not found: "${cmd}". Type "help" for available commands.`,
    },
  ];
};

const Terminal = ({ open, setOpen }: TerminalProps) => {
  const [lines, setLines] = useState<Line[]>(BANNER);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [slashOpen, setSlashOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const slashFilter = input.startsWith("/")
    ? SLASH_OPTIONS.filter((o) =>
        o.cmd.startsWith(input.slice(1).toLowerCase()),
      )
    : SLASH_OPTIONS;

  // Auto-scroll to latest output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines, open]);

  // Focus input when terminal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Clear ALL state every time the terminal closes — fresh session every time
  useEffect(() => {
    if (!open) {
      setLines([...BANNER]);
      setInput("");
      setHistory([]);
      setHistIdx(-1);
      setSlashOpen(false);
      setHighlighted(0);
    }
  }, [open]);

  useEffect(() => {
    setSlashOpen(input.startsWith("/"));
    setHighlighted(0);
  }, [input]);

  const close = () => setOpen(false);

  const runCommand = (raw: string) => {
    setSlashOpen(false);
    const cmd = raw.trim().toLowerCase();

    // exit — close the terminal
    if (cmd === "exit") {
      const cmdLine: Line = { type: "cmd", text: raw.trim() };
      setLines((prev) => [
        ...prev,
        cmdLine,
        { type: "output", text: "Closing terminal..." },
        { type: "output", text: "" },
      ]);
      setInput("");
      setHistIdx(-1);
      setTimeout(() => setOpen(false), 400);
      return;
    }

    // clear
    if (cmd === "clear") {
      setLines([...BANNER]);
      setInput("");
      setHistIdx(-1);
      return;
    }

    const cmdLine: Line = { type: "cmd", text: raw.trim() };
    const output = processCommand(raw.trim());
    if (raw.trim()) setHistory((h) => [raw.trim(), ...h].slice(0, 50));
    setLines((prev) => [
      ...prev,
      cmdLine,
      ...output,
      { type: "output", text: "" },
    ]);
    setInput("");
    setHistIdx(-1);
  };

  const submit = () => {
    if (slashOpen && slashFilter.length > 0) {
      runCommand(slashFilter[highlighted].cmd);
    } else {
      runCommand(input.trim());
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (slashOpen && slashFilter.length > 0) {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlighted(
          (p) => (p - 1 + slashFilter.length) % slashFilter.length,
        );
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlighted((p) => (p + 1) % slashFilter.length);
        return;
      }
      if (e.key === "Escape") {
        setSlashOpen(false);
        setInput("");
        return;
      }
    }
    if (e.key === "Enter") {
      submit();
      return;
    }
    if (e.key === "Escape") {
      close();
      return;
    }
    if (!slashOpen) {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        const next = Math.min(histIdx + 1, history.length - 1);
        setHistIdx(next);
        setInput(history[next] ?? "");
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = histIdx - 1;
        if (next < 0) {
          setHistIdx(-1);
          setInput("");
          return;
        }
        setHistIdx(next);
        setInput(history[next] ?? "");
      }
    }
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop — clicking outside closes the terminal */}
      <div className="fixed inset-0 z-40" onClick={close} aria-hidden="true" />

      {/* ── Terminal floating panel ── */}
      <div
        className="fixed z-50 flex flex-col rounded-lg overflow-hidden"
        style={{
          width: "clamp(320px, 38vw, 540px)",
          height: "clamp(320px, 50vh, 460px)",
          right: "clamp(12px, 3vw, 40px)",
          bottom: "clamp(12px, 3vh, 40px)",
          background: "#0d1117",
          border: "1px solid #30363d",
          boxShadow:
            "0 16px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,200,83,0.06)",
        }}
      >
        {/* ── Title bar ── */}
        <div
          className="flex items-center justify-between px-4 py-2.5 shrink-0"
          style={{
            background: "#161b22",
            borderBottom: "1px solid #30363d",
          }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="font-mono text-sm font-bold"
              style={{ color: "#00c853" }}
            >
              {">"}_
            </span>
            <span className="font-mono text-sm font-semibold text-white">
              terminal
            </span>
            <span className="font-mono text-xs" style={{ color: "#4a7a4a" }}>
              Press Esc to close
            </span>
          </div>
          <button
            onClick={close}
            className="flex items-center justify-center w-6 h-6 rounded transition-all duration-150 hover:bg-red-500/20"
            style={{ color: "#f85149" }}
            aria-label="Close terminal"
          >
            ✕
          </button>
        </div>

        {/* ── Output area ── */}
        <div
          className="flex-1 overflow-y-auto px-4 py-3 font-mono text-xs leading-relaxed"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#21262d transparent",
          }}
        >
          {lines.map((line, i) => (
            <div key={i}>
              {line.type === "cmd" ? (
                <div className="flex items-center gap-2 mb-0.5">
                  <span style={{ color: "#00c853" }}>➜</span>
                  <span className="font-semibold" style={{ color: "#00c853" }}>
                    {line.text}
                  </span>
                </div>
              ) : line.type === "error" ? (
                <div className="mb-0.5" style={{ color: "#f85149" }}>
                  {line.text || "\u00A0"}
                </div>
              ) : line.type === "banner" ? (
                <div className="mb-0.5" style={{ color: "#8b949e" }}>
                  {line.text || "\u00A0"}
                </div>
              ) : (
                <div className="mb-0.5" style={{ color: "#c9d1d9" }}>
                  {line.text || "\u00A0"}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* ── Slash command menu ── */}
        {slashOpen && slashFilter.length > 0 && (
          <div
            className="shrink-0 overflow-y-auto"
            style={{
              borderTop: "1px solid #30363d",
              background: "#161b22",
              maxHeight: "200px",
              scrollbarWidth: "thin",
              scrollbarColor: "#21262d transparent",
            }}
          >
            {/* Menu header */}
            <div
              className="flex items-center justify-between px-4 py-1.5 font-mono text-xs sticky top-0"
              style={{
                borderBottom: "1px solid #30363d",
                color: "#8b949e",
                background: "#161b22",
              }}
            >
              <span>Commands</span>
              <span style={{ color: "#4a7a4a" }}>
                ↑↓ navigate · Enter select
              </span>
            </div>
            {slashFilter.map((opt, i) => (
              <button
                key={opt.cmd}
                onMouseDown={(e) => {
                  e.preventDefault();
                  runCommand(opt.cmd);
                }}
                onMouseEnter={() => setHighlighted(i)}
                className="w-full flex items-center justify-between px-4 py-1.5 font-mono text-xs text-left transition-colors"
                style={{
                  background:
                    i === highlighted ? "rgba(0,200,83,0.1)" : "transparent",
                  borderLeft:
                    i === highlighted
                      ? "2px solid #00c853"
                      : "2px solid transparent",
                }}
              >
                <span
                  className="font-semibold"
                  style={{
                    color: i === highlighted ? "#00c853" : "#e6edf3",
                  }}
                >
                  {opt.cmd}
                </span>
                <span style={{ color: "#4a7a4a" }}>{opt.desc}</span>
              </button>
            ))}
          </div>
        )}

        {/* ── Input bar ── */}
        <div
          className="flex items-center gap-2 px-4 py-2.5 shrink-0"
          style={{
            borderTop: "1px solid #30363d",
            background: "#161b22",
          }}
        >
          <span
            className="font-mono text-sm font-bold shrink-0 select-none"
            style={{ color: "#00c853" }}
          >
            ➜
          </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="type command or press /"
            autoComplete="off"
            spellCheck={false}
            className="flex-1 bg-transparent font-mono text-xs outline-none placeholder:text-[#4a7a4a]"
            style={{ color: "#e6edf3", caretColor: "#00c853" }}
          />
        </div>
      </div>
    </>
  );
};

export default Terminal;
