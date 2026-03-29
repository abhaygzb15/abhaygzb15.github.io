// TODO: Implement Projects section
// - Featured project cards with: title, description, tech stack, GitHub link, live demo
// - "View All on GitHub" button at bottom
// - Optional: filter by tech tag

interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

// TODO: Replace with your actual projects
const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A short description of what this project does and the problem it solves.',
    tech: ['React', 'TypeScript', 'Node.js'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Project Two',
    description: 'A short description of what this project does and the problem it solves.',
    tech: ['Python', 'FastAPI', 'PostgreSQL'],
    github: '#',
  },
  {
    title: 'Project Three',
    description: 'A short description of what this project does and the problem it solves.',
    tech: ['Go', 'Docker', 'Redis'],
    github: '#',
    demo: '#',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-max">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Projects</h2>
        <div className="w-12 h-1 bg-primary-500 mb-10 rounded" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
