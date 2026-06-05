import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sittio | Sistema Operativo para Negocios de Servicios',
  description: 'Plataforma automatizada para pequeños negocios de servicios en España. Webs bonitas + automaciones inteligentes. Sin costos iniciales.',
  openGraph: {
    title: 'Sittio',
    description: 'Sistema operativo para negocios de servicios',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}
