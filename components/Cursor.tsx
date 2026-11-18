'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dotEl = dot.current
    const ringEl = ring.current
    if (!dotEl || !ringEl) return

    gsap.set([dotEl, ringEl], { xPercent: -50, yPercent: -50 })

    const dotX = gsap.quickTo(dotEl, 'x', { duration: 0.12, ease: 'power2.out' })
    const dotY = gsap.quickTo(dotEl, 'y', { duration: 0.12, ease: 'power2.out' })

    const ringX = gsap.quickTo(ringEl, 'x', { duration: 0.35, ease: 'power3.out' })
    const ringY = gsap.quickTo(ringEl, 'y', { duration: 0.35, ease: 'power3.out' })

    const move = (e: MouseEvent) => {
      dotX(e.clientX)
      dotY(e.clientY)
      ringX(e.clientX)
      ringY(e.clientY)
      gsap.to([dotEl, ringEl], { opacity: 1, duration: 0.2, overwrite: 'auto' })
    }

    const over = (e: MouseEvent) => {
      const hit = (e.target as HTMLElement).closest('a, button, [data-cursor]')
      if (hit) {
        gsap.to(ringEl, { scale: 1.8, borderColor: '#f4512a', backgroundColor: 'rgba(244, 81, 42, 0.08)', duration: 0.25 })
        gsap.to(dotEl, { scale: 0.5, backgroundColor: '#f4512a', duration: 0.2 })
      } else {
        gsap.to(ringEl, { scale: 1, borderColor: '#254a87', backgroundColor: 'transparent', duration: 0.25 })
        gsap.to(dotEl, { scale: 1, backgroundColor: '#254a87', duration: 0.2 })
      }
    }

    const leave = () => {
      gsap.to([dotEl, ringEl], { opacity: 0, duration: 0.2 })
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    document.addEventListener('mouseleave', leave)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <>
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-7 w-7 rounded-full border border-[#254a87]/40 opacity-0 transition-colors md:block"
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[101] hidden h-2 w-2 rounded-full bg-[#254a87] opacity-0 md:block"
      />
    </>
  )
}
