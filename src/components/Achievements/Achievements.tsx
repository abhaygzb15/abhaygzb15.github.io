import { useEffect, useRef, useState, useCallback } from 'react'

type Category = 'hackathon' | 'exam' | 'certification' | 'volunteer'

interface Achievement {
  category: Category
  label: string       // short badge label
  title: string
  subtitle?: string
  date?: string
  description: string
  link: string
}

const achievements: Achievement[] = [
  {
    category: 'hackathon',
    label: 'Hackathon',
    title: 'Tata Technologies InnoVent',
    subtitle: 'Top 31 / 2822 Teams',
    date: 'Jan 2026',
    description:
      'Selected among top 31 teams out of 2822 for the theme "Novel Digital Twin for Battery Ageing and Reuse Optimization."',
    link: 'https://www.tatatechnologies.com/in/innovent-2025-26/',
  },
  {
    category: 'hackathon',
    label: 'Hackathon',
    title: 'Smart India Hackathon',
    subtitle: 'Finalist — 2024 & 2025',
    date: '2024 · 2025',
    description:
      'Reached the finals of SIH in two consecutive years — one of India\'s largest student hackathons.',
    link: 'https://drive.google.com/drive/folders/114HPHFffYtCEq5xuKjjQp7eUtXH4xpn2?usp=sharing',
  },
  {
    category: 'hackathon',
    label: 'Hackathon',
    title: 'Samsung Solve For Tomorrow',
    subtitle: 'Top 25 — Space & Tech Theme',
    date: 'Jul 2025',
    description:
      'Ranked under top 100 teams overall and selected among top 25 in "Social Change through Space and Tech."',
    link: 'https://drive.google.com/file/d/1o9Mot86LEosT1eon5T-jWreUjsWysH-J/view?usp=sharing',
  },
  {
    category: 'exam',
    label: 'Competitive Exam',
    title: 'GATE Computer Science',
    subtitle: 'Qualified 2025 & 2026',
    date: '2025 · 2026',
    description:
      'Cleared Graduate Aptitude Test in Engineering (CSE) in both GATE\'25 and GATE\'26.',
    link: '',
  },
  {
    category: 'exam',
    label: 'Competitive Exam',
    title: 'GATE Data Science',
    subtitle: 'AIR 3863',
    date: 'GATE 2026',
    description:
      'Secured All India Rank 3863 in the Data Science & AI paper of GATE 2026.',
    link: '',
  },
  {
    category: 'volunteer',
    label: 'Volunteering',
    title: 'Indian Military Heritage Festival',
    subtitle: 'Event Management Intern',
    date: 'Oct 2023',
    description:
      'Served as Event Management Intern for USI (United Service Institution of India) at Manekshaw Centre, New Delhi.',
    link: '',
  },
  {
    category: 'volunteer',
    label: 'Volunteering',
    title: 'Tech Fest — Convoke',
    subtitle: 'University of Delhi',
    date: '2023',
    description:
      'Volunteered at Convoke, the Tech Fest of the University of Delhi, assisting in event coordination and logistics.',
    link: '',
  },
  {
    category: 'certification',
    label: 'Certification',
    title: 'Data Science Job Simulation',
    subtitle: 'British Airways',
    date: 'May 2024',
    description:
      'Completed British Airways Data Science Job Simulation — covering Web Scraping, Python, and advanced analytics skills.',
    link: 'https://www.linkedin.com/in/abhaypawar15/overlay/1727014020881/single-media-viewer?type=DOCUMENT&profileId=ACoAAD68KCoBsMBV9Nwm6juOJWYF0RAFF_yIc1o&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BLnnXzQygRSen4EgqL3yPHg%3D%3D',
  },
]

const categoryStyle: Record<Category, { accent: string; icon: string }> = {
  hackathon:    { accent: 'text-yellow-400 border-yellow-400/40',   icon: '🏆' },
  exam:         { accent: 'text-cyan-400 border-cyan-400/40',       icon: '📋' },
  certification:{ accent: 'text-purple-400 border-purple-400/40',   icon: '🎓' },
  volunteer:    { accent: 'text-orange-400 border-orange-400/40',   icon: '🤝' },
}

const CARD_W    = 300  // px
const INTERVAL  = 3000 // ms between auto-advances

const Achievements = () => {
  const scrollRef    = useRef<HTMLDivElement>(null)
  const cardRefs     = useRef<(HTMLDivElement | null)[]>([])
  const [activeIdx, setActiveIdx] = useState(0)
  const activeIdxRef = useRef(0)   // mirror for use inside interval
  const isPaused     = useRef(false)
  const timerRef     = useRef<ReturnType<typeof setInterval> | null>(null)

  // Keep ref in sync with state
  useEffect(() => { activeIdxRef.current = activeIdx }, [activeIdx])

  // Smooth-scroll to a card (centers it)
  const scrollTo = useCallback((idx: number) => {
    const card = cardRefs.current[idx]
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [])

  // Start auto-advance timer
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      if (!isPaused.current) {
        const next = (activeIdxRef.current + 1) % achievements.length
        scrollTo(next)
      }
    }, INTERVAL)
  }, [scrollTo])

  // Detect which card is closest to the scroll-container center
  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const center = el.scrollLeft + el.clientWidth / 2
    let closest = 0
    let minDist  = Infinity
    cardRefs.current.forEach((card, i) => {
      if (!card) return
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const dist = Math.abs(center - cardCenter)
      if (dist < minDist) { minDist = dist; closest = i }
    })
    setActiveIdx(closest)
  }, [])

  // Start at first card, then kick off timer
  useEffect(() => {
    const el   = scrollRef.current
    const card = cardRefs.current[0]
    if (el && card) {
      el.scrollLeft = card.offsetLeft - el.clientWidth / 2 + card.offsetWidth / 2
      setActiveIdx(0)
    }
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [startTimer])

  return (
    <section id="achievements" className="py-20 bg-terminal-bg overflow-hidden">

      {/* Header */}
      <div className="container-max md:pl-8 px-6 md:px-12 lg:px-24 mb-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl">🏅</span>
            <h2 className="font-mono font-bold text-gray-100 text-3xl">Achievements</h2>
          </div>
          <span className="font-mono text-terminal-muted text-sm hidden sm:block">
            // recognition_log
          </span>
        </div>
      </div>

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex items-center gap-5 overflow-x-scroll py-10 px-4"
        style={{
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        onScroll={handleScroll}
        onMouseEnter={() => { isPaused.current = true }}
        onMouseLeave={() => { isPaused.current = false }}
        onTouchStart={() => { isPaused.current = true }}
        onTouchEnd={() => { setTimeout(() => { isPaused.current = false }, 1500) }}
      >
        {/* Left spacer so first card can center */}
        <div className="shrink-0" style={{ width: `calc(50vw - ${CARD_W / 2}px)` }} />

        {achievements.map((item, i) => {
          const { accent, icon } = categoryStyle[item.category]
          const isActive = i === activeIdx

          return (
            <div
              key={item.title}
              ref={(el) => { cardRefs.current[i] = el }}
              onClick={() => {
                if (isActive && item.link) {
                  window.open(item.link, '_blank')
                } else {
                  scrollTo(i)
                }
              }}
              className="shrink-0 cursor-pointer group"
              style={{
                width: CARD_W,
                scrollSnapAlign: 'center',
                transform: isActive ? 'scale(1.12)' : 'scale(0.88)',
                opacity: isActive ? 1 : 0.55,
                transition: 'transform 0.35s ease, opacity 0.35s ease',
              }}
            >
              {/* Badge card body */}
              <div
                className={`relative bg-terminal-bg-card border rounded-2xl p-5 h-[280px] flex flex-col justify-between
                  ${isActive
                    ? 'border-terminal-green shadow-terminal'
                    : 'border-terminal-border'}
                `}
              >
                {/* Top: icon + category badge */}
                <div className="flex items-start justify-between">
                  <span className="text-2xl">{icon}</span>
                  <span className={`font-mono text-[10px] font-semibold uppercase tracking-widest border px-2 py-0.5 rounded-full ${accent}`}>
                    {item.label}
                  </span>
                </div>

                {/* Middle: title + subtitle */}
                <div className="space-y-1">
                  <h3 className={`font-mono font-bold text-base leading-snug ${isActive ? 'text-terminal-green' : 'text-gray-200'}`}>
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className={`font-mono text-xs font-semibold ${accent.split(' ')[0]}`}>
                      {item.subtitle}
                    </p>
                  )}
                </div>

                {/* Bottom: description + date + view button */}
                <div className="space-y-2">
                  <p className="font-mono text-gray-400 text-[11px] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    {item.date && (
                      <p className="font-mono text-terminal-muted text-[10px] tracking-widest uppercase">
                        {item.date}
                      </p>
                    )}
                    {isActive && item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(item.link, '_blank')
                        }}
                        className="font-mono text-[10px] font-semibold text-terminal-green hover:text-terminal-green-glow transition-colors cursor-pointer underline"
                      >
                        VIEW →
                      </a>
                    )}
                  </div>
                </div>

                {/* Active indicator line at bottom */}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-terminal-green rounded-full" />
                )}
              </div>
            </div>
          )
        })}

        {/* Right spacer */}
        <div className="shrink-0" style={{ width: `calc(50vw - ${CARD_W / 2}px)` }} />
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-2">
        {achievements.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === activeIdx
                ? 'w-6 h-1.5 bg-terminal-green'
                : 'w-1.5 h-1.5 bg-terminal-border hover:bg-terminal-muted'
            }`}
            aria-label={`Go to achievement ${i + 1}`}
          />
        ))}
      </div>

    </section>
  )
}

export default Achievements
