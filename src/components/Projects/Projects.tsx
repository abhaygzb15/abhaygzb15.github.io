interface Project {
  title: string
  status: 'Active' | 'Archived' | 'In Development'
  description: string
  tech: string[]
  github: string
  demo?: string
}

// TODO: Replace with your actual projects
const projects: Project[] = [
  {
    title: 'Project Alpha',
    status: 'In Development',
    description:
      'A short but impactful description of what this project does, the problem it solves, and any measurable outcome — e.g. reduced processing time by 40% or improved accuracy to 95%.',
    tech: ['Python', 'Flutter', 'Firebase', 'ML'],
    github: '#', // TODO: Add GitHub URL
    demo: '#',   // TODO: Add live demo URL or remove this field
  },
  {
    title: 'Project Beta',
    status: 'Archived',
    description:
      'Describe the core idea, the tech stack in action, and the impact. Keep it concise but detailed enough to show scope — what inputs, what outputs, what problem did it solve?',
    tech: ['Kotlin', 'Firebase', 'REST API', 'Android Studio'],
    github: '#', // TODO: Add GitHub URL
  },
]

// Status badge color
const statusColor: Record<Project['status'], string> = {
  'Active':         'text-terminal-green',
  'Archived':       'text-yellow-400',
  'In Development': 'text-cyan-400',
}

// Mock app screenshot placeholder (replace outer div with <img> when you have screenshots)
const MockScreenshot = ({ title }: { title: string }) => (
  <div className="w-full h-44 bg-terminal-bg rounded-lg overflow-hidden border border-terminal-border/50">
    {/* Title bar */}
    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-terminal-border/40 bg-terminal-bg-card">
      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
      <span className="w-2.5 h-2.5 rounded-full bg-terminal-green/60" />
      <span className="font-mono text-xs text-terminal-muted ml-2 truncate">{title}.exe</span>
    </div>
    {/* Fake UI body */}
    <div className="flex gap-0 h-full">
      {/* Sidebar */}
      <div className="w-1/3 border-r border-terminal-border/30 p-2 space-y-1.5">
        {[65, 85, 50, 75, 55, 40].map((w, i) => (
          <div
            key={i}
            className="h-1.5 rounded bg-terminal-border/50"
            style={{ width: `${w}%` }}
          />
        ))}
      </div>
      {/* Main panel */}
      <div className="flex-1 p-2 space-y-2">
        <div className="h-5 rounded bg-terminal-green/15 border border-terminal-green/25" />
        <div className="space-y-1">
          {[100, 80, 90, 60, 75].map((w, i) => (
            <div
              key={i}
              className="h-1.5 rounded bg-terminal-border/35"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <div className="h-5 w-16 rounded bg-terminal-green/20 border border-terminal-green/30" />
          <div className="h-5 w-12 rounded bg-terminal-border/30" />
        </div>
      </div>
    </div>
  </div>
)

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const Projects = () => {
  return (
    <section id="projects" className="relative section-padding bg-terminal-bg overflow-hidden">

      {/* Decorative glow blobs */}
      <div
        className="absolute top-16 left-8 w-40 h-40 rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(0,200,83,0.18) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-20 right-12 w-32 h-32 rounded-full pointer-events-none opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(0,200,83,0.15) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 container-max md:pl-8">

        {/* Section title */}
        <div className="text-center mb-14">
          <p className="font-mono text-terminal-muted text-sm mb-2 tracking-widest">// case_studies</p>
          <h2
            className="font-mono font-bold text-terminal-green terminal-glow"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Featured Projects
          </h2>
        </div>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col lg:flex-row gap-0 bg-terminal-bg-card border border-terminal-border rounded-2xl overflow-hidden hover:border-terminal-green/40 transition-colors duration-300"
            >
              {/* ── Left: screenshot panel ── */}
              <div className="lg:w-[38%] p-5 border-b lg:border-b-0 lg:border-r border-terminal-border/50 flex flex-col justify-between gap-4">
                {/* Status badge */}
                <p className="font-mono text-xs">
                  <span className="text-gray-500">PROJECT LOG </span>
                  <span className="text-gray-400">STATUS: </span>
                  <span className={`font-semibold ${statusColor[project.status]}`}>
                    {project.status}
                  </span>
                </p>

                {/* Screenshot / replace MockScreenshot with <img> */}
                <MockScreenshot title={project.title} />
                {/*
                  TODO: Replace MockScreenshot above with:
                  <img
                    src="/screenshots/project-alpha.png"
                    alt={project.title}
                    className="w-full h-44 object-cover rounded-lg border border-terminal-border/50"
                  />
                */}

                {/* Integrity line */}
                <p className="font-mono text-xs text-terminal-green/70">
                  [FILE_INTEGRITY: OK]
                </p>
              </div>

              {/* ── Right: case study content ── */}
              <div className="lg:w-[62%] p-6 flex flex-col justify-center gap-5">

                {/* Title */}
                <h3 className="font-mono font-bold text-terminal-green text-xl md:text-2xl">
                  Case Study:{' '}
                  <span className="text-gray-100">{project.title}</span>
                </h3>

                {/* Abstract */}
                <div className="border-l-2 border-terminal-green pl-4">
                  <p className="font-mono text-gray-300 text-sm leading-relaxed">
                    <span className="text-terminal-green">{'>'}</span> Abstract:{' '}
                    {project.description}
                  </p>
                </div>

                {/* Methodology */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest shrink-0">
                    METHODOLOGY:
                  </span>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 border border-terminal-border text-gray-300 font-mono text-xs rounded hover:border-terminal-green/50 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Access */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest shrink-0">
                    ACCESS:
                  </span>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-1.5 border border-terminal-border text-gray-300 font-mono text-xs rounded hover:border-terminal-green hover:text-terminal-green transition-colors"
                    >
                      {'>'} Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-1.5 border border-terminal-border text-gray-300 font-mono text-xs rounded hover:border-terminal-green hover:text-terminal-green transition-colors"
                  >
                    <GithubIcon />
                    {'>'} GitHub
                  </a>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/abhaygzb15"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-terminal-muted hover:text-terminal-green transition-colors"
          >
            <span className="text-terminal-green">{'>'}_</span>
            view all on GitHub
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects
