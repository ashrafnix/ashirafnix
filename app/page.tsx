import Image from 'next/image'
import Link from 'next/link'
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
      <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-indigo-500/5 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-site mx-auto px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24 items-center">

            {/* Hero image — mobile: top, centered; lg: right column */}
            <div className="flex items-center justify-center lg:order-last">
              <div className="relative group w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-full">
                {/* Outer glow ring */}
                <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/20 via-indigo-500/5 to-amber-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                {/* Border gradient */}
                <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-indigo-500/30 via-indigo-500/10 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {/* Main frame */}
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group-hover:border-indigo-500/40 transition-all duration-700 group-hover:shadow-indigo-500/20">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
                  <Image
                    src="/assets/hero.png"
                    alt="Ashraf Nix Kakooza — Full-stack developer and brand designer"
                    width={520}
                    height={620}
                    priority
                    className="object-cover w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-1000"
                  />
                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617]/90 via-[#020617]/50 to-transparent" />
                  {/* Status badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 border border-white/10 backdrop-blur-md shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-emerald-500/50 shadow-lg" />
                      <span className="text-[0.55rem] font-mono text-slate-300 uppercase tracking-widest">Kampala, UG</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-black/70 border border-indigo-500/30 backdrop-blur-md shadow-lg">
                      <span className="text-[0.55rem] font-mono text-indigo-400 uppercase tracking-widest font-bold">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-8 lg:space-y-10">
              {/* Status badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-500 group/badge">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[0.6rem] font-mono text-slate-400 uppercase tracking-widest font-bold group-hover/badge:text-slate-300 transition-colors">Node_Status: Active</span>
              </div>

              {/* Main heading */}
              <h1 className="text-[clamp(3rem,8vw,10rem)] font-display font-bold text-white tracking-tighter leading-[0.85]">
                Engineering <br />
                <span className="text-indigo-500 italic inline-block hover:text-indigo-400 transition-colors">Global</span> <br />
                Standards.
              </h1>

              {/* Description */}
              <p className="text-slate-400 text-lg md:text-xl lg:text-2xl font-sans leading-relaxed max-w-2xl">
                Architecting the digital foundation for Africa&apos;s technical frontier through engineering-led design systems.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 lg:gap-6">
                <Link href="/contact" className="btn-primary px-8 lg:px-12 py-4 lg:py-6 text-base lg:text-xl rounded-2xl group/cta shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30">
                  Start Project 
                  <span className="transform group-hover/cta:translate-x-2 transition-transform inline-block ml-2">→</span>
                </Link>
                <Link href="/brands" className="px-8 lg:px-12 py-4 lg:py-6 text-base lg:text-xl border border-white/10 text-white rounded-2xl hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-500 font-medium backdrop-blur-sm">
                  View Systems
                </Link>
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
