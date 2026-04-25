'use client'

import { useState, useEffect, useCallback } from 'react'
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const close = useCallback(() => setMobileOpen(false), [])

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${scrolled
            ? 'py-3 bg-bg/80 backdrop-blur-2xl border-b border-border-subtle shadow-lg'
            : 'py-6 bg-transparent'
          }
        `}
      >
        <div className="max-w-site mx-auto px-5 sm:px-6 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link
            href="/"
            onClick={close}
            className="group flex items-center gap-3 z-10"
          >
            <BrandLogo size={36} priority={true} className="rounded-lg" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-white leading-none">
                Ashiraf<span className="text-indigo-400">Nix</span>
              </span>
              <span className="text-[0.5rem] font-mono text-slate-500 uppercase tracking-[0.2em] mt-0.5 group-hover:text-indigo-400 transition-colors">
                Systems Architect
              </span>
            </div>
          </Link>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-0.5 bg-white/[0.04] backdrop-blur-xl p-1 rounded-full border border-border-subtle">
            {mainNav.map(({ href, label }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    relative font-sans text-[0.68rem] lg:text-[0.73rem] font-bold tracking-wider uppercase
                    px-3 lg:px-4 py-2 rounded-full transition-all duration-300
                    ${active
                      ? 'text-white bg-indigo-500 shadow-lg shadow-indigo-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/8'
                    }
                  `}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="h-4 w-px bg-white/10" />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[0.68rem] font-mono font-bold text-white bg-indigo-500 hover:bg-indigo-400 px-4 py-2 rounded-full uppercase tracking-widest transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-400/30 hover:-translate-y-px"
            >
              Start Project
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="md:hidden relative flex flex-col justify-center items-center w-11 h-11 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
          >
            <span className={`block h-[1.5px] bg-current rounded-full transition-all duration-400 origin-center ${mobileOpen ? 'w-5 rotate-45 translate-y-[4px]' : 'w-5'}`} />
            <span className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 mt-[5px] ${mobileOpen ? 'opacity-0 scale-x-0 w-5' : 'w-3.5'}`} />
            <span className={`block h-[1.5px] bg-current rounded-full transition-all duration-400 origin-center mt-[5px] ${mobileOpen ? 'w-5 -rotate-45 -translate-y-[10px]' : 'w-5'}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile backdrop ── */}
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-all duration-400 ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden="true"
      />

      {/* ── Mobile drawer (slides from right) ── */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 z-50 w-[min(320px,85vw)] flex flex-col
          bg-bg-drawer border-l border-border-subtle
          shadow-[-20px_0_60px_rgba(0,0,0,0.6)]
          md:hidden transition-transform duration-500 ease-spring
          ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        aria-hidden={!mobileOpen}
      >
        {/* Decorative orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/8 blur-[70px] rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-5 border-b border-border-subtle relative z-10">
          <Link href="/" onClick={close} className="flex items-center gap-2.5">
            <BrandLogo size={30} priority={false} className="rounded-md" />
            <span className="font-display font-bold text-sm text-white tracking-tight">
              Ashiraf<span className="text-indigo-400">Nix</span>
            </span>
          </Link>
          <button
            onClick={close}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
            aria-label="Close menu"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 relative z-10">
          <p className="text-[0.55rem] font-mono text-slate-600 uppercase tracking-[0.25em] mb-5 px-2">Navigation</p>
          <ul className="space-y-1">
            {mainNav.map(({ href, label }, idx) => {
              const active = pathname === href
              return (
                <li
                  key={href}
                  style={{
                    transitionDelay: mobileOpen ? `${60 + idx * 45}ms` : '0ms',
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen ? 'translateX(0)' : 'translateX(20px)',
                    transition: 'opacity 0.35s ease, transform 0.35s ease',
                  }}
                >
                  <Link
                    href={href}
                    onClick={close}
                    className={`
                      group flex items-center justify-between w-full px-4 py-3.5 rounded-xl
                      font-sans text-sm font-semibold uppercase tracking-[0.08em]
                      transition-all duration-200
                      ${active
                        ? 'text-white bg-indigo-500/15 border border-indigo-500/25'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.06] border border-transparent'
                      }
                    `}
                  >
                    <span>{label}</span>
                    <span className={`transition-all duration-200 text-xs ${active ? 'text-indigo-400' : 'text-slate-600 group-hover:text-slate-400 group-hover:translate-x-1'}`}>
                      →
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* CTA Footer */}
        <div
          className="px-4 pb-8 pt-4 border-t border-border-subtle relative z-10 space-y-3"
          style={{
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.4s ease 0.35s, transform 0.4s ease 0.35s',
          }}
        >
          <Link
            href="/contact"
            onClick={close}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:-translate-y-px"
          >
            Start a Project
            <span className="text-base">→</span>
          </Link>
          <div className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[0.55rem] font-mono text-slate-600 uppercase tracking-widest">Systems Online · Kampala, UG</span>
          </div>
        </div>
      </div>
    </>
  )
}
