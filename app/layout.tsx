import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Baloo_2, Nunito } from 'next/font/google'
import './globals.css'

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-baloo',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Demarcos banho e tosa | Banho e Tosa - RJ',
  description:
    'Banho, tosa, hidratação, corte de unhas e limpeza de ouvido com todo o carinho que seu amiguinho merece. Agende agora no WhatsApp | Demarcos Luis, Rio de Janeiro - RJ.',
  keywords: [
    'banho e tosa',
    'Domicilio Rio de Janeiro',
    'tosa higiênica',
    'hidratação pet',
    'banho para cachorro',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Demarcos Luis | Banho e Tosa',
    description: 'O carinho que seu amiguinho merece. Banho, tosa e muito mais.',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#163a86',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${baloo.variable} ${nunito.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
