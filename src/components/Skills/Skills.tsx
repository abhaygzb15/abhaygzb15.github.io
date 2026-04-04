import { IconCloud } from '../magicui/icon-cloud'

// Slugs from simpleicons.org matching Abhay's tech stack
const slugs = [
  'python',
  'flutter',
  'kotlin',
  'dart',
  'firebase',
  'android',
  'androidstudio',
  'mysql',
  'git',
  'github',
  'figma',
  'canva',
  'visualstudiocode',
  'tensorflow',
  'streamlit',
  'numpy',
  'pandas',
  'jupyter',
  'react',
  'typescript',
  'dialogflow',
  'powerbi',
]

const WrenchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-terminal-green">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M11.42 15.17L17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.655m5.896-3.42c.21-.328.31-.686.29-1.043a3.86 3.86 0 0 0-3.53-3.75 3.9 3.9 0 0 0-2.6.79L6.75 6.75" />
  </svg>
)

const Skills = () => {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`)

  return (
    <section id="skills" className="section-padding bg-terminal-bg">
      <div className="container-max md:pl-8">

        {/* Header */}
        <div className="reveal flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <WrenchIcon />
            <h2 className="font-mono font-bold text-gray-100 text-3xl">Skills</h2>
          </div>
        </div>

        {/* Icon cloud */}
        <div
          className="reveal relative w-full h-[400px] md:h-[480px] rounded-xl border border-terminal-border overflow-hidden bg-terminal-bg-card"
          style={{ transitionDelay: '100ms' }}
        >
          <IconCloud images={images} />
        </div>

      </div>
    </section>
  )
}

export default Skills
