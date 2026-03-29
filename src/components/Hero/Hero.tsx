import MatrixRain from './MatrixRain'

// Place your photo as public/picture.png — it will be served at /picture.png

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-terminal-bg"
    >
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Radial green glow */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,200,83,0.05) 0%, transparent 70%)' }}
      />

      {/* Offset content right on md+ to clear the sidebar */}
      <div className="relative z-10 w-full section-padding pt-24 md:pl-20 lg:pl-28">
        <div className="container-max grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text ── */}
          <div className="space-y-6 animate-fade-in">

            {/* Name */}
            <h1
              className="font-mono font-bold text-terminal-green leading-tight terminal-glow"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
            >
              Abhay Pawar
            </h1>

            {/* Role */}
            <p className="font-mono text-gray-300 text-lg md:text-xl">
              {/* TODO: Update role & company */}
              Software Engineer{' '}
              <span className="text-gray-400">@</span>{' '}
              <span className="text-gray-200 border-b border-dotted border-gray-500 pb-0.5">
                Your Company
              </span>
            </p>

            {/* Bio — 4-5 lines */}
            <div className="font-mono text-gray-400 text-sm leading-relaxed max-w-md space-y-1">
              {/* TODO: Update with your own bio */}
              <p>{'>'} passionate about building scalable systems</p>
              <p>{'>'} obsessed with clean code & developer experience</p>
              <p>{'>'} open source contributor &amp; lifelong learner</p>
              <p>{'>'} coffee → code → repeat</p>
            </div>

            {/* CTA Buttons — row 1: Contact + Resume, row 2: Launch Terminal */}
            <div className="flex flex-col gap-3 pt-2 max-w-xs">

              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-terminal-green text-terminal-bg font-mono text-sm font-semibold rounded hover:bg-terminal-green-glow transition-all duration-200 shadow-terminal"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  Contact
                </a>

                <a
                  href="#" // TODO: Add your resume PDF link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 border border-terminal-green text-terminal-green font-mono text-sm font-semibold rounded hover:bg-terminal-green/10 transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Resume
                </a>
              </div>

              {/* Row 2 — Launch Terminal full width */}
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-terminal-border text-terminal-muted font-mono text-sm rounded hover:border-terminal-green hover:text-terminal-green transition-all duration-200">
                <span className="text-terminal-green font-bold">{'>'}_</span>
                Launch Terminal
              </button>

            </div>
          </div>

          {/* ── Right: Single photo ── */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-terminal-green/20 blur-md" />

              {/* Photo — place picture.png in public/ folder */}
              <div className="relative w-80 h-[420px] rounded-2xl overflow-hidden border border-terminal-green/30 shadow-terminal-lg">
                <img
                  src="/picture.png"
                  alt="Abhay Pawar"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Show placeholder if image not found
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.classList.add('bg-terminal-bg-card', 'flex', 'flex-col', 'items-center', 'justify-center', 'gap-2')
                      parent.innerHTML = `
                        <span style="color:#00c853;font-size:1.5rem;font-family:monospace">[ AP ]</span>
                        <span style="color:#4a7a4a;font-size:0.75rem;font-family:monospace">place picture.png in</span>
                        <span style="color:#00c853;font-size:0.75rem;font-family:monospace">public/</span>
                      `
                    }
                  }}
                />
              </div>

              {/* Label */}
              <p className="mt-3 text-center font-mono text-xs text-terminal-muted">
                <span className="text-terminal-green">{'>'}_</span> picture.png
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
