// TODO: Implement About section
// - Photo / avatar on one side
// - Bio paragraphs on the other
// - Education, interests
// - Timeline of experience

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">About Me</h2>
        <div className="w-12 h-1 bg-primary-500 mb-10 rounded" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* TODO: Replace with actual photo */}
          <div className="w-64 h-64 rounded-2xl bg-primary-100 mx-auto md:mx-0 flex items-center justify-center text-primary-400 text-6xl font-bold">
            AP
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            {/* TODO: Fill in bio */}
            <p>
              Hello! I'm Abhay, a software engineer based in{' '}
              <span className="text-gray-900 font-medium">India</span>.
            </p>
            <p>
              {/* Add your story here */}
              I enjoy building clean, fast, and accessible applications that
              solve real problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
