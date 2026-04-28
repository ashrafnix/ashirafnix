'use client'

import { useEffect, useRef, useState } from 'react'

/* ─── Static color maps — purge-safe ─── */
const STAT_GRADIENT: Record<string, string> = {
  indigo: 'group-hover:from-indigo-500/5',
  amber:  'group-hover:from-amber-500/5',
  emerald:'group-hover:from-emerald-500/5',
  pink:   'group-hover:from-pink-500/5',
}
const STAT_VALUE_COLOR: Record<string, string> = {
  indigo: 'text-indigo-400 group-hover:text-indigo-300',
  amber:  'text-amber-400  group-hover:text-amber-300',
  emerald:'text-emerald-400 group-hover:text-emerald-300',
  pink:   'text-pink-400   group-hover:text-pink-300',
}

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

function useCounter({ end, duration = 2000, decimals = 0 }: Omit<CounterProps, 'suffix' | 'prefix'>) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !isVisible) setIsVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return
    let startTime: number
    let animationFrame: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount((1 - Math.pow(1 - progress, 4)) * end)
      if (progress < 1) animationFrame = requestAnimationFrame(animate)
    }
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, end, duration])

  return { count, ref }
}

export function Counter({ end, duration = 2000, suffix = '', prefix = '', decimals = 0 }: CounterProps) {
  const { count, ref } = useCounter({ end, duration, decimals })
  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  )
}

export default function AnimatedStats() {
  const stats = [
    { value: 50,  suffix: '+', label: 'Projects Delivered',  icon: '🚀', color: 'indigo'  },
    { value: 100, suffix: '%', label: 'Client Satisfaction', icon: '⭐', color: 'amber'   },
    { value: 8,   suffix: '+', label: 'Years Experience',    icon: '📅', color: 'emerald' },
    { value: 25,  suffix: '+', label: 'Happy Clients',       icon: '🤝', color: 'pink'    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-40 relative overflow-hidden bg-bg reveal">
      <div className="max-w-site mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-20 lg:mb-24">
          <span className="s-label justify-center">By The Numbers</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-4 md:mb-6">
            Proven <span className="text-accent-indigo italic">Results.</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg lg:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            Real numbers from real projects delivered to real clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
          {stats.map((stat) => {
            const gradientClass = STAT_GRADIENT[stat.color]    ?? ''
            const valueClass    = STAT_VALUE_COLOR[stat.color]  ?? 'text-white'
            return (
              <div
                key={stat.label}
                className="glass-premium rounded-2xl md:rounded-3xl p-5 md:p-7 lg:p-10 border border-border-subtle hover:border-accent-indigo/30 transition-all duration-700 group text-center relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4">{stat.icon}</div>
                  <div className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-2 md:mb-3 transition-colors ${valueClass}`}>
                    <Counter end={stat.value} suffix={stat.suffix} duration={2500} />
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm md:text-base font-sans leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
