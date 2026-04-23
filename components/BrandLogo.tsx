import Image from 'next/image'
import appLogo from '@/assets/logo.png'

interface BrandLogoProps {
  size?: number
  className?: string
  priority?: boolean
  variant?: 'default' | 'compact'
}

export default function BrandLogo({
  size = 100,
  className = '',
  priority = false,
  variant = 'default',
}: BrandLogoProps) {
  return (
    <div
      className={`
        group relative inline-flex items-center justify-center overflow-hidden rounded-xl
        border border-white/10 bg-black/40 p-1.5 backdrop-blur-md
        shadow-[0_10px_30px_rgba(0,0,0,0.45)]
        transition-all duration-500 hover:border-red-500/35 hover:bg-black/55
        ${variant === 'compact' ? 'rounded-lg p-1' : 'rounded-xl p-1.5'}
        ${className}
      `}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(239,68,68,0.25),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <Image
        src={appLogo}
        alt="AshrafNix brand logo"
        width={size}
        height={size}
        priority={priority}
        className="relative z-10 h-auto w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  )
}
