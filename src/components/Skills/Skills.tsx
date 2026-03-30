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

const skills: SkillItem[] = [
  // ── xl ──
  { name: 'Python',           size: 'xl',  x: 20,  y: 38,  delay: 0,    dur: 4.5 },
  { name: 'Java',             size: 'xl',  x: 48,  y: 44,  delay: 0.8,  dur: 5.0 },
  { name: 'Machine Learning', size: 'xl',  x: 33,  y: 20,  delay: 0.4,  dur: 5.2 },

  // ── lg ──
  { name: 'Deep Learning',    size: 'lg',  x: 10,  y: 57,  delay: 1.2,  dur: 4.8 },
  { name: 'Data Analysis',    size: 'lg',  x: 54,  y: 58,  delay: 0.6,  dur: 4.7 },
  { name: 'Flutter',          size: 'lg',  x: 66,  y: 32,  delay: 1.5,  dur: 4.9 },

  // ── md ──
  { name: 'Github',           size: 'md',  x: 3,   y: 20,  delay: 0.9,  dur: 4.2 },
  { name: 'Firebase',         size: 'md',  x: 3,   y: 33,  delay: 0.3,  dur: 4.3 },
  { name: 'Kotlin',           size: 'md',  x: 3,   y: 70,  delay: 1.8,  dur: 4.4 },
  { name: 'REST API',         size: 'md',  x: 78,  y: 20,  delay: 1.1,  dur: 4.0 },
  { name: 'MySQL',            size: 'md',  x: 82,  y: 48,  delay: 0.5,  dur: 4.1 },
  { name: 'Git',              size: 'md',  x: 50,  y: 72,  delay: 1.3,  dur: 4.2 },
  { name: 'Android Studio',   size: 'md',  x: 26,  y: 70,  delay: 1.0,  dur: 4.6 },

  // ── sm ──
  { name: 'C',                size: 'sm',  x: 3,   y: 7,   delay: 0.2,  dur: 3.8 },
  { name: 'MATLAB',           size: 'sm',  x: 14,  y: 5,   delay: 1.4,  dur: 3.9 },
  { name: 'R',                size: 'sm',  x: 27,  y: 8,   delay: 0.7,  dur: 3.6 },
  { name: 'PowerBI',          size: 'sm',  x: 38,  y: 6,   delay: 1.6,  dur: 3.7 },
  { name: 'Streamlit',        size: 'sm',  x: 52,  y: 9,   delay: 0.4,  dur: 4.0 },
  { name: 'MS Excel',         size: 'sm',  x: 65,  y: 6,   delay: 1.9,  dur: 3.8 },
  { name: 'Canva',            size: 'sm',  x: 78,  y: 9,   delay: 0.6,  dur: 3.6 },
  { name: 'Robotics',         size: 'sm',  x: 88,  y: 34,  delay: 1.4,  dur: 3.7 },
  { name: 'SpaCy',            size: 'sm',  x: 20,  y: 83,  delay: 1.1,  dur: 3.9 },
  { name: 'Dialogflow',       size: 'sm',  x: 40,  y: 85,  delay: 0.8,  dur: 4.1 },
  { name: 'Figma',            size: 'sm',  x: 62,  y: 82,  delay: 1.7,  dur: 3.8 },
  { name: 'Mathematica',      size: 'sm',  x: 78,  y: 70,  delay: 0.3,  dur: 4.0 },
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
