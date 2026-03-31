import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const hashLinks = [
  { label: '/about',    href: '#about' },
  { label: '/skills',   href: '#skills' },
  { label: '/projects', href: '#projects' },
  {
    label: '/experience',
    submenu: [
      { label: 'Internships',  href: '#internships' },
      { label: 'Achievements', href: '#achievements' },
    ],
  },
  {
    label: '/writeups',
    submenu: [
      { label: 'Blogs',        href: '/blogs' },
      { label: 'Publications', href: '/publications' },
    ],
  },
]

const Navbar = () => {
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [scrolled,     setScrolled]     = useState(false)
  const [hoverMenu,    setHoverMenu]    = useState<string | null>(null)
  const [mobileOpen,   setMobileOpen]   = useState<string | null>(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeAll = () => { setMenuOpen(false); setMobileOpen(null) }

  // Determine if a submenu link is a route (/blogs) or a hash (#skills)
  const isRoute = (href: string) => href.startsWith('/')

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
        <Link
          to="/"
          className="flex items-center gap-1 font-mono text-terminal-green hover:text-terminal-green-glow transition-colors terminal-glow"
        >
          <span className="text-terminal-green">{'>'}</span>
          <span className="text-terminal-muted">_</span>
          <span className="ml-1 text-sm font-medium tracking-wide">abhaypawar.me</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {hashLinks.map(({ label, href, submenu }) => (
            <li
              key={label}
              className="relative"
              onMouseEnter={() => submenu && setHoverMenu(label)}
              onMouseLeave={() => submenu && setHoverMenu(null)}
            >
              {!submenu ? (
                isHome ? (
                  <a
                    href={href}
                    className="font-mono text-sm text-gray-400 hover:text-terminal-green transition-colors duration-200"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    to={`/${href!.replace('#', '')}`}
                    className="font-mono text-sm text-gray-400 hover:text-terminal-green transition-colors duration-200"
                  >
                    {label}
                  </Link>
                )
              ) : (
                <>
                  <button className="font-mono text-sm text-gray-400 hover:text-terminal-green transition-colors duration-200 cursor-default">
                    {label}
                  </button>

                  {/* Hover dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-0 w-44 bg-terminal-bg border border-terminal-border rounded shadow-lg transition-all duration-200 ${
                      hoverMenu === label ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    {submenu.map((item) =>
                      isRoute(item.href) ? (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={closeAll}
                          className="block px-4 py-2 text-sm font-mono text-gray-400 hover:text-terminal-green hover:bg-terminal-bg-card transition-colors first:rounded-t last:rounded-b"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={closeAll}
                          className="block px-4 py-2 text-sm font-mono text-gray-400 hover:text-terminal-green hover:bg-terminal-bg-card transition-colors first:rounded-t last:rounded-b"
                        >
                          {item.label}
                        </a>
                      )
                    )}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-terminal-green transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-terminal-green transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-terminal-green transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[28rem] border-b border-terminal-border' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 bg-terminal-bg">
          {hashLinks.map(({ label, href, submenu }) => (
            <div key={label}>
              <div className="flex items-center justify-between">
                {!submenu ? (
                  isHome ? (
                    <a
                      href={href}
                      onClick={closeAll}
                      className="font-mono text-sm text-gray-400 hover:text-terminal-green transition-colors flex-1"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      to="/"
                      onClick={closeAll}
                      className="font-mono text-sm text-gray-400 hover:text-terminal-green transition-colors flex-1"
                    >
                      {label}
                    </Link>
                  )
                ) : (
                  <span className="font-mono text-sm text-gray-400 flex-1">{label}</span>
                )}
                {submenu && (
                  <button
                    onClick={() => setMobileOpen(mobileOpen === label ? null : label)}
                    className="text-terminal-green text-lg ml-2"
                  >
                    {mobileOpen === label ? '−' : '+'}
                  </button>
                )}
              </div>

              {submenu && mobileOpen === label && (
                <div className="mt-2 ml-4 flex flex-col gap-2 border-l border-terminal-border pl-4">
                  {submenu.map((item) =>
                    isRoute(item.href) ? (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={closeAll}
                        className="font-mono text-xs text-gray-400 hover:text-terminal-green transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={closeAll}
                        className="font-mono text-xs text-gray-400 hover:text-terminal-green transition-colors"
                      >
                        {item.label}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
