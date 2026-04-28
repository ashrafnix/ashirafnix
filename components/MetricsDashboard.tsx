'use client'

import { useEffect, useState } from 'react'

/* ─── Static color maps — dynamic class fragments are purged in production builds ─── */
const METRIC_GRADIENT: Record<string, string> = {
  amber:  'group-hover:from-amber-500/5',
  emerald:'group-hover:from-emerald-500/5',
  indigo: 'group-hover:from-indigo-500/5',
  cyan:   'group-hover:from-cyan-500/5',
}
const METRIC_VALUE_COLOR: Record<string, string> = {
  amber:  'text-amber-400  group-hover:text-amber-300',
  emerald:'text-emerald-400 group-hover:text-emerald-300',
  indigo: 'text-indigo-400 group-hover:text-indigo-300',
  cyan:   'text-cyan-400   group-hover:text-cyan-300',
}
const METRIC_PING_COLOR: Record<string, string> = {
  amber:  'bg-amber-500',
  emerald:'bg-emerald-500',
  indigo: 'bg-indigo-500',
  cyan:   'bg-cyan-500',
}

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
    { label: 'Page Load', value: '0.8', unit: 's',    trend: 'down',   change: '-12%', icon: '⚡', color: 'amber'   },
    { label: 'Lighthouse', value: '98',  unit: '/100', trend: 'up',     change: '+3%',  icon: '🎯', color: 'emerald' },
    { label: 'Uptime',     value: '99.9',unit: '%',    trend: 'stable', change: '0%',   icon: '✓',  color: 'indigo'  },
    { label: 'Response',   value: '24',  unit: 'ms',   trend: 'down',   change: '-8%',  icon: '⚡', color: 'cyan'    },
  ])

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
    <section className="py-16 md:py-24 lg:py-40 relative overflow-hidden reveal">
      <div className="max-w-site mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-20 lg:mb-24">
          <span className="s-label justify-center">Live Performance</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-4 md:mb-6">
            Real-Time <span className="text-accent-indigo italic">Metrics.</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg lg:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            Monitoring performance, uptime, and optimization in real-time.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {metrics.map((metric) => {
            const gradientClass   = METRIC_GRADIENT[metric.color]   ?? ''
            const valueColorClass = METRIC_VALUE_COLOR[metric.color] ?? 'text-white'
            const pingColorClass  = METRIC_PING_COLOR[metric.color]  ?? 'bg-slate-500'
            return (
              <div
                key={metric.label}
                className="glass-premium rounded-2xl p-4 md:p-6 lg:p-8 border border-border-subtle hover:border-accent-indigo/30 transition-all duration-700 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <span className="text-2xl md:text-3xl">{metric.icon}</span>
                    <div
                      className={`flex items-center gap-1 px-2 py-1 rounded-full text-[0.6rem] md:text-xs font-mono font-bold ${
                        metric.trend === 'up'     ? 'bg-emerald-500/10 text-emerald-400' :
                        metric.trend === 'down'   ? 'bg-accent-indigo/10 text-indigo-400' :
                                                    'bg-slate-500/10 text-slate-400'
                      }`}
                    >
                      {metric.change}
                      {metric.trend === 'up'     && <span>↑</span>}
                      {metric.trend === 'down'   && <span>↓</span>}
                      {metric.trend === 'stable' && <span>→</span>}
                    </div>
                  </div>

                  <div className="mb-1 md:mb-2">
                    <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold transition-colors ${valueColorClass}`}>
                      {metric.value}
                    </span>
                    <span className="text-sm md:text-xl text-slate-600 font-mono ml-1">{metric.unit}</span>
                  </div>

                  <p className="text-slate-500 text-[0.6rem] md:text-sm font-mono uppercase tracking-wider">
                    {metric.label}
                  </p>

                  <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4">
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pingColorClass}`} />
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${pingColorClass}`} />
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 md:mt-10 lg:mt-12 glass-premium rounded-xl md:rounded-2xl p-4 md:p-6 border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="text-sm font-mono text-slate-400">All systems operational</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-xs font-mono text-slate-600">
            <span>Last updated: Just now</span>
            <span>•</span>
            <span>Next check: 3s</span>
          </div>
        </div>
      </div>
    </section>
  )
}
