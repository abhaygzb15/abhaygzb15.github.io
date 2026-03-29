// TODO: Implement Hero section
// - Full-height landing section
// - Name, title/role, tagline
// - CTA buttons: "View Projects" + "Download Resume"
// - Animated typing effect or gradient text
// - Social links (GitHub, LinkedIn, Twitter/X)
// - Scroll-down indicator

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center section-padding pt-16"
    >
      <div className="container-max w-full">
        <p className="font-mono text-primary-600 mb-4 text-sm animate-fade-in">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 animate-slide-up">
          Abhay Pawar
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mb-6 animate-slide-up">
          {/* TODO: Add your role/tagline */}
          I build things for the web.
        </h2>
        <p className="max-w-xl text-gray-600 text-lg mb-8 animate-slide-up">
          {/* TODO: Short bio / intro sentence */}
          A software engineer passionate about crafting performant and elegant
          digital experiences.
        </p>
        <div className="flex gap-4 animate-slide-up">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-primary-600 text-primary-600 font-medium hover:bg-primary-50 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
