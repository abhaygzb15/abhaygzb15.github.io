import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

interface Publication {
  date: string
  year: string
  title: string
  journal: string
  journalShort: string
  doi?: string
  link?: string
  description: string
}

const publications: Publication[] = [
  {
    date: '03/2026',
    year: '2026',
    title:
      'Design of an optimal planning framework for cryosurgical treatment of brain tumor using CNN segmentation of MRI images',
    journal: 'Cryobiology (Elsevier), Volume 123, 2026, Article 105619',
    journalShort: 'Cryobiology · Elsevier',
    link: 'https://doi.org/10.1016/j.cryobiol.2026.105619',
    description:
      'Developed an integrated framework that combines deep learning based tumor segmentation from MRI images, algorithmic optimization of cryoprobe placement, and thermal simulations to analyze the freezing process during cryoablation. The goal is to improve tumor coverage while minimizing damage to surrounding healthy tissue.',
  },
]

// Decorative terminal-style glyph per index
const glyphs = ['◆', '▲', '●', '■', '★']

export default function Publications() {
  return (
    <div className="min-h-screen bg-terminal-bg text-gray-100">
      <Navbar />

      <main className="pt-24 pb-20 px-6 md:px-16 lg:px-28 max-w-5xl mx-auto">

        {/* ── Header ── */}
        <header className="mb-16">
          <p className="font-mono text-terminal-green text-sm mb-4">// research</p>
          <h1 className="font-mono font-bold leading-tight text-gray-100">
            <span className="block text-4xl md:text-5xl">Articles &amp;</span>
            <span className="block text-5xl md:text-6xl text-terminal-green">Publications</span>
          </h1>
        </header>

        {/* ── Publication rows ── */}
        <div className="flex flex-col gap-6">
          {publications.map((pub, i) => (
            <a
              key={pub.title}
              href={pub.link ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {/* Outer border bar — mimics the tilted card from the reference */}
              <div
                className="relative border border-terminal-border bg-terminal-bg-card rounded-sm
                           hover:border-terminal-green hover:shadow-terminal
                           transition-all duration-300
                           group-hover:-translate-y-0.5 group-hover:rotate-[0.3deg]"
              >
                {/* Main row */}
                <div className="flex items-stretch min-h-[72px]">

                  {/* Left: journal name — rotated, like the reference */}
                  <div className="hidden sm:flex items-center justify-center w-28 shrink-0
                                  border-r border-terminal-border/60 px-3">
                    <span
                      className="font-mono text-[10px] text-terminal-muted uppercase tracking-widest whitespace-nowrap
                                 group-hover:text-terminal-green transition-colors duration-200"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {pub.journalShort}
                    </span>
                  </div>

                  {/* Center: glyph + title + description */}
                  <div className="flex items-center gap-4 px-6 py-5 flex-1 min-w-0">
                    {/* Decorative glyph */}
                    <span
                      className="text-terminal-green text-xl shrink-0 opacity-70
                                 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200"
                    >
                      {glyphs[i % glyphs.length]}
                    </span>

                    <div className="min-w-0">
                      {/* Date pill — mobile only (replaces left column) */}
                      <span className="sm:hidden inline-block font-mono text-[10px] text-terminal-muted
                                       uppercase tracking-widest mb-1">
                        {pub.journalShort} · {pub.date}
                      </span>

                      <h2
                        className="font-mono font-semibold text-sm md:text-base text-gray-100 leading-snug
                                   group-hover:text-terminal-green transition-colors duration-200"
                      >
                        {pub.title}
                      </h2>

                      <p className="font-mono text-[11px] text-terminal-muted mt-1 leading-relaxed line-clamp-2
                                    group-hover:text-gray-400 transition-colors duration-200 hidden md:block">
                        {pub.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: year — rotated, like the reference */}
                  <div className="hidden sm:flex items-center justify-center w-14 shrink-0
                                  border-l border-terminal-border/60 px-3">
                    <span
                      className="font-mono text-xs font-bold text-terminal-muted tracking-widest
                                 group-hover:text-terminal-green transition-colors duration-200"
                      style={{ writingMode: 'vertical-rl' }}
                    >
                      {pub.year}
                    </span>
                  </div>
                </div>

                {/* Bottom: full description on mobile */}
                <div className="md:hidden px-6 pb-4">
                  <p className="font-mono text-[11px] text-terminal-muted leading-relaxed">
                    {pub.description}
                  </p>
                </div>

                {/* Journal citation line */}
                <div className="border-t border-terminal-border/40 px-6 py-2 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-terminal-muted/70 italic">
                    {pub.journal}
                  </span>
                  <span className="font-mono text-[10px] text-terminal-green/60 group-hover:text-terminal-green
                                   transition-colors duration-200 shrink-0 ml-4">
                    Read paper →
                  </span>
                </div>

                {/* Active green left border on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-terminal-green rounded-l-sm
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        {/* Coming-soon hint if only 1 pub */}
        {publications.length < 3 && (
          <div className="mt-8 border border-dashed border-terminal-border/40 rounded-sm px-6 py-4">
            <p className="font-mono text-terminal-muted text-xs">
              <span className="text-terminal-green">{'>'}</span> More publications coming soon...
            </p>
          </div>
        )}

        {/* Back link */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/"
            className="font-mono text-sm text-terminal-muted hover:text-terminal-green transition-colors duration-200 flex items-center gap-2"
          >
            <span>←</span> back_to_home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
