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
    ]
  },
  {
    id:      'summit',
    tag:     'Enterprise · Operations',
    name:    'Summit',
    tagline: 'Structural Topology for Impact',
    problem:
      'Corporate operations tools required an overarching identity that was fluid enough to express motion but structural enough to convey stability.',
    solution:
      'We engineered an interlocking path protocol, visualizing synergy and precision without resorting to basic corporate iconography.',
    outcome:
      'A scalable visual system that adapts perfectly across enterprise environments, maintaining integrity from 32px to 20m.',
    pills:  ['Path Topology', 'Scalable Vector', 'Enterprise UI', 'Global Reach'],
    asset:  'summit',
    stats: [
      { label: 'Weight', value: '2.10kb' },
      { label: 'Load', value: 'O(1)' },
      { label: 'Target', value: 'B2B' },
    ],
    coordinates: ['0.00°', 'x:45.0', 'y:90.0', 'z:1.0'],
    specs: [
      { label: 'Core Geometry', value: 'Linear' },
      { label: 'Structure', value: 'Interlocked' },
      { label: 'Alignment', value: 'Center' }
    ],
    log: [
      'LOAD_ASSET: SUMMIT_SYS',
      'VALIDATING_TOPOLOGY: OK',
      'MOTION_CALC: OPTIMAL',
      'STATUS: DEPLOYED'
    ]
  },
  {
    id:      'empire',
    tag:     'Hospitality · Nightlife',
    name:    'Empire Club',
    tagline: 'Luxury Illuminated in Darkness',
    problem:
      'Premium nightlife environments need branding that anchors pure light inside low-visibility, high-energy physical spaces.',
    solution:
      'Modeled an emission-friendly typographic aesthetic that thrives natively as glowing signage and premium digital passes.',
    outcome:
      'A robust neon-ready visual language holding its distinct structural weight in complete physical and digital darkness.',
    pills:  ['Emission Core', 'Dark-Mode UI', 'Neon Protocol', 'Luxury Spec'],
    asset:  'empire',
    stats: [
      { label: 'Lighting', value: 'Emission' },
      { label: 'Env', value: 'Zero-Lux' },
      { label: 'Contrast', value: 'Max' },
    ],
    coordinates: ['180.00°', 'x:120.0', 'y:75.2', 'z:2.0'],
    specs: [
      { label: 'Alpha Layer', value: 'Active' },
      { label: 'Glow Radius', value: '40px' },
      { label: 'Contrast', value: '100%' }
    ],
    log: [
      'LOAD_ASSET: EMPIRE_NEON',
      'CALIBRATING_EMISSION',
      'NIGHT_MODE: ACTIVE',
      'STATUS: OPTIMAL'
    ]
  },
  {
    id:      'fashion',
    tag:     'Apparel · Editorial',
    name:    'Fashion Brand',
    tagline: 'Typographic Restraint for Aesthetics',
    problem:
      'High-end apparel lines require an invisible structural identity that allows seasonal photography to command the foreground.',
    solution:
      'Authored a minimalist, hairline-weight mark operating strictly on foundational grids, eliminating unnecessary visual noise.',
    outcome:
      'An elegant signature system that seamlessly frames global collections instead of competing visually with the textiles.',
    pills:  ['Hairline Weight', 'Variable Font', 'Grid Anchor', 'Editorial'],
    asset:  'fashion',
    stats: [
      { label: 'Weight', value: '700ir' },
      { label: 'Kerning', value: '-2%' },
      { label: 'Baseline', value: 'Snap' },
    ],
    coordinates: ['90.00°', 'x:72.5', 'y:12.4', 'z:0.0'],
    specs: [
      { label: 'Font Weight', value: '300' },
      { label: 'Tracking', value: 'Tight' },
      { label: 'Scale', value: 'Fluid' }
    ],
    log: [
      'LOAD_ASSET: FASHION_HAIRLINE',
      'ALIGN_BASELINE: 100%',
      'NOISE_REDUCTION: MAX',
      'STATUS: DEPLOYED'
    ]
  },
]

export default function BrandsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-24 lg:pb-32 relative overflow-hidden bg-bg reveal">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <div className="max-w-site mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="s-label mb-6 md:mb-8 justify-center">System Archive</span>
          <h1 className="text-[clamp(2.8rem,8vw,12rem)] font-display font-bold text-white mb-6 md:mb-10 tracking-tighter leading-[0.85]">
            Visual <br />
            <span className="text-accent-indigo italic">Engineering.</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl lg:text-3xl max-w-4xl mx-auto font-sans leading-relaxed">
            Limitless identity protocols built for East Africa&apos;s most ambitious technical infrastructure.
          </p>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <div className="max-w-site mx-auto px-4 sm:px-6 space-y-24 sm:space-y-40 lg:space-y-56 pb-24 lg:pb-40">
        {cases.map((c, idx) => (
          <article key={c.id} className="group relative reveal">
            {/* Background index number — clipped so it can't cause overflow */}
            <div className="absolute -top-10 -left-4 text-[6rem] sm:text-[10rem] lg:text-[18rem] font-display font-black text-white/[0.02] leading-none pointer-events-none select-none overflow-hidden max-w-full">
              0{idx + 1}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-20 xl:gap-32 items-center">

              {/* ── Logo canvas ── */}
              <div className="relative">
                {/* Metadata strip — desktop hover only */}
                <div className="hidden lg:flex absolute -top-10 left-0 right-0 items-center justify-between px-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                  <div className="flex gap-3 flex-wrap">
                    {c.coordinates.map(coord => (
                      <span key={coord} className="text-[0.55rem] font-mono text-accent-indigo font-black bg-accent-indigo/5 px-3 py-1.5 border border-accent-indigo/20 rounded-full">
                        {coord}
                      </span>
                    ))}
                  </div>
                  <span className="text-[0.55rem] font-mono text-slate-700 font-black uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-border-subtle">
                    Asset_Ref: {c.id}
                  </span>
                </div>

                <div className="relative glass-premium aspect-video rounded-2xl sm:rounded-[2.5rem] lg:rounded-[4rem] border border-border-subtle flex items-center justify-center overflow-hidden group-hover:border-accent-indigo/40 transition-all duration-1000 shadow-card-hover">
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  <div className="absolute inset-0 border-[0.5px] border-border-subtle m-6 sm:m-10 lg:m-16 rounded-2xl pointer-events-none" />

                  {/* Measurement overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none">
                    <div className="w-full h-px bg-white absolute top-1/2" />
                    <div className="h-full w-px bg-white absolute left-1/2" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square border border-white rounded-full border-dashed" />
                  </div>

                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-1000 filter drop-shadow-[0_0_60px_rgba(99,102,241,0.3)] p-4">
                    <PortfolioLogo
                      asset={c.asset}
                      size={Math.min(220, 320)}
                      priority={false}
                    />
                  </div>

                  {/* System log — desktop only */}
                  <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-10 space-y-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300 hidden sm:block">
                    {c.log.map((line, i) => (
                      <div key={i} className="flex gap-3 items-center">
                        <div className="w-1 h-1 bg-accent-indigo rounded-full" />
                        <span className="text-[0.5rem] sm:text-[0.55rem] font-mono text-white/40 uppercase tracking-widest">{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Info panel ── */}
              <div className="flex flex-col mt-4 lg:mt-0">
                <span className="text-[0.65rem] sm:text-[0.7rem] font-mono text-accent-indigo font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] mb-6 md:mb-10">
                  {c.tag}
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-display font-bold text-white mb-8 md:mb-12 tracking-tighter leading-[0.88]">
                  {c.name}
                </h2>

                <div className="space-y-8 md:space-y-10 border-l-2 border-border-subtle pl-4 sm:pl-8 lg:pl-12 mb-8 md:mb-12 lg:mb-16">
                  <div className="grid grid-cols-1 gap-4 md:gap-6">
                    {c.specs.map(s => (
                      <div key={s.label} className="flex items-center justify-between py-3 border-b border-border-subtle group/spec">
                        <span className="text-[0.6rem] font-mono text-slate-700 uppercase tracking-widest font-black group-hover/spec:text-accent-indigo transition-colors">{s.label}</span>
                        <span className="text-[0.65rem] font-mono text-white/60 font-bold">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-400 font-sans leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl max-w-lg">
                    {c.solution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                  {c.pills.map(p => (
                    <span key={p} className="px-3 sm:px-5 py-2 sm:py-3 rounded-full bg-white/[0.03] border border-border-strong text-slate-500 text-[0.6rem] sm:text-[0.7rem] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:border-accent-indigo/50 hover:text-white transition-all cursor-default">
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
          { href: '/stack',   label: 'Engine room',  desc: 'How this work is built and deployed' },
          { href: '/lab',     label: 'Knowledge',    desc: 'Deeper writing on process and systems' },
          { href: '/contact', label: 'Consultation', desc: 'Bring a new system into production' },
        ]}
      />

      <Footer />
    </>
  )
}
