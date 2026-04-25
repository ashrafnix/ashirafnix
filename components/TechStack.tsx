'use client'

/* ─── IMPORTANT: All color classes must be STATIC strings for Tailwind's
   purger to detect them. Dynamic template literals like `text-${color}-400`
   are stripped in production builds. This map is the safe pattern. ─── */
const COLOR_MAP: Record<string, {
  heading:    string
  bar:        string
  barHover:   string
  divider:    string
}> = {
  indigo:  {
    heading:  'text-indigo-400 group-hover:text-indigo-300',
    bar:      'from-indigo-500 to-indigo-400',
    barHover: 'group-hover/tech:text-indigo-400',
    divider:  'from-indigo-500',
  },
  emerald: {
    heading:  'text-emerald-400 group-hover:text-emerald-300',
    bar:      'from-emerald-500 to-emerald-400',
    barHover: 'group-hover/tech:text-emerald-400',
    divider:  'from-emerald-500',
  },
  pink: {
    heading:  'text-pink-400 group-hover:text-pink-300',
    bar:      'from-pink-500 to-pink-400',
    barHover: 'group-hover/tech:text-pink-400',
    divider:  'from-pink-500',
  },
  amber: {
    heading:  'text-amber-400 group-hover:text-amber-300',
    bar:      'from-amber-500 to-amber-400',
    barHover: 'group-hover/tech:text-amber-400',
    divider:  'from-amber-500',
  },
}

const techStack = [
  {
    category: 'Frontend',
    color: 'indigo',
    technologies: [
      { name: 'React',      icon: '⚛️', proficiency: 95 },
      { name: 'Next.js',    icon: '▲',  proficiency: 98 },
      { name: 'TypeScript', icon: 'TS', proficiency: 92 },
      { name: 'Tailwind',   icon: '🎨', proficiency: 96 },
    ],
  },
  {
    category: 'Backend',
    color: 'emerald',
    technologies: [
      { name: 'Node.js',    icon: '🟢', proficiency: 90 },
      { name: 'Python',     icon: '🐍', proficiency: 85 },
      { name: 'PostgreSQL', icon: '🐘', proficiency: 88 },
      { name: 'Redis',      icon: '🔴', proficiency: 82 },
    ],
  },
  {
    category: 'Design',
    color: 'pink',
    technologies: [
      { name: 'Figma',         icon: '🎯', proficiency: 94 },
      { name: 'Illustrator',   icon: '🎨', proficiency: 91 },
      { name: 'After Effects', icon: '🎬', proficiency: 87 },
      { name: 'Blender',       icon: '🔷', proficiency: 80 },
    ],
  },
  {
    category: 'DevOps',
    color: 'amber',
    technologies: [
      { name: 'Docker', icon: '🐳', proficiency: 89 },
      { name: 'AWS',    icon: '☁️', proficiency: 86 },
      { name: 'Vercel', icon: '▲',  proficiency: 95 },
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
            Tech <span className="text-accent-indigo italic">Stack.</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg lg:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            Modern tools and frameworks powering world-class digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {techStack.map((stack) => {
            const colors = COLOR_MAP[stack.color]
            return (
              <div
                key={stack.category}
                className="glass-premium rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border-subtle hover:border-accent-indigo/30 transition-all duration-700 group"
              >
                <div className="mb-6">
                  <h3 className={`text-2xl md:text-3xl font-display font-bold mb-2 transition-colors ${colors.heading}`}>
                    {stack.category}
                  </h3>
                  <div className={`h-px w-12 bg-gradient-to-r ${colors.divider} to-transparent rounded-full`} />
                </div>

                <div className="space-y-4">
                  {stack.technologies.map((tech) => (
                    <div key={tech.name} className="group/tech">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{tech.icon}</span>
                          <span className={`text-white font-medium text-sm transition-colors ${colors.barHover}`}>
                            {tech.name}
                          </span>
                        </div>
                        <span className="text-slate-600 text-xs font-mono">
                          {tech.proficiency}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${colors.bar} rounded-full transition-all duration-1000`}
                          style={{ width: `${tech.proficiency}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
