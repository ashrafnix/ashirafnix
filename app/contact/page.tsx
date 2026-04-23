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
      <section className="pt-48 pb-32 relative overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <div className="max-w-site mx-auto px-6 relative z-10 text-center">
          <span className="s-label mb-8">Consultation</span>
          <h1 className="text-7xl md:text-9xl font-display font-bold text-white mb-10 tracking-tighter leading-tight">
             Initiate <br />
             <span className="text-indigo-500 italic">Discussion.</span>
          </h1>
          <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto font-sans leading-relaxed">
            Available for full-scale identity engineering and high-performance digital infrastructure projects.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-40">
        <div className="glass-premium p-8 md:p-16 rounded-[3.5rem] border-white/10 shadow-2xl relative overflow-hidden group">
           {/* Background Atmosphere */}
           <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-indigo-500/5 blur-[80px] rounded-full group-hover:bg-indigo-500/10 transition-colors" />
           
           <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20 border-b border-white/5 pb-20">
                 <div>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Direct Channels</h2>
                    <div className="space-y-8">
                       <div>
                          <span className="text-[0.6rem] font-mono text-indigo-500 font-bold uppercase tracking-widest block mb-2">Electronic Mail</span>
                          <a
                            href={`mailto:${site.email}`}
                            className="text-2xl font-display font-bold text-white hover:text-indigo-400 transition-colors"
                          >
                             {site.email}
                          </a>
                       </div>
                       <div>
                          <span className="text-[0.6rem] font-mono text-indigo-500 font-bold uppercase tracking-widest block mb-2">Physical Location</span>
                          <span className="text-2xl font-display font-bold text-white">
                             Kampala, Uganda
                          </span>
                       </div>
                    </div>
                 </div>
                 <div className="flex flex-col justify-end">
                    <p className="text-slate-400 font-sans leading-relaxed text-lg mb-8 italic">
                       &ldquo;We prioritize projects that require a balance of extreme visual precision and robust technical execution.&rdquo;
                    </p>
                    <div className="flex flex-wrap gap-6">
                       {site.social.linkedin && (
                         <a
                           href={site.social.linkedin}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-xs font-mono text-slate-500 hover:text-white uppercase tracking-widest transition-colors font-bold"
                         >
                           LinkedIn
                         </a>
                       )}
                       {site.social.github && (
                         <a
                           href={site.social.github}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-xs font-mono text-slate-500 hover:text-white uppercase tracking-widest transition-colors font-bold"
                         >
                           GitHub
                         </a>
                       )}
                       {site.social.twitter && (
                         <a
                           href={site.social.twitter}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-xs font-mono text-slate-500 hover:text-white uppercase tracking-widest transition-colors font-bold"
                         >
                           X / Twitter
                         </a>
                       )}
                       <Link
                         href="/links"
                         className="text-xs font-mono text-indigo-500 hover:text-white uppercase tracking-widest transition-colors font-bold"
                       >
                         All links →
                       </Link>
                    </div>
                 </div>
              </div>

              <form className="space-y-12">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative">
                       <input type="text" id="name" placeholder="Name" className="w-full bg-transparent border-b border-white/10 py-4 text-white font-sans focus:outline-none focus:border-indigo-500 transition-colors peer" />
                       <label htmlFor="name" className="absolute left-0 -top-4 text-[0.6rem] font-mono text-slate-600 uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-transparent peer-focus:-top-4 peer-focus:text-indigo-500">Name</label>
                    </div>
                    <div className="relative">
                       <input type="email" id="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 py-4 text-white font-sans focus:outline-none focus:border-indigo-500 transition-colors peer" />
                       <label htmlFor="email" className="absolute left-0 -top-4 text-[0.6rem] font-mono text-slate-600 uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-transparent peer-focus:-top-4 peer-focus:text-indigo-500">Email Address</label>
                    </div>
                 </div>
                 <div className="relative">
                    <textarea id="message" rows={4} placeholder="Project Description" className="w-full bg-transparent border-b border-white/10 py-4 text-white font-sans focus:outline-none focus:border-indigo-500 transition-colors peer resize-none" />
                    <label htmlFor="message" className="absolute left-0 -top-4 text-[0.6rem] font-mono text-slate-600 uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-transparent peer-focus:-top-4 peer-focus:text-indigo-500">Project Description</label>
                 </div>
                 
                 <div className="flex items-center justify-between gap-12 pt-12">
                    <div className="flex items-center gap-4">
                       <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                       <span className="text-[0.65rem] font-mono text-slate-600 uppercase tracking-widest">Available for Q2 2024</span>
                    </div>
                    <button type="submit" className="btn-primary px-12 py-5 text-lg rounded-2xl whitespace-nowrap">
                       Send Inquiry
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
