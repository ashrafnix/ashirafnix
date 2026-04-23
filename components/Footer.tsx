import Link from 'next/link'
import { mainNav, site } from '@/lib/site'
import BrandLogo from './BrandLogo'

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
      <div className="max-w-site mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-20 items-start">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-6">
               <BrandLogo size={32} priority={false} className="rounded-lg" />
               <span className="font-display font-bold text-white tracking-tight">Ashiraf<span className="text-indigo-500">Nix</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Engineering-led design systems for Africa&apos;s digital infrastructure. Built for performance, scaled for impact.
            </p>
            <div className="flex items-center gap-4">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-[0.6rem] font-mono text-slate-600 uppercase tracking-widest font-bold">Systems Online · Kampala, UG</span>
            </div>
            <Link
              href="/links"
              className="inline-flex items-center gap-2 mt-8 text-sm font-mono text-indigo-400 hover:text-white uppercase tracking-widest font-bold transition-colors"
            >
              All links &amp; connect hub →
            </Link>
          </div>

          <div>
            <span className="text-[0.65rem] font-mono text-indigo-500 font-bold uppercase tracking-[0.4em] block mb-8">Site</span>
            <ul className="space-y-4">
              {mainNav.map(({ href, label }) => (
                <li key={href + label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-medium"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-[0.65rem] font-mono text-indigo-500 font-bold uppercase tracking-[0.4em] block mb-8">Connection</span>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-medium"
                >
                  Email
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-medium"
                >
                  Consultation
                </Link>
              </li>
              {site.social.github && (
                <li>
                  <a
                    href={site.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-medium"
                  >
                    GitHub
                  </a>
                </li>
              )}
              {site.social.linkedin && (
                <li>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-medium"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              {site.social.twitter && (
                <li>
                  <a
                    href={site.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-medium"
                  >
                    X / Twitter
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 mb-12">
          <p className="text-[0.6rem] font-mono text-slate-700 uppercase tracking-widest">
            © 2026 AshirafNix Practice · All Rights Reserved
          </p>
          <div className="flex gap-12">
             <span className="text-[0.6rem] font-mono text-slate-700 uppercase tracking-widest italic">Est. 2021</span>
             <span className="text-[0.6rem] font-mono text-slate-700 uppercase tracking-widest font-bold">0.34ms Render Time</span>
          </div>
        </div>

        {/* ── SYSTEM LOG TICKER ── */}
        <div className="border-t border-white/5 pt-6 overflow-hidden relative">
           <div className="flex gap-20 whitespace-nowrap animate-ticker">
              {[
                'INIT_CORE_SYSTEMS: SUCCESS',
                'NODE_KAMPALA: PINGING...',
                'LATENCY: 24ms',
                'ENCRYPTING_ASSETS: 100%',
                'SYNCING_EDGE_NODES: OK',
                'IDENTITY_PROTOCOL: STABLE',
                'v2.4.0_DEPLOYED',
              ].map((log, i) => (
                <div key={i} className="flex items-center gap-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
                   <span className="text-[0.55rem] font-mono text-slate-800 font-black tracking-widest uppercase">{log}</span>
                </div>
              ))}
              {/* Duplicate for infinite effect */}
              {[
                'INIT_CORE_SYSTEMS: SUCCESS',
                'NODE_KAMPALA: PINGING...',
                'LATENCY: 24ms',
                'ENCRYPTING_ASSETS: 100%',
                'SYNCING_EDGE_NODES: OK',
                'IDENTITY_PROTOCOL: STABLE',
                'v2.4.0_DEPLOYED',
              ].map((log, i) => (
                <div key={i} className="flex items-center gap-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
                   <span className="text-[0.55rem] font-mono text-slate-800 font-black tracking-widest uppercase">{log}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </footer>
  )
}
