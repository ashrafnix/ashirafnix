'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { mainNav } from '@/lib/site'
import BrandLogo from './BrandLogo'

export default function Nav() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname                    = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)
          ${scrolled
            ? 'py-4 bg-[#020617]/40 backdrop-blur-2xl border-b border-white/5 shadow-2xl'
            : 'py-8 bg-transparent'
          }
        `}
      >
        <div className="max-w-site mx-auto px-6 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <BrandLogo size={40} priority={true} className="rounded-lg" />
            <div className="flex flex-col">
               <span className="font-display font-bold text-lg tracking-tight text-white leading-none">
                Ashiraf<span className="text-indigo-500">Nix</span>
              </span>
              <span className="text-[0.55rem] font-mono text-slate-500 uppercase tracking-[0.2em] mt-1 group-hover:text-indigo-400 transition-colors">
                Systems Architect
              </span>
            </div>
          </Link>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-0.5 glass-premium p-1 rounded-full border border-white/5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {mainNav.map(({ href, label }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    relative font-sans text-[0.68rem] lg:text-[0.75rem] font-bold tracking-wider uppercase
                    px-3 lg:px-4 py-2.5 rounded-full transition-all duration-500
                    ${active
                      ? 'text-white bg-indigo-500 shadow-xl shadow-indigo-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center gap-6">
             <div className="h-4 w-px bg-white/10" />
             <Link
              href="/contact"
              className="text-[0.7rem] font-mono font-bold text-indigo-400 uppercase tracking-widest hover:text-white transition-colors"
            >
              Start Project
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="md:hidden flex flex-col justify-center gap-[6px] w-12 h-12 p-3 glass-premium rounded-xl border border-white/10 text-white"
            aria-label="Toggle navigation"
          >
            <span className={`block h-[2px] bg-current transition-all duration-500 origin-center ${mobileOpen ? 'rotate-45 translate-y-[8px]' : 'w-6'}`} />
            <span className={`block h-[2px] bg-current transition-all duration-500 ${mobileOpen ? 'opacity-0 scale-x-0' : 'w-4'}`} />
            <span className={`block h-[2px] bg-current transition-all duration-500 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[8px]' : 'w-6'}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`
          fixed inset-0 z-40 flex flex-col
          bg-[#020617]
          transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) md:hidden
          ${mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        `}
      >
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-indigo-500/5 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-amber-500/5 blur-[100px] rounded-full" />
        </div>

        <div className="flex-1 pt-40 px-10 flex flex-col gap-10 relative z-10">
          {mainNav.map(({ href, label }, idx) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className={`
                font-display text-6xl font-bold tracking-tighter
                transition-all duration-500
                ${pathname === href ? 'text-indigo-500 translate-x-4' : 'text-slate-800 hover:text-white'}
              `}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="p-10 border-t border-white/5 relative z-10">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary w-full justify-center py-6 text-xl rounded-2xl"
          >
            Let&apos;s Build
          </Link>
        </div>
      </div>
    </>
  )
}
