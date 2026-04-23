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
      { name: 'Next.js 14+', level: 98, detail: 'App Router / Server Components', status: 'Optimal', Logo: NextJsLogo },
      { name: 'React 18', level: 95, detail: 'Concurrent Rendering / Hooks', status: 'Stable', Logo: ReactLogo },
      { name: 'Tailwind CSS', level: 100, detail: 'Design Tokens / Utility First', status: 'Optimal', Logo: TailwindLogo },
    ],
  },
  {
    zone: 'Backend & Logic',
    items: [
      { name: 'TypeScript', level: 96, detail: 'Strict Type Safety / Interface Design', status: 'Strict', Logo: TypeScriptLogo },
      { name: 'Node.js', level: 90, detail: 'Edge Runtimes / Async Patterns', status: 'Active', Logo: NodeJsLogo },
      { name: 'PostgreSQL', level: 85, detail: 'Relational Integrity / JSONB', status: 'Stable', Logo: PostgresLogo },
    ],
  },
  {
    zone: 'Deployment & Ops',
    items: [
      { name: 'AWS', level: 92, detail: 'Edge Functions / Global CDN', status: 'Live', Logo: AWSLogo },
      { name: 'Docker', level: 80, detail: 'Containerization / Portable Env', status: 'Active', Logo: DockerLogo },
      { name: 'GitHub', level: 98, detail: 'CI/CD Pipelines / Version Control', status: 'Master', Logo: GitHubLogo },
    ],
  },
]

export default function StackPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="pt-48 pb-32 relative overflow-hidden bg-[#020617] reveal">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <div className="max-w-site mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-end">
            <div>
              <span className="s-label mb-6">Engine Room</span>
              <h1 className="text-7xl md:text-[10rem] font-display font-bold text-white mb-10 tracking-tighter leading-[0.85]">
                 System <br /><span className="text-indigo-500 italic">Architecture.</span>
              </h1>
              <p className="text-slate-400 text-xl md:text-3xl max-w-2xl font-sans leading-relaxed">
                A high-performance technical foundation built on industry-standard protocols.
              </p>
            </div>
            <div className="hidden lg:block pb-10">
               <div className="glass-premium p-10 rounded-[2.5rem] border-white/5">
                  <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                     <span className="text-[0.6rem] font-mono text-slate-500 uppercase tracking-widest font-bold">Health Monitor</span>
                     <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[0.6rem] font-mono text-emerald-500 font-bold">STABLE</span>
                     </span>
                  </div>
                  <div className="space-y-4">
                     {[
                       { label: 'Latency', val: '24ms' },
                       { label: 'Uptime', val: '99.9%' },
                       { label: 'Nodes', val: 'Global' }
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
      <div className="max-w-site mx-auto px-6 space-y-40 pb-60">
        {techStack.map((zone, idx) => (
          <section key={zone.zone} className="reveal">
            <div className="flex items-center gap-8 mb-20">
               <span className="text-6xl md:text-8xl font-display font-black text-white/[0.03] select-none">
                 0{idx + 1}
               </span>
               <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight">
                 {zone.zone}
               </h2>
               <div className="h-px flex-1 bg-white/5" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {zone.items.map(item => (
                <div key={item.name} className="glass-premium p-10 rounded-[3rem] border-white/5 group hover:border-indigo-500/30 transition-all duration-700 shadow-2xl">
                   <div className="flex justify-between items-start mb-16">
                      <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-inner">
                        <item.Logo size={32} />
                      </div>
                      <span className="text-[0.55rem] font-mono text-indigo-500 font-bold border border-indigo-500/20 px-3 py-1.5 rounded-full uppercase tracking-widest bg-indigo-500/5">
                        {item.status}
                      </span>
                   </div>
                   
                   <h3 className="text-3xl font-display font-bold text-white mb-2">{item.name}</h3>
                   <p className="text-slate-500 text-sm font-sans mb-12 leading-relaxed max-w-[240px]">{item.detail}</p>
                   
                   <div className="space-y-4 pt-6 border-t border-white/5">
                      <div className="flex justify-between items-end">
                         <span className="text-[0.6rem] font-mono text-slate-700 uppercase tracking-[0.2em] font-black">Proficiency</span>
                         <span className="text-xs font-mono text-white/80">{item.level}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                         <div 
                           className="h-full bg-indigo-500 transition-all duration-1000 group-hover:bg-indigo-400" 
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

      {/* ── DEEP INFRASTRUCTURE BLUEPRINT ── */}
      <section className="py-40 bg-white/[0.01] border-y border-white/5 reveal">
         <div className="max-w-site mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
               <div>
                  <span className="s-label mb-8">System Protocols</span>
                  <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-10 tracking-tighter leading-none">
                     Limitless <br /><span className="text-indigo-500 italic">Engineering.</span>
                  </h2>
                  <p className="text-slate-400 text-xl font-sans leading-relaxed mb-12">
                     Our stack is not just a collection of tools; it&apos;s a synchronized ecosystem designed for the unique constraints of the African digital landscape.
                  </p>
                  
                  <div className="space-y-8">
                     {[
                       { t: 'Atomic Stability', d: 'Predictable UI state management across complex user flows.' },
                       { t: 'Edge Propagation', d: 'Sub-second delivery via global content distribution networks.' },
                       { t: 'Type Integrity', d: 'End-to-end safety from database schema to user interface.' }
                     ].map(feat => (
                        <div key={feat.t} className="flex gap-8 group">
                           <div className="w-1 h-12 bg-indigo-500/20 group-hover:bg-indigo-500 transition-colors" />
                           <div>
                              <h4 className="text-xl font-display font-bold text-white mb-2">{feat.t}</h4>
                              <p className="text-slate-500 text-sm max-w-sm">{feat.d}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="relative">
                  <div className="absolute inset-0 bg-indigo-500/10 blur-[140px] rounded-full" />
                  <div className="relative glass-premium aspect-square rounded-full border-white/10 flex items-center justify-center group overflow-hidden">
                     <div className="absolute inset-0 grid-bg opacity-10" />
                     <div className="w-[80%] h-[80%] border-2 border-indigo-500/10 rounded-full border-dashed animate-spin-slow" />
                     
                     <div className="relative z-10 text-center">
                        <div className="w-24 h-24 rounded-3xl bg-[#020617] border border-white/10 flex items-center justify-center mb-6 mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-700">
                           <NextJsLogo size={48} />
                        </div>
                        <div className="text-2xl text-white font-display font-bold tracking-tight">Vercel Edge Node</div>
                        <div className="text-[0.6rem] font-mono text-indigo-500 font-black uppercase tracking-[0.4em] mt-2">Active_Cluster</div>
                     </div>

                     {/* Orbiting Tech Nodes */}
                     <div className="absolute top-[15%] left-[25%] w-12 h-12 rounded-2xl glass-premium border-white/10 flex items-center justify-center animate-float-slow">
                        <ReactLogo size={24} />
                     </div>
                     <div className="absolute bottom-[20%] right-[15%] w-12 h-12 rounded-2xl glass-premium border-white/10 flex items-center justify-center animate-float-slow" style={{ animationDelay: '-2s' }}>
                        <TypeScriptLogo size={24} />
                     </div>
                     <div className="absolute top-[40%] right-[5%] w-10 h-10 rounded-xl glass-premium border-white/10 flex items-center justify-center animate-float-slow" style={{ animationDelay: '-4s' }}>
                        <TailwindLogo size={20} />
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
          { href: '/tokens', label: 'Tokens', desc: 'Shared variables across surfaces' },
          { href: '/links', label: 'Connect', desc: 'All routes, email, and socials' },
        ]}
      />

      <Footer />
    </>
  )
}
