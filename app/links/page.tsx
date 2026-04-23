import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { site, mainNav } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Connect — Links & Network',
  description:
    'Navigate the AshirafNix site, reach out, and follow the practice across the web.',
}

const external = [
  { key: 'github' as const, label: 'GitHub', blurb: 'Code, experiments, and open work.' },
  { key: 'linkedin' as const, label: 'LinkedIn', blurb: 'Professional updates and cases.' },
  { key: 'twitter' as const, label: 'X / Twitter', blurb: 'Short-form notes and links.' },
]

export default function LinksPage() {
  return (
    <>
      <section className="pt-44 pb-24 relative overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[min(100%,720px)] h-[min(100%,400px)] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-site mx-auto px-6 relative z-10 text-center">
          <span className="block text-center text-[0.7rem] font-mono text-indigo-500 font-bold uppercase tracking-[0.4em] mb-8">
            Network hub
          </span>
          <h1 className="text-[clamp(3rem,9vw,7rem)] font-display font-bold text-white mb-8 tracking-tighter leading-[0.95]">
            Connect <br />
            <span className="text-indigo-500 italic">everywhere.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto font-sans leading-relaxed">
            One place to move through the site, start a project, or open an external channel.
          </p>
        </div>
      </section>

      <div className="max-w-site mx-auto px-6 pb-32 space-y-24">
        <section className="reveal">
          <h2 className="text-[0.7rem] font-mono text-indigo-500 font-bold uppercase tracking-[0.4em] mb-8">
            On this site
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="glass-premium rounded-2xl border-white/10 p-8 hover:border-indigo-500/40 transition-all group"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xl font-display font-bold text-white group-hover:text-indigo-200">
                    {item.label}
                  </span>
                  <span className="text-slate-600 font-mono text-xs group-hover:text-indigo-400">→</span>
                </div>
                <span className="text-slate-600 text-sm font-mono mt-3 block">{item.href || '/'}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="reveal">
          <h2 className="text-[0.7rem] font-mono text-indigo-500 font-bold uppercase tracking-[0.4em] mb-8">
            Direct
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href={`mailto:${site.email}`}
              className="glass-premium rounded-[2rem] border-white/10 p-10 md:p-12 hover:border-indigo-500/30 transition-all group"
            >
              <span className="text-[0.65rem] font-mono text-slate-500 uppercase tracking-widest block mb-3">
                Email
              </span>
              <span className="text-2xl md:text-3xl font-display font-bold text-white break-all group-hover:text-indigo-300 transition-colors">
                {site.email}
              </span>
            </a>
            <Link
              href="/contact"
              className="glass-premium rounded-[2rem] border-white/10 p-10 md:p-12 hover:border-indigo-500/30 transition-all group flex flex-col justify-center"
            >
              <span className="text-[0.65rem] font-mono text-slate-500 uppercase tracking-widest block mb-3">
                Consultation
              </span>
              <span className="text-2xl md:text-3xl font-display font-bold text-white group-hover:text-indigo-300 transition-colors">
                Open inquiry form →
              </span>
            </Link>
          </div>
        </section>

        <section className="reveal">
          <h2 className="text-[0.7rem] font-mono text-indigo-500 font-bold uppercase tracking-[0.4em] mb-4">
            Elsewhere
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mb-8">
            Add your profile URLs in <code className="text-indigo-400/90 font-mono text-xs">.env.local</code>{' '}
            to activate these cards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {external.map((row) => {
              const url = site.social[row.key]
              return (
                <div
                  key={row.key}
                  className="glass-premium rounded-2xl border-white/10 p-8 min-h-[160px] flex flex-col"
                >
                  <span className="text-lg font-display font-bold text-white mb-2">{row.label}</span>
                  <p className="text-slate-500 text-sm flex-1 mb-6">{row.blurb}</p>
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono text-indigo-400 hover:text-white transition-colors w-fit"
                    >
                      Open profile →
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-700 uppercase tracking-widest">Not linked</span>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
