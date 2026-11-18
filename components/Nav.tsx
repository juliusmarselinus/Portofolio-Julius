'use client'
import { useState, useEffect } from 'react'
import { TLink } from './Transition'
import { STUDENT_INFO } from '@/lib/data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-5 inset-x-0 z-50 px-4 md:px-8 pointer-events-none transition-all">
      <div
        className={`pointer-events-auto mx-auto flex max-w-4xl items-center justify-between rounded-full bg-[#fbf9f4]/90 px-6 py-2.5 shadow-[0_8px_30px_rgba(40,30,20,0.06)] border border-[#e8e2d4] backdrop-blur-xl transition-all duration-300 ${
          scrolled ? 'shadow-[0_12px_36px_rgba(40,30,20,0.09)] border-[#ddd6c8]' : ''
        }`}
      >
        {/* Brand / Logo */}
        <TLink href="/" className="group flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#254a87] text-white shadow-xs transition-transform duration-300 group-hover:scale-105">
            <span className="text-xs font-bold font-mono">SI</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold leading-tight tracking-tight text-[#1c1917] group-hover:text-[#254a87] transition-colors">
              PORTFOLIO
            </span>
            <span className="text-[10px] text-stone-400 font-medium leading-none">
              Sistem Informasi UMN
            </span>
          </div>
        </TLink>

        {/* Center Nav items */}
        <nav className="hidden items-center gap-1 sm:flex">
          <a
            href="/#home"
            className="rounded-full px-4 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100/80 hover:text-[#254a87]"
          >
            Home
          </a>
          <a
            href="/#projects"
            className="rounded-full px-4 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100/80 hover:text-[#254a87]"
          >
            Proyek
          </a>
          <a
            href="/#capabilities"
            className="rounded-full px-4 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100/80 hover:text-[#254a87]"
          >
            Keahlian
          </a>
          <a
            href="/#about"
            className="rounded-full px-4 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100/80 hover:text-[#254a87]"
          >
            Tentang
          </a>
        </nav>

        {/* Right Status & GitHub (ZERO emojis, ZERO magang mentions) */}
        <div className="flex items-center gap-2.5">
          <div className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f4512a]" />
            <span>Software Engineer</span>
          </div>

          <a
            href={STUDENT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-[#254a87] px-4 py-1.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#1e3d70]"
          >
            <span>GitHub</span>
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-700 sm:hidden"
            aria-label="Menu"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {menuOpen && (
        <div className="pointer-events-auto mx-auto mt-2 max-w-sm rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur-xl sm:hidden">
          <div className="flex flex-col gap-1">
            <a
              href="/#home"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              Home
            </a>
            <a
              href="/#projects"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              Proyek
            </a>
            <a
              href="/#capabilities"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              Keahlian
            </a>
            <a
              href="/#about"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              Tentang
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
