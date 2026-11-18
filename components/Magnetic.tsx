'use client'
import { useRef } from 'react'
import gsap from 'gsap'

export default function Magnetic({
  children,
  strength = 0.35,
}: {
  children: React.ReactNode
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const move = (e: React.MouseEvent) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    gsap.to(ref.current, {
      x: (e.clientX - r.left - r.width / 2) * strength,
      y: (e.clientY - r.top - r.height / 2) * strength,
      duration: 0.35,
      ease: 'power3.out',
    })
  }

  const leave = () => {
    if (!ref.current) return
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.75, ease: 'elastic.out(1, 0.4)' })
  }

  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={leave} className="inline-block">
      {children}
    </div>
  )
}
