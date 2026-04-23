import type { Metadata } from 'next'
import { Syne, IBM_Plex_Mono, Outfit } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import DeferredScrollReveal from '@/components/DeferredScrollReveal'
import ScrollProgress from '@/components/ScrollProgress'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'AshirafNix — Technical Brands for a Connected Uganda',
    template: '%s | AshirafNix',
  },
  description:
    'Full-stack developer and brand designer building scalable visual identities and the applications that power them. Based in Kampala, Uganda.',
  keywords: [
    'brand design',
    'full-stack developer',
    'Uganda',
    'Kampala',
    'React',
    'Next.js',
    'SVG logo design',
    'fintech Africa',
  ],
  authors: [{ name: 'Ashraf Nix Kakooza' }],
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    siteName: 'AshirafNix',
    title: 'AshirafNix — Technical Brands for a Connected Uganda',
    description:
      'Full-stack developer and brand designer. Kampala, Uganda.',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${ibmPlexMono.variable} ${outfit.variable}`}
    >
      <body className="grain mesh-bg">
        {/* Fixed decorative elements */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-50" />
        <ScrollProgress />
        <Nav />
        <main className="relative z-10">{children}</main>
        
        <DeferredScrollReveal />
      </body>
    </html>
  )
}
