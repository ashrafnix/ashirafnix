'use client'

import { useEffect } from 'react'

type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-2xl w-full text-center glass-premium rounded-[2rem] p-10 border-white/10">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] font-mono text-amber-400 mb-6">
          Unexpected error
        </p>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight mb-6">
          Something broke.
        </h1>
        <p className="text-slate-400 text-lg mb-10">
          We could not complete this request. You can retry now or return later.
        </p>
        <button
          onClick={reset}
          className="btn-primary px-8 py-4 rounded-xl"
          type="button"
        >
          Retry
        </button>
      </div>
    </section>
  )
}
