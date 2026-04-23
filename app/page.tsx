import Image from 'next/image'
import Link from 'next/link'
import ashrafnixHero from '@/assets/ashrafnix hero.png'
import Footer from '@/components/Footer'
import ExploreNext from '@/components/ExploreNext'
import PortfolioLogo from '@/components/PortfolioLogo'
import Testimonials from '@/components/Testimonials'
import TechStack from '@/components/TechStack'
import ProcessTimeline from '@/components/ProcessTimeline'
import MetricsDashboard from '@/components/MetricsDashboard'
import AnimatedStats from '@/components/AnimatedStats'
import FAQ from '@/components/FAQ'
import Awards from '@/components/Awards'
import Newsletter from '@/components/Newsletter'

const stats = [
  { num: '8+',   label: 'Brand Systems', icon: '✦', detail: 'Built for enterprise scale', color: 'indigo' },
  { num: '24ms', label: 'Avg Latency',   icon: '⚡', detail: 'Edge-optimized delivery', color: 'amber' },
  { num: '98%',  label: 'Optimization',  icon: '⚙', detail: 'Vector path precision', color: 'emerald' },
]

export default function Home() {
  return (
    <>
      {/* ── SYSTEM METADATA STRIP ── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-10 bg-[#020617] border-b border-white/5 flex items-center px-6 justify-between pointer-events-none md:flex hidden">
         <div className="flex gap-8">
            <span className="text-[0.55rem] font-mono text-slate-600 uppercase tracking-[0.2em]">Status: Production_Stable</span>
            <span className="text-[0.55rem] font-mono text-slate-600 uppercase tracking-[0.2em]">Node: Kampala_UG</span>
         </div>
         <div className="flex gap-8">
            <span className="text-[0.55rem] font-mono text-indigo-500/50 uppercase tracking-[0.2em]">Architecture: Next.js_14</span>
            <span className="text-[0.55rem] font-mono text-slate-600 uppercase tracking-[0.2em]">v2.4.0</span>
         </div>
      </div>

      {/* ─────────── HERO ─────────── */}
      <section className="relative isolate min-h-screen overflow-hidden pt-24 pb-14 md:pt-32 md:pb-20">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_15%,rgba(99,102,241,0.2),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(234,179,8,0.16),transparent_38%),linear-gradient(180deg,#020617_0%,#020617_45%,#01030a_100%)]" />
        <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
        <div className="pointer-events-none absolute -left-28 top-16 h-72 w-72 rounded-full bg-indigo-500/30 blur-[110px]" />
        <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-amber-500/25 blur-[120px]" />

        <div className="max-w-site mx-auto w-full px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-24">
            <div className="space-y-8 md:space-y-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400/70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                </span>
                <span className="text-[0.62rem] font-mono uppercase tracking-[0.22em] text-slate-300">
                  Main_App: Cinematic Mode
                </span>
              </div>

              <h1 className="max-w-4xl text-[clamp(2.6rem,8vw,8.2rem)] font-display font-bold leading-[0.84] tracking-[-0.04em] text-white">
                Build products with
                <span className="block bg-gradient-to-r from-amber-200 via-amber-400 to-indigo-300 bg-clip-text text-transparent">
                  presence and power.
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
                A high-impact digital flagship engineered for speed, taste, and conversion. Every fold is designed to feel premium before a single word is read.
              </p>

              <div className="flex flex-wrap items-center gap-4 md:gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-2xl border border-indigo-300/30 bg-gradient-to-r from-indigo-500 to-indigo-600 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_10px_35px_rgba(79,70,229,0.45)] transition-all duration-500 hover:-translate-y-0.5 hover:from-indigo-400 hover:to-indigo-500 hover:shadow-[0_14px_42px_rgba(99,102,241,0.55)] md:px-10 md:py-5"
                >
                  Start Project
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/brands"
                  className="inline-flex items-center rounded-2xl border border-white/20 bg-white/[0.03] px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-slate-100 backdrop-blur-md transition-all duration-500 hover:border-amber-300/45 hover:bg-white/[0.07] hover:text-white md:px-10 md:py-5"
                >
                  View Systems
                </Link>
              </div>

              <div className="grid max-w-xl grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-md">
                {[
                  ['24ms', 'Latency'],
                  ['8+', 'Brand Systems'],
                  ['98%', 'Optimization'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-white/5 bg-black/20 px-3 py-3 text-center">
                    <p className="text-lg font-bold tracking-tight text-amber-300">{value}</p>
                    <p className="text-[0.62rem] font-mono uppercase tracking-[0.18em] text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[500px] lg:max-w-none">
              <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-amber-400/20 via-indigo-500/15 to-transparent blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-black/30 shadow-[0_25px_80px_rgba(0,0,0,0.65)]">
                <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(2,6,23,0)_50%,rgba(2,6,23,0.7)_100%)]" />
                <div className="absolute left-1/2 top-0 z-20 h-48 w-px -translate-x-1/2 bg-gradient-to-b from-amber-300 via-amber-200/40 to-transparent" />
                <Image
                  src={ashrafnixHero}
                  alt="AshrafNix cinematic hero artwork"
                  priority
                  className="h-auto w-full object-cover transition-transform duration-1000 hover:scale-[1.015]"
                />
                <div className="absolute inset-x-4 bottom-4 z-20 flex items-center justify-between gap-3 sm:inset-x-5 sm:bottom-5">
                  <span className="rounded-full border border-white/20 bg-black/55 px-3 py-1.5 text-[0.55rem] font-mono uppercase tracking-[0.18em] text-slate-200 backdrop-blur-md sm:text-[0.6rem]">
                    Kampala, UG
                  </span>
                  <span className="rounded-full border border-amber-300/40 bg-black/55 px-3 py-1.5 text-[0.55rem] font-mono uppercase tracking-[0.2em] text-amber-300 backdrop-blur-md sm:text-[0.6rem]">
                    Premium Build
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── IDENTITY SHOWCASE ─────────── */}
      <section className="py-20 md:py-32 lg:py-40 relative overflow-hidden bg-white/[0.02] reveal">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-24 lg:mb-32 gap-8 md:gap-12">
            <div className="max-w-2xl">
               <span className="s-label">Visual Protocols</span>
               <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-4 md:mb-6">
                 Engineering <br /><span className="text-indigo-500 italic">Excellence.</span>
               </h2>
               <p className="text-slate-500 text-base md:text-lg lg:text-xl font-sans leading-relaxed">Robust design systems for Africa&apos;s mission-critical products.</p>
            </div>
            <Link href="/brands" className="group flex items-center gap-4 text-[0.65rem] font-mono font-bold text-slate-500 hover:text-white transition-all uppercase tracking-[0.4em] pb-4 border-b border-white/10 whitespace-nowrap">
               Access Vault <span className="transform group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl md:rounded-[4rem] overflow-hidden">
             {[
               { name: 'MoMo Stack', tag: 'Infrastructure', asset: 'momo', code: '45.00°', desc: 'Mobile money payment gateway' },
               { name: 'Nexus Intel', tag: 'Security', asset: 'nexus-horizontal', code: '60.00°', desc: 'Cybersecurity platform', wide: true },
               { name: 'Endiro Beans', tag: 'Retail', asset: 'endiro', code: '90.00°', desc: 'Specialty coffee brand' },
             ].map((b, idx) => (
               <div key={b.name} className="bg-[#020617] p-10 md:p-12 lg:p-16 flex flex-col items-center justify-center group hover:bg-white/[0.03] transition-all duration-700 relative min-h-[320px] md:min-h-[380px]">
                  <div className="absolute top-6 md:top-10 right-6 md:right-10 text-[0.55rem] font-mono text-slate-800 font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    Asset_ID: {b.code}
                  </div>
                  <div className={`relative mb-10 md:mb-12 lg:mb-16 transform group-hover:scale-105 transition-all duration-1000 ${b.wide ? 'w-full max-w-[200px] md:max-w-[240px]' : ''}`}>
                     <div className="absolute -inset-16 bg-indigo-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                     <PortfolioLogo asset={b.asset} size={b.wide ? 240 : 120} priority={idx === 0} />
                  </div>
                  <div className="text-center">
                    <span className="text-[0.6rem] md:text-[0.65rem] font-mono text-indigo-500 font-bold uppercase tracking-[0.3em] block mb-3 md:mb-4 opacity-40 group-hover:opacity-100 transition-opacity">
                      {b.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight leading-none mb-2">{b.name}</h3>
                    <p className="text-slate-600 text-sm font-sans">{b.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ─────────── BLUEPRINT SHOWCASE ─────────── */}
      <section className="py-20 md:py-32 lg:py-40 relative overflow-hidden reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24 lg:mb-32">
            <span className="s-label justify-center">Technical Documentation</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-4 md:mb-6">
              System <span className="text-indigo-500 italic">Blueprints.</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg lg:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
              Engineering-grade technical specifications and architectural diagrams.
            </p>
          </div>

          {/* Full-width blueprint cards */}
          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            {[
              { name: 'Nexus Intelligence Systems', asset: 'nexus-blueprint', tag: 'Cybersecurity Platform', desc: 'Complete system architecture and security infrastructure blueprint' },
              { name: 'Summit', asset: 'summit-blueprint', tag: 'Enterprise Solution', desc: 'Enterprise-grade technical specifications and deployment architecture' },
            ].map((blueprint, idx) => (
              <div key={blueprint.name} className="group relative">
                <div className="glass-premium rounded-2xl md:rounded-3xl lg:rounded-[4rem] border-white/5 overflow-hidden hover:border-indigo-500/30 transition-all duration-700 relative">
                  {/* Header */}
                  <div className="p-6 md:p-8 lg:p-10 border-b border-white/5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <span className="text-[0.6rem] md:text-[0.65rem] font-mono text-indigo-500 font-bold uppercase tracking-[0.3em] block mb-2">
                          {blueprint.tag}
                        </span>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-none group-hover:text-indigo-400 transition-colors">
                          {blueprint.name}
                        </h3>
                      </div>
                      <div className="text-[0.55rem] font-mono text-slate-600 uppercase tracking-widest">
                        Technical Diagram #{String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm md:text-base mt-3 md:mt-4">{blueprint.desc}</p>
                  </div>

                  {/* Blueprint image - full width display */}
                  <div className="relative w-full bg-[#0a0f1a] min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                    <div className="relative w-full h-full p-6 md:p-8 lg:p-12">
                      <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
                        <Image
                          src={`/assets/portfolio/${blueprint.asset}.png`}
                          alt={`${blueprint.name} technical blueprint`}
                          fill
                          className="object-contain"
                          priority={idx === 0}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                        />
                      </div>
                    </div>
                    {/* Grid overlay for technical feel */}
                    <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
                  </div>

                  {/* Footer info */}
                  <div className="p-4 md:p-6 bg-gradient-to-t from-[#020617] to-transparent border-t border-white/5">
                    <div className="flex items-center justify-between text-[0.55rem] font-mono text-slate-600 uppercase tracking-widest">
                      <span>Full Resolution Available</span>
                      <span className="text-indigo-500/60">16:9 Aspect Ratio</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── ALL BRANDS GALLERY ─────────── */}
      <section className="py-20 md:py-32 lg:py-40 relative overflow-hidden bg-[#020617] reveal">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-16 md:mb-24 lg:mb-32">
            <span className="s-label justify-center">Complete Archive</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-4 md:mb-6">
              All <span className="text-indigo-500 italic">Brands.</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg lg:text-xl font-sans leading-relaxed max-w-3xl mx-auto">
              Every identity system, from fintech infrastructure to nightlife entertainment. Each brand engineered for maximum impact and scalability.
            </p>
          </div>

          {/* Main brands showcase - 3 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {[
              { name: 'MoMo Stack', asset: 'momo', tag: 'Fintech Infrastructure', desc: 'Mobile money payment gateway', color: 'amber' },
              { name: 'Nexus Intelligence', asset: 'nexus', tag: 'Cybersecurity', desc: 'Enterprise security platform', color: 'indigo' },
              { name: 'Endiro Beans', asset: 'endiro', tag: 'Specialty Coffee', desc: 'Premium coffee retail brand', color: 'emerald' },
              { name: 'Summit', asset: 'summit', tag: 'Enterprise Solution', desc: 'Corporate infrastructure', color: 'blue' },
              { name: 'Empire Night Club', asset: 'empire', tag: 'Entertainment', desc: 'Premium nightlife venue', color: 'purple' },
              { name: 'Fashion Brand', asset: 'fashion', tag: 'Retail Fashion', desc: 'Contemporary fashion label', color: 'pink' },
            ].map((brand, idx) => (
              <div 
                key={brand.name}
                className="group relative"
              >
                <div className="glass-premium rounded-2xl md:rounded-3xl lg:rounded-[3rem] border-white/5 overflow-hidden hover:border-indigo-500/30 transition-all duration-700 relative p-8 md:p-10 lg:p-12 min-h-[320px] md:min-h-[360px] flex flex-col items-center justify-center">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${brand.color}-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  {/* Asset ID badge */}
                  <div className="absolute top-4 md:top-6 right-4 md:right-6 text-[0.5rem] font-mono text-slate-800 font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    #{String(idx + 1).padStart(2, '0')}
                  </div>

                  {/* Logo */}
                  <div className="relative mb-8 md:mb-10 transform group-hover:scale-110 group-hover:-rotate-2 transition-all duration-1000 z-10">
                    <div className="absolute -inset-16 bg-indigo-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <PortfolioLogo asset={brand.asset} size={110} priority={idx < 3} />
                  </div>

                  {/* Content */}
                  <div className="text-center z-10">
                    <span className="text-[0.6rem] md:text-[0.65rem] font-mono text-indigo-500/60 group-hover:text-indigo-400 font-bold uppercase tracking-[0.3em] block mb-3 transition-colors">
                      {brand.tag}
                    </span>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-white tracking-tight leading-none mb-3 group-hover:text-indigo-300 transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base font-sans leading-relaxed group-hover:text-slate-500 transition-colors">
                      {brand.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Horizontal lockup showcase */}
          <div className="mt-12 md:mt-16 lg:mt-20">
            <div className="glass-premium rounded-2xl md:rounded-3xl lg:rounded-[3rem] border-white/5 p-8 md:p-12 lg:p-16 hover:border-indigo-500/30 transition-all duration-700 group">
              <div className="flex flex-col items-center text-center mb-8 md:mb-10">
                <span className="text-[0.6rem] md:text-[0.65rem] font-mono text-indigo-500/60 group-hover:text-indigo-400 font-bold uppercase tracking-[0.3em] block mb-3 transition-colors">
                  Horizontal Lockup
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-none group-hover:text-indigo-300 transition-colors">
                  Nexus Intelligence Systems
                </h3>
              </div>
              <div className="relative transform group-hover:scale-105 transition-all duration-1000 max-w-3xl mx-auto">
                <div className="absolute -inset-20 bg-indigo-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <PortfolioLogo asset="nexus-horizontal" size={320} priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── EXTENDED PORTFOLIO ─────────── */}
      <section className="py-20 md:py-32 lg:py-40 relative overflow-hidden bg-white/[0.02] reveal">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <span className="s-label justify-center">Extended Portfolio</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-4 md:mb-6">
              Complete <span className="text-indigo-500 italic">Collection.</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg lg:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
              A comprehensive showcase of brand identities across fintech, enterprise, retail, and entertainment sectors.
            </p>
          </div>

          {/* Primary brands grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            {[
              { name: 'Summit', asset: 'summit', tag: 'Enterprise', color: 'from-blue-500/10' },
              { name: 'Empire Club', asset: 'empire', tag: 'Nightlife', color: 'from-purple-500/10' },
              { name: 'Fashion', asset: 'fashion', tag: 'Retail', color: 'from-pink-500/10' },
              { name: 'MoMo Stack', asset: 'momo', tag: 'Fintech', color: 'from-amber-500/10' },
            ].map((item, idx) => (
              <div 
                key={item.name} 
                className="glass-premium rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center group hover:border-indigo-500/30 transition-all duration-700 border border-white/5 min-h-[220px] md:min-h-[260px] relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative mb-6 md:mb-8 transform group-hover:scale-110 transition-all duration-700 z-10">
                  <div className="absolute -inset-12 bg-indigo-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <PortfolioLogo asset={item.asset} size={90} priority={idx < 2} />
                </div>
                <div className="text-center z-10">
                  <span className="text-[0.55rem] md:text-[0.6rem] font-mono text-indigo-500/60 group-hover:text-indigo-400 font-bold uppercase tracking-[0.3em] block mb-2 transition-colors">
                    {item.tag}
                  </span>
                  <h4 className="text-base md:text-lg font-display font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">{item.name}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary brands - smaller grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {[
              { name: 'Nexus', asset: 'nexus', tag: 'Security' },
              { name: 'Endiro', asset: 'endiro', tag: 'Coffee' },
              { name: 'MoMo', asset: 'momo', tag: 'Fintech' },
              { name: 'Summit', asset: 'summit', tag: 'Enterprise' },
              { name: 'Empire', asset: 'empire', tag: 'Club' },
              { name: 'Fashion', asset: 'fashion', tag: 'Retail' },
            ].map((item) => (
              <div 
                key={`${item.name}-${item.tag}`}
                className="glass-premium rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center group hover:border-indigo-500/20 transition-all duration-500 border border-white/5 aspect-square relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative transform group-hover:scale-105 transition-all duration-500 z-10">
                  <PortfolioLogo asset={item.asset} size={50} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── GLOBAL DISTRIBUTION MAP ─────────── */}
      <section className="py-20 md:py-32 lg:py-40 relative overflow-hidden bg-[#020617] reveal">
         <div className="max-w-site mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 md:gap-24 lg:gap-32 items-center">
               <div>
                  <span className="s-label">Distribution</span>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-6 md:mb-8 lg:mb-10 tracking-tighter leading-[0.85]">
                     Global <br /><span className="text-indigo-500 italic text-reveal">Delivery.</span>
                  </h2>
                  <p className="text-slate-400 text-base md:text-lg lg:text-xl font-sans leading-relaxed mb-8 md:mb-10 lg:mb-12">
                     Our infrastructure spans across the continent, with primary nodes established in key technical hubs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                     {[
                        { city: 'Kampala', status: 'Core', lat: '0.34ms' },
                        { city: 'Nairobi', status: 'Edge', lat: '24ms' },
                        { city: 'Kigali', status: 'Edge', lat: '12ms' },
                        { city: 'Lagos', status: 'Node', lat: '48ms' },
                     ].map(node => (
                        <div key={node.city} className="glass-premium p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border-white/5">
                           <span className="text-[0.5rem] md:text-[0.55rem] font-mono text-indigo-500 font-bold uppercase tracking-widest block mb-1 md:mb-2">{node.status}</span>
                           <h4 className="text-lg md:text-xl font-display font-bold text-white mb-0.5 md:mb-1">{node.city}</h4>
                           <span className="text-[0.65rem] md:text-xs font-mono text-slate-600">{node.lat} Latency</span>
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="relative aspect-square md:aspect-video glass-premium rounded-3xl md:rounded-[4rem] border-white/10 flex items-center justify-center overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 grid-bg opacity-10" />
                  <div className="relative w-[80%] h-[80%] opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                     <svg viewBox="0 0 400 400" className="w-full h-full fill-none stroke-indigo-500/50 stroke-[0.5] filter blur-[0.5px]">
                        <path d="M150,100 L250,150 L300,300 L200,350 L100,300 L50,150 Z" />
                        <path d="M100,50 L300,50 L350,200 L200,380 L50,200 Z" className="opacity-30" />
                     </svg>
                  </div>
                  
                  <div className="absolute top-[45%] left-[55%] reveal active">
                     <div className="w-2 md:w-3 h-2 md:h-3 bg-indigo-500 rounded-full animate-ping absolute" />
                     <div className="w-2 md:w-3 h-2 md:h-3 bg-indigo-500 rounded-full relative" />
                     <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 whitespace-nowrap hidden md:block">
                        <span className="text-[0.5rem] font-mono text-white/80 bg-indigo-500/20 px-2 py-1 rounded border border-indigo-500/30">KAMPALA_HUB</span>
                     </div>
                  </div>
                  <div className="absolute top-[50%] left-[65%]">
                     <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-indigo-400 rounded-full animate-ping absolute opacity-50" />
                     <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-indigo-400 rounded-full relative" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ─────────── BENTO STATS ─────────── */}
      <section className="py-16 md:py-24 lg:py-32 relative reveal">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gradient-to-br from-white/10 via-white/5 to-white/5 border border-white/10 rounded-3xl md:rounded-[4rem] overflow-hidden shadow-2xl">
            {stats.map(({ num, label, icon, detail, color }) => (
              <div key={label} className="bg-[#020617] p-10 md:p-12 lg:p-16 flex flex-col items-center text-center group hover:bg-gradient-to-br hover:from-white/[0.03] hover:to-transparent transition-all duration-700 relative overflow-hidden">
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <span className="text-4xl md:text-5xl mb-6 md:mb-8 opacity-30 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110 relative z-10">{icon}</span>
                <span className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-3 md:mb-4 tracking-tighter leading-none relative z-10 group-hover:text-indigo-400 transition-colors duration-500">{num}</span>
                <span className="text-[0.6rem] md:text-[0.65rem] font-mono text-indigo-500 font-black uppercase tracking-[0.3em] mb-4 md:mb-6 relative z-10">{label}</span>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-[200px] relative z-10 group-hover:text-slate-500 transition-colors">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── SERVICES ─────────── */}
      <section className="py-20 md:py-32 lg:py-40 bg-[#020617]/50 relative overflow-hidden reveal">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 md:gap-24 lg:gap-32 items-start">
            <div className="lg:sticky lg:top-32">
              <span className="s-label">Core Capabilities</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-6 md:mb-8 lg:mb-10 tracking-tighter leading-none">
                Limitless <br />
                <span className="text-indigo-500 italic">Systems.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg lg:text-xl font-sans leading-relaxed">
                From high-precision identity engineering to global-scale application infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
              {[
                { title: 'Identity Logic', desc: 'Mathematical branding systems that survive any resolution or platform constraint.' },
                { title: 'Stack Engineering', desc: 'High-performance React ecosystems built for zero latency and infinite scale.' },
                { title: 'Global Ops', desc: 'Deploying mission-critical technical infrastructure to every global edge node.' },
                { title: 'Technical Design', desc: 'Where robust software engineering meets high-end visual excellence.' },
              ].map((s) => (
                <div key={s.title} className="glass-premium p-8 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl lg:rounded-[3rem] border-white/5 hover:border-indigo-500/30 transition-all duration-700 group">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 md:mb-5 lg:mb-6 group-hover:text-indigo-400 transition-colors leading-none">{s.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-sans text-base md:text-lg">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── TECH STACK ─────────── */}
      <TechStack />

      {/* ─────────── PROCESS TIMELINE ─────────── */}
      <ProcessTimeline />

      {/* ─────────── TESTIMONIALS ─────────── */}
      <Testimonials />

      {/* ─────────── METRICS DASHBOARD ─────────── */}
      <MetricsDashboard />

      {/* ─────────── ANIMATED STATS ─────────── */}
      <AnimatedStats />

      {/* ─────────── AWARDS & RECOGNITION ─────────── */}
      <Awards />

      {/* ─────────── FAQ ─────────── */}
      <FAQ />

      {/* ─────────── NEWSLETTER ─────────── */}
      <Newsletter />

      <ExploreNext
        kicker="Navigate the practice"
        title="Go deeper"
        subtitle="Case studies, stack, design tokens, long-form research, and a single hub for every link."
        className="reveal"
        items={[
          { href: '/brands', label: 'Brand systems', desc: 'Identity archives and case studies' },
          { href: '/stack', label: 'Engine room', desc: 'Frameworks, tooling, and operations' },
          { href: '/tokens', label: 'Design tokens', desc: 'Colour, type, and spacing vocabulary' },
          { href: '/lab', label: 'Knowledge', desc: 'Protocols and written standards' },
          { href: '/links', label: 'Connect hub', desc: 'Email, socials, and on-site map' },
          { href: '/contact', label: 'Start a project', desc: 'Consultation and project inquiry' },
        ]}
      />

      <Footer />
    </>
  )
}
