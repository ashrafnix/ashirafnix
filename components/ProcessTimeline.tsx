'use client'

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Deep dive into your brand, market, and technical requirements',
    duration: '1-2 weeks',
    deliverables: ['Brand audit', 'Competitive analysis', 'Technical specs'],
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Define visual direction, technical architecture, and project roadmap',
    duration: '1 week',
    deliverables: ['Mood boards', 'System architecture', 'Project timeline'],
    icon: '🎯',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Create comprehensive brand identity and UI/UX systems',
    duration: '2-3 weeks',
    deliverables: ['Logo system', 'Brand guidelines', 'UI components'],
    icon: '✨',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Build production-ready applications with pixel-perfect implementation',
    duration: '3-6 weeks',
    deliverables: ['Frontend code', 'Backend APIs', 'Database schema'],
    icon: '⚡',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Deploy to production with monitoring, optimization, and support',
    duration: '1 week',
    deliverables: ['Live deployment', 'Documentation', 'Training'],
    icon: '🚀',
  },
]

export default function ProcessTimeline() {
  return (
    <section className="py-20 md:py-32 lg:py-40 relative overflow-hidden bg-bg reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24 lg:mb-32">
          <span className="s-label justify-center">Methodology</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-4 md:mb-6">
            The <span className="text-indigo-500 italic">Process.</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg lg:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            A proven workflow that delivers exceptional results, from concept to launch.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-20">
            {processSteps.map((step, idx) => (
              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-premium rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-border-subtle hover:border-accent-indigo/30 transition-all duration-700 group">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-4xl">{step.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[0.65rem] font-mono text-indigo-500 font-bold uppercase tracking-widest">
                            Step {step.number}
                          </span>
                          <span className="text-[0.6rem] font-mono text-slate-600">
                            {step.duration}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6">
                          {step.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((deliverable) => (
                            <span
                              key={deliverable}
                              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400"
                            >
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-indigo border-4 border-bg z-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
