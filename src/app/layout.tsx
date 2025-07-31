import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'GirlsBra Top - Expert Bra Guides & Reviews',
  description: 'Empowering every woman to find her perfect fit. Expert bra guides, reviews, and fitting advice for all body types and needs.',
  keywords: 'bra guides, bra reviews, bra fitting, women\'s lingerie, bra size calculator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

