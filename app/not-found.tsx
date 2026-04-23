import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-2xl w-full text-center glass-premium rounded-[2rem] p-10 border-white/10">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] font-mono text-indigo-400 mb-6">
          404
        </p>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight mb-6">
          Route not found.
        </h1>
        <p className="text-slate-400 text-lg mb-10">
          The page you requested does not exist or has moved to a different path.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-primary px-8 py-4 rounded-xl">
            Return home
          </Link>
          <Link
            href="/links"
            className="px-8 py-4 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            Connect hub
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            Contact studio
          </Link>
        </div>
      </div>
    </section>
  )
}
