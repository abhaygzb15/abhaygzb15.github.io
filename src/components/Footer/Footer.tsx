const Footer = () => {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-terminal-border bg-terminal-bg/70 py-6 px-6 md:px-12 lg:px-24 backdrop-blur-sm">
      <div className="container-max mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-terminal-muted text-xs">
          © {year} Abhay Pawar — Designed &amp; Built by Abhay Pawar
        </p>
        <button
          onClick={scrollToTop}
          className="font-mono text-xs text-terminal-muted hover:text-terminal-green transition-colors duration-200 flex items-center gap-1"
        >
          back to top ↑
        </button>
      </div>
    </footer>
  )
}

export default Footer
