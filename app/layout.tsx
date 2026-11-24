import './globals.css'
import type { Metadata } from 'next'
import Shell from '@/components/Shell'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: 'Julius Marselinus | Software & Data Portfolio',
  description: 'Portofolio personal Julius Marselinus — Software Engineering, Data Visualization, Machine Learning & Deep Learning, serta Data Modeling.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth bg-[#f6f4ee]">
      <body className="bg-[#f6f4ee] text-[#1c1917] antialiased selection:bg-[#254a87] selection:text-white min-h-screen">
        <Shell>{children}</Shell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
