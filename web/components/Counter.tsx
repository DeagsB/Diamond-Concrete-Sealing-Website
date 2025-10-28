'use client'
import React, { useEffect, useRef, useState } from 'react'

interface CounterProps {
  value: string
  duration?: number
  suffix?: string
}

export default function Counter({ value, duration = 2000, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          const numValue = parseInt(value)
          if (!isNaN(numValue)) {
            animateCounter(numValue)
          }
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, isVisible])

  const animateCounter = (target: number) => {
    const start = 0
    const increment = target / (duration / 16)
    let current = start

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)
  }

  return (
    <div ref={ref} className="stat-number" style={{ minWidth: '100px', display: 'inline-block' }}>
      {count}{suffix}
    </div>
  )
}

