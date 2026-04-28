'use client'

/* ─── Static color maps — required for Tailwind production purge-safety.
   Dynamic fragments like `from-${award.color}-500/5` are stripped in prod. ─── */
const AWARD_GRADIENT: Record<string, string> = {
  amber:  'group-hover:from-amber-500/5',
  indigo: 'group-hover:from-indigo-500/5',
  emerald:'group-hover:from-emerald-500/5',
  pink:   'group-hover:from-pink-500/5',
}
const AWARD_BADGE_BG: Record<string, string> = {
  amber:  'bg-amber-500/10 text-amber-400',
  indigo: 'bg-indigo-500/10 text-indigo-400',
  emerald:'bg-emerald-500/10 text-emerald-400',
  pink:   'bg-pink-500/10 text-pink-400',
}

const awards = [
  { year: '2025', title: 'Best Digital Portfolio',  organization: 'Awwwards',        category: 'Site of the Day',   icon: '🏆', color: 'amber'  },
  { year: '2024', title: 'Innovation in Design',    organization: 'CSS Design Awards',category: 'UI Design',         icon: '⭐', color: 'indigo' },
  { year: '2024', title: 'Top Developer Africa',    organization: 'GitHub',           category: 'Open Source',       icon: '🚀', color: 'emerald'},
  { year: '2023', title: 'Rising Star',             organization: 'Tech Hub Kampala', category: 'Emerging Talent',   icon: '✨', color: 'pink'   },
]

const certifications = [
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2024' },
  { name: 'Google UX Design Professional',     issuer: 'Google',              year: '2023' },
  { name: 'Meta Front-End Developer',          issuer: 'Meta',                year: '2023' },
  { name: 'Advanced React Patterns',           issuer: 'Frontend Masters',    year: '2024' },
]

export default function Awards() {
  return (
    <section className="py-16 md:py-24 lg:py-40 relative overflow-hidden bg-white/[0.02] reveal">
      <div className="max-w-site mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-20 lg:mb-24">
          <span className="s-label justify-center">Recognition</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-4 md:mb-6">
            Awards &amp; <span className="text-accent-indigo italic">Achievements.</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg lg:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            Recognized for excellence in design, development, and innovation.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-20 lg:mb-24">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="glass-premium rounded-2xl p-5 md:p-6 lg:p-8 border border-border-subtle hover:border-accent-indigo/30 transition-all duration-700 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${AWARD_GRADIENT[award.color] ?? ''} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl md:text-4xl lg:text-5xl">{award.icon}</span>
                  <span className="text-xs font-mono text-slate-600 bg-white/5 px-2 py-1 rounded">
                    {award.year}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold text-white mb-2 group-hover:text-accent-indigo-bright transition-colors">
                  {award.title}
                </h3>

                <p className="text-slate-500 text-sm mb-3">{award.organization}</p>

                <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono ${AWARD_BADGE_BG[award.color] ?? ''}`}>
                  {award.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-8 md:mb-12 text-center">
            Professional <span className="text-accent-indigo italic">Certifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-premium rounded-xl md:rounded-2xl p-4 md:p-6 border border-border-subtle hover:border-accent-indigo/20 transition-all duration-500 group flex items-center gap-4"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-accent-indigo/20 to-accent-gold/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-display font-bold text-sm md:text-base lg:text-lg mb-1 group-hover:text-accent-indigo-bright transition-colors leading-snug">
                    {cert.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-slate-600">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
