import MatrixRain from './MatrixRain'
import { useTheme } from '../../contexts/ThemeContext'

// ── Theme-specific background decorations ────────────────────────────

// Aurora: floating gradient orbs
const AuroraBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-25"
      style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)', filter: 'blur(80px)' }} />
    <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full opacity-20"
      style={{ background: 'radial-gradient(circle, #c084fc 0%, transparent 70%)', filter: 'blur(80px)' }} />
    <div className="absolute bottom-[-5%] left-[30%] w-[350px] h-[350px] rounded-full opacity-15"
      style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)', filter: 'blur(80px)' }} />
  </div>
)

// Neo: diagonal grid lines
const NeoBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.06]"
    style={{
      backgroundImage: `repeating-linear-gradient(
        45deg,
        #f97316 0px, #f97316 1px,
        transparent 1px, transparent 40px
      )`,
    }}
  />
)

// ─────────────────────────────────────────────────────────────────────

const Hero = () => {
  const { theme } = useTheme()

  // Per-theme heading treatment
  const nameClass = {
    terminal: 'text-terminal-green terminal-glow',
    aurora:   'text-white', // gradient handled via CSS
    neo:      'text-white font-black uppercase tracking-tight',
  }[theme]

  const roleStyle = {
    terminal: 'text-gray-300',
    aurora:   'text-purple-300',
    neo:      'text-terminal-green font-black uppercase tracking-widest text-2xl',
  }[theme]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-terminal-bg"
    >
      {/* ── Background effect — theme-specific ── */}
      {theme === 'terminal' && <MatrixRain />}
      {theme === 'aurora'   && <AuroraBackground />}
      {theme === 'neo'      && <NeoBackground />}

      {/* Radial glow (terminal only) */}
      {theme === 'terminal' && (
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,200,83,0.05) 0%, transparent 70%)' }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 w-full section-padding pt-24 md:pl-20 lg:pl-28">
        <div className="container-max grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text ── */}
          <div className="space-y-6 animate-fade-in">

            {/* Greeting label */}
            {theme === 'terminal' && (
              <p className="keep-mono text-terminal-muted text-sm">// hello_world.tsx</p>
            )}
            {theme === 'aurora' && (
              <p className="text-purple-400 text-sm font-medium tracking-widest uppercase">✦ Hello, I'm</p>
            )}
            {theme === 'neo' && (
              <p className="keep-mono text-terminal-green text-xs font-bold uppercase tracking-[0.3em]">&gt; INIT_PROFILE.EXE</p>
            )}

            {/* Name */}
            <h1
              className={`font-bold leading-tight ${nameClass}`}
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
            >
              Abhay Pawar
            </h1>

            {/* Role */}
            <p className={`text-lg md:text-xl ${roleStyle}`}>
              {theme === 'terminal' ? (
                <>
                  B.Tech IT &amp; Math Innovation{' '}
                  <span className="text-gray-400">@</span>{' '}
                  <span className="text-gray-200 border-b border-dotted border-gray-500 pb-0.5">
                    University of Delhi
                  </span>
                </>
              ) : (
                'B.Tech IT & Math Innovation · University of Delhi'
              )}
            </p>

            {/* Bio */}
            <div className={`text-sm leading-relaxed max-w-md space-y-1 ${
              theme === 'terminal' ? 'font-mono text-gray-400' : 'text-gray-400'
            }`}>
              {theme === 'terminal' ? (
                <>
                  <p><span className="text-terminal-green keep-mono">{'>'}</span> Cluster Innovation Centre · CGPA 9.64, 9.77, 9.45</p>
                  <p><span className="text-terminal-green keep-mono">{'>'}</span> Published researcher · Cryobiology (Elsevier) · GATE CSE Qualified</p>
                  <p><span className="text-terminal-green keep-mono">{'>'}</span> SIH Finalist × 2 · Tata InnoVent Top 31 / 2822 Teams</p>
                  <p><span className="text-terminal-green keep-mono">{'>'}</span> Delhi, India · open to research &amp; dev opportunities</p>
                </>
              ) : (
                <>
                  <p>📍 Cluster Innovation Centre · CGPA 9.64, 9.77, 9.45</p>
                  <p>📄 Published in Cryobiology (Elsevier) · GATE CSE Qualified</p>
                  <p>🏆 SIH Finalist × 2 · Tata InnoVent Top 31 / 2822 Teams</p>
                  <p>🌏 Delhi, India · open to research &amp; dev opportunities</p>
                </>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-2 max-w-xs">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-terminal-green text-terminal-bg font-mono font-semibold text-sm rounded hover:bg-terminal-green-glow transition-all duration-200 shadow-terminal keep-mono"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  Contact
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 border border-terminal-green text-terminal-green font-mono font-semibold text-sm rounded hover:bg-terminal-green/10 transition-all duration-200 keep-mono"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Resume
                </a>
              </div>

              {theme === 'terminal' && (
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-terminal-border text-terminal-muted font-mono text-sm rounded hover:border-terminal-green hover:text-terminal-green transition-all duration-200 keep-mono">
                  <span className="text-terminal-green font-bold keep-mono">{'>'}_</span>
                  Launch Terminal
                </button>
              )}
            </div>
          </div>

          {/* ── Right: Photo ── */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in">
            <div className="relative">
              {theme !== 'neo' && (
                <div className="absolute -inset-1 rounded-2xl bg-terminal-green/20 blur-md" />
              )}
              {theme === 'neo' && (
                <div className="absolute -inset-0 border-2 border-terminal-green translate-x-3 translate-y-3 z-0" />
              )}

              <div className={`relative w-80 h-[420px] overflow-hidden border border-terminal-green/30 shadow-terminal ${
                theme === 'neo' ? 'rounded-none z-10' : 'rounded-2xl'
              }`}>
                <img
                  src="/assets/picture.png"
                  alt="Abhay Pawar"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.classList.add('bg-terminal-bg-card', 'flex', 'flex-col', 'items-center', 'justify-center', 'gap-2')
                      parent.innerHTML = `<span style="color:var(--accent);font-size:1.5rem;font-family:monospace">[ AP ]</span>`
                    }
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
