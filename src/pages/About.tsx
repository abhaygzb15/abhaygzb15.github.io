import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-terminal-bg text-gray-100">
      <Navbar />
      <main className="pt-24 pb-20 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">

        <p className="font-mono text-terminal-green text-sm mb-2">// about_me</p>
        <h1 className="font-mono font-bold text-4xl md:text-5xl text-gray-100 leading-tight mb-10">
          About<span className="text-terminal-green">.</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: bio */}
          <div className="space-y-5 font-mono text-sm text-gray-400 leading-relaxed">
            <p>
              I'm <span className="text-gray-100 font-semibold">Abhay Pawar</span>, a final-year
              B.Tech student in <span className="text-terminal-green">Information Technology &amp;
              Mathematical Innovation</span> at the Cluster Innovation Centre, University of Delhi
              (CGPA 9.64, 9.77, 9.45).
            </p>
            <p>
              My work spans AI/ML research, mobile app development, and data-driven systems.
              I've published in <span className="text-gray-200">Cryobiology (Elsevier)</span> and
              qualified GATE CSE in 2025 &amp; 2026.
            </p>
            <p>
              On the competitive side, I've reached the finals of Smart India Hackathon twice and
              placed in the Top 31 / 2822 teams at Tata Technologies InnoVent.
            </p>
            <p>
              Driven to build scalable software with growing startups and tech companies —
              creating impact at scale, in India and beyond.
            </p>
          </div>

          {/* Right: quick facts */}
          <div className="space-y-4">
            {[
              { label: 'Location',  value: 'New Delhi, India' },
              { label: 'Email',     value: 'abhaygzb15@gmail.com',          href: 'mailto:abhaygzb15@gmail.com' },
              { label: 'Phone',     value: '+91 9810993024',                 href: 'tel:+919810993024' },
              { label: 'GitHub',    value: 'github.com/abhaygzb15',         href: 'https://github.com/abhaygzb15' },
              { label: 'LinkedIn',  value: 'linkedin.com/in/abhay-pawar/',  href: 'https://linkedin.com/in/abhay-pawar/' },
              { label: 'Degree',    value: 'B.Tech IT & Math Innovation · 2022–present' },
              { label: 'CGPA',      value: '9.64 → 9.77 → 9.45' },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex gap-4 border-b border-terminal-border/40 pb-3">
                <span className="font-mono text-xs text-terminal-muted uppercase tracking-widest w-20 shrink-0 pt-0.5">
                  {label}
                </span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-terminal-green hover:text-terminal-green-glow transition-colors break-all"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="font-mono text-xs text-gray-300 break-all">{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/"
            className="font-mono text-sm text-terminal-muted hover:text-terminal-green transition-colors flex items-center gap-2"
          >
            <span>←</span> back_to_home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
