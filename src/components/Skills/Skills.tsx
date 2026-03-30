import { useState, useRef, useCallback, useEffect } from 'react'

type SkillSize = 'xl' | 'lg' | 'md' | 'sm'

interface SkillItem {
  name: string
  size: SkillSize
  x: number   // % from container left
  y: number   // % from container top
  delay: number
  dur: number
}

const sizeStyles: Record<SkillSize, { fontSize: string; fontWeight: number; approxW: number; approxH: number }> = {
  xl: { fontSize: '2rem',   fontWeight: 700, approxW: 12, approxH: 5 },
  lg: { fontSize: '1.5rem', fontWeight: 600, approxW: 10, approxH: 4.5 },
  md: { fontSize: '1.1rem', fontWeight: 500, approxW: 8,  approxH: 3.5 },
  sm: { fontSize: '0.85rem', fontWeight: 400, approxW: 6,  approxH: 3 },
}

// ── 70% xl/lg · 20% md · 10% sm ──
// Total 24 skills → 17 xl/lg (≈70%), 5 md (≈21%), 2 sm (≈8%)
const initialSkills: SkillItem[] = [
  // ── xl (8 skills) ──
  { name: 'Python',           size: 'xl',  x: 18,  y: 36,  delay: 0,    dur: 4.5 },
  { name: 'Java',             size: 'xl',  x: 46,  y: 42,  delay: 0.8,  dur: 5.0 },
  { name: 'Machine Learning', size: 'xl',  x: 30,  y: 18,  delay: 0.4,  dur: 5.2 },
  { name: 'Deep Learning',    size: 'xl',  x: 8,   y: 55,  delay: 1.2,  dur: 4.8 },
  { name: 'Data Analysis',    size: 'xl',  x: 52,  y: 56,  delay: 0.6,  dur: 4.7 },
  { name: 'Flutter',          size: 'xl',  x: 64,  y: 30,  delay: 1.5,  dur: 4.9 },
  { name: 'Kotlin',           size: 'xl',  x: 5,   y: 72,  delay: 1.8,  dur: 4.4 },
  { name: 'Firebase',         size: 'xl',  x: 72,  y: 62,  delay: 0.3,  dur: 4.3 },

  // ── lg (9 skills) ──
  { name: 'Github',           size: 'lg',  x: 3,   y: 18,  delay: 0.9,  dur: 4.2 },
  { name: 'REST API',         size: 'lg',  x: 75,  y: 18,  delay: 1.1,  dur: 4.0 },
  { name: 'MySQL',            size: 'lg',  x: 78,  y: 46,  delay: 0.5,  dur: 4.1 },
  { name: 'Git',              size: 'lg',  x: 48,  y: 70,  delay: 1.3,  dur: 4.2 },
  { name: 'Android Studio',   size: 'lg',  x: 24,  y: 68,  delay: 1.0,  dur: 4.6 },
  { name: 'Streamlit',        size: 'lg',  x: 52,  y: 8,   delay: 0.4,  dur: 4.0 },
  { name: 'PowerBI',          size: 'lg',  x: 36,  y: 6,   delay: 1.6,  dur: 3.7 },
  { name: 'Robotics',         size: 'lg',  x: 82,  y: 72,  delay: 1.4,  dur: 3.7 },
  { name: 'SpaCy',            size: 'lg',  x: 18,  y: 82,  delay: 1.1,  dur: 3.9 },

  // ── md (5 skills — 20%) ──
  { name: 'C',                size: 'md',  x: 3,   y: 5,   delay: 0.2,  dur: 3.8 },
  { name: 'MATLAB',           size: 'md',  x: 14,  y: 5,   delay: 1.4,  dur: 3.9 },
  { name: 'R',                size: 'md',  x: 68,  y: 6,   delay: 0.7,  dur: 3.6 },
  { name: 'Dialogflow',       size: 'md',  x: 40,  y: 82,  delay: 0.8,  dur: 4.1 },
  { name: 'Figma',            size: 'md',  x: 60,  y: 80,  delay: 1.7,  dur: 3.8 },

  // ── sm (2 skills — ~8%) ──
  { name: 'MS Excel',         size: 'sm',  x: 82,  y: 6,   delay: 1.9,  dur: 3.8 },
  { name: 'Canva',            size: 'sm',  x: 78,  y: 84,  delay: 0.6,  dur: 3.6 },
]

// ── Collision helpers ──

interface BBox {
  left: number
  top: number
  right: number
  bottom: number
}

function getBBox(skill: SkillItem): BBox {
  const s = sizeStyles[skill.size]
  // Approximate width based on character count + base size
  const charW = skill.name.length * (s.approxW / 6)
  const w = Math.max(s.approxW, charW)
  const h = s.approxH
  return {
    left: skill.x,
    top: skill.y,
    right: skill.x + w,
    bottom: skill.y + h,
  }
}

function boxesOverlap(a: BBox, b: BBox, padding = 1.5): boolean {
  return !(
    a.right + padding < b.left ||
    b.right + padding < a.left ||
    a.bottom + padding < b.top ||
    b.bottom + padding < a.top
  )
}

function resolveOverlaps(skills: SkillItem[], draggedName: string): SkillItem[] {
  const result = [...skills.map(s => ({ ...s }))]
  const dragIdx = result.findIndex(s => s.name === draggedName)
  if (dragIdx === -1) return result

  const dragBox = getBBox(result[dragIdx])

  // Iteratively push overlapping items away (max 3 passes for perf)
  for (let pass = 0; pass < 3; pass++) {
    let anyMoved = false

    for (let i = 0; i < result.length; i++) {
      if (i === dragIdx) continue

      const otherBox = getBBox(result[i])
      if (!boxesOverlap(dragBox, otherBox)) continue

      // Compute repulsion direction from dragged item's center to other item's center
      const dCx = (dragBox.left + dragBox.right) / 2
      const dCy = (dragBox.top + dragBox.bottom) / 2
      const oCx = (otherBox.left + otherBox.right) / 2
      const oCy = (otherBox.top + otherBox.bottom) / 2

      let dx = oCx - dCx
      let dy = oCy - dCy
      const dist = Math.sqrt(dx * dx + dy * dy) || 1

      // Normalize and push by a fixed step
      dx = (dx / dist) * 4
      dy = (dy / dist) * 3

      result[i] = {
        ...result[i],
        x: Math.max(0, Math.min(88, result[i].x + dx)),
        y: Math.max(0, Math.min(88, result[i].y + dy)),
      }
      anyMoved = true
    }

    if (!anyMoved) break
  }

  return result
}

const WrenchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
    className="w-5 h-5 text-terminal-green"
  >
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M11.42 15.17L17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.655m5.896-3.42c.21-.328.31-.686.29-1.043a3.86 3.86 0 0 0-3.53-3.75 3.9 3.9 0 0 0-2.6.79L6.75 6.75" />
  </svg>
)

const Skills = () => {
  const [skills, setSkills] = useState<SkillItem[]>(initialSkills)
  const [dragging, setDragging] = useState<string | null>(null)
  const dragOffset = useRef({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const animFrameRef = useRef<number | null>(null)

  const getContainerRect = () => containerRef.current?.getBoundingClientRect()

  // ── Mouse handlers ──
  const handleMouseDown = useCallback((e: React.MouseEvent, name: string) => {
    e.preventDefault()
    const rect = getContainerRect()
    if (!rect) return
    const item = skills.find(s => s.name === name)!
    const itemPxX = (item.x / 100) * rect.width
    const itemPxY = (item.y / 100) * rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    dragOffset.current = { x: mouseX - itemPxX, y: mouseY - itemPxY }
    setDragging(name)
  }, [skills])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging) return
    const rect = getContainerRect()
    if (!rect) return

    // Cancel any pending frame
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)

    animFrameRef.current = requestAnimationFrame(() => {
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      const newX = ((mouseX - dragOffset.current.x) / rect.width) * 100
      const newY = ((mouseY - dragOffset.current.y) / rect.height) * 100

      setSkills(prev => {
        const updated = prev.map(s =>
          s.name === dragging
            ? { ...s, x: Math.max(0, Math.min(88, newX)), y: Math.max(0, Math.min(88, newY)) }
            : s
        )
        return resolveOverlaps(updated, dragging!)
      })
    })
  }, [dragging])

  const handleMouseUp = useCallback(() => {
    setDragging(null)
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
  }, [])

  // ── Touch handlers ──
  const handleTouchStart = useCallback((e: React.TouchEvent, name: string) => {
    const rect = getContainerRect()
    if (!rect) return
    const touch = e.touches[0]
    const item = skills.find(s => s.name === name)!
    dragOffset.current = {
      x: touch.clientX - rect.left - (item.x / 100) * rect.width,
      y: touch.clientY - rect.top  - (item.y / 100) * rect.height,
    }
    setDragging(name)
  }, [skills])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!dragging) return
    const rect = getContainerRect()
    if (!rect) return

    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)

    animFrameRef.current = requestAnimationFrame(() => {
      const touch = e.touches[0]
      const newX = ((touch.clientX - rect.left - dragOffset.current.x) / rect.width) * 100
      const newY = ((touch.clientY - rect.top  - dragOffset.current.y) / rect.height) * 100

      setSkills(prev => {
        const updated = prev.map(s =>
          s.name === dragging
            ? { ...s, x: Math.max(0, Math.min(88, newX)), y: Math.max(0, Math.min(88, newY)) }
            : s
        )
        return resolveOverlaps(updated, dragging!)
      })
    })
  }, [dragging])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  return (
    <section id="skills" className="section-padding bg-terminal-bg">
      <div className="container-max md:pl-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <WrenchIcon />
            <h2 className="font-mono font-bold text-gray-100 text-3xl">Skills</h2>
          </div>
          <span className="font-mono text-terminal-muted text-sm hidden sm:block">
            // skill cloud
          </span>
        </div>

        {/* Cloud container */}
        <div
          ref={containerRef}
          className="relative w-full h-[480px] md:h-[520px] rounded-xl border border-terminal-border overflow-hidden select-none touch-none"
          style={{ background: 'rgba(15, 20, 15, 0.85)' }}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {skills.map((skill) => {
            const isDragging = dragging === skill.name
            const { fontSize, fontWeight } = sizeStyles[skill.size]

            return (
              <span
                key={skill.name}
                className={`
                  absolute font-mono
                  ${isDragging
                    ? 'text-terminal-green cursor-grabbing z-10'
                    : 'text-gray-400 hover:text-terminal-green cursor-grab'}
                `}
                style={{
                  left: `${skill.x}%`,
                  top: `${skill.y}%`,
                  fontSize,
                  fontWeight,
                  // Smooth transitions for displaced items, instant for dragged item
                  transition: isDragging
                    ? 'none'
                    : 'left 0.3s ease-out, top 0.3s ease-out, color 0.2s',
                  animation: isDragging || dragging
                    ? 'none'
                    : `floatWord ${skill.dur}s ${skill.delay}s ease-in-out infinite`,
                  willChange: 'transform, left, top',
                }}
                onMouseDown={(e) => handleMouseDown(e, skill.name)}
                onTouchStart={(e) => handleTouchStart(e, skill.name)}
              >
                {skill.name}
              </span>
            )
          })}
        </div>

        {/* Footer hint */}
        <p className="mt-4 text-center font-mono text-xs text-terminal-muted">
          <span className="text-terminal-green">●</span>
          {' '}drag to rearrange · hover to highlight · skills auto-adjust to avoid overlap
        </p>

      </div>
    </section>
  )
}

export default Skills