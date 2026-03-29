import MatrixRain from './MatrixRain'

// Social icon SVGs
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
)

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-terminal-bg"
    >
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Radial green glow at top-left */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,200,83,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 container-max w-full section-padding pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text content ── */}
          <div className="space-y-6 animate-fade-in">

            {/* Status line */}
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-terminal-green animate-pulse shadow-[0_0_8px_#00c853]" />
              <span className="font-mono text-terminal-green text-sm tracking-widest uppercase">
                ALL_SYSTEMS_OPERATIONAL
                <span className="animate-blink ml-0.5">|</span>
              </span>
            </div>

            {/* Location */}
            <p className="font-mono text-xs text-terminal-muted flex items-center gap-2">
              <span className="text-terminal-green-dim">└─</span>
              <span className="text-gray-500 uppercase tracking-wider">STATIONED_AT:</span>
              <span className="text-gray-400">📍 Pune, India</span>
              <span className="text-terminal-border">|</span>
              <span className="text-gray-500">UTC+5:30</span>
            </p>

            {/* Name */}
            <div>
              <h1 className="font-mono font-bold text-terminal-green leading-tight terminal-glow"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                Abhay Pawar
              </h1>
            </div>

            {/* Role */}
            <p className="font-mono text-gray-300 text-lg md:text-xl">
              {/* TODO: Update your role and company */}
              Software Engineer{' '}
              <span className="text-gray-400">@</span>{' '}
              <span className="text-gray-200 border-b border-dotted border-gray-500 pb-0.5">
                Your Company
              </span>
            </p>

            {/* Bio */}
            <p className="font-mono text-gray-400 text-sm leading-relaxed max-w-md">
              {/* TODO: Update your bio */}
              Just a laptop, Wi-Fi, and an unhealthy urge to ship stuff.
              <br />
              Turning coffee into code, and chaos into commits.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 bg-terminal-green text-terminal-bg font-mono text-sm font-semibold rounded hover:bg-terminal-green-glow transition-all duration-200 shadow-terminal"
              >
                <EmailIcon />
                Contact
              </a>
              <a
                href="#" // TODO: Add resume link
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-terminal-green text-terminal-green font-mono text-sm font-semibold rounded hover:bg-terminal-green/10 transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Resume
              </a>
              <button
                className="flex items-center gap-2 px-5 py-2.5 border border-terminal-border text-terminal-muted font-mono text-sm rounded hover:border-terminal-green hover:text-terminal-green transition-all duration-200"
                onClick={() => {/* TODO: open terminal easter egg */}}
              >
                <span className="text-terminal-green">{'>'}_</span>
                Launch Terminal
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              {[
                {
                  href: 'https://github.com/abhaygzb15',
                  icon: <GithubIcon />,
                  label: 'GitHub',
                },
                {
                  href: '#', // TODO: Add LinkedIn URL
                  icon: <LinkedInIcon />,
                  label: 'LinkedIn',
                },
                {
                  href: 'mailto:your@email.com', // TODO: Add email
                  icon: <EmailIcon />,
                  label: 'Email',
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 border border-terminal-border text-terminal-muted rounded hover:border-terminal-green hover:text-terminal-green transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Photo collage ── */}
          <div className="hidden lg:flex justify-center items-center relative h-[480px] animate-fade-in">
            {/* TODO: Replace these divs with your actual <img> tags */}

            {/* Back-left photo */}
            <div
              className="absolute w-48 h-64 rounded-xl bg-terminal-bg-card border border-terminal-border overflow-hidden shadow-terminal-lg"
              style={{ left: '2%', top: '8%', transform: 'rotate(-6deg)' }}
            >
              <div className="w-full h-full flex items-center justify-center text-terminal-muted text-xs font-mono">
                [ photo 1 ]
              </div>
            </div>

            {/* Front-center photo */}
            <div
              className="absolute w-56 h-72 rounded-xl bg-terminal-bg-card border border-terminal-green/30 overflow-hidden shadow-terminal-lg z-10"
              style={{ left: '28%', top: '4%', transform: 'rotate(1deg)' }}
            >
              <div className="w-full h-full flex items-center justify-center text-terminal-green text-xs font-mono">
                [ photo 2 ]
              </div>
            </div>

            {/* Back-right photo */}
            <div
              className="absolute w-44 h-60 rounded-xl bg-terminal-bg-card border border-terminal-border overflow-hidden shadow-terminal-lg"
              style={{ right: '2%', top: '14%', transform: 'rotate(5deg)' }}
            >
              <div className="w-full h-full flex items-center justify-center text-terminal-muted text-xs font-mono">
                [ photo 3 ]
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
