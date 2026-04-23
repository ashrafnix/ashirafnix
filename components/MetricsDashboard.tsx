'use client'

import { useEffect, useState } from 'react'

interface Metric {
  label: string
  value: string
  unit: string
  trend: 'up' | 'down' | 'stable'
  change: string
  icon: string
  color: string
}

export default function MetricsDashboard() {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      label: 'Page Load',
      value: '0.8',
      unit: 's',
      trend: 'down',
      change: '-12%',
      icon: '⚡',
      color: 'amber',
    },
    {
      label: 'Lighthouse',
      value: '98',
      unit: '/100',
      trend: 'up',
      change: '+3%',
      icon: '🎯',
      color: 'emerald',
    },
    {
      label: 'Uptime',
      value: '99.9',
      unit: '%',
      trend: 'stable',
      change: '0%',
      icon: '✓',
      color: 'indigo',
    },
    {
      label: 'Response',
      value: '24',
      unit: 'ms',
      trend: 'down',
      change: '-8%',
      icon: '⚡',
      color: 'cyan',
    },
  ])

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => ({
          ...metric,
          value: (parseFloat(metric.value) + (Math.random() - 0.5) * 0.1).toFixed(
            metric.unit === 's' || metric.unit === '%' ? 1 : 0
          ),
        }))
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 md:py-32 lg:py-40 relative overflow-hidden reveal">
      <div className="max-w-site mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="s-label justify-center">Live Performance</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-4 md:mb-6">
            Real-Time <span className="text-indigo-500 italic">Metrics.</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg lg:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            Monitoring performance, uptime, and optimization in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="glass-premium rounded-2xl md:rounded-3xl p-6 md:p-8 border-white/5 hover:border-indigo-500/30 transition-all duration-700 group relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${metric.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10">
                {/* Icon and trend */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{metric.icon}</span>
                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                      metric.trend === 'up'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : metric.trend === 'down'
                        ? 'bg-indigo-500/10 text-indigo-400'
                        : 'bg-slate-500/10 text-slate-400'
                    }`}
                  >
                    <span className="text-xs font-mono font-bold">{metric.change}</span>
                    {metric.trend === 'up' && <span>↑</span>}
                    {metric.trend === 'down' && <span>↓</span>}
                    {metric.trend === 'stable' && <span>→</span>}
                  </div>
                </div>

                {/* Value */}
                <div className="mb-2">
                  <span className={`text-4xl md:text-5xl font-display font-bold text-${metric.color}-400 group-hover:text-${metric.color}-300 transition-colors`}>
                    {metric.value}
                  </span>
                  <span className="text-xl text-slate-600 font-mono ml-1">{metric.unit}</span>
                </div>

                {/* Label */}
                <p className="text-slate-500 text-sm font-mono uppercase tracking-wider">
                  {metric.label}
                </p>

                {/* Pulse indicator */}
                <div className="absolute bottom-4 right-4">
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${metric.color}-500 opacity-75`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 bg-${metric.color}-500`}></span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Status bar */}
        <div className="mt-8 md:mt-12 glass-premium rounded-2xl p-4 md:p-6 border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-mono text-slate-400">
              All systems operational
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs font-mono text-slate-600">
            <span>Last updated: Just now</span>
            <span>•</span>
            <span>Next check: 3s</span>
          </div>
        </div>
      </div>
    </section>
  )
}
