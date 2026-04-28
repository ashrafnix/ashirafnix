import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Design Tokens — System Variables',
  description:
    'The atomic units of the AshirafNix visual architecture. Colors, spacing, and typography tokens.',
}

const colors = [
  { name: 'Deep Slate',     hex: '#020617', use: 'Background Core',    var: '--bg',           class: 'token-deep-slate'    },
  { name: 'Indigo Primary', hex: '#6366f1', use: 'Accent & Action',    var: '--indigo',        class: 'token-indigo-primary'},
  { name: 'Indigo Bright',  hex: '#818cf8', use: 'High Contrast',      var: '--indigo-bright', class: 'token-indigo-bright' },
  { name: 'Champagne Gold', hex: '#eab308', use: 'Warning & Detail',   var: '--gold',          class: 'token-gold'          },
  { name: 'Text High',      hex: '#f8fafc', use: 'Headings',           var: '--text',          class: 'token-text-high'     },
  { name: 'Text Muted',     hex: '#94a3b8', use: 'Body Copy',          var: '--muted',         class: 'token-text-muted'    },
]

const typography = [
  { name: 'Syne',          role: 'Display / Structural', weights: '700, 800',     use: 'Headlines', class: 'font-syne'      },
  { name: 'Outfit',        role: 'Sans / Technical',     weights: '400, 500, 600',use: 'UI & Body',  class: 'font-outfit'    },
  { name: 'IBM Plex Mono', role: 'System / Code',        weights: '400, 500',     use: 'Metadata',   class: 'font-mono-plex' },
]

const motionTokens = [
  { name: 'Reveal', curve: 'cubic-bezier(0.16, 1, 0.3, 1)', duration: '1.2s', use: 'Entrance animations' },
  { name: 'Hover',  curve: 'ease-out',                       duration: '0.5s', use: 'Micro-interactions'  },
  { name: 'Drawer', curve: 'cubic-bezier(0.77, 0, 0.175, 1)',duration: '0.8s', use: 'Navigation systems'  },
]

const spacingScale = [
  { px: 4,   tw: 'w-1 h-1'   },
  { px: 8,   tw: 'w-2 h-2'   },
  { px: 12,  tw: 'w-3 h-3'   },
  { px: 16,  tw: 'w-4 h-4'   },
  { px: 24,  tw: 'w-6 h-6'   },
  { px: 32,  tw: 'w-8 h-8'   },
  { px: 40,  tw: 'w-10 h-10' },
  { px: 48,  tw: 'w-12 h-12' },
  { px: 64,  tw: 'w-16 h-16' },
  { px: 80,  tw: 'w-20 h-20' },
  { px: 96,  tw: 'w-24 h-24' },
  { px: 128, tw: 'w-32 h-32' },
]

export default function TokensPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-28 md:pt-40 lg:pt-48 pb-12 md:pb-24 lg:pb-32 relative overflow-hidden bg-bg reveal">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <div className="max-w-site mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="s-label mb-6 md:mb-8 justify-center">Atomic Architecture</span>
          <h1 className="text-[clamp(2.8rem,8vw,12rem)] font-display font-bold text-white mb-6 md:mb-10 tracking-tighter leading-[0.85]">
            System <br />
            <span className="text-accent-indigo italic">Tokens.</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl lg:text-3xl max-w-3xl mx-auto font-sans leading-relaxed">
            The fundamental variables that drive every pixel of the AshirafNix ecosystem.
          </p>
        </div>
      </section>

      <div className="max-w-site mx-auto px-4 sm:px-6 pb-20 md:pb-32 lg:pb-40 space-y-16 md:space-y-28 lg:space-y-40">

        {/* ── Color palette ── */}
        <section className="reveal">
          <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Chromatic Matrix</h2>
            <div className="h-px flex-1 bg-border-subtle" />
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {colors.map(c => (
              <div key={c.name} className="glass-premium p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2.5rem] border border-border-subtle flex flex-col group">
                <div className={`w-full aspect-[2/1] rounded-xl mb-6 md:mb-10 border border-border-strong shadow-inner group-hover:scale-[1.02] transition-transform duration-500 ${c.class}`} />
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg md:text-2xl font-display font-bold text-white mb-1 md:mb-2">{c.name}</h3>
                    <p className="text-[0.6rem] sm:text-[0.65rem] font-mono text-slate-500 uppercase tracking-widest font-black">{c.use}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs sm:text-sm font-mono text-white/50 block mb-1 md:mb-2">{c.hex}</span>
                    <span className="text-[0.55rem] sm:text-[0.6rem] font-mono text-accent-indigo font-black bg-accent-indigo/5 px-2 py-1 rounded border border-accent-indigo/20">{c.var}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Typography ── */}
        <section className="reveal">
          <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Typography Protocols</h2>
            <div className="h-px flex-1 bg-border-subtle" />
          </div>
          <div className="space-y-6 md:space-y-10 lg:space-y-12">
            {typography.map(t => (
              <div key={t.name} className="glass-premium p-6 sm:p-10 lg:p-16 rounded-2xl sm:rounded-[2.5rem] lg:rounded-[3rem] border border-border-subtle hover:border-accent-indigo/20 transition-all duration-700">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 md:gap-10 lg:gap-16 items-end">
                  <div>
                    <span className="text-[0.65rem] sm:text-[0.7rem] font-mono text-accent-indigo font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] block mb-4 md:mb-6">{t.role}</span>
                    <h3 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-2 md:mb-4">{t.name}</h3>
                    <p className="text-slate-500 font-sans tracking-widest uppercase text-xs sm:text-sm font-bold">{t.weights}</p>
                  </div>
                  <div className="border-t lg:border-t-0 lg:border-l border-border-subtle pt-6 lg:pt-0 lg:pl-10 xl:pl-16">
                    <p className={`text-xl sm:text-3xl md:text-5xl lg:text-7xl text-white tracking-tighter mb-4 md:mb-8 leading-none ${t.class}`}>
                      Aa Bb Cc Dd Ee Ff 0123
                    </p>
                    <span className="text-[0.6rem] sm:text-[0.65rem] font-mono text-slate-700 uppercase tracking-widest font-black">Context: {t.use}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Motion tokens ── */}
        <section className="reveal">
          <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Motion &amp; Timing</h2>
            <div className="h-px flex-1 bg-border-subtle" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {motionTokens.map(m => (
              <div key={m.name} className="glass-premium p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2.5rem] border border-border-subtle group">
                <div className="h-2 w-full bg-white/5 rounded-full mb-6 md:mb-8 overflow-hidden">
                  <div className="h-full w-1/3 bg-accent-indigo group-hover:w-full transition-all duration-1000" style={{ transitionTimingFunction: m.curve }} />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 md:mb-4">{m.name}</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex justify-between text-[0.55rem] sm:text-[0.6rem] font-mono uppercase tracking-widest">
                    <span className="text-slate-600">Curve</span>
                    <span className="text-accent-indigo-bright font-black">{m.name === 'Reveal' ? 'Custom' : m.curve}</span>
                  </div>
                  <div className="flex justify-between text-[0.55rem] sm:text-[0.6rem] font-mono uppercase tracking-widest">
                    <span className="text-slate-600">Duration</span>
                    <span className="text-white">{m.duration}</span>
                  </div>
                  <p className="text-xs text-slate-500 font-sans pt-3 md:pt-4 border-t border-border-subtle">{m.use}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Structural scale ── */}
        <section className="reveal">
          <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Structural Scale</h2>
            <div className="h-px flex-1 bg-border-subtle" />
          </div>
          <div className="glass-premium p-5 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-3xl lg:rounded-[4rem] border border-border-subtle shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 lg:gap-16 mb-10 md:mb-16 lg:mb-20">
              {[
                { label: 'Base Unit',  val: '4px',    desc: 'Atomic grid basis'  },
                { label: 'Standard',   val: '8px',    desc: 'Primary alignment'  },
                { label: 'Container',  val: '1440px', desc: 'Maximum viewport'   },
                { label: 'Radius',     val: '2.5rem', desc: 'Softened geometry'  },
              ].map(s => (
                <div key={s.label}>
                  <span className="text-[0.6rem] sm:text-[0.65rem] font-mono text-slate-600 uppercase tracking-widest block mb-2 md:mb-3 font-black">{s.label}</span>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tighter block mb-1 md:mb-2">{s.val}</span>
                  <span className="text-[0.55rem] sm:text-[0.6rem] text-slate-500 font-sans italic">{s.desc}</span>
                </div>
              ))}
            </div>
            <div className="h-px bg-border-subtle" />
            <div className="mt-8 md:mt-12 lg:mt-16 flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-end">
              {spacingScale.map(item => (
                <div key={item.px} className="flex flex-col items-center gap-3 md:gap-6 group">
                  <div className={`bg-accent-indigo/10 border border-accent-indigo/20 rounded-lg md:rounded-xl group-hover:bg-accent-indigo transition-all duration-700 ${item.tw}`} />
                  <span className="text-[0.6rem] sm:text-[0.65rem] font-mono text-slate-700 font-bold">{item.px}px</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}
