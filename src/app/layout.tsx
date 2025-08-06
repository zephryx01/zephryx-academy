import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Zephryx Academy - Cybersecurity Training & Resources',
  description: 'Learn cybersecurity with expert-led courses and free resources at Zephryx Academy.',
  keywords: 'cybersecurity, training, courses, hacking, network security, penetration testing ethical hacking courses in hindi, ethical hacking courses in english, ethical hacking courses in urdu, ethical hacking courses in punjabi, ethical hacking courses in hindi, ethical hacking courses in india',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
} 