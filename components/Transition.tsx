'use client'
import { createContext, useContext, useEffect, useRef, Suspense } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import gsap from 'gsap'

interface TransitionContextType {
  navigate: (href: string) => void
}

const Ctx = createContext<TransitionContextType>({
  navigate: () => {},
})

export const useNavigate = () => useContext(Ctx).navigate

function PathnameListener({
  overlayRef,
  busyRef,
}: {
  overlayRef: React.RefObject<HTMLDivElement | null>
  busyRef: React.MutableRefObject<boolean>
}) {
  const pathname = usePathname()

  useEffect(() => {
    if (!busyRef.current) return
    window.scrollTo(0, 0)
    gsap
      .timeline({ onComplete: () => (busyRef.current = false) })
      .to(overlayRef.current, { yPercent: -100, duration: 0.55, ease: 'power4.inOut', delay: 0.05 })
      .set(overlayRef.current, { yPercent: 100 })
  }, [pathname, overlayRef, busyRef])

  return null
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const overlay = useRef<HTMLDivElement>(null)
  const line = useRef<HTMLDivElement>(null)
  const busy = useRef(false)

  useEffect(() => {
    gsap.set(overlay.current, { y: 0, yPercent: 100 })
  }, [])

  const navigate = (href: string) => {
    if (busy.current) return
    busy.current = true

    const tl = gsap.timeline({
      onComplete: () => router.push(href),
    })

    tl.to(overlay.current, {
      yPercent: 0,
      duration: 0.5,
      ease: 'power4.inOut',
    }).fromTo(
      line.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.3, ease: 'power2.out' },
      '-=0.15'
    )
  }

  return (
    <Ctx.Provider value={{ navigate }}>
      <Suspense fallback={null}>
        <PathnameListener overlayRef={overlay} busyRef={busy} />
      </Suspense>
      {children}
      <div
        ref={overlay}
        className="pointer-events-none fixed inset-0 z-[120] flex flex-col items-center justify-center bg-white shadow-2xl"
        style={{ transform: 'translateY(100%)' }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#17243a]">
            <span className="h-2 w-2 rounded-full bg-[#f4512a]" />
            <span>JULIUS MARSELINUS · PORTFOLIO</span>
          </div>
          <div
            ref={line}
            className="h-[2px] w-24 origin-left rounded-full bg-gradient-to-r from-[#254a87] to-[#f4512a]"
          />
        </div>
      </div>
    </Ctx.Provider>
  )
}

export function TLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
}) {
  const navigate = useNavigate()
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('//')

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      href={href}
      data-cursor
      className={className}
      onClick={(e) => {
        e.preventDefault()
        onClick?.()
        navigate(href)
      }}
    >
      {children}
    </a>
  )
}
