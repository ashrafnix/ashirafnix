'use client'

const techStack = [
  {
    category: 'Frontend',
    color: 'indigo',
    technologies: [
      { name: 'React', icon: '⚛️', proficiency: 95 },
      { name: 'Next.js', icon: '▲', proficiency: 98 },
      { name: 'TypeScript', icon: 'TS', proficiency: 92 },
      { name: 'Tailwind', icon: '🎨', proficiency: 96 },
    ],
  },
  {
    category: 'Backend',
    color: 'emerald',
    technologies: [
      { name: 'Node.js', icon: '🟢', proficiency: 90 },
      { name: 'Python', icon: '🐍', proficiency: 85 },
      { name: 'PostgreSQL', icon: '🐘', proficiency: 88 },
      { name: 'Redis', icon: '🔴', proficiency: 82 },
    ],
  },
  {
    category: 'Design',
    color: 'pink',
    technologies: [
      { name: 'Figma', icon: '🎯', proficiency: 94 },
      { name: 'Illustrator', icon: '🎨', proficiency: 91 },
      { name: 'After Effects', icon: '🎬', proficiency: 87 },
      { name: 'Blender', icon: '🔷', proficiency: 80 },
    ],
  },
  {
    category: 'DevOps',
    color: 'amber',
    technologies: [
      { name: 'Docker', icon: '🐳', proficiency: 89 },
      { name: 'AWS', icon: '☁️', proficiency: 86 },
      { name: 'Vercel', icon: '▲', proficiency: 95 },
      { name: 'GitHub', icon: '🐙', proficiency: 93 },
    ],
  },
]

export default function TechStack() {
  return (
    <section className="py-20 md:py-32 lg:py-40 relative overflow-hidden bg-white/[0.02] reveal">
      <div className="max-w-site mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="s-label justify-center">Technical Arsenal</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-4 md:mb-6">
            Tech <span className="text-indigo-500 italic">Stack.</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg lg:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            Modern tools and frameworks powering world-class digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {techStack.map((stack) => (
            <div
              key={stack.category}
              className="glass-premium rounded-2xl md:rounded-3xl p-6 md:p-8 border-white/5 hover:border-indigo-500/30 transition-all duration-700 group"
            >
              <div className="mb-6">
                <h3 className={`text-2xl md:text-3xl font-display font-bold text-${stack.color}-400 mb-2 group-hover:text-${stack.color}-300 transition-colors`}>
                  {stack.category}
                </h3>
                <div className={`h-1 w-12 bg-gradient-to-r from-${stack.color}-500 to-transparent rounded-full`} />
              </div>

              <div className="space-y-4">
                {stack.technologies.map((tech) => (
                  <div key={tech.name} className="group/tech">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{tech.icon}</span>
                        <span className="text-white font-medium text-sm group-hover/tech:text-indigo-400 transition-colors">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-slate-600 text-xs font-mono">
                        {tech.proficiency}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-${stack.color}-500 to-${stack.color}-400 rounded-full transition-all duration-1000 group-hover/tech:scale-x-105`}
                        style={{ width: `${tech.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
