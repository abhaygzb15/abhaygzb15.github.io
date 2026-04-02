import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-terminal-bg border-t border-terminal-border py-10 px-6 md:px-12 lg:px-24">
      <div className="container-max mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-mono text-terminal-green hover:text-terminal-green-glow transition-colors text-sm font-semibold"
            >
              {'>'}_abhaypawar.me
            </Link>
            <p className="font-mono text-terminal-muted text-xs mt-2 leading-relaxed">
              B.Tech IT &amp; Math Innovation<br />
              Cluster Innovation Centre<br />
              University of Delhi
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-mono text-gray-300 text-xs font-semibold uppercase tracking-widest mb-3">
              Navigate
            </p>
            <ul className="space-y-2">
              {[
                { label: 'About',        to: '/about' },
                { label: 'Skills',       to: '/skills' },
                { label: 'Projects',     to: '/projects' },
                { label: 'Internships',  to: '/internships' },
                { label: 'Achievements', to: '/achievements' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="font-mono text-xs text-terminal-muted hover:text-terminal-green transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Writeups */}
          <div>
            <p className="font-mono text-gray-300 text-xs font-semibold uppercase tracking-widest mb-3">
              Writeups
            </p>
            <ul className="space-y-2">
              {[
                { label: 'Blogs',        to: '/blogs' },
                { label: 'Publications', to: '/publications' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="font-mono text-xs text-terminal-muted hover:text-terminal-green transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-gray-300 text-xs font-semibold uppercase tracking-widest mb-3">
              Contact
            </p>
            <ul className="space-y-2">
              {[
                { label: 'Get in Touch',   to: '/contact',  isRoute: true },
                { label: 'GitHub',         href: 'https://github.com/abhaygzb15' },
                { label: 'LinkedIn',       href: 'https://linkedin.com/in/abhay-pawar/' },
                { label: 'Medium',         href: 'https://medium.com/@abhaygzb15' },
              ].map((item) => (
                <li key={item.label}>
                  {'to' in item && item.to ? (
                    <Link
                      to={item.to}
                      className="font-mono text-xs text-terminal-muted hover:text-terminal-green transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={'href' in item ? item.href : '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-terminal-muted hover:text-terminal-green transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-terminal-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-terminal-muted text-xs">
            © {year} Abhay Pawar — Designed &amp; Built by Abhay Pawar
          </p>
          <Link
            to="/"
            className="font-mono text-xs text-terminal-muted hover:text-terminal-green transition-colors duration-200 flex items-center gap-1"
          >
            back to top ↑
          </Link>
        </div>

      </div>
    </footer>
  )
}

export default Footer
