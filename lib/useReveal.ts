import { useEffect, RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { scroll } from '@/lib/scroll'

export function useReveal(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Hero elements entrance
      gsap.from('.hero-line', {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        delay: scroll.ready ? 0.1 : 0.95,
      })

      // Section cards and items reveal
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 45,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })

      // Continuous subtle parallax elements
      gsap.utils.toArray<HTMLElement>('[data-speed]').forEach((el) => {
        const s = parseFloat(el.dataset.speed || '0.2')
        gsap.fromTo(
          el,
          { y: () => -s * 80 },
          {
            y: () => s * 80,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        )
      })

      // Fade on leave
      gsap.utils.toArray<HTMLElement>('[data-fade]').forEach((el) => {
        gsap.to(el, {
          yPercent: -15,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    }, root)

    return () => ctx.revert()
  }, [root])
}
