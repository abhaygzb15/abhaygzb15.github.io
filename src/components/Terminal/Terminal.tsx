import { useState, useRef, useEffect, KeyboardEvent } from 'react'

interface Line {
  type: 'input' | 'output' | 'error' | 'banner'
  text: string
}

const BANNER: Line[] = [
  { type: 'banner', text: '╔══════════════════════════════╗' },
  { type: 'banner', text: '║  abhay@pawar ~ portfolio v1  ║' },
  { type: 'banner', text: '╚══════════════════════════════╝' },
  { type: 'output', text: "Type '/' or a command to begin." },
  { type: 'output', text: '' },
]

const SLASH_OPTIONS: { cmd: string; desc: string }[] = [
  { cmd: 'whoami',       desc: 'who am I?' },
  { cmd: 'about',        desc: 'short intro' },
  { cmd: 'education',    desc: 'academic background' },
  { cmd: 'skills',       desc: 'tech stack & tools' },
  { cmd: 'experience',   desc: 'internships & roles' },
  { cmd: 'projects',     desc: 'notable projects' },
  { cmd: 'publications', desc: 'research work' },
  { cmd: 'contact',      desc: 'reach me' },
  { cmd: 'clear',        desc: 'clear terminal' },
]

const COMMANDS: Record<string, string[]> = {
  help: SLASH_OPTIONS.map((o) => `  /${o.cmd.padEnd(14)} — ${o.desc}`),

  whoami: [
    'Abhay Pawar',
    'B.Tech IT & Math Innovation @ University of Delhi',
    'Developer · Researcher · CTF Player',
  ],

  about: [
    '> Abhay Pawar — B.Tech IT & Mathematical Innovation',
    '> University of Delhi | CGPA: 8.97',
    '> Published researcher (Cryobiology, 2026)',
    '> Hackathon finalist (SIH 2024, national level)',
    '> Based in New Delhi, India',
  ],

  education: [
    'B.Tech — IT & Mathematical Innovation',
    'Cluster Innovation Centre, University of Delhi',
    'Batch: 2022 – 2026 | CGPA: 8.97',
    '',
    'Class XII — 95.8% | Delhi Public School',
    'Class X  — 95.4% | Delhi Public School',
  ],

  skills: [
    'Languages   : Python, C, Kotlin, MATLAB',
    'Mobile/Web  : Flutter, Streamlit, Firebase',
    'Data & AI   : AI/ML, Data Analysis, MySQL',
    'Tools       : Git, Figma, Canva, Dialogflow',
    'Analytics   : Power BI, MS Excel',
  ],

  experience: [
    '→ Research Intern | IIT Bombay (Nov 2024)',
    '  Cryo-bio ML model; paper published in Cryobiology',
    '',
    '→ App Dev Intern | Uttarakhand IT Dev Agency',
    '  Agri advisory Flutter app; reached 500+ farmers',
    '',
    '→ ML Intern | Graminnovation (Jun–Jul 2024)',
    '  Crop & soil prediction models (95%+ accuracy)',
  ],

  projects: [
    '★ CiceroneAI — AI travel planner (Flutter + Gemini)',
    '★ DigiLocker Chatbot — Dialogflow + GCP deployment',
    '★ SpeakMed — multilingual healthcare app (SIH 2024)',
    '★ Krishak Mitra — agri advisory Flutter app',
    '★ Cryobiology ML — predictive model for IIT Bombay',
  ],

  publications: [
    'Title  : ML-based cryoprotectant optimization',
    '         for platelet cryopreservation',
    'Journal: Cryobiology (Elsevier) | 2026',
    'DOI    : 10.1016/j.cryobiol.2026.105619',
    'Role   : Co-author (IIT Bombay collaboration)',
  ],

  contact: [
    'Email   : abhaygzb15@gmail.com',
    'Phone   : +91-9310753131',
    'GitHub  : github.com/abhaygzb15',
    'LinkedIn: linkedin.com/in/abhay-pawar-7aa32b251',
    'Medium  : medium.com/@abhaygzb15',
    'Location: New Delhi, India',
  ],
}

const processCommand = (raw: string): Line[] => {
  const cmd = raw.trim().toLowerCase().replace(/^\//, '')
  if (!cmd) return []
  if (cmd === 'clear') return []
  const response = COMMANDS[cmd]
  if (response) return response.map((t) => ({ type: 'output' as const, text: t }))
  return [{ type: 'error', text: `command not found: ${cmd}. Type '/' for options.` }]
}

const Terminal = () => {
  const [open, setOpen]         = useState(false)
  const [lines, setLines]       = useState<Line[]>(BANNER)
  const [input, setInput]       = useState('')
  const [history, setHistory]   = useState<string[]>([])
  const [histIdx, setHistIdx]   = useState(-1)
  const [slashOpen, setSlashOpen] = useState(false)
  const [highlighted, setHighlighted] = useState(0)

  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef  = useRef<HTMLInputElement>(null)

  // Filter slash options by what user typed after "/"
  const slashFilter = input.startsWith('/')
    ? SLASH_OPTIONS.filter((o) => o.cmd.startsWith(input.slice(1).toLowerCase()))
    : SLASH_OPTIONS

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines, open])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  // Show slash menu when input starts with "/"
  useEffect(() => {
    setSlashOpen(input.startsWith('/'))
    setHighlighted(0)
  }, [input])

  const runCommand = (cmd: string) => {
    setSlashOpen(false)

    if (cmd.toLowerCase() === 'clear') {
      setLines([...BANNER])
      setInput('')
      setHistIdx(-1)
      return
    }

    const inputLine: Line = { type: 'input', text: `> ${cmd}` }
    const output = processCommand(cmd)
    if (cmd) setHistory((h) => [cmd, ...h].slice(0, 50))
    setLines((prev) => [...prev, inputLine, ...output])
    setInput('')
    setHistIdx(-1)
  }

  const submit = () => {
    if (slashOpen && slashFilter.length > 0) {
      runCommand(slashFilter[highlighted].cmd)
    } else {
      runCommand(input.trim())
    }
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (slashOpen && slashFilter.length > 0) {
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setHighlighted((p) => (p - 1 + slashFilter.length) % slashFilter.length)
        return
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setHighlighted((p) => (p + 1) % slashFilter.length)
        return
      }
      if (e.key === 'Escape') {
        setSlashOpen(false)
        setInput('')
        return
      }
    }

    if (e.key === 'Enter') { submit(); return }

    if (!slashOpen) {
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        const next = Math.min(histIdx + 1, history.length - 1)
        setHistIdx(next)
        setInput(history[next] ?? '')
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        const next = histIdx - 1
        if (next < 0) { setHistIdx(-1); setInput(''); return }
        setHistIdx(next)
        setInput(history[next] ?? '')
      }
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">

      {/* Terminal window */}
      {open && (
        <div
          className="w-[380px] sm:w-[440px] rounded-xl border border-terminal-border shadow-terminal-lg overflow-hidden flex flex-col"
          style={{ height: '340px', background: 'rgba(10, 13, 10, 0.97)' }}
        >
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-terminal-border bg-terminal-bg-card select-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
              <span className="w-2.5 h-2.5 rounded-full bg-terminal-green opacity-80" />
            </div>
            <span className="font-mono text-xs text-terminal-muted">abhay@pawar:~</span>
            <button
              onClick={() => setOpen(false)}
              className="font-mono text-terminal-muted hover:text-terminal-green text-xs transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Output area */}
          <div className="flex-1 overflow-y-auto px-4 py-3 font-mono text-xs leading-relaxed">
            {lines.map((line, i) => (
              <div
                key={i}
                className={
                  line.type === 'input'  ? 'text-gray-300' :
                  line.type === 'error'  ? 'text-red-400'  :
                  line.type === 'banner' ? 'text-terminal-green' :
                  'text-terminal-muted'
                }
              >
                {line.text || '\u00A0'}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Slash command popup */}
          {slashOpen && slashFilter.length > 0 && (
            <div className="border-t border-terminal-border bg-terminal-bg-card">
              {slashFilter.map((opt, i) => (
                <button
                  key={opt.cmd}
                  onMouseDown={(e) => { e.preventDefault(); runCommand(opt.cmd) }}
                  onMouseEnter={() => setHighlighted(i)}
                  className={`w-full flex items-center gap-3 px-4 py-1.5 text-left font-mono text-xs transition-colors
                    ${i === highlighted
                      ? 'bg-terminal-border text-terminal-green'
                      : 'text-gray-400 hover:text-terminal-green'
                    }`}
                >
                  <span className="text-terminal-green opacity-60">/</span>
                  <span className="w-24 shrink-0">{opt.cmd}</span>
                  <span className="text-terminal-muted truncate">— {opt.desc}</span>
                </button>
              ))}
            </div>
          )}

          {/* Input bar */}
          <div className="flex items-center gap-2 px-4 py-2 border-t border-terminal-border bg-terminal-bg-card">
            <span className="font-mono text-terminal-green text-xs select-none">{'>'}</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="type '/' for commands…"
              autoComplete="off"
              spellCheck={false}
              className="flex-1 bg-transparent font-mono text-xs text-gray-200 placeholder-terminal-muted outline-none caret-terminal-green"
            />
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((p) => !p)}
        title={open ? 'Close terminal' : 'Open terminal'}
        className={`w-12 h-12 rounded-full border border-terminal-border font-mono text-sm font-bold
                    transition-all duration-200 shadow-terminal select-none
                    ${open
                      ? 'bg-terminal-green text-terminal-bg hover:bg-terminal-green-glow'
                      : 'bg-terminal-bg text-terminal-green hover:border-terminal-green hover:shadow-terminal-lg'
                    }`}
        style={open ? {} : { boxShadow: '0 0 12px rgba(0,200,83,0.25)' }}
      >
        {open ? '✕' : '>_'}
      </button>
    </div>
  )
}

export default Terminal
