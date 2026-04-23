import Image from 'next/image'
import { ASSETS } from '@/lib/assets'

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
  const asset = ASSETS.ashrafnix

  return (
    <Image
      src={asset.filename}
      alt={asset.altText}
      width={size}
      height={size}
      priority={priority}
      className={`transition-transform duration-300 hover:scale-105 ${className}`}
    />
  )
}
