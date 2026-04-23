'use client'

import { useState, useEffect } from 'react'

type LineType = 'cmd' | 'file' | 'pass' | 'blank' | 'info'

interface TermLine {
  type:   LineType
  text:   string
  note?:  string
  delay?: number
}

const LINES: TermLine[] = [
  { type: 'cmd',   text: 'sys_audit --all-deliverables',              delay: 800  },
  { type: 'file',  text: 'brand_core.svg',    note: '» 1.76kb (Gzipped)',    delay: 160 },
  { type: 'file',  text: 'favicon.ico',       note: '» 16/32/48/64 multi-res',     delay: 140 },
  { type: 'file',  text: 'identity_v1.eps',   note: '» vector_print_ready',         delay: 140 },
  { type: 'blank', text: '',                                             delay: 200 },
  { type: 'cmd',   text: 'npm run test:architecture',         delay: 160  },
  { type: 'pass',  text: '●  16px Legibility Analysis ....... PASSED',  delay: 220  },
  { type: 'pass',  text: '●  Accessibility WCAG 2.1 (AAA) .... PASSED',  delay: 200  },
  { type: 'pass',  text: '●  React Prop Consistency Check .... PASSED',  delay: 200  },
  { type: 'pass',  text: '●  Edge Case Compression Test ...... PASSED',  delay: 200  },
  { type: 'blank', text: '',                                             delay: 260 },
  { type: 'cmd',   text: 'git push origin main --force',      delay: 160  },
  { type: 'info',  text: 'Deployment success: ashrafnix.dev',         delay: 320  },
]

export default function Terminal() {
  const [visible, setVisible] = useState(0)
  const done = visible >= LINES.length

  useEffect(() => {
    if (done) {
      return
    }
    const delay = LINES[visible]?.delay ?? 180
    const t = setTimeout(() => setVisible(v => v + 1), delay)
    return () => clearTimeout(t)
  }, [visible, done])

  return (
    <div
      className="
        rounded-[2rem] overflow-hidden
        border border-white/5
        shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]
        bg-[#020617]/80 backdrop-blur-3xl
        transition-all duration-700
        hover:border-indigo-500/30
      "
    >
      {/* ── Title bar ── */}
      <div className="flex items-center gap-4 px-8 py-5 bg-white/5 border-b border-white/5">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/40" />
          <span className="w-3 h-3 rounded-full bg-amber-500/40" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/40" />
        </div>
        <span className="ml-auto font-mono text-[0.6rem] text-slate-600 uppercase tracking-[0.3em] font-bold select-none">
          Local — zsh — 144x40
        </span>
      </div>

      {/* ── Body ── */}
      <div className="px-10 py-10 font-mono text-[0.75rem] leading-[2] min-h-[420px]">
        {LINES.slice(0, visible).map((line, i) => (
          <div key={i} className="flex gap-6 items-baseline mb-1">
            {line.type === 'cmd' && (
              <>
                <span className="select-none text-indigo-500 font-black tracking-tighter">❯</span>
                <span className="text-white font-medium">{line.text}</span>
              </>
            )}
            {line.type === 'file' && (
              <>
                <span className="text-slate-400 font-bold shrink-0 w-[140px]">{line.text}</span>
                <span className="text-slate-600 italic">{line.note}</span>
              </>
            )}
            {line.type === 'pass' && (
              <span className="text-emerald-500/80 font-medium tracking-tight">
                {line.text}
              </span>
            )}
            {line.type === 'info' && (
              <span className="text-indigo-400/80 italic font-medium">{line.text}</span>
            )}
            {line.type === 'blank' && <div className="h-4" />}
          </div>
        ))}

        {/* Cursor */}
        {visible > 0 && (
          <div className="flex gap-6 items-baseline mt-2">
            <span className="select-none text-indigo-500 font-black tracking-tighter">❯</span>
            {done ? (
              <span className="w-2.5 h-4 bg-indigo-500 animate-pulse" />
            ) : (
              <span className="text-indigo-500/50 animate-pulse">_</span>
            )}
          </div>
        )}
      </div>

      {/* Decorative Status Bar */}
      <div className="px-8 py-3 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
         <div className="flex gap-6">
            <span className="text-[0.55rem] font-mono text-slate-700 font-bold uppercase tracking-widest">UTF-8</span>
            <span className="text-[0.55rem] font-mono text-slate-700 font-bold uppercase tracking-widest">Master</span>
         </div>
         <span className="text-[0.55rem] font-mono text-indigo-500/50 font-bold uppercase tracking-widest">Engine Stable</span>
      </div>
    </div>
  )
}
