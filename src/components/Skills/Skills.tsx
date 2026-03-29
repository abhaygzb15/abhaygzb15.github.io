// TODO: Implement Skills section
// - Group skills by category: Languages, Frameworks, Tools, Cloud
// - Skill cards / tags with icons (react-icons or SVG)
// - Proficiency indicators (optional)

const skillCategories = [
  {
    title: 'Languages',
    // TODO: Add your languages
    skills: ['TypeScript', 'JavaScript', 'Python', 'Go'],
  },
  {
    title: 'Frameworks & Libraries',
    // TODO: Add your frameworks
    skills: ['React', 'Node.js', 'Express', 'Next.js'],
  },
  {
    title: 'Tools & Platforms',
    // TODO: Add your tools
    skills: ['Git', 'Docker', 'GitHub Actions', 'Linux'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Skills</h2>
        <div className="w-12 h-1 bg-primary-500 mb-10 rounded" />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-primary-50 text-primary-700 border border-primary-200"
                  >
                    {skill}
                  </span>
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
