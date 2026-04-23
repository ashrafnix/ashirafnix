import type { Metadata } from 'next'
import PortfolioLogo from '@/components/PortfolioLogo'
import ExploreNext from '@/components/ExploreNext'
import Footer     from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Systems & Identity — Portfolio Archive',
  description:
    'High-performance brand identity systems and visual architecture from Kampala.',
}

interface CaseStudy {
  id:       string
  tag:      string
  name:     string
  tagline:  string
  problem:  string
  solution: string
  outcome:  string
  pills:    string[]
  asset:    string
  stats:    { label: string; value: string }[]
  coordinates: string[]
  specs:    { label: string; value: string }[]
  log:      string[]
}

const cases: CaseStudy[] = [
  {
    id:      'momo-stack',
    tag:     'Fintech · Architecture',
    name:    'MoMo Stack',
    tagline: 'Engineering Trust in Payment Flow',
    problem:
      'Startups building on MoMo APIs lacked a visual trust signal. Enterprise clients saw missing or low-res marks as a security risk.',
    solution:
      'We engineered a 45° geometric mark. Every stroke is aligned to an 8px grid, ensuring pixel-perfect rendering across all dashboard resolutions.',
    outcome:
      'A robust SVG-first system that handles scaling from 16px to 10m without loss of structural integrity.',
    pills:  ['8px Grid System', 'SVG Optimization', 'React Wrapper', 'ICO Delivery'],
    asset:  'momo',
    stats: [
      { label: 'Weight', value: '1.74kb' },
      { label: 'Grid', value: '8px' },
      { label: 'Ratio', value: '1:1' },
    ],
    coordinates: ['45.00°', 'x:120.5', 'y:44.2', 'z:1.0'],
    specs: [
      { label: 'Primary Path', value: 'M12,4 L20,20 L4,20 Z' },
      { label: 'Stroke Weight', value: '2.5pt' },
      { label: 'Join Type', value: 'Miter' }
    ],
    log: [
      'LOAD_ASSET: MOMO_V2',
      'VALIDATING_GRID: 8px_SNAP',
      'ENCODING_PROTOCOLS: HSL_CORE',
      'STATUS: OPTIMAL'
    ]
  },
  {
    id:      'nexus-intelligence',
    tag:     'Security · Enterprise',
    name:    'Nexus Systems',
    tagline: 'Security through Geometric Precision',
    problem:
      'Cybersecurity platforms require an aesthetic of absolute authority. Nexus needed to look as secure as their encryption protocols.',
    solution:
      'Derived a hexagonal node-network from cryptographic patterns. Balanced for dark-mode command centers and high-contrast printed reports.',
    outcome:
      'Universal identity active across AWS-hosted dashboards and global investor documentation.',
    pills:  ['Node Theory', 'Dark UI QA', 'Vector Logic', 'System Scale'],
    asset:  'nexus',
    stats: [
      { label: 'Basis', value: 'Hex' },
      { label: 'Stroke', value: '1.5pt' },
      { label: 'Load', value: 'O(1)' },
    ],
    coordinates: ['60.00°', 'x:88.4', 'y:12.8', 'w:44.0'],
    specs: [
      { label: 'Node Count', value: '06' },
      { label: 'Connection', value: 'Linear' },
      { label: 'Grid Basis', value: 'Hex' }
    ],
    log: [
      'INIT_SECURITY_LAYER',
      'PING_NODE_NETWORK: 6_ACTIVE',
      'HEX_GRID_ALIGNED: OK',
      'ENCRYPTING_VISUALS...'
    ]
  },
  {
    id:      'endiro-beans',
    tag:     'Retail · Coffee Identity',
    name:    'Endiro Beans',
    tagline: 'Visual Integrity in Low-Bandwidth Markets',
    problem:
      'Specialty coffee brands in Uganda rely on WhatsApp for B2B sales. Standard logos often compress into unreadable artifacts.',
    solution:
      'Constructed a high-contrast botanical system. We pixel-hinted the mobile variants to survive extreme JPEG/WebP compression.',
    outcome:
      'A luxury mark that retains its premium status even in the world&apos;s most compressed digital environments.',
    pills:  ['Compression Test', 'Pixel Hinting', 'Mobile Optimization', 'EPS Delivery'],
    asset:  'endiro',
    stats: [
      { label: 'Min-Res', value: '16px' },
      { label: 'Target', value: 'Mobile' },
      { label: 'Type', value: 'Vector' },
    ],
    coordinates: ['90.00°', 'x:210.0', 'y:88.2', 'h:32.0'],
    specs: [
      { label: 'Contrast', value: 'High' },
      { label: 'Hinting', value: 'Manual' },
      { label: 'QA', value: 'WhatsApp' }
    ],
    log: [
      'LOAD_ASSET: ENDIRO_BOTANIC',
      'MOBILE_OPTIMIZATION: 16px_HINT',
      'BANDWIDTH_TEST: PASSED',
      'FIDELITY: 98.4%'
    ]
  },
]

export default function BrandsPage() {
  return (
    <>
      <section className="pt-48 pb-32 relative overflow-hidden bg-[#020617] reveal">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <div className="max-w-site mx-auto px-6 relative z-10 text-center">
          <span className="s-label mb-8">System Archive</span>
          <h1 className="text-[clamp(4rem,10vw,12rem)] font-display font-bold text-white mb-10 tracking-tighter leading-[0.8]">
             Visual <br />
             <span className="text-indigo-500 italic">Engineering.</span>
          </h1>
          <p className="text-slate-400 text-xl md:text-3xl max-w-4xl mx-auto font-sans leading-relaxed">
            Limitless identity protocols built for East Africa&apos;s most ambitious technical infrastructure.
          </p>
        </div>
      </section>

      <div className="max-w-site mx-auto px-6 space-y-80 pb-60">
        {cases.map((c, idx) => (
          <article key={c.id} className="group relative reveal">
            <div className="absolute -top-40 -left-20 text-[25rem] font-display font-black text-white/[0.02] leading-none pointer-events-none select-none">
               0{idx + 1}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-32 items-center">
              
              <div className="relative">
                 {/* Real-time Metadata Hub */}
                 <div className="absolute -top-12 left-0 right-0 flex justify-between px-10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    <div className="flex gap-4">
                       {c.coordinates.map(coord => (
                          <span key={coord} className="text-[0.55rem] font-mono text-indigo-500 font-black bg-indigo-500/5 px-3 py-1.5 border border-indigo-500/20 rounded-full">
                            {coord}
                          </span>
                       ))}
                    </div>
                    <span className="text-[0.55rem] font-mono text-slate-700 font-black uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                       Asset_Ref: {c.id}
                    </span>
                 </div>

                 <div className="relative glass-premium aspect-video rounded-[4rem] border-white/10 flex items-center justify-center overflow-hidden group-hover:border-indigo-500/40 transition-all duration-1000 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 grid-bg opacity-20" />
                    <div className="absolute inset-0 border-[0.5px] border-white/5 m-16 rounded-[2.5rem] pointer-events-none" />
                    
                    {/* Measurement Protocol Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none">
                       <div className="w-full h-px bg-white absolute top-1/2" />
                       <div className="h-full w-px bg-white absolute left-1/2" />
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square border border-white rounded-full border-dashed" />
                    </div>

                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-1000 filter drop-shadow-[0_0_80px_rgba(99,102,241,0.3)]">
                       <PortfolioLogo asset={c.asset} size={320} priority={false} />
                    </div>

                    {/* System Log Snippet */}
                    <div className="absolute bottom-12 left-12 space-y-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300">
                       {c.log.map((line, i) => (
                          <div key={i} className="flex gap-3 items-center">
                             <div className="w-1 h-1 bg-indigo-500 rounded-full" />
                             <span className="text-[0.55rem] font-mono text-white/40 uppercase tracking-widest">{line}</span>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="flex flex-col">
                <span className="text-[0.7rem] font-mono text-indigo-500 font-black uppercase tracking-[0.5em] mb-10">
                  {c.tag}
                </span>
                <h2 className="text-6xl md:text-9xl font-display font-bold text-white mb-12 tracking-tighter leading-[0.85]">
                  {c.name}
                </h2>
                
                <div className="space-y-16 border-l-2 border-white/5 pl-12 mb-16">
                   <div className="grid grid-cols-1 gap-6">
                      {c.specs.map(s => (
                         <div key={s.label} className="flex items-center justify-between py-4 border-b border-white/5 group/spec">
                            <span className="text-[0.6rem] font-mono text-slate-700 uppercase tracking-widest font-black group-hover/spec:text-indigo-500 transition-colors">{s.label}</span>
                            <span className="text-[0.65rem] font-mono text-white/60 font-bold">{s.value}</span>
                         </div>
                      ))}
                   </div>

                  <p className="text-slate-400 font-sans leading-relaxed text-xl md:text-2xl max-w-lg">
                    {c.solution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  {c.pills.map(p => (
                    <span key={p} className="px-6 py-4 rounded-[2rem] bg-white/[0.03] border border-white/10 text-slate-500 text-[0.7rem] font-black uppercase tracking-[0.2em] hover:border-indigo-500/50 hover:text-white transition-all cursor-default">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <ExploreNext
        kicker="After the archive"
        title="What comes next"
        subtitle="Layer in technical research, the stack narrative, or open a project thread."
        className="reveal"
        items={[
          { href: '/stack', label: 'Engine room', desc: 'How this work is built and deployed' },
          { href: '/lab', label: 'Knowledge', desc: 'Deeper writing on process and systems' },
          { href: '/contact', label: 'Consultation', desc: 'Bring a new system into production' },
        ]}
      />

      <Footer />
    </>
  )
}
