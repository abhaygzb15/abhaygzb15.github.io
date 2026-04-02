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

        {/* ── Connect With Me ── */}
        <div className="border border-terminal-border hover:border-terminal-green/50 rounded-lg
                        bg-terminal-bg-card p-8 mb-10 transition-all duration-300">
          <p className="font-mono text-terminal-green font-semibold tracking-widest mb-6">
            Connect With Me
          </p>
          <div className="flex justify-center gap-12">

            {/* GitHub */}
            <a href="https://github.com/abhaygzb15" target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-terminal-green/70 hover:text-terminal-green transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
              <span className="font-mono text-xs tracking-widest">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/abhay-pawar/" target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-terminal-green/70 hover:text-terminal-green transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
              </svg>
              <span className="font-mono text-xs tracking-widest">LinkedIn</span>
            </a>

            {/* Medium */}
            <a href="https://medium.com/@abhaygzb15" target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-terminal-green/70 hover:text-terminal-green transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
              <span className="font-mono text-xs tracking-widest">Medium</span>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-terminal-green/70 hover:text-terminal-green transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
              </svg>
              <span className="font-mono text-xs tracking-widest">Instagram</span>
            </a>
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
