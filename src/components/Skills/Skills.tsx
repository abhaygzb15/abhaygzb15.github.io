const WrenchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-terminal-green">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M11.42 15.17L17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.655m5.896-3.42c.21-.328.31-.686.29-1.043a3.86 3.86 0 0 0-3.53-3.75 3.9 3.9 0 0 0-2.6.79L6.75 6.75" />
  </svg>
)

interface Skill {
  name: string
  slug?: string
  localPng?: string
}

interface Category {
  label: string
  prefix: string
  skills: Skill[]
}

const categories: Category[] = [
  {
    label: 'Languages & Platforms',
    prefix: '01',
    skills: [
      { name: 'C',              localPng: 'c.png' },
      { name: 'Python',         slug: 'python' },
      { name: 'Flutter',        slug: 'flutter' },
      { name: 'Jetpack Compose', localPng: 'jetpack.png' },
      { name: 'Streamlit',      slug: 'streamlit' },
      { name: 'Android',        slug: 'android' },
    ],
  },
  {
    label: 'Data & AI',
    prefix: '02',
    skills: [
      { name: 'Firebase',       slug: 'firebase' },
      { name: 'MySQL',          slug: 'mysql' },
      { name: 'Power BI',       slug: 'powerbi' },
      { name: 'TensorFlow',     slug: 'tensorflow' },
      { name: 'Data Analytics', localPng: 'analysis.png' },
      { name: 'AI & ML',        localPng: 'aiml.png' },
    ],
  },
  {
    label: 'Tools & Design',
    prefix: '03',
    skills: [
      { name: 'Git',            slug: 'git' },
      { name: 'Android Studio', slug: 'androidstudio' },
      { name: 'Figma',          slug: 'figma' },
      { name: 'Canva',          localPng: 'canva.png' },
      { name: 'GitHub',         localPng: 'github.svg' },
      { name: 'MATLAB',         localPng: 'matlab.png' },
    ],
  },
]

const Initials = ({ name }: { name: string }) => {
  const text = name.replace(/[^A-Za-z ]/g, '').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  return (
    <span className="font-mono font-bold text-sm text-terminal-green/70 group-hover:text-terminal-green transition-colors duration-200">
      {text}
    </span>
  )
}

const SkillCard = ({ name, slug, localPng }: Skill) => (
  <div
    className="group flex flex-col items-center gap-2.5 p-4 rounded-xl border border-terminal-border bg-terminal-bg-card hover:border-terminal-green/50 hover:bg-terminal-bg transition-all duration-200 cursor-default"
    style={{ boxShadow: 'none' }}
    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 18px rgba(0,200,83,0.12)' }}
    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
  >
    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-terminal-bg border border-terminal-border/60 group-hover:border-terminal-green/30 transition-colors duration-200 overflow-hidden">
      {localPng ? (
        <img
          src={`/assets/${localPng}`}
          alt={name}
          className="w-6 h-6 object-contain"
          onError={e => {
            const img = e.currentTarget as HTMLImageElement
            img.style.display = 'none'
            const fallback = img.nextElementSibling as HTMLElement | null
            if (fallback) fallback.style.display = 'flex'
          }}
        />
      ) : slug ? (
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt={name}
          className="w-6 h-6 object-contain"
          onError={e => {
            const img = e.currentTarget as HTMLImageElement
            img.style.display = 'none'
            const fallback = img.nextElementSibling as HTMLElement | null
            if (fallback) fallback.style.display = 'flex'
          }}
        />
      ) : null}
      <span
        className="items-center justify-center w-full h-full"
        style={{ display: localPng || slug ? 'none' : 'flex' }}
      >
        <Initials name={name} />
      </span>
    </div>
    <span className="font-mono text-xs text-gray-400 group-hover:text-terminal-green transition-colors duration-200 text-center leading-tight">
      {name}
    </span>
  </div>
)

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-max md:pl-8">

        {/* Header */}
        <div className="reveal text-center mb-2">
          <h2 className="font-mono font-bold text-gray-100 text-3xl">Skills</h2>
        </div>
        <p className="reveal font-mono text-terminal-muted text-sm mb-10 text-center" style={{ transitionDelay: '60ms' }}>
          // tech stack &amp; tools
        </p>

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((cat, ci) => (
            <div
              key={cat.label}
              className="reveal"
              style={{ transitionDelay: `${ci * 80}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-terminal-green/60 tabular-nums">{cat.prefix}_</span>
                <span className="font-mono text-sm text-gray-400 tracking-widest uppercase">{cat.label}</span>
                <div className="flex-1 h-px bg-terminal-border" />
              </div>

              {/* Skill cards */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {cat.skills.map(skill => (
                  <SkillCard key={skill.slug ?? skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
