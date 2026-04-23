interface AssetFallbackProps {
  assetId: string
  size?: number
}

export default function AssetFallback({ assetId, size = 100 }: AssetFallbackProps) {
  return (
    <div
      className="flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl"
      style={{ width: size, height: size }}
    >
      <span className="text-xs font-mono text-slate-600 uppercase tracking-wider">
        {assetId}
      </span>
    </div>
  )
}
