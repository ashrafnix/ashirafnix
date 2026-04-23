/**
 * Central site config for emails, social URLs, and internal routes.
 * Set NEXT_PUBLIC_* values in .env.local for production.
 */
export const site = {
  name: 'AshirafNix',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'ashrafnixkakooza@gmail.com',
  social: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL?.trim() || '',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || '',
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL?.trim() || '',
  },
} as const

export const mainNav = [
  { href: '/', label: 'Overview' },
  { href: '/brands', label: 'Systems' },
  { href: '/stack', label: 'Engine' },
  { href: '/tokens', label: 'Tokens' },
  { href: '/lab', label: 'Knowledge' },
  { href: '/links', label: 'Connect' },
] as const
