// TODO: Implement Contact section
// - Email CTA
// - Contact form (optional: Formspree / EmailJS integration)
// - Social links: GitHub, LinkedIn, Twitter/X

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-max text-center max-w-2xl mx-auto">
        <p className="font-mono text-primary-600 mb-2 text-sm">What's next?</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {/* TODO: Customize this message */}
          I'm currently open to new opportunities. Whether you have a question,
          a project idea, or just want to say hi — my inbox is always open!
        </p>
        <a
          href="mailto:your@email.com" // TODO: Replace with your email
          className="inline-block px-8 py-4 rounded-lg border-2 border-primary-600 text-primary-600 font-medium hover:bg-primary-600 hover:text-white transition-colors text-lg"
        >
          Say Hello
        </a>

        {/* TODO: Add social links */}
        <div className="flex justify-center gap-6 mt-12 text-gray-400">
          <a
            href="https://github.com/abhaygzb15"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors text-sm font-medium"
          >
            GitHub
          </a>
          <a
            href="#" // TODO: Add LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors text-sm font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
