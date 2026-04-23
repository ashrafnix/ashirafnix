'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ASSETS } from '@/lib/assets'
import AssetFallback from './AssetFallback'

interface PortfolioLogoProps {
  asset: 'momo' | 'nexus' | 'endiro' | string
  size?: number
  className?: string
  priority?: boolean
  alt?: string
}

export default function PortfolioLogo({
  asset,
  size,
  className = '',
  priority = false,
  alt,
}: PortfolioLogoProps) {
  const assetData = ASSETS[asset]
  const [hasError, setHasError] = useState(false)

  if (!assetData) {
    if (process.env.NODE_ENV === 'development') {
      throw new Error(
        `Invalid asset ID: "${asset}". Available assets: ${Object.keys(ASSETS).join(', ')}`
      )
    }
    return <AssetFallback assetId={asset} size={size || 140} />
  }

  if (hasError) {
    return <AssetFallback assetId={asset} size={size || assetData.defaultSize} />
  }

  return (
    <Image
      src={assetData.filename}
      alt={alt || assetData.altText}
      width={size || assetData.defaultSize}
      height={size || assetData.defaultSize}
      priority={priority}
      className={className}
      onError={() => setHasError(true)}
    />
  )
}
