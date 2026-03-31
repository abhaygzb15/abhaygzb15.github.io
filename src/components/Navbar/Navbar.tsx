import { useState, useEffect } from 'react'

const navLinks = [
  { label: '/about', href: 'about' },
  { label: '/skills', href: 'skills' },
  { label: '/projects', href: 'projects' },
  { 
    label: '/experience', 
    href: 'experience',
    submenu: [
      { label: 'Internships', href: 'internships' },
      { label: 'Achievements', href: 'achievements' }
    ]
  },
  { 
    label: '/writeups',
    href: 'writeups',
    submenu: [
      { label: 'Blogs', href: 'blogs' },
      { label: 'Publications', href: 'publications' }
    ]
  },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoverSubmenu, setHoverSubmenu] = useState<string | null>(null)
  const [clickSubmenu, setClickSubmenu] = useState<string | null>(null)

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
          {navLinks.map(({ label, href, submenu }) => (
            <li 
              key={label}
              className="relative"
              onMouseEnter={() => submenu && label === '/experience' && setHoverSubmenu(label)}
              onMouseLeave={() => submenu && label === '/experience' && setHoverSubmenu(null)}
            >
              {!submenu ? (
                // Simple link for items without submenu
                <a
                  href={href}
                  className="font-mono text-sm text-gray-400 hover:text-terminal-green transition-colors duration-200 hover:terminal-glow"
                >
                  {label}
                </a>
              ) : label === '/experience' ? (
                // Experience with hover dropdown
                <>
                  <button
                    className="font-mono text-sm text-gray-400 hover:text-terminal-green transition-colors duration-200 hover:terminal-glow"
                  >
                    {label}
                  </button>
                  <div 
                    className={`absolute top-full left-0 mt-0 w-48 bg-terminal-bg border border-terminal-border rounded shadow-lg transition-all duration-200 pointer-events-none ${
                      hoverSubmenu === label ? 'opacity-100 pointer-events-auto' : 'opacity-0'
                    }`}
                  >
                    {submenu.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-terminal-green hover:bg-terminal-bg/50 transition-colors first:rounded-t last:rounded-b"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                // Blogs with click dropdown
                <button
                  onClick={() => setClickSubmenu(clickSubmenu === label ? null : label)}
                  className="font-mono text-sm text-gray-400 hover:text-terminal-green transition-colors duration-200 hover:terminal-glow"
                >
                  {label}
                </button>
              )}

              {/* Click dropdown for Blogs */}
              {submenu && label === '/blogs' && clickSubmenu === label && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-terminal-bg border border-terminal-border rounded shadow-lg">
                  {submenu.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-400 hover:text-terminal-green hover:bg-terminal-bg/50 transition-colors first:rounded-t last:rounded-b"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
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
          menuOpen ? 'max-h-96 border-b border-terminal-border' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 bg-terminal-bg">
          {navLinks.map(({ label, href, submenu }) => (
            <div key={label}>
              <div className="flex items-center justify-between">
                <a
                  href={href}
                  onClick={closeMenu}
                  className="font-mono text-sm text-gray-400 hover:text-terminal-green transition-colors flex-1"
                >
                  {label}
                </a>
                {submenu && (
                  <button
                    onClick={() => setClickSubmenu(clickSubmenu === label ? null : label)}
                    className="text-terminal-green text-lg ml-2"
                  >
                    {clickSubmenu === label ? '−' : '+'}
                  </button>
                )}
              </div>

              {/* Mobile submenu */}
              {submenu && clickSubmenu === label && (
                <div className="mt-2 ml-4 flex flex-col gap-2 border-l border-terminal-border pl-4">
                  {submenu.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="font-mono text-xs text-gray-400 hover:text-terminal-green transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
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
