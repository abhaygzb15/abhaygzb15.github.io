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
    "Abhay Pawar - Young Professional (Full Stack)",
    "IHMCL, National Highways Authority of India (NHAI)",
    "B.Tech IT & Mathematical Innovation | University of Delhi, 2022-26",
    "CGPA: 9.602 | Gold Medalist",
    "Published researcher (Cryobiology, 2026)",
    "Building GovTech, Android, mobile, and data-driven products",
    "Based in New Delhi, India",
  ],

  skills: [
    "Languages & Platforms : C, Python, Flutter, Jetpack Compose, Streamlit, Kotlin",
    "Data & AI             : Firebase, MySQL, Power BI, TensorFlow, Data Analytics, AI & ML",
    "Tools & Design        : Git, Android Studio, Figma, Canva, GitHub, MATLAB",
    "Deployment            : AWS, Docker, Vercel, Render, Google Play Console, Firebase Crashlytics",
  ],

  experience: [
    "Young Professional (Full Stack) | IHMCL, NHAI (Aug 2026 - Present)",
    "  Full-time GovTech role",
    "",
    "Full Stack Engineer Intern | IHMCL, NHAI (Jan 2026 - Jul 2026)",
    "  Build for Bharat Fellowship 2026 | Top 18 of 10,000+ applicants",
    "",
    "Mobile App Developer | NIC, Govt of India (Jun 2025 - Jul 2025)",
    "  Ministry of Housing and Urban Affairs",
    "",
    "App Developer Intern | Chronicles Sporting Pvt Ltd (Jul 2024 - Feb 2025)",
    "  Deployed app on PlayStore and AppStore",
    "",

    "Software Developer Intern | ICGEB (Nov 2024 - Feb 2025)",
    "  Worked on Google Maps API and routing feature",
    "",

    "AI and ML Intern | YBI (Jun 2024 - Jul 2024)",
    "  Worked on Python, Data Analysis and Machine Learning",
    "",
  ],

  projects: [
    "Rajmargyatra Mobile Application (FASTag + REST APIs + Payment Integration)",
    "MMA Fantasy Sports-App (Flutter + Firebase)",
    "Vision-Language Fusion for Advanced Image Captioning (OpenCV + Pytorch)",
    "Implementing Kinematic Control of Open ManipulatorX (Arduino + Kinematics)",
    "Athlete Aware: Anti-Doping Platform (Flutter + Firebase)",
    "Food Delivery Chatbot (Streamlit + NLP)",
    "Olympics Data Analysis and Prediction (Analysis + ML Algorithms)",
  ],

  resume: [
    "Opening resume...",
    "→ https://drive.google.com/file/d/1yFfsY4nnRImLJHj9PgvVk_h9o3zqS3t_/view?usp=sharing",
  ],

  achievements: [
    "SIH 2024 & 2025 Finalist — National Level Hackathon",
    "Tata Technologies InnoVent - Top 31 / 2822 Teams",
    "Publication in Cryobiology (Elsevier, 2026)",
    "GATE CSE'25 Qualified and AIR 3863 in GATE DA'26",
    "Samsung Solve For Tomorrow - Top 25, Space & Tech Theme",
    "Event Management Intern in Indian Military Heritage Festival",
  ],

  blogs: [
    "Latest posts:",
    "Shift of Governance on WhatsApp (July 2026)",
    "Evolving Android (July 2026)",
    "https://medium.com/@abhaygzb15",
  ],

  publications: [
    "Title  : Design of an optimal planning framework for",
    "cryosurgical treatment of brain tumor using",
    "CNN segmentation of MRI images",
    "Journal: Cryobiology (Elsevier) | 2026",
    "DOI    : https://doi.org/10.1016/j.cryobiol.2026.105619",
  ],

  contact: [
    "Email   : abhaygzb15@gmail.com",
    "Phone   : +91-9810993024",
    "GitHub  : https://github.com/abhaygzb15",
    "LinkedIn: https://www.linkedin.com/in/abhaypawar15/",
    "Medium  : https://medium.com/@abhaygzb15",
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
  const slashMenuRef = useRef<HTMLDivElement>(null);

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

  // Scroll highlighted slash option into view whenever it changes
  useEffect(() => {
    if (!slashOpen || !slashMenuRef.current) return;
    const item = slashMenuRef.current.querySelector(
      `[data-idx="${highlighted}"]`,
    ) as HTMLElement | null;
    item?.scrollIntoView({ block: "nearest" });
  }, [highlighted, slashOpen]);

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
            ref={slashMenuRef}
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
                data-idx={i}
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
