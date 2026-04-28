import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Vault — Limitless Knowledge',
  description:
    'The technical repository of the AshirafNix practice. Deep-dives into system architecture and visual engineering.',
}

const metrics = [
  { label: 'Total Documentation', val: '1.2GB'  },
  { label: 'Asset Clusters',      val: '42'      },
  { label: 'System Uptime',       val: '99.99%'  },
  { label: 'Latency',             val: '0.34ms'  },
]

export default function LabPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="pt-28 md:pt-40 lg:pt-48 pb-12 md:pb-24 lg:pb-32 relative overflow-hidden bg-bg reveal">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <div className="max-w-site mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="s-label mb-6 md:mb-8 justify-center">Technical Vault</span>
          <h1 className="text-[clamp(2.8rem,8vw,12rem)] font-display font-bold text-white mb-6 md:mb-10 tracking-tighter leading-[0.85]">
            The <br />
            <span className="text-accent-indigo italic">Archive.</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl lg:text-3xl max-w-4xl mx-auto font-sans leading-relaxed">
            A limitless repository of visual protocols, engineering standards, and architectural research.
          </p>
        </div>
      </section>

      <div className="max-w-site mx-auto px-4 sm:px-6 space-y-16 md:space-y-28 lg:space-y-40 pb-16 md:pb-32 lg:pb-40">

        {/* ── System overview metrics ── */}
        <section className="reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-border-subtle rounded-2xl sm:rounded-[3rem] overflow-hidden">
            {metrics.map(m => (
              <div key={m.label} className="bg-bg p-6 sm:p-8 lg:p-10 flex flex-col items-center group hover:bg-white/[0.02] transition-all">
                <span className="text-[0.55rem] sm:text-[0.6rem] font-mono text-slate-700 uppercase tracking-widest font-black mb-3 md:mb-4 text-center leading-snug">{m.label}</span>
                <span className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">{m.val}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Knowledge articles ── */}
        <div className="space-y-16 md:space-y-28 lg:space-y-40">

          {/* Article 01 */}
          <article className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 md:gap-14 lg:gap-24 items-start reveal">
            <div className="bg-bg p-6 sm:p-10 md:p-16 lg:p-24 rounded-2xl sm:rounded-[3rem] lg:rounded-[4rem] border border-border-strong shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 sm:p-12 opacity-5 select-none pointer-events-none">
                <span className="text-[5rem] sm:text-[8rem] lg:text-[12rem] font-display font-black leading-none">01</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-10 md:mb-16 text-[0.65rem] sm:text-[0.7rem] font-mono text-accent-indigo font-bold uppercase tracking-[0.25em] sm:tracking-[0.4em]">
                <span>Standard_L_01</span>
                <span className="w-5 md:w-8 h-px bg-white/10" />
                <span>Visual Compression Protocol</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 md:mb-12 tracking-tighter leading-[0.88]">
                Engineering <br /><span className="text-accent-indigo italic">Pixel Hinting.</span>
              </h2>

              <div className="space-y-8 md:space-y-12 text-slate-400 font-sans text-base sm:text-lg md:text-xl leading-relaxed">
                <p>
                  Modern brand delivery requires a radical approach to pixel integrity. When assets are deployed to low-bandwidth environments (WhatsApp, Edge Caches), the underlying vector math must be optimized to survive aggressive compression algorithms.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 pt-4 md:pt-8">
                  <div className="p-5 md:p-8 bg-white/5 rounded-2xl md:rounded-3xl border border-border-subtle">
                    <h4 className="text-white font-display font-bold mb-3 md:mb-4 text-lg md:text-2xl">Mathematical Basis</h4>
                    <p className="text-sm leading-relaxed">All paths are redrawn on a 16px power-of-two grid to ensure sub-pixel alignment is never compromised.</p>
                  </div>
                  <div className="p-5 md:p-8 bg-white/5 rounded-2xl md:rounded-3xl border border-border-subtle">
                    <h4 className="text-white font-display font-bold mb-3 md:mb-4 text-lg md:text-2xl">Delivery Delta</h4>
                    <p className="text-sm leading-relaxed">Compressed assets retain 98.4% visual fidelity compared to standard vector exports.</p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-8 md:space-y-12 lg:pt-24">
              <div className="glass-premium p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2.5rem] border border-border-subtle">
                <span className="text-[0.65rem] font-mono text-slate-500 uppercase tracking-widest block mb-6 md:mb-8 font-black underline decoration-accent-indigo underline-offset-8">Protocol Details</span>
                <ul className="space-y-4 md:space-y-6">
                  {['SVG Optimization', 'ICO Mapping', 'Hinting QA', 'Miter Limit: 4.0'].map(item => (
                    <li key={item} className="flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-600">{item}</span>
                      <span className="text-emerald-500 font-bold">READY</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </article>

          {/* Article 02 */}
          <article className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 md:gap-14 lg:gap-24 items-start reveal">
            <aside className="space-y-8 md:space-y-12 lg:pt-24">
              <div className="glass-premium p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2.5rem] border border-border-subtle">
                <div className="aspect-square bg-accent-indigo/5 border border-border-subtle rounded-xl md:rounded-2xl mb-6 md:mb-8 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  <div className="w-1/2 h-1/2 border border-accent-indigo/30 rotate-45 group-hover:scale-125 group-hover:rotate-90 transition-all duration-1000" />
                </div>
                <span className="text-[0.6rem] font-mono text-slate-500 uppercase tracking-widest font-black block mb-3 md:mb-4">Geometry Node_A1</span>
                <p className="text-xs text-slate-600 leading-relaxed italic">&ldquo;Modular symmetry ensures that the identity protocol is resilient across every conceivable resolution.&rdquo;</p>
              </div>
            </aside>

            <div className="bg-bg p-6 sm:p-10 md:p-16 lg:p-24 rounded-2xl sm:rounded-[3rem] lg:rounded-[4rem] border border-border-strong shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 sm:p-12 opacity-5 select-none pointer-events-none">
                <span className="text-[5rem] sm:text-[8rem] lg:text-[12rem] font-display font-black leading-none">02</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-10 md:mb-16 text-[0.65rem] sm:text-[0.7rem] font-mono text-accent-indigo font-bold uppercase tracking-[0.25em] sm:tracking-[0.4em]">
                <span>Standard_L_02</span>
                <span className="w-5 md:w-8 h-px bg-white/10" />
                <span>Calculus of Symmetry</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 md:mb-12 tracking-tighter leading-[0.88]">
                Limitless <br /><span className="text-accent-indigo italic">Modularity.</span>
              </h2>

              <div className="space-y-6 md:space-y-8 text-slate-400 font-sans text-base sm:text-lg md:text-xl leading-relaxed">
                <p>
                  By treating the visual identity as a system of rules rather than a static image, we enable limitless scalability. Every mark is constructed from primary shapes that can be decomposed, rearranged, and expanded without losing their underlying genetic signature.
                </p>
                <p>
                  This &quot;DNA-based&quot; design approach ensures that the brand remains recognizable even when reduced to its most basic primitive state.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* ── CTA ── */}
        <section className="py-16 md:py-28 lg:py-40 relative reveal">
          <div className="relative glass-premium p-8 sm:p-16 md:p-24 lg:p-32 rounded-3xl sm:rounded-[4rem] lg:rounded-[5rem] border border-border-subtle overflow-hidden group text-center">
            <div className="absolute inset-0 bg-accent-indigo/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10">
              <span className="s-label mb-6 md:mb-10 justify-center">Scale your brand</span>
              <h3 className="text-3xl sm:text-5xl md:text-7xl lg:text-[9rem] font-display font-bold text-white mb-8 md:mb-12 tracking-tighter leading-none">
                Start <br /><span className="text-accent-indigo italic">Engineering.</span>
              </h3>
              <Link href="/contact"
                className="btn-primary px-8 sm:px-12 md:px-16 py-4 sm:py-6 md:py-8 text-base sm:text-lg md:text-2xl rounded-2xl sm:rounded-[2.5rem]">
                Connect with the Studio
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
