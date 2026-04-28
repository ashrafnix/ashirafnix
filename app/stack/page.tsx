import type { Metadata } from 'next'
import ExploreNext from '@/components/ExploreNext'
import Footer from '@/components/Footer'
import {
  NextJsLogo,
  ReactLogo,
  TailwindLogo,
  TypeScriptLogo,
  NodeJsLogo,
  PostgresLogo,
  AWSLogo,
  DockerLogo,
  GitHubLogo
} from '@/components/logos/StackLogos'

export const metadata: Metadata = {
  title: 'Engine Room — Infrastructure & Stack',
  description:
    'The technical backbone of the AshirafNix practice. High-performance stacks for African scale.',
}

const techStack = [
  {
    zone: 'Frontend Core',
    items: [
      { name: 'Next.js 14+',  level: 98, detail: 'App Router / Server Components',    status: 'Optimal', Logo: NextJsLogo     },
      { name: 'React 18',     level: 95, detail: 'Concurrent Rendering / Hooks',       status: 'Stable',  Logo: ReactLogo      },
      { name: 'Tailwind CSS', level: 100,detail: 'Design Tokens / Utility First',      status: 'Optimal', Logo: TailwindLogo   },
    ],
  },
  {
    zone: 'Backend & Logic',
    items: [
      { name: 'TypeScript',   level: 96, detail: 'Strict Type Safety / Interface Design',status: 'Strict', Logo: TypeScriptLogo },
      { name: 'Node.js',      level: 90, detail: 'Edge Runtimes / Async Patterns',      status: 'Active', Logo: NodeJsLogo     },
      { name: 'PostgreSQL',   level: 85, detail: 'Relational Integrity / JSONB',        status: 'Stable', Logo: PostgresLogo   },
    ],
  },
  {
    zone: 'Deployment & Ops',
    items: [
      { name: 'AWS',    level: 92, detail: 'Edge Functions / Global CDN',      status: 'Live',   Logo: AWSLogo    },
      { name: 'Docker', level: 80, detail: 'Containerization / Portable Env',  status: 'Active', Logo: DockerLogo },
      { name: 'GitHub', level: 98, detail: 'CI/CD Pipelines / Version Control',status: 'Master', Logo: GitHubLogo },
    ],
  },
]

export default function StackPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="pt-28 md:pt-40 lg:pt-48 pb-12 md:pb-24 lg:pb-32 relative overflow-hidden bg-bg reveal">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <div className="max-w-site mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-20 items-end">
            <div>
              <span className="s-label mb-4 md:mb-6">Engine Room</span>
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[8rem] xl:text-[10rem] font-display font-bold text-white mb-6 md:mb-10 tracking-tighter leading-[0.85]">
                System <br /><span className="text-accent-indigo italic">Architecture.</span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg md:text-xl lg:text-3xl max-w-2xl font-sans leading-relaxed">
                A high-performance technical foundation built on industry-standard protocols.
              </p>
            </div>

            {/* Health monitor — desktop only */}
            <div className="hidden lg:block pb-10">
              <div className="glass-premium p-8 lg:p-10 rounded-[2.5rem] border border-border-subtle">
                <div className="flex justify-between items-center mb-8 border-b border-border-subtle pb-4">
                  <span className="text-[0.6rem] font-mono text-slate-500 uppercase tracking-widest font-bold">Health Monitor</span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[0.6rem] font-mono text-emerald-500 font-bold">STABLE</span>
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Latency', val: '24ms'   },
                    { label: 'Uptime',  val: '99.9%'  },
                    { label: 'Nodes',   val: 'Global' }
                  ].map(s => (
                    <div key={s.label} className="flex justify-between text-xs font-mono">
                      <span className="text-slate-600">{s.label}</span>
                      <span className="text-white">{s.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STACK ZONES ── */}
      <div className="max-w-site mx-auto px-4 sm:px-6 space-y-16 md:space-y-28 lg:space-y-40 pb-20 md:pb-40 lg:pb-60">
        {techStack.map((zone, idx) => (
          <section key={zone.zone} className="reveal">
            <div className="flex items-center gap-4 md:gap-8 mb-10 md:mb-16 lg:mb-20">
              <span className="text-4xl md:text-6xl lg:text-8xl font-display font-black text-white/[0.03] select-none leading-none">
                0{idx + 1}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
                {zone.zone}
              </h2>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {zone.items.map(item => (
                <div key={item.name} className="glass-premium p-6 sm:p-8 lg:p-10 rounded-2xl md:rounded-[2.5rem] lg:rounded-[3rem] border border-border-subtle group hover:border-accent-indigo/30 transition-all duration-700 shadow-2xl">
                  <div className="flex justify-between items-start mb-8 md:mb-12 lg:mb-16">
                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-white/[0.03] border border-border-subtle flex items-center justify-center text-white group-hover:bg-accent-indigo group-hover:text-white transition-all duration-500 shadow-inner">
                      <item.Logo size={24} />
                    </div>
                    <span className="text-[0.5rem] sm:text-[0.55rem] font-mono text-accent-indigo font-bold border border-accent-indigo/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full uppercase tracking-widest bg-accent-indigo/5">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-slate-500 text-xs md:text-sm font-sans mb-8 md:mb-10 lg:mb-12 leading-relaxed">{item.detail}</p>

                  <div className="space-y-3 md:space-y-4 pt-4 md:pt-6 border-t border-border-subtle">
                    <div className="flex justify-between items-end">
                      <span className="text-[0.6rem] font-mono text-slate-700 uppercase tracking-[0.2em] font-black">Proficiency</span>
                      <span className="text-xs font-mono text-white/80">{item.level}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent-indigo transition-all duration-1000 group-hover:bg-accent-indigo-bright"
                        style={{ width: `${item.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ── BLUEPRINT SECTION ── */}
      <section className="py-16 md:py-28 lg:py-40 bg-white/[0.01] border-y border-border-subtle reveal">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-32 items-center">
            <div>
              <span className="s-label mb-6 md:mb-8">System Protocols</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 md:mb-10 tracking-tighter leading-none">
                Limitless <br /><span className="text-accent-indigo italic">Engineering.</span>
              </h2>
              <p className="text-slate-400 text-base sm:text-lg md:text-xl font-sans leading-relaxed mb-8 md:mb-12">
                Our stack is not just a collection of tools; it&apos;s a synchronized ecosystem designed for the unique constraints of the African digital landscape.
              </p>

              <div className="space-y-6 md:space-y-8">
                {[
                  { t: 'Atomic Stability', d: 'Predictable UI state management across complex user flows.' },
                  { t: 'Edge Propagation', d: 'Sub-second delivery via global content distribution networks.' },
                  { t: 'Type Integrity',   d: 'End-to-end safety from database schema to user interface.' }
                ].map(feat => (
                  <div key={feat.t} className="flex gap-5 md:gap-8 group">
                    <div className="w-1 h-10 md:h-12 bg-accent-indigo/20 group-hover:bg-accent-indigo transition-colors flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg md:text-xl font-display font-bold text-white mb-1 md:mb-2">{feat.t}</h4>
                      <p className="text-slate-500 text-sm max-w-sm">{feat.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Orbital diagram — hidden on mobile, shown sm+ */}
            <div className="relative hidden sm:block max-w-sm md:max-w-none mx-auto w-full">
              <div className="absolute inset-0 bg-accent-indigo/10 blur-[140px] rounded-full" />
              <div className="relative glass-premium aspect-square rounded-full border border-border-subtle flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-10" />
                <div className="w-[80%] h-[80%] border-2 border-accent-indigo/10 rounded-full border-dashed animate-spin-slow" />

                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 md:w-20 lg:w-24 md:h-20 lg:h-24 rounded-2xl md:rounded-3xl bg-bg border border-border-strong flex items-center justify-center mb-4 md:mb-6 mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-700">
                    <NextJsLogo size={32} />
                  </div>
                  <div className="text-lg md:text-2xl text-white font-display font-bold tracking-tight">Vercel Edge Node</div>
                  <div className="text-[0.55rem] font-mono text-accent-indigo font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mt-1 md:mt-2">Active_Cluster</div>
                </div>

                <div className="absolute top-[15%] left-[25%] w-10 h-10 md:w-12 md:h-12 rounded-2xl glass-premium border border-border-subtle flex items-center justify-center animate-float-slow">
                  <ReactLogo size={20} />
                </div>
                <div className="absolute bottom-[20%] right-[15%] w-10 h-10 md:w-12 md:h-12 rounded-2xl glass-premium border border-border-subtle flex items-center justify-center animate-float-slow" style={{ animationDelay: '-2s' }}>
                  <TypeScriptLogo size={20} />
                </div>
                <div className="absolute top-[40%] right-[5%] w-9 h-9 md:w-10 md:h-10 rounded-xl glass-premium border border-border-subtle flex items-center justify-center animate-float-slow" style={{ animationDelay: '-4s' }}>
                  <TailwindLogo size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExploreNext
        kicker="From stack to story"
        title="See the work behind the tools"
        className="reveal"
        items={[
          { href: '/brands', label: 'Systems', desc: 'Identity and product marks in context' },
          { href: '/tokens', label: 'Tokens',  desc: 'Shared variables across surfaces' },
          { href: '/links',  label: 'Connect', desc: 'All routes, email, and socials' },
        ]}
      />

      <Footer />
    </>
  )
}
