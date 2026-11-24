'use client'
import { useRef } from 'react'
import { notFound } from 'next/navigation'
import { useReveal } from '@/lib/useReveal'
import { TLink } from '@/components/Transition'
import ProjectMockup from '@/components/ProjectMockup'
import AmbientBackground from '@/components/AmbientBackground'
import Image from 'next/image'
import { projectsData, ProjectData } from '@/lib/data'

export default function ProjectView({ slug }: { slug: string }) {
  const root = useRef<HTMLElement>(null)
  useReveal(root)

  const i = projectsData.findIndex((p) => p.slug === slug)
  if (i === -1) notFound()

  const project: ProjectData = projectsData[i]
  const nextProject = projectsData[(i + 1) % projectsData.length]
  const prevProject = projectsData[(i - 1 + projectsData.length) % projectsData.length]

  return (
    <main ref={root} className="relative z-10 min-h-screen bg-[#f6f4ee] himsi-grid-bg">
      <AmbientBackground />

      {/* =========================================================================
          PROJECT DETAIL HERO
         ========================================================================= */}
      <section className="relative px-5 pt-28 pb-12 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          {/* Breadcrumbs / Back button & Counter */}
          <div className="mb-6 flex items-center justify-between">
            <TLink
              href="/#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-[#ded7ca] bg-[#fffdfa]/95 px-3.5 py-1.5 text-xs font-semibold text-stone-600 shadow-2xs backdrop-blur-md transition-all hover:border-[#254a87] hover:text-[#254a87] hover:-translate-x-0.5"
            >
              <svg className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Kembali ke Daftar Proyek</span>
            </TLink>

            <span className="font-mono text-xs text-stone-400">
              PROYEK 0{i + 1} / 0{projectsData.length}
            </span>
          </div>

          {/* Title & Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#254a87] bg-[#eaf0fa] px-3.5 py-1 rounded-full mb-3 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#254a87]" />
              <span>{project.category}</span>
              <span className="text-stone-300">·</span>
              <span className="font-mono text-stone-500">{project.year}</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#1c1917] sm:text-4xl lg:text-5xl leading-[1.15]">
              {project.title}
            </h1>
            <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-stone-600 max-w-2xl mx-auto">
              {project.desc}
            </p>
          </div>

          {/* Hero Showcase with Browser Mockup + Separated Aesthetic Floating Badges */}
          <div className="mt-8 mb-6">
            <div className="mx-auto max-w-4xl relative my-6 sm:my-8">
              
              {/* Floating Badge 1: Atas Kiri — Framework & Bahasa */}
              <div className="hidden md:flex absolute -top-5 -left-4 lg:-left-6 z-20 items-center gap-3 rounded-2xl border border-[#e0d7c7] bg-[#fffdfa]/95 px-4 py-2.5 shadow-[0_12px_28px_rgba(40,30,20,0.12)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-0.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-orange-100/90 text-[#f4512a]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-stone-400">FRAMEWORK & BAHASA</div>
                  <div className="text-xs font-bold text-stone-800">{project.framework} <span className="text-stone-300 font-normal">·</span> {project.language}</div>
                </div>
              </div>

              {/* Floating Badge 2: Atas Kanan — Status & Peran */}
              <div className="hidden md:flex absolute -top-5 -right-4 lg:-right-6 z-20 items-center gap-3 rounded-2xl border border-[#e0d7c7] bg-[#fffdfa]/95 px-4 py-2.5 shadow-[0_12px_28px_rgba(40,30,20,0.12)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-0.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-100/90 text-emerald-600">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                </div>
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-stone-400">PERAN & STATUS</div>
                  <div className="text-xs font-bold text-[#254a87]">{project.role} <span className="text-stone-300 font-normal">·</span> <span className="text-emerald-700 font-semibold">Live</span></div>
                </div>
              </div>

              {/* Browser Mockup */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#e6ded2]">
                <ProjectMockup project={project} size="lg" />
              </div>

              {/* Floating Badge 3: Bawah Kiri — Tim Pengembang */}
              <div className="hidden md:flex absolute -bottom-5 -left-4 lg:-left-6 z-20 items-center gap-3 rounded-2xl border border-[#e0d7c7] bg-[#fffdfa]/95 px-4 py-2.5 shadow-[0_12px_28px_rgba(40,30,20,0.12)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-0.5 max-w-[280px]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-100/90 text-[#254a87]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] font-mono uppercase tracking-wider text-stone-400">TIM PENGEMBANG</div>
                  <div className="text-xs font-bold text-[#1c1917] truncate" title={project.team}>{project.team}</div>
                </div>
              </div>

              {/* Floating Badge 4: Bawah Kanan — Database & Backend */}
              <div className="hidden md:flex absolute -bottom-5 -right-4 lg:-right-6 z-20 items-center gap-3 rounded-2xl border border-[#e0d7c7] bg-[#fffdfa]/95 px-4 py-2.5 shadow-[0_12px_28px_rgba(40,30,20,0.12)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-0.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-sky-100/90 text-[#0284c7]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-stone-400">DATABASE & BACKEND</div>
                  <div className="text-xs font-bold text-stone-800">{project.database}</div>
                </div>
              </div>

              {/* Mobile Fallback: 4 Separate Clean Floating Badges */}
              <div className="mt-4 grid grid-cols-2 gap-2.5 md:hidden">
                <div className="flex items-center gap-2.5 rounded-xl border border-[#e2dacb] bg-[#fffdfa] p-3 shadow-2xs">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-100/80 text-[#f4512a]">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] font-mono uppercase tracking-wider text-stone-400">FRAMEWORK</div>
                    <div className="text-xs font-bold text-stone-800 truncate">{project.framework}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl border border-[#e2dacb] bg-[#fffdfa] p-3 shadow-2xs">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100/80 text-emerald-600">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] font-mono uppercase tracking-wider text-stone-400">STATUS</div>
                    <div className="text-xs font-bold text-emerald-700 truncate">Live Production</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl border border-[#e2dacb] bg-[#fffdfa] p-3 shadow-2xs">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100/80 text-[#254a87]">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] font-mono uppercase tracking-wider text-stone-400">TIM</div>
                    <div className="text-xs font-bold text-[#1c1917] truncate" title={project.team}>{project.team}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl border border-[#e2dacb] bg-[#fffdfa] p-3 shadow-2xs">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-100/80 text-[#0284c7]">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] font-mono uppercase tracking-wider text-stone-400">DATABASE</div>
                    <div className="text-xs font-bold text-stone-800 truncate">{project.database}</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#254a87] px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-[#254a87]/20 transition-all hover:bg-[#1e3d70] hover:scale-105"
              >
                <span>Kunjungi Website Langsung</span>
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#ded7ca] bg-[#fffdfa] px-5 py-2.5 text-xs font-semibold text-stone-700 shadow-2xs transition-colors hover:bg-[#f6f2e8]"
                >
                  <span>Repository GitHub</span>
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STRUCTURED COMPACT BENTO CASE STUDY
         ========================================================================= */}
      <section className="relative px-5 py-12 md:px-10 lg:px-16 bg-[#f0ece1]/70 border-t border-[#e6dfd2]">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* =====================================================================
                KOLOM KIRI (7/12) — Ringkasan, Problem & Solusi, Fitur, UI Gallery
               ===================================================================== */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Ringkasan & Solusi Rekayasa (Dense Bento Card) */}
              <div className="rounded-3xl border border-[#e6ded2] bg-[#fffdfa] p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#254a87] bg-[#eaf0fa] px-3 py-1 rounded-full">
                    DOKUMENTASI SISTEM
                  </span>
                  <span className="text-xs font-mono text-stone-400">Ringkasan & Solusi</span>
                </div>
                
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1c1917]">
                  Gambaran Umum & Solusi Sistem
                </h2>
                
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {project.loremOverview}
                </p>

                {/* Problem & Solution side-by-side inside the card */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-5 border-t border-[#f0ebe0]">
                  <div className="rounded-2xl border border-[#f5d0c5] bg-[#fef8f6] p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#b91c1c] uppercase tracking-wider mb-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#b91c1c]" />
                        <span>Tantangan (Problem)</span>
                      </div>
                      <p className="text-xs leading-relaxed text-stone-600">
                        {project.loremProblem}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#cbe0f8] bg-[#f4f8fd] p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#254a87] uppercase tracking-wider mb-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#254a87]" />
                        <span>Solusi Rekayasa</span>
                      </div>
                      <p className="text-xs leading-relaxed text-stone-600">
                        {project.loremSolution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Fitur & Kapabilitas Utama */}
              <div className="rounded-3xl border border-[#e6ded2] bg-[#fffdfa] p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#254a87] bg-[#eaf0fa] px-3 py-1 rounded-full">
                    KAPABILITAS
                  </span>
                  <span className="text-xs font-mono text-stone-400">Fitur Utama</span>
                </div>
                
                <h3 className="text-xl font-extrabold text-[#1c1917] mb-4">
                  Fitur & Fungsionalitas Utama
                </h3>

                <div className="space-y-3">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="group rounded-2xl border border-[#ede6da] bg-[#faf8f3] p-4 transition-colors hover:border-[#254a87]/30 hover:bg-[#fffdfa]"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#eaf0fa] text-xs font-mono font-bold text-[#254a87]">
                          0{idx + 1}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#1c1917]">{feat.title}</h4>
                          <p className="mt-1 text-xs leading-relaxed text-stone-600">{feat.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Screenshot Fitur Aplikasi (Conditional untuk BridgeU / proyek yang punya gallery) */}
              {project.galleryImages && project.galleryImages.length > 0 && (
                <div className="rounded-3xl border border-[#e6ded2] bg-[#fffdfa] p-6 sm:p-7 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284c7] bg-[#e0f2fe] px-3 py-1 rounded-full border border-[#0284c7]/20">
                      TAMPILAN NYATA
                    </span>
                    <span className="text-xs font-mono text-stone-400">Fitur Kustomisasi</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#1c1917] mb-2">
                    Screenshot Fitur Aplikasi
                  </h3>
                  <p className="text-xs text-stone-500 mb-4">
                    Antarmuka visual kustomisasi avatar frame & motif floating yang aktif di sistem:
                  </p>
                  <div className="rounded-2xl border border-[#ede6da] overflow-hidden shadow-xs">
                    <Image
                      src={project.galleryImages[0]}
                      alt={`${project.shortTitle} screenshot`}
                      width={1200}
                      height={700}
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* =====================================================================
                KOLOM KANAN (5/12) — Sidebar Spesifikasi, Sertifikat, Metrik & CTA
               ===================================================================== */}
            <div className="lg:col-span-5 space-y-6">

              {/* 1. Sertifikat & Prestasi (Khusus BridgeU Juara 2) */}
              {project.certificateImage && (
                <div className="rounded-3xl border-2 border-[#f4512a]/30 bg-gradient-to-br from-[#fffdfa] via-[#fef6f3] to-[#fef1ee] p-6 sm:p-7 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#fef1ee] border border-[#f4512a]/30 px-3 py-1">
                      <span className="h-2 w-2 rounded-full bg-[#f4512a]" />
                      <span className="text-[11px] font-bold text-[#f4512a] uppercase tracking-wider">
                        JUARA 2 NASIONAL
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400">2026</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1c1917] leading-snug">
                    Software Development Competition
                  </h3>
                  <p className="mt-1 text-xs text-stone-600">
                    INSPIRE 1.0 · Universitas Bunda Mulia
                  </p>

                  <div className="mt-4 rounded-2xl border border-[#f4512a]/20 overflow-hidden shadow-sm group">
                    <Image
                      src={project.certificateImage}
                      alt="Sertifikat Juara 2 Julius Marselinus"
                      width={700}
                      height={500}
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="mt-3.5 space-y-1.5 text-[11px] text-stone-600">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#f4512a] shrink-0" />
                      <span>Penerima: <strong className="text-stone-800">Julius Marselinus</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-stone-300 shrink-0" />
                      <span>Diverifikasi oleh SPMI Universitas Bunda Mulia</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Spesifikasi Stack & Dependensi */}
              <div className="rounded-3xl border border-[#e6ded2] bg-[#fffdfa] p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#254a87] bg-[#eaf0fa] px-3 py-1 rounded-full">
                    ARSITEKTUR
                  </span>
                  <span className="text-xs font-mono text-stone-400">Tech Stack</span>
                </div>
                
                <h3 className="text-lg font-extrabold text-[#1c1917] mb-3">
                  Spesifikasi Teknis
                </h3>

                {/* Categorized Tech Specs Table */}
                <div className="space-y-2.5 pb-4 border-b border-[#f0ebe0] text-xs">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-stone-400 font-mono text-[10px] tracking-wider uppercase">Framework</span>
                    <span className="font-bold text-[#1c1917]">{project.framework}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-stone-400 font-mono text-[10px] tracking-wider uppercase">Bahasa</span>
                    <span className="font-bold text-[#1c1917]">{project.language}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-stone-400 font-mono text-[10px] tracking-wider uppercase">Database</span>
                    <span className="font-bold text-[#254a87]">{project.database}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-stone-400 font-mono text-[10px] tracking-wider uppercase">Pengembang</span>
                    <span className="font-bold text-stone-700 truncate max-w-[190px]" title={project.team}>{project.team}</span>
                  </div>
                </div>

                {/* Tags pills */}
                <div className="mt-4">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-2">Pustaka & Layanan</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-[#f4efe5] px-2.5 py-1 text-[11px] font-mono font-semibold text-stone-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Metrik & Dampak Sistem (jika ada metrics) */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="rounded-3xl border border-[#e6ded2] bg-[#fffdfa] p-5 shadow-sm">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-3">
                    METRIK UTAMA SISTEM
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="rounded-xl border border-[#ede6da] bg-[#faf8f3] p-2.5 text-center">
                        <div className="text-[9px] font-medium text-stone-400 uppercase tracking-wider truncate">{m.label}</div>
                        <div className="mt-1 text-xs font-bold text-[#1c1917] truncate">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Action Card (Buka Web / GitHub) */}
              <div className="rounded-3xl border border-[#254a87]/20 bg-gradient-to-br from-[#eaf0fa] to-[#fffdfa] p-6 shadow-sm">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#254a87] uppercase tracking-wider mb-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live Deployment Aktif</span>
                </div>
                <h4 className="text-base font-bold text-[#1c1917]">
                  Coba Langsung {project.shortTitle}
                </h4>
                <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                  Buka aplikasi aktif di browser untuk melihat interaktivitas dan performanya secara real-time.
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#254a87] px-5 py-3 text-xs font-bold text-white shadow-md hover:bg-[#1e3d70] transition-colors"
                  >
                    <span>Buka Website {project.shortTitle}</span>
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-[#ded7ca] bg-white px-5 py-2.5 text-xs font-semibold text-stone-700 hover:bg-[#f6f2e8] transition-colors"
                    >
                      <span>Repository GitHub</span>
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* =====================================================================
              NAVIGATOR PROYEK SEBELUMNYA & SELANJUTNYA
             ===================================================================== */}
          <div className="mt-12 pt-8 border-t border-[#e2dcd0] flex flex-wrap items-center justify-between gap-4">
            <TLink
              href={`/projects/${prevProject.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#ded7ca] bg-[#fffdfa] px-4 py-2 text-xs font-semibold text-stone-600 shadow-2xs hover:border-[#254a87] hover:text-[#254a87] transition-colors"
            >
              <svg className="h-3.5 w-3.5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Sebelumnya: {prevProject.shortTitle}</span>
            </TLink>

            <TLink
              href="/#projects"
              className="text-xs font-semibold text-stone-500 hover:text-[#254a87] transition-colors"
            >
              Kembali ke Menu Utama
            </TLink>

            <TLink
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#ded7ca] bg-[#fffdfa] px-4 py-2 text-xs font-bold text-[#1c1917] shadow-2xs hover:border-[#254a87] hover:text-[#254a87] transition-colors"
            >
              <span>Selanjutnya: {nextProject.shortTitle}</span>
              <svg className="h-3.5 w-3.5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </TLink>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-xs text-stone-500 bg-[#ede9de] border-t border-[#e2dcd0]">
        <p>© 2026 Julius Marselinus · Built with Next.js & Tailwind CSS</p>
      </footer>
    </main>
  )
}
