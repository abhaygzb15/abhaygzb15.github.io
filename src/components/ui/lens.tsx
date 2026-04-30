import React, { useRef, useState } from 'react'

interface LensProps {
  children: React.ReactNode
  zoomFactor?: number
  lensSize?: number
  className?: string
}

/*
 * Magnifying-glass lens that follows the cursor over any content.
 *
 * Math:
 *   Lens circle center → cursor (cx, cy) in container space.
 *   Inside the circle we render a copy of children at scale(zoomFactor),
 *   offset so that the point (cx, cy) maps to the circle's centre.
 *
 *   content left inside circle = lensSize/2 − cx × zoom
 *   content top  inside circle = lensSize/2 − cy × zoom
 *   transform-origin: 0 0  (so scale anchors at the offset origin)
 */
export function Lens({
  children,
  zoomFactor = 1.6,
  lensSize = 150,
  className = '',
}: LensProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState({ w: 0, h: 0 })

  const handleEnter = () => {
    if (containerRef.current) {
      setSize({
        w: containerRef.current.offsetWidth,
        h: containerRef.current.offsetHeight,
      })
    }
    setHovering(true)
  }

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={() => setHovering(false)}
      style={{ position: 'relative' }}
    >
      {children}

      {hovering && (
        <div
          style={{
            position: 'absolute',
            left: pos.x - lensSize / 2,
            top: pos.y - lensSize / 2,
            width: lensSize,
            height: lensSize,
            borderRadius: '50%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 20,
            border: '2px solid rgba(0,200,83,0.4)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,200,83,0.15)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: lensSize / 2 - pos.x * zoomFactor,
              top: lensSize / 2 - pos.y * zoomFactor,
              width: size.w,
              height: size.h,
              transform: `scale(${zoomFactor})`,
              transformOrigin: '0 0',
              pointerEvents: 'none',
            }}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
