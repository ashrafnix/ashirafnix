'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible]   = useState(false)

  useEffect(() => {
    const update = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight <= 0) return
      const p = (window.scrollY / scrollHeight) * 100
      setProgress(p)
      setVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-[100] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"
          style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
        />
      </div>

      {/* Floating scroll-to-top (desktop only) */}
      <div
        className={`
          fixed bottom-8 right-6 z-50 hidden lg:flex flex-col items-center gap-2
          transition-all duration-500
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
      >
        {/* Circular progress */}
        <div className="relative w-12 h-12 group">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2.5"/>
            <circle
              cx="24" cy="24" r="20"
              fill="none"
              stroke="url(#prog)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - progress / 100)}`}
              style={{ transition: 'stroke-dashoffset 0.1s linear' }}
            />
            <defs>
              <linearGradient id="prog" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6366f1"/>
                <stop offset="100%" stopColor="#a78bfa"/>
              </linearGradient>
            </defs>
          </svg>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute inset-0 flex items-center justify-center rounded-full bg-[#0f172a]/80 backdrop-blur-md border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            aria-label="Scroll to top"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        </div>

        <span className="text-[0.5rem] font-mono text-slate-600 uppercase tracking-widest">
          {Math.round(progress)}%
        </span>
      </div>
    </>
  )
}
