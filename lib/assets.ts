export interface AssetMetadata {
  id: string
  filename: string
  displayName: string
  altText: string
  category: 'brand' | 'portfolio'
  dimensions: {
    width: number
    height: number
  }
  aspectRatio: number
  defaultSize: number
}

export const ASSETS: Record<string, AssetMetadata> = {
  hero: {
    id: 'hero',
    filename: '/assets/ashrafnix hero.png',
    displayName: 'AshrafNix Hero Artwork',
    altText: 'AshrafNix cinematic hero artwork with AN monogram',
    category: 'brand',
    dimensions: { width: 832, height: 1216 },
    aspectRatio: 832 / 1216,
    defaultSize: 832,
  },
  ashrafnix: {
    id: 'ashrafnix',
    filename: '/assets/brand/ashrafnix.png',
    displayName: 'AshrafNix Studio',
    altText: 'AshrafNix Studio logo - metallic circular badge with AN monogram',
    category: 'brand',
    dimensions: { width: 1024, height: 1024 },
    aspectRatio: 1,
    defaultSize: 100,
  },
  momo: {
    id: 'momo',
    filename: '/assets/portfolio/momo.png',
    displayName: 'MoMo Stack',
    altText: 'MoMo Stack logo - fintech payment infrastructure brand',
    category: 'portfolio',
    dimensions: { width: 800, height: 800 },
    aspectRatio: 1,
    defaultSize: 140,
  },
  nexus: {
    id: 'nexus',
    filename: '/assets/portfolio/nexus.png',
    displayName: 'Nexus Intelligence Systems',
    altText: 'Nexus Intelligence Systems logo - cybersecurity platform brand',
    category: 'portfolio',
    dimensions: { width: 1000, height: 1000 },
    aspectRatio: 1,
    defaultSize: 140,
  },
  'nexus-horizontal': {
    id: 'nexus-horizontal',
    filename: '/assets/portfolio/nexus-horizontal.png',
    displayName: 'Nexus Intelligence Systems',
    altText: 'Nexus Intelligence Systems horizontal lockup - cybersecurity platform brand',
    category: 'portfolio',
    dimensions: { width: 1200, height: 400 },
    aspectRatio: 3,
    defaultSize: 240,
  },
  'nexus-blueprint': {
    id: 'nexus-blueprint',
    filename: '/assets/portfolio/nexus-blueprint.png',
    displayName: 'Nexus Intelligence Systems Blueprint',
    altText: 'Nexus Intelligence Systems technical blueprint',
    category: 'portfolio',
    dimensions: { width: 1920, height: 1080 },
    aspectRatio: 16 / 9,
    defaultSize: 800,
  },
  endiro: {
    id: 'endiro',
    filename: '/assets/portfolio/endiro.png',
    displayName: 'Endiro Beans',
    altText: 'Endiro Beans logo - specialty coffee retail brand',
    category: 'portfolio',
    dimensions: { width: 512, height: 512 },
    aspectRatio: 1,
    defaultSize: 140,
  },
  summit: {
    id: 'summit',
    filename: '/assets/portfolio/summit.png',
    displayName: 'Summit',
    altText: 'Summit brand logo',
    category: 'portfolio',
    dimensions: { width: 800, height: 800 },
    aspectRatio: 1,
    defaultSize: 140,
  },
  'summit-blueprint': {
    id: 'summit-blueprint',
    filename: '/assets/portfolio/summit-blueprint.png',
    displayName: 'Summit Blueprint',
    altText: 'Summit technical blueprint',
    category: 'portfolio',
    dimensions: { width: 1920, height: 1080 },
    aspectRatio: 16 / 9,
    defaultSize: 800,
  },
  empire: {
    id: 'empire',
    filename: '/assets/portfolio/empire.png',
    displayName: 'Empire Night Club',
    altText: 'Empire Night Club logo',
    category: 'portfolio',
    dimensions: { width: 800, height: 800 },
    aspectRatio: 1,
    defaultSize: 140,
  },
  fashion: {
    id: 'fashion',
    filename: '/assets/portfolio/fashion.png',
    displayName: 'Fashion Brand',
    altText: 'Fashion brand logo',
    category: 'portfolio',
    dimensions: { width: 800, height: 800 },
    aspectRatio: 1,
    defaultSize: 140,
  },
}
