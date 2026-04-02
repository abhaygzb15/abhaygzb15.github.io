import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

type NavLeaf     = { label: string; path: string }
type NavDropdown = { label: string; children: NavLeaf[] }
type NavItem     = NavLeaf | NavDropdown

const navItems: NavItem[] = [
  { label: '/about',    path: '/' },
  { label: '/skills',   path: '/skills' },
  { label: '/projects', path: '/projects' },
  {
    label: '/experience',
    children: [
      { label: 'Internships',  path: '/internships' },
      { label: 'Achievements', path: '/achievements' },
    ],
  },
  {
    label: '/writeups',
    children: [
      { label: 'Blogs',        path: '/blogs' },
      { label: 'Publications', path: '/publications' },
    ],
  },
]

const isDropdown = (item: NavItem): item is NavDropdown => 'children' in item

const Navbar = () => {
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [hoverMenu,  setHoverMenu]  = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState<string | null>(null)
  const [scrolled,   setScrolled]   = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on navigation
  useEffect(() => {
    setMenuOpen(false)
    setMobileOpen(null)
  }, [location.pathname])

  const closeAll = () => { setMenuOpen(false); setMobileOpen(null) }

  const isActive = (path: string) => location.pathname === path

  const linkClass = (path?: string) =>
    `font-mono text-sm transition-colors duration-200 ${
      path && isActive(path) ? 'text-terminal-green' : 'text-gray-400 hover:text-terminal-green'
    }`

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
          <span>{'>'}</span>
          <span className="text-terminal-muted">_</span>
          <span className="ml-1 text-sm font-medium tracking-wide">abhaypawar.me</span>
        </Link>

        {/* ── Desktop nav ── */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            // Simple link
            if (!isDropdown(item)) {
              return (
                <li key={item.label}>
                  <Link to={item.path} className={linkClass(item.path)}>
                    {item.label}
                  </Link>
                </li>
              )
            }

            // Dropdown
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setHoverMenu(item.label)}
                onMouseLeave={() => setHoverMenu(null)}
              >
                <button className="font-mono text-sm text-gray-400 hover:text-terminal-green transition-colors duration-200 cursor-default">
                  {item.label}
                </button>

                <div
                  className={`absolute top-full left-0 mt-0 w-44 bg-terminal-bg border border-terminal-border
                               rounded shadow-lg transition-all duration-200 ${
                                 hoverMenu === item.label
                                   ? 'opacity-100 pointer-events-auto'
                                   : 'opacity-0 pointer-events-none'
                               }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={closeAll}
                      className={`block px-4 py-2 text-sm font-mono hover:bg-terminal-bg-card
                                  transition-colors first:rounded-t last:rounded-b ${
                                    isActive(child.path)
                                      ? 'text-terminal-green'
                                      : 'text-gray-400 hover:text-terminal-green'
                                  }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </li>
            )
          })}
        </ul>

        {/* Hamburger */}
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

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[32rem] border-b border-terminal-border' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 bg-terminal-bg">
          {navItems.map((item) => {
            if (!isDropdown(item)) {
              return (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    onClick={closeAll}
                    className={linkClass(item.path)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            }

            return (
              <li key={item.label}>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-gray-400">{item.label}</span>
                  <button
                    onClick={() => setMobileOpen(mobileOpen === item.label ? null : item.label)}
                    className="text-terminal-green text-lg ml-2"
                  >
                    {mobileOpen === item.label ? '−' : '+'}
                  </button>
                </div>
                {mobileOpen === item.label && (
                  <div className="mt-2 ml-4 flex flex-col gap-2 border-l border-terminal-border pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={closeAll}
                        className={`font-mono text-xs transition-colors ${
                          isActive(child.path)
                            ? 'text-terminal-green'
                            : 'text-gray-400 hover:text-terminal-green'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
