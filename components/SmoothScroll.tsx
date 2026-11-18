'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { scroll } from '@/lib/scroll'

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })

    lenis.on('scroll', () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      scroll.progress = max > 0 ? window.scrollY / max : 0
      ScrollTrigger.update()
    })

    let skew = 0
    const tick = (t: number) => {
      lenis.raf(t * 1000)
      scroll.velocity = lenis.velocity

      const target = gsap.utils.clamp(-3.5, 3.5, lenis.velocity * 0.08)
      skew += (target - skew) * 0.1
      if (Math.abs(skew) > 0.005 || target !== 0) {
        gsap.set('.skew-v', { skewY: skew })
      }
    }

    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  return null
}
