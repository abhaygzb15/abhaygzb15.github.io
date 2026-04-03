type SkillSize = 'xl' | 'md'

interface SkillItem {
  name: string
  size: SkillSize
  x: number
  y: number
  delay: number
  dur: number
}

const sizeStyles: Record<SkillSize, { fontSize: string; fontWeight: number }> = {
  xl: { fontSize: '1.9rem', fontWeight: 700 },
  md: { fontSize: '1.0rem', fontWeight: 500 },
}

// 4 rows, ~22% vertical gap each (float-safe at +/-10px)
// x positions based on JetBrains Mono char widths: xl≈18px/ch, md≈10px/ch
// Slight y stagger (±1%) per row for organic look
const skills: SkillItem[] = [
  // ── Row 1  y≈10%  — 4 medium words ──
  { name: 'MATLAB',        size: 'md',  x: 14,  y: 11,  delay: 1.4,  dur: 3.9 },
  { name: 'PowerBI',       size: 'md',  x: 33,  y: 9,   delay: 0.6,  dur: 4.0 },
  { name: 'MS Excel',      size: 'md',  x: 54,  y: 11,  delay: 1.9,  dur: 3.8 },
  { name: 'Streamlit',     size: 'md',  x: 76,  y: 9,   delay: 0.4,  dur: 4.1 },

  // ── Row 2  y≈32%  — 4 xl words ──
  { name: 'C',             size: 'xl',  x: 12,  y: 33,  delay: 0.2,  dur: 4.6 },
  { name: 'Python',        size: 'xl',  x: 27,  y: 31,  delay: 0.0,  dur: 4.5 },
  { name: 'Firebase',      size: 'xl',  x: 50,  y: 33,  delay: 0.3,  dur: 4.8 },
  { name: 'Kotlin',        size: 'xl',  x: 76,  y: 31,  delay: 0.9,  dur: 4.7 },

  // ── Row 3  y≈54%  — 4 xl words ──
  { name: 'Flutter',       size: 'xl',  x: 5,   y: 55,  delay: 1.5,  dur: 4.9 },
  { name: 'AI & ML',       size: 'xl',  x: 26,  y: 53,  delay: 0.4,  dur: 5.1 },
  { name: 'Data Analysis', size: 'xl',  x: 47,  y: 55,  delay: 0.8,  dur: 5.0 },
  { name: 'MySQL',         size: 'xl',  x: 79,  y: 53,  delay: 1.2,  dur: 4.6 },

  // ── Row 4  y≈76%  — 4 medium words ──
  { name: 'Canva',         size: 'md',  x: 14,  y: 77,  delay: 0.6,  dur: 3.7 },
  { name: 'Dialogflow',    size: 'md',  x: 35,  y: 75,  delay: 1.1,  dur: 4.0 },
  { name: 'Figma',         size: 'md',  x: 58,  y: 77,  delay: 1.7,  dur: 3.8 },
  { name: 'Git',           size: 'md',  x: 78,  y: 75,  delay: 0.3,  dur: 3.9 },
]

const WrenchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-terminal-green">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M11.42 15.17L17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.655m5.896-3.42c.21-.328.31-.686.29-1.043a3.86 3.86 0 0 0-3.53-3.75 3.9 3.9 0 0 0-2.6.79L6.75 6.75" />
  </svg>
)

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-terminal-bg">
      <div className="container-max md:pl-8">

        {/* Header */}
        <div className="reveal flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <WrenchIcon />
            <h2 className="font-mono font-bold text-gray-100 text-3xl">Skills</h2>
          </div>
          <span className="font-mono text-terminal-muted text-sm hidden sm:block">
            // hover to fill
          </span>
        </div>

        {/* ── Mobile: pill grid ── */}
        <div className="reveal md:hidden rounded-xl border border-terminal-border p-6"
          style={{ background: 'rgba(15, 20, 15, 0.85)', transitionDelay: '100ms' }}>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="skill-word font-mono border border-terminal-green/40 rounded-full px-4 py-2"
                style={{ fontSize: skill.size === 'xl' ? '1rem' : '0.8rem', fontWeight: skill.size === 'xl' ? 700 : 500 }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* ── Desktop: floating word cloud ── */}
        <div
          className="reveal hidden md:block relative w-full h-[520px] rounded-xl border border-terminal-border overflow-hidden select-none"
          style={{ background: 'rgba(15, 20, 15, 0.85)', transitionDelay: '100ms' }}
        >
          {skills.map((skill) => {
            const { fontSize, fontWeight } = sizeStyles[skill.size]
            return (
              <span
                key={skill.name}
                className="absolute font-mono skill-word"
                style={{
                  left: `${skill.x}%`,
                  top: `${skill.y}%`,
                  fontSize,
                  fontWeight,
                  animation: `floatWord ${skill.dur}s ${skill.delay}s ease-in-out infinite`,
                  willChange: 'transform',
                }}
              >
                {skill.name}
              </span>
            )
          })}
        </div>

        {/* Footer hint */}
        <p className="mt-4 text-center font-mono text-xs text-terminal-muted">
          <span className="text-terminal-green">●</span> hover to highlight
        </p>

      </div>
    </section>
  )
}

export default Skills
