'use client'

const awards = [
  {
    year: '2025',
    title: 'Best Digital Portfolio',
    organization: 'Awwwards',
    category: 'Site of the Day',
    icon: '🏆',
    color: 'amber',
  },
  {
    year: '2024',
    title: 'Innovation in Design',
    organization: 'CSS Design Awards',
    category: 'UI Design',
    icon: '⭐',
    color: 'indigo',
  },
  {
    year: '2024',
    title: 'Top Developer Africa',
    organization: 'GitHub',
    category: 'Open Source',
    icon: '🚀',
    color: 'emerald',
  },
  {
    year: '2023',
    title: 'Rising Star',
    organization: 'Tech Hub Kampala',
    category: 'Emerging Talent',
    icon: '✨',
    color: 'pink',
  },
]

const certifications = [
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2024' },
  { name: 'Google UX Design Professional', issuer: 'Google', year: '2023' },
  { name: 'Meta Front-End Developer', issuer: 'Meta', year: '2023' },
  { name: 'Advanced React Patterns', issuer: 'Frontend Masters', year: '2024' },
]

export default function Awards() {
  return (
    <section className="py-20 md:py-32 lg:py-40 relative overflow-hidden bg-white/[0.02] reveal">
      <div className="max-w-site mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="s-label justify-center">Recognition</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-4 md:mb-6">
            Awards & <span className="text-indigo-500 italic">Achievements.</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg lg:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            Recognized for excellence in design, development, and innovation.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="glass-premium rounded-2xl md:rounded-3xl p-6 md:p-8 border-white/5 hover:border-indigo-500/30 transition-all duration-700 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${award.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl md:text-5xl">{award.icon}</span>
                  <span className="text-xs font-mono text-slate-600 bg-white/5 px-2 py-1 rounded">
                    {award.year}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {award.title}
                </h3>
                
                <p className="text-slate-500 text-sm mb-2">{award.organization}</p>
                
                <span className={`inline-block px-3 py-1 rounded-full bg-${award.color}-500/10 text-${award.color}-400 text-xs font-mono`}>
                  {award.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-8 md:mb-12 text-center">
            Professional <span className="text-indigo-500 italic">Certifications</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-premium rounded-xl md:rounded-2xl p-4 md:p-6 border-white/5 hover:border-indigo-500/20 transition-all duration-500 group flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500/20 to-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h4 className="text-white font-display font-bold text-base md:text-lg mb-1 group-hover:text-indigo-400 transition-colors">
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
