'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

type Props = {
  text?: string
  items?: string[]
  dir?: 1 | -1
  speed?: number
}

export default function Marquee({
  text,
  items,
  dir = 1,
  speed = 30,
}: Props) {
  const inner = useRef<HTMLDivElement>(null)

  const contentList = items ?? (text ? [text] : ['DEVELOPER', 'DESIGNER', 'ENGINEER'])

  useEffect(() => {
    const el = inner.current
    if (!el) return

    const w = el.scrollWidth / 2
    const duration = w / speed

    const anim = gsap.fromTo(
      el,
      { x: dir === 1 ? 0 : -w },
      {
        x: dir === 1 ? -w : 0,
        duration,
        ease: 'none',
        repeat: -1,
      }
    )

    return () => {
      anim.kill()
    }
  }, [dir, speed, contentList])

  return (
    <div className="overflow-hidden border-y border-slate-200/80 bg-white/80 py-4 shadow-2xs backdrop-blur-sm">
      <div ref={inner} className="flex w-max whitespace-nowrap">
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="flex items-center gap-8 px-4 text-xs font-bold tracking-widest uppercase md:text-sm text-slate-700">
            {contentList.map((item, i) => (
              <span key={i} className="flex items-center gap-4">
                <span className="hover:text-[#254a87] transition-colors">{item}</span>
                <span className={`inline-block h-1.5 w-1.5 rounded-full ${i % 2 === 0 ? 'bg-[#254a87]' : 'bg-[#f4512a]'}`} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
