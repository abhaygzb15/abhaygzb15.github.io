import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme, THEMES } from '../../contexts/ThemeContext'

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
    { label: '/contact',  path: '/contact' },

]

const isDropdown = (item: NavItem): item is NavDropdown => 'children' in item

const Navbar = () => {
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [hoverMenu,     setHoverMenu]     = useState<string | null>(null)
  const [mobileOpen,    setMobileOpen]    = useState<string | null>(null)
  const [scrolled,      setScrolled]      = useState(false)
  const [themePicker,   setThemePicker]   = useState(false)
  const themePickerRef                    = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const { theme, setTheme } = useTheme()

  // Close theme picker when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (themePickerRef.current && !themePickerRef.current.contains(e.target as Node)) {
        setThemePicker(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

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
                  <Link
                    to={item.path}
                    className={linkClass(item.path)}
                    onClick={() => item.path === '/' && window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
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

        {/* ── Theme picker ── */}
        <div ref={themePickerRef} className="hidden md:block relative ml-4">
          <button
            onClick={() => setThemePicker((p) => !p)}
            title="Switch theme"
            className={`w-8 h-8 flex items-center justify-center rounded border transition-all duration-200 ${
              themePicker
                ? 'border-terminal-green text-terminal-green bg-terminal-green/10'
                : 'border-terminal-border text-terminal-muted hover:border-terminal-green hover:text-terminal-green'
            }`}
          >
            {/* Palette icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
            </svg>
          </button>

          {/* Dropdown */}
          {themePicker && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-terminal-bg border border-terminal-border rounded-lg shadow-terminal z-50 overflow-hidden">
              <p className="font-mono text-[10px] text-terminal-muted uppercase tracking-widest px-4 pt-3 pb-2">
                Choose Theme
              </p>
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => { setTheme(t.id); setThemePicker(false) }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-150 ${
                    theme === t.id
                      ? 'bg-terminal-green/10 border-l-2 border-terminal-green'
                      : 'hover:bg-terminal-bg-card border-l-2 border-transparent'
                  }`}
                >
                  {/* Swatch */}
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: t.preview }}
                  />
                  <div className="min-w-0">
                    <p className={`font-mono text-sm font-semibold ${theme === t.id ? 'text-terminal-green' : 'text-gray-200'}`}>
                      {t.name}
                    </p>
                    <p className="font-mono text-[10px] text-terminal-muted">{t.desc}</p>
                  </div>
                  {theme === t.id && (
                    <span className="ml-auto text-terminal-green text-xs">✓</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

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
                    onClick={() => { closeAll(); item.path === '/' && window.scrollTo({ top: 0, behavior: 'smooth' }) }}
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
