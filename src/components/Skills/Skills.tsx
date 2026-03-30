type SkillSize = 'xl' | 'lg' | 'md' | 'sm'

interface SkillItem {
  name: string
  size: SkillSize
  x: number
  y: number
  delay: number
  dur: number
}

const sizeStyles: Record<SkillSize, { fontSize: string; fontWeight: number }> = {
  xl: { fontSize: '2rem',    fontWeight: 700 },
  lg: { fontSize: '1.5rem',  fontWeight: 600 },
  md: { fontSize: '1.1rem',  fontWeight: 500 },
  sm: { fontSize: '0.85rem', fontWeight: 400 },
}

// 5 rows, ~14% vertical gap each — float animation (+/-10px) never causes overlap
// x positions account for JetBrains Mono char widths: xl≈19px, lg≈14px, md≈11px, sm≈8px
const skills: SkillItem[] = [
  // ── Row 1  y≈6%  — 8 sm words ──
  { name: 'C',                size: 'sm',  x: 4,   y: 6,   delay: 0.2,  dur: 3.8 },
  { name: 'MATLAB',           size: 'sm',  x: 14,  y: 5,   delay: 1.4,  dur: 3.9 },
  { name: 'PowerBI',          size: 'sm',  x: 34,  y: 5,   delay: 1.6,  dur: 3.7 },
  { name: 'Streamlit',        size: 'sm',  x: 46,  y: 8,   delay: 0.4,  dur: 4.0 },
  { name: 'MS Excel',         size: 'sm',  x: 60,  y: 6,   delay: 1.9,  dur: 3.8 },
  { name: 'Canva',            size: 'sm',  x: 73,  y: 7,   delay: 0.6,  dur: 3.6 },

  // ── Row 2  y≈22%  — Github | Machine Learning (xl) | REST API ──
  { name: 'Git',           size: 'md',  x: 7,   y: 22,  delay: 0.9,  dur: 4.2 },
  { name: 'AI and ML', size: 'xl',  x: 33,  y: 21,  delay: 0.4,  dur: 5.2 },

  // ── Row 3  y≈39%  — Firebase | Python (xl) | Flutter (lg) | Java (xl) ──
  { name: 'Firebase',         size: 'md',  x: 5,   y: 39,  delay: 0.3,  dur: 4.3 },
  { name: 'Python',           size: 'xl',  x: 25,  y: 38,  delay: 0.0,  dur: 4.5 },
  { name: 'Flutter',          size: 'lg',  x: 54,  y: 40,  delay: 1.5,  dur: 4.9 },

  // ── Row 4  y≈57%  — Deep Learning (lg) | Kotlin | Data Analysis (lg) | MySQL ──
  { name: 'Kotlin',           size: 'md',  x: 36,  y: 56,  delay: 1.8,  dur: 4.4 },
  { name: 'Data Analysis',    size: 'lg',  x: 52,  y: 58,  delay: 0.6,  dur: 4.7 },
  { name: 'MySQL',            size: 'md',  x: 84,  y: 56,  delay: 0.5,  dur: 4.1 },

  // ── Row 5  y≈74%  — Android Studio | Git | Dialogflow | SpaCy | Figma | Mathematica ──
  { name: 'Dialogflow',       size: 'sm',  x: 40,  y: 75,  delay: 0.8,  dur: 4.1 },
  { name: 'Figma',            size: 'sm',  x: 68,  y: 75,  delay: 1.7,  dur: 3.8 },
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
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <WrenchIcon />
            <h2 className="font-mono font-bold text-gray-100 text-3xl">Skills</h2>
          </div>
          <span className="font-mono text-terminal-muted text-sm hidden sm:block">
            // skill cloud
          </span>
        </div>

        {/* Cloud container */}
        <div
          className="relative w-full h-[480px] md:h-[520px] rounded-xl border border-terminal-border overflow-hidden select-none"
          style={{ background: 'rgba(15, 20, 15, 0.85)' }}
        >
          {skills.map((skill) => {
            const { fontSize, fontWeight } = sizeStyles[skill.size]
            return (
              <span
                key={skill.name}
                className="absolute font-mono text-gray-400 hover:text-terminal-green transition-colors duration-200"
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
