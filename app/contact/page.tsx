import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Consultation — Technical Inquiry',
  description:
    'Start a discussion on your next brand system or technical infrastructure overhaul.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-28 md:pt-40 lg:pt-48 pb-12 md:pb-20 lg:pb-32 relative overflow-hidden bg-bg">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <div className="max-w-site mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="s-label mb-6 md:mb-8 justify-center">Consultation</span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6 md:mb-10 tracking-tighter leading-tight">
            Initiate <br />
            <span className="text-accent-indigo italic">Discussion.</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto font-sans leading-relaxed">
            Available for full-scale identity engineering and high-performance digital infrastructure projects.
          </p>
        </div>
      </section>

      {/* ── FORM CARD ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 md:pb-32 lg:pb-40">
        <div className="glass-premium p-5 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-3xl lg:rounded-[3.5rem] border border-border-subtle shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-accent-indigo/5 blur-[80px] rounded-full group-hover:bg-accent-indigo/10 transition-colors" />

          <div className="relative z-10">
            {/* ── Direct channels ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 mb-10 md:mb-16 lg:mb-20 border-b border-border-subtle pb-10 md:pb-16 lg:pb-20">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">Direct Channels</h2>
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <span className="text-[0.6rem] font-mono text-accent-indigo font-bold uppercase tracking-widest block mb-2">Electronic Mail</span>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white hover:text-accent-indigo-bright transition-colors break-all"
                    >
                      {site.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-[0.6rem] font-mono text-accent-indigo font-bold uppercase tracking-widest block mb-2">Physical Location</span>
                    <span className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white">
                      Kampala, Uganda
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <p className="text-slate-400 font-sans leading-relaxed text-sm sm:text-base md:text-lg mb-6 md:mb-8 italic">
                  &ldquo;We prioritize projects that require a balance of extreme visual precision and robust technical execution.&rdquo;
                </p>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  {site.social.linkedin && (
                    <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-500 hover:text-white uppercase tracking-widest transition-colors font-bold">
                      LinkedIn
                    </a>
                  )}
                  {site.social.github && (
                    <a href={site.social.github} target="_blank" rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-500 hover:text-white uppercase tracking-widest transition-colors font-bold">
                      GitHub
                    </a>
                  )}
                  {site.social.twitter && (
                    <a href={site.social.twitter} target="_blank" rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-500 hover:text-white uppercase tracking-widest transition-colors font-bold">
                      X / Twitter
                    </a>
                  )}
                  <Link href="/links"
                    className="text-xs font-mono text-accent-indigo hover:text-white uppercase tracking-widest transition-colors font-bold">
                    All links →
                  </Link>
                </div>
              </div>
            </div>

            {/* ── Contact form ── */}
            <form className="space-y-8 md:space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                <div className="relative">
                  <input type="text" id="name" placeholder="Name"
                    className="w-full bg-transparent border-b border-border-strong py-4 text-white font-sans focus:outline-none focus:border-accent-indigo transition-colors peer" />
                  <label htmlFor="name"
                    className="absolute left-0 -top-4 text-[0.6rem] font-mono text-slate-600 uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-transparent peer-focus:-top-4 peer-focus:text-accent-indigo">
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input type="email" id="email" placeholder="Email Address"
                    className="w-full bg-transparent border-b border-border-strong py-4 text-white font-sans focus:outline-none focus:border-accent-indigo transition-colors peer" />
                  <label htmlFor="email"
                    className="absolute left-0 -top-4 text-[0.6rem] font-mono text-slate-600 uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-transparent peer-focus:-top-4 peer-focus:text-accent-indigo">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative">
                <textarea id="message" rows={4} placeholder="Project Description"
                  className="w-full bg-transparent border-b border-border-strong py-4 text-white font-sans focus:outline-none focus:border-accent-indigo transition-colors peer resize-none" />
                <label htmlFor="message"
                  className="absolute left-0 -top-4 text-[0.6rem] font-mono text-slate-600 uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-transparent peer-focus:-top-4 peer-focus:text-accent-indigo">
                  Project Description
                </label>
              </div>

              {/* Form footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-8 pt-4 sm:pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-indigo animate-pulse flex-shrink-0" />
                  <span className="text-[0.65rem] font-mono text-slate-600 uppercase tracking-widest">Available for Q2 2024</span>
                </div>
                <button type="submit"
                  className="btn-primary w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-sm md:text-base rounded-xl sm:rounded-2xl whitespace-nowrap justify-center">
                  Send Inquiry →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
