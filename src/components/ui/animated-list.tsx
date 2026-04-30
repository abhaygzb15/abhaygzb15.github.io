import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

interface AnimatedListProps {
  children: React.ReactNode
  className?: string
  delay?: number // ms between each item appearing
}

export function AnimatedList({ children, className = '', delay = 200 }: AnimatedListProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const childrenArray = React.Children.toArray(children)
  const [count, setCount] = useState(0)
  const [triggered, setTriggered] = useState(false)

  // Trigger when the list scrolls into view
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Stagger children in one-by-one after trigger
  useEffect(() => {
    if (!triggered) return
    let i = 0
    const step = () => {
      if (i >= childrenArray.length) return
      setCount(++i)
      setTimeout(step, delay)
    }
    step()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggered])

  return (
    <div ref={containerRef} className={`flex flex-col ${className}`}>
      {childrenArray.slice(0, count).map((child, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 340, damping: 32 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}
