const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-terminal-bg">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">

        {/* ── Header ── */}
        <h2 className="font-mono font-bold text-3xl md:text-4xl text-terminal-green tracking-widest mb-3">
          <span className="text-terminal-muted mr-3">$</span>
          GET IN TOUCH
        </h2>
        <p className="font-mono text-terminal-muted text-sm mb-12">
          <span className="mr-2">#</span>
          Feel free to reach out for collaborations, research, or just a friendly chat
        </p>

        {/* ── 3 contact boxes ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">

          {/* Email */}
          <a
            href="mailto:abhaygzb15@gmail.com"
            className="group border border-terminal-border hover:border-terminal-green rounded-lg p-8
                       flex flex-col items-center gap-3 transition-all duration-300
                       hover:shadow-terminal bg-terminal-bg-card"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
              className="w-7 h-7 text-terminal-green">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <p className="font-mono text-sm font-semibold text-terminal-green tracking-widest">Email</p>
            <p className="font-mono text-xs text-terminal-green/80 group-hover:text-terminal-green
                          transition-colors underline underline-offset-2">
              abhaygzb15@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+919810993024"
            className="group border border-terminal-border hover:border-terminal-green rounded-lg p-8
                       flex flex-col items-center gap-3 transition-all duration-300
                       hover:shadow-terminal bg-terminal-bg-card"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
              className="w-7 h-7 text-terminal-green">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <p className="font-mono text-sm font-semibold text-terminal-green tracking-widest">Phone</p>
            <p className="font-mono text-xs text-terminal-green/80 group-hover:text-terminal-green
                          transition-colors underline underline-offset-2">
              +91-9810993024
            </p>
          </a>

          {/* Location */}
          <div className="border border-terminal-border rounded-lg p-8
                          flex flex-col items-center gap-3 bg-terminal-bg-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
              className="w-7 h-7 text-terminal-green">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <p className="font-mono text-sm font-semibold text-terminal-green tracking-widest">Location</p>
            <p className="font-mono text-xs text-gray-400">New Delhi, India</p>
          </div>
        </div>

  

        {/* ── CTA ── */}
        <p className="font-mono text-terminal-muted text-sm mb-5">
          Driven to build scalable software with growing startups and tech companies — creating impact at scale, in India and beyond.
        </p>
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
