const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-terminal-bg">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">

        {/* ── Header ── */}
        <div className="reveal">
          <h2 className="font-mono font-bold text-3xl md:text-4xl text-terminal-green tracking-widest mb-3">
            <span className="text-terminal-muted mr-3">$</span>
            GET IN TOUCH
          </h2>
          <p className="font-mono text-terminal-muted text-sm mb-12">
            <span className="mr-2">#</span>
            Feel free to reach out for collaborations, research, or just a friendly chat
          </p>
        </div>

        <a
          href="mailto:abhaygzb15@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 bg-terminal-green text-terminal-bg
                     font-mono font-bold text-sm tracking-widest rounded
                     hover:bg-terminal-green-glow transition-all duration-200"
        >
          SEND ME AN EMAIL
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </a>

      </div>
    </section>
  )
}

export default Contact
