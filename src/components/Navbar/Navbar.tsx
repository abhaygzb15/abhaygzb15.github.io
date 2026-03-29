import { useState, useEffect } from 'react'

const navLinks = [
  { label: '/about',    href: '#about' },
  { label: '/skills',   href: '#skills' },
  { label: '/projects', href: '#projects' },
  { label: '/contact',  href: '#contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-terminal-bg/95 backdrop-blur-md border-b border-terminal-border shadow-terminal'
          : 'bg-terminal-bg border-b border-terminal-border'
      }`}
    >
      <div className="container-max flex items-center justify-between h-14 px-6 md:px-12 lg:px-24 mx-auto">

        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-1 font-mono text-terminal-green hover:text-terminal-green-glow transition-colors terminal-glow"
        >
          <span className="text-terminal-green">{'>'}</span>
          <span className="text-terminal-muted">_</span>
          <span className="ml-1 text-sm font-medium tracking-wide">abhaypawar.me</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-mono text-sm text-gray-400 hover:text-terminal-green transition-colors duration-200 hover:terminal-glow"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-terminal-green transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-terminal-green transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-terminal-green transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 border-b border-terminal-border' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 bg-terminal-bg">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={closeMenu}
                className="font-mono text-sm text-gray-400 hover:text-terminal-green transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
