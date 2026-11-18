'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { scroll } from '@/lib/scroll'

export default function Preloader() {
  const root = useRef<HTMLDivElement>(null)
  const num = useRef<HTMLSpanElement>(null)
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    document.body.style.overflow = 'hidden'
    const counter = { v: 0 }

    const tl = gsap.timeline({
      onComplete: () => {
        scroll.ready = true
        document.body.style.overflow = ''
        if (root.current) root.current.style.display = 'none'
      },
    })

    tl.to(counter, {
      v: 100,
      duration: 0.9,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (num.current) num.current.textContent = String(Math.round(counter.v)).padStart(3, '0')
        if (bar.current) bar.current.style.width = `${counter.v}%`
      },
    })
      .to([num.current, bar.current], { opacity: 0, y: -15, duration: 0.25 })
      .to(root.current, { yPercent: -100, duration: 0.6, ease: 'power4.inOut' }, '-=0.05')

    return () => {
      tl.kill()
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[110] flex flex-col justify-between bg-[#f6f4ee] p-6 md:p-12 shadow-2xl"
    >
      <div className="flex items-center justify-between text-xs font-bold tracking-widest text-slate-500">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#f4512a]" />
          JULIUS MARSELINUS
        </span>
        <span className="text-[#254a87] font-semibold">SOFTWARE & DATA PORTFOLIO</span>
      </div>

      <div className="flex flex-col items-end">
        <div className="flex items-baseline gap-2">
          <span ref={num} className="text-7xl font-extralight tracking-tighter tabular-nums text-[#17243a] md:text-9xl">
            000
          </span>
          <span className="text-2xl font-bold text-[#f4512a]">%</span>
        </div>
        <div className="mt-4 h-[3px] w-full max-w-xs rounded-full bg-slate-100 overflow-hidden">
          <div
            ref={bar}
            className="h-full w-0 rounded-full bg-gradient-to-r from-[#254a87] to-[#f4512a] transition-all"
          />
        </div>
      </div>
    </div>
  )
}
