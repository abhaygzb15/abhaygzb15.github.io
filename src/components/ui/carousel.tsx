import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

export interface CarouselSlide {
  title: string
  button: string
  src: string
  label?: string
  subtitle?: string
  date?: string
  description?: string
  link?: string
}

interface CarouselProps {
  slides: CarouselSlide[]
  autoPlayInterval?: number
}

const Carousel = ({ slides, autoPlayInterval = 3600 }: CarouselProps) => {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const max = slides.length

  const next = useCallback(() => {
    setActive((current) => (current + 1) % max)
  }, [max])

  const previous = useCallback(() => {
    setActive((current) => (current - 1 + max) % max)
  }, [max])

  useEffect(() => {
    if (isPaused || max <= 1) return

    const timer = window.setInterval(next, autoPlayInterval)
    return () => window.clearInterval(timer)
  }, [autoPlayInterval, isPaused, max, next])

  const visibleSlides = useMemo(() => {
    if (!max) return []

    return slides.map((slide, index) => {
      let offset = index - active

      if (offset > max / 2) offset -= max
      if (offset < -max / 2) offset += max

      return { slide, index, offset }
    })
  }, [active, max, slides])

  if (!max) return null

  return (
    <div
      className="relative mx-auto flex min-h-[520px] w-full max-w-6xl flex-col items-center justify-center overflow-hidden px-4 md:min-h-[560px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null
        setIsPaused(true)
      }}
      onTouchEnd={(event) => {
        const start = touchStartX.current
        const end = event.changedTouches[0]?.clientX

        if (start !== null && end !== undefined) {
          const distance = start - end
          if (Math.abs(distance) > 40) {
            distance > 0 ? next() : previous()
          }
        }

        touchStartX.current = null
        window.setTimeout(() => setIsPaused(false), 1200)
      }}
    >
      <div className="relative h-[390px] w-full md:h-[430px]">
        <AnimatePresence initial={false}>
          {visibleSlides.map(({ slide, index, offset }) => {
            const isActive = offset === 0
            const distance = Math.abs(offset)

            if (distance > 2) return null

            return (
              <motion.article
                key={slide.title}
                className={cn(
                  'absolute left-1/2 top-1/2 h-[360px] w-[280px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-terminal-border bg-terminal-bg-card shadow-terminal md:h-[410px] md:w-[560px]',
                  isActive ? 'z-30 cursor-default' : 'z-10 cursor-pointer'
                )}
                initial={false}
                animate={{
                  x: `calc(-50% + ${offset * 210}px)`,
                  y: '-50%',
                  scale: isActive ? 1 : 0.82,
                  rotateY: offset * -18,
                  opacity: distance === 2 ? 0.22 : isActive ? 1 : 0.48,
                }}
                transition={{ type: 'spring', stiffness: 130, damping: 24 }}
                style={{
                  transformPerspective: 1200,
                  pointerEvents: isActive ? 'auto' : 'auto',
                }}
                onClick={() => {
                  if (!isActive) setActive(index)
                }}
              >
                <img
                  src={slide.src}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10" />
                <div className="absolute inset-0 bg-terminal-green/10 mix-blend-screen" />

                <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    {slide.label && (
                      <span className="rounded-full border border-terminal-green/50 bg-black/40 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-terminal-green backdrop-blur">
                        {slide.label}
                      </span>
                    )}
                    {slide.date && (
                      <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-gray-300 backdrop-blur">
                        {slide.date}
                      </span>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="font-mono text-2xl font-bold leading-tight text-white md:text-4xl">
                        {slide.title}
                      </h3>
                      {slide.subtitle && (
                        <p className="font-mono text-sm font-semibold text-terminal-green md:text-base">
                          {slide.subtitle}
                        </p>
                      )}
                    </div>

                    {slide.description && (
                      <p className="max-w-xl font-mono text-xs leading-relaxed text-gray-300 md:text-sm">
                        {slide.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-white">
                        {slide.button}
                      </span>
                      <span className="h-px flex-1 bg-terminal-green/50" />
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          type="button"
          onClick={previous}
          className="grid h-10 w-10 place-items-center rounded-full border border-terminal-border bg-terminal-bg-card font-mono text-lg text-gray-200 transition hover:border-terminal-green hover:text-terminal-green"
          aria-label="Previous achievement"
        >
          {'<'}
        </button>

        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                'h-2 rounded-full transition-all',
                index === active
                  ? 'w-8 bg-terminal-green'
                  : 'w-2 bg-terminal-border hover:bg-terminal-muted'
              )}
              aria-label={`Go to ${slide.title}`}
              aria-current={index === active}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          className="grid h-10 w-10 place-items-center rounded-full border border-terminal-border bg-terminal-bg-card font-mono text-lg text-gray-200 transition hover:border-terminal-green hover:text-terminal-green"
          aria-label="Next achievement"
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default Carousel
