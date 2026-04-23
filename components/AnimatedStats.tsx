'use client'

import { useEffect, useRef, useState } from 'react'

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
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(easeOutQuart * end)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
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
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default function AnimatedStats() {
  return (
    <section className="py-20 md:py-32 lg:py-40 relative overflow-hidden bg-[#020617] reveal">
      <div className="max-w-site mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="s-label justify-center">By The Numbers</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-4 md:mb-6">
            Proven <span className="text-indigo-500 italic">Results.</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg lg:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            Real numbers from real projects delivered to real clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {[
            { value: 50, suffix: '+', label: 'Projects Delivered', icon: '🚀', color: 'indigo' },
            { value: 100, suffix: '%', label: 'Client Satisfaction', icon: '⭐', color: 'amber' },
            { value: 8, suffix: '+', label: 'Years Experience', icon: '📅', color: 'emerald' },
            { value: 25, suffix: '+', label: 'Happy Clients', icon: '🤝', color: 'pink' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-premium rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border-white/5 hover:border-indigo-500/30 transition-all duration-700 group text-center"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl md:rounded-3xl`} />
              
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl mb-4">{stat.icon}</div>
                <div className={`text-5xl md:text-6xl lg:text-7xl font-display font-bold text-${stat.color}-400 mb-3 group-hover:text-${stat.color}-300 transition-colors`}>
                  <Counter end={stat.value} suffix={stat.suffix} duration={2500} />
                </div>
                <p className="text-slate-500 text-sm md:text-base font-sans leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
