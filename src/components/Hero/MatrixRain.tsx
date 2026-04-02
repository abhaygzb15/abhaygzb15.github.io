import { useEffect, useRef } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ{}[]<>/\\|;:'

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Read accent color from CSS variable so it matches the active theme
    const accentColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--matrix-color').trim() || '#00c853'

    const bgColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--bg').trim() || '#0a0d0a'

    const fontSize = 13
    let animationId: number

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(columns).fill(1)

    const draw = () => {
      // Convert hex bg to rgba for trail fade
      ctx.fillStyle = bgColor + '0f'   // ~6% opacity fade
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = accentColor
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }

      animationId = requestAnimationFrame(draw)
    }

    let last = 0
    const throttledDraw = (ts: number) => {
      if (ts - last > 40) { last = ts; draw(); return }
      animationId = requestAnimationFrame(throttledDraw)
    }
    animationId = requestAnimationFrame(throttledDraw)

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [theme])  // re-init when theme changes

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.12 }}
    />
  )
}

export default MatrixRain
