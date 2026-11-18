'use client'
import { Fragment, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { scroll } from '@/lib/scroll'

type Props = {
  children: string
  className?: string
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'p' | 'span'
  mode?: 'load' | 'view' | 'scrub'
  delay?: number
}

export default function Split({
  children,
  className = '',
  as = 'div',
  mode = 'view',
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = as as any

  useEffect(() => {
    if (typeof window === 'undefined') return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (mode === 'scrub') {
        gsap.fromTo(
          '.wd',
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.08,
            ease: 'none',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%',
              end: 'bottom 50%',
              scrub: true,
            },
          }
        )
        return
      }

      const vars: gsap.TweenVars = {
        yPercent: 110,
        rotate: 4,
        transformOrigin: '0% 100%',
        duration: 0.9,
        ease: 'power4.out',
        stagger: 0.02,
      }

      if (mode === 'load') {
        gsap.from('.ch', { ...vars, delay: delay + (scroll.ready ? 0.1 : 0.95) })
      } else {
        gsap.from('.ch', {
          ...vars,
          delay,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        })
      }
    }, ref)

    return () => ctx.revert()
  }, [mode, delay, children])

  const wordClass =
    mode === 'scrub'
      ? 'wd inline-block'
      : 'wd inline-block overflow-hidden align-top pb-[0.12em] -mb-[0.12em]'

  return (
    <Tag ref={ref} aria-label={children} className={className}>
      {children.split(' ').map((w, i) => (
        <Fragment key={i}>
          <span aria-hidden className={wordClass}>
            {[...w].map((c, j) => (
              <span key={j} className="ch inline-block">
                {c}
              </span>
            ))}
          </span>{' '}
        </Fragment>
      ))}
    </Tag>
  )
}
