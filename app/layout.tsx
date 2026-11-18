import './globals.css'
import type { Metadata } from 'next'
import Shell from '@/components/Shell'

export const metadata: Metadata = {
  title: 'Portfolio | Web Developer & Frontend Engineer',
  description: 'Portofolio web modern dengan Next.js, Three.js, GSAP animation, dan arsitektur responsif. Siap untuk kesempatan magang.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth bg-[#f6f4ee]">
      <body className="bg-[#f6f4ee] text-[#1c1917] antialiased selection:bg-[#254a87] selection:text-white min-h-screen">
        <Shell>{children}</Shell>
      </body>
    </html>
  )
}
