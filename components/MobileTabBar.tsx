'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  {
    href: '/',
    label: 'Home',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    href: '/brands',
    label: 'Systems',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    href: '/lab',
    label: 'Lab',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
      </svg>
    ),
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
]

export default function MobileTabBar() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
      {/* Fade overlay above bar */}
      <div className="h-6 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
      <div className="bg-bg-drawer/90 backdrop-blur-xl border-t border-border-subtle px-2 pb-safe">
        <div className="flex items-center justify-around h-16">
          {tabs.map(({ href, label, icon }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`
                  relative flex flex-col items-center justify-center gap-1 w-16 h-14 rounded-xl
                  transition-all duration-200 group
                  ${active ? 'text-indigo-400' : 'text-slate-500 hover:text-slate-300'}
                `}
              >
                {active && (
                  <span className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                )}
                <span className={`transition-all duration-200 ${active ? 'scale-110' : 'group-hover:scale-105'}`}>
                  {icon}
                </span>
                <span className={`text-[0.55rem] font-mono uppercase tracking-widest font-bold transition-colors ${active ? 'text-indigo-400' : ''}`}>
                  {label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
