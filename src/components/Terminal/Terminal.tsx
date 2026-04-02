import { useState, useRef, useEffect, KeyboardEvent } from 'react'

interface Line {
  type: 'cmd' | 'output' | 'error' | 'banner'
  text: string
}

const BANNER: Line[] = [
  { type: 'banner', text: 'Terminal ready. Type "/" to see commands or "help" for list.' },
  { type: 'banner', text: '' },
]

const SLASH_OPTIONS: { cmd: string; desc: string }[] = [
  { cmd: 'help',         desc: 'Show all available commands' },
  { cmd: 'about',        desc: 'Learn about me' },
  { cmd: 'education',    desc: 'My academic background' },
  { cmd: 'skills',       desc: 'View my tech stack' },
  { cmd: 'experience',   desc: 'See my work history' },
  { cmd: 'projects',     desc: 'See my work' },
  { cmd: 'publications', desc: 'My research work' },
  { cmd: 'contact',      desc: 'Get in touch' },
  { cmd: 'whoami',       desc: 'Who am I?' },
  { cmd: 'clear',        desc: 'Clear the terminal' },
]

const COMMANDS: Record<string, string[]> = {
  help: SLASH_OPTIONS.map((o) => `${o.cmd.padEnd(16)} ${o.desc}`),

  whoami: [
    'Abhay Pawar',
    'B.Tech IT & Math Innovation @ University of Delhi',
    'Developer · Researcher · CTF Player',
  ],

  about: [
    'Abhay Pawar — B.Tech IT & Mathematical Innovation',
    'University of Delhi | CGPA: 8.97',
    'Published researcher (Cryobiology, 2026)',
    'Hackathon finalist (SIH 2024, national level)',
    'Based in New Delhi, India',
  ],

  education: [
    'B.Tech — IT & Mathematical Innovation',
    'Cluster Innovation Centre, University of Delhi',
    'Batch: 2022 – 2026 | CGPA: 8.97',
    '',
    'Class XII — 95.8% | Delhi Public School',
    'Class X   — 95.4% | Delhi Public School',
  ],

  skills: [
    'Languages   : Python, C, Kotlin, MATLAB',
    'Mobile/Web  : Flutter, Streamlit, Firebase',
    'Data & AI   : AI/ML, Data Analysis, MySQL',
    'Tools       : Git, Figma, Canva, Dialogflow',
    'Analytics   : Power BI, MS Excel',
  ],

  experience: [
    'Research Intern | IIT Bombay (Nov 2024)',
    'Cryo-bio ML model; paper published in Cryobiology',
    '',
    'App Dev Intern | Uttarakhand IT Dev Agency',
    'Agri advisory Flutter app; reached 500+ farmers',
    '',
    'ML Intern | Graminnovation (Jun–Jul 2024)',
    'Crop & soil prediction models (95%+ accuracy)',
  ],

  projects: [
    'CiceroneAI       — AI travel planner (Flutter + Gemini)',
    'DigiLocker Bot   — Dialogflow + GCP deployment',
    'SpeakMed         — multilingual healthcare app (SIH 2024)',
    'Krishak Mitra    — agri advisory Flutter app',
    'Cryobiology ML   — predictive model for IIT Bombay',
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
  return [{ type: 'error', text: `command not found: "${cmd}". Type "/" for options.` }]
}

const Terminal = () => {
  const [open, setOpen]               = useState(false)
  const [lines, setLines]             = useState<Line[]>(BANNER)
  const [input, setInput]             = useState('')
  const [history, setHistory]         = useState<string[]>([])
  const [histIdx, setHistIdx]         = useState(-1)
  const [slashOpen, setSlashOpen]     = useState(false)
  const [highlighted, setHighlighted] = useState(0)

  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef  = useRef<HTMLInputElement>(null)

  const slashFilter = input.startsWith('/')
    ? SLASH_OPTIONS.filter((o) => o.cmd.startsWith(input.slice(1).toLowerCase()))
    : SLASH_OPTIONS

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines, open])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

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
    const cmdLine: Line = { type: 'cmd', text: cmd }
    const output = processCommand(cmd)
    if (cmd) setHistory((h) => [cmd, ...h].slice(0, 50))
    setLines((prev) => [...prev, cmdLine, ...output, { type: 'output', text: '' }])
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
      if (e.key === 'ArrowUp')   { e.preventDefault(); setHighlighted((p) => (p - 1 + slashFilter.length) % slashFilter.length); return }
      if (e.key === 'ArrowDown') { e.preventDefault(); setHighlighted((p) => (p + 1) % slashFilter.length); return }
      if (e.key === 'Escape')    { setSlashOpen(false); setInput(''); return }
    }
    if (e.key === 'Enter')  { submit(); return }
    if (e.key === 'Escape') { setOpen(false); return }
    if (!slashOpen) {
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        const next = Math.min(histIdx + 1, history.length - 1)
        setHistIdx(next); setInput(history[next] ?? '')
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        const next = histIdx - 1
        if (next < 0) { setHistIdx(-1); setInput(''); return }
        setHistIdx(next); setInput(history[next] ?? '')
      }
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">

      {/* Terminal window */}
      {open && (
        <div
          className="w-[420px] sm:w-[480px] rounded-lg overflow-hidden flex flex-col"
          style={{
            height: '360px',
            background: '#0d1117',
            border: '1px solid #21262d',
            boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
          }}
        >
          {/* ── Title bar ── */}
          <div
            className="flex items-center justify-between px-4 py-2.5 shrink-0"
            style={{ background: '#161b22', borderBottom: '1px solid #21262d' }}
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold" style={{ color: '#00c853' }}>{'>'}_</span>
              <span className="font-mono text-sm font-semibold text-white">terminal</span>
              <span className="font-mono text-xs ml-2" style={{ color: '#4a7a4a' }}>Press Esc to close</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="font-mono text-xs font-bold px-1.5 py-0.5 rounded transition-colors"
              style={{ color: '#f85149', border: '1px solid #f85149' }}
            >
              ✕
            </button>
          </div>

          {/* ── Output area ── */}
          <div className="flex-1 overflow-y-auto px-5 py-4 font-mono text-xs leading-relaxed">
            {lines.map((line, i) => (
              <div key={i}>
                {line.type === 'cmd' ? (
                  <div className="flex items-center gap-2 mb-1">
                    <span style={{ color: '#00c853' }}>→</span>
                    <span className="font-semibold" style={{ color: '#00c853' }}>{line.text}</span>
                  </div>
                ) : line.type === 'error' ? (
                  <div style={{ color: '#f85149' }}>{line.text || '\u00A0'}</div>
                ) : line.type === 'banner' ? (
                  <div style={{ color: '#8b949e' }}>{line.text || '\u00A0'}</div>
                ) : (
                  <div style={{ color: '#c9d1d9' }}>{line.text || '\u00A0'}</div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* ── Slash command menu ── */}
          {slashOpen && slashFilter.length > 0 && (
            <div
              className="shrink-0"
              style={{ borderTop: '1px solid #21262d', background: '#161b22', maxHeight: '220px', overflowY: 'auto' }}
            >
              {/* Menu header */}
              <div
                className="flex items-center justify-between px-4 py-1.5 font-mono text-xs"
                style={{ borderBottom: '1px solid #21262d', color: '#8b949e' }}
              >
                <span>Commands</span>
                <span>↑↓ navigate • Enter select</span>
              </div>
              {/* Options */}
              {slashFilter.map((opt, i) => (
                <button
                  key={opt.cmd}
                  onMouseDown={(e) => { e.preventDefault(); runCommand(opt.cmd) }}
                  onMouseEnter={() => setHighlighted(i)}
                  className="w-full flex items-center justify-between px-4 py-2 font-mono text-xs text-left transition-colors"
                  style={{
                    background: i === highlighted ? 'rgba(0,200,83,0.12)' : 'transparent',
                    borderLeft: i === highlighted ? '2px solid #00c853' : '2px solid transparent',
                  }}
                >
                  <span
                    className="font-semibold"
                    style={{ color: i === highlighted ? '#00c853' : '#e6edf3' }}
                  >
                    {opt.cmd}
                  </span>
                  <span style={{ color: '#8b949e' }}>{opt.desc}</span>
                </button>
              ))}
            </div>
          )}

          {/* ── Input bar ── */}
          <div
            className="flex items-center gap-2 px-4 py-2.5 shrink-0"
            style={{ borderTop: '1px solid #21262d', background: '#161b22' }}
          >
            <span className="font-mono text-sm font-bold shrink-0" style={{ color: '#00c853' }}>→</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="type command or press /"
              autoComplete="off"
              spellCheck={false}
              className="flex-1 bg-transparent font-mono text-xs outline-none"
              style={{ color: '#e6edf3', caretColor: '#00c853' }}
            />
          </div>
        </div>
      )}

      {/* ── Toggle button ── */}
      <button
        onClick={() => setOpen((p) => !p)}
        title={open ? 'Close terminal' : 'Open terminal'}
        className="w-12 h-12 rounded-full font-mono text-sm font-bold transition-all duration-200 select-none"
        style={open ? {
          background: '#00c853',
          color: '#0d1117',
          border: '1px solid #00c853',
          boxShadow: '0 0 16px rgba(0,200,83,0.4)',
        } : {
          background: '#0d1117',
          color: '#00c853',
          border: '1px solid #21262d',
          boxShadow: '0 0 12px rgba(0,200,83,0.2)',
        }}
      >
        {open ? '✕' : '>_'}
      </button>
    </div>
  )
}

export default Terminal
