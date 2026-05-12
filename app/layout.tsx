import type { Metadata, Viewport } from 'next'
import { Tajawal } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const tajawal = Tajawal({ 
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
})

export const metadata: Metadata = {
  title: 'AM Arena - ساحة الأبطال وموطن البطولات',
  description: 'انضم إلى أكبر منصة للبطولات والمسابقات الإلكترونية في العالم العربي. شارك، تنافس، واربح جوائز مميزة!',
  keywords: ['esports', 'gaming', 'tournaments', 'بطولات', 'ألعاب', 'مسابقات'],
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'AM Arena - ساحة الأبطال وموطن البطولات',
    description: 'انضم إلى أكبر منصة للبطولات والمسابقات الإلكترونية في العالم العربي',
    type: 'website',
    locale: 'ar_SA',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f0a1e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="bg-background">
      <body className={`${tajawal.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
