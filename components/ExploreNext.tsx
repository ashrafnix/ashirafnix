import Link from 'next/link'

type Item = {
  href: string
  label: string
  desc: string
  external?: boolean
}

type ExploreNextProps = {
  kicker?: string
  title: string
  subtitle?: string
  items: Item[]
  className?: string
}

export default function ExploreNext({
  kicker = 'Next steps',
  title,
  subtitle,
  items,
  className = '',
}: ExploreNextProps) {
  return (
    <section className={`py-32 relative ${className}`.trim()}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.03] to-transparent pointer-events-none" />
      <div className="max-w-site mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          {kicker && (
            <span className="block text-center text-[0.7rem] font-mono text-indigo-500 font-bold uppercase tracking-[0.4em] mb-6">
              {kicker}
            </span>
          )}
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-500 text-lg md:text-xl font-sans leading-relaxed">{subtitle}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-[2rem] overflow-hidden border border-white/10">
          {items.map((item) => {
            const inner = (
              <>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.label}
                  </h3>
                  <span
                    className="text-indigo-400/80 text-xl font-light group-hover:translate-x-1 transition-transform"
                    aria-hidden
                  >
                    →
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-sans">{item.desc}</p>
              </>
            )
            return (
              <div key={item.href + item.label} className="bg-[#020617] p-10 md:p-12 group min-h-[200px]">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full -m-10 md:-m-12 p-10 md:p-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-none"
                  >
                    {inner}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="block h-full -m-10 md:-m-12 p-10 md:p-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-none"
                  >
                    {inner}
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
