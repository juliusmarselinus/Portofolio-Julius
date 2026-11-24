'use client'
import { useRef } from 'react'
import { notFound } from 'next/navigation'
import { useReveal } from '@/lib/useReveal'
import { TLink } from '@/components/Transition'
import ProjectMockup from '@/components/ProjectMockup'
import AmbientBackground from '@/components/AmbientBackground'
import Magnetic from '@/components/Magnetic'
import Image from 'next/image'
import { projectsData, STUDENT_INFO, ProjectData } from '@/lib/data'

export default function ProjectView({ slug }: { slug: string }) {
  const root = useRef<HTMLElement>(null)
  useReveal(root)

  const i = projectsData.findIndex((p) => p.slug === slug)
  if (i === -1) notFound()

  const project: ProjectData = projectsData[i]
  const nextProject = projectsData[(i + 1) % projectsData.length]

  return (
    <main ref={root} className="relative z-10 min-h-screen bg-[#f6f4ee] himsi-grid-bg">
      <AmbientBackground />

      {/* =========================================================================
          PROJECT DETAIL HERO
         ========================================================================= */}
      <section className="relative px-6 pt-32 pb-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          {/* Breadcrumbs / Back button */}
          <div className="mb-8 flex items-center justify-between">
            <TLink
              href="/#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-[#ded7ca] bg-[#fffdfa]/95 px-4 py-2 text-xs font-semibold text-stone-600 shadow-2xs backdrop-blur-md transition-all hover:border-[#254a87] hover:text-[#254a87] hover:-translate-x-0.5"
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
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#254a87] bg-[#eaf0fa] px-4 py-1.5 rounded-full mb-4 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#254a87]" />
              <span>{project.category}</span>
              <span className="text-stone-300">·</span>
              <span className="font-mono text-stone-500">{project.year}</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#1c1917] sm:text-5xl lg:text-6xl leading-[1.12]">
              {project.title}
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-stone-600">
              {project.desc}
            </p>

            {/* Author & Specs Pill */}
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <span className="text-stone-400">Tim Pengembang:</span>
                <span className="font-bold text-[#1c1917]">{project.team}</span>
              </div>
              <span className="text-stone-300">·</span>
              <div className="flex items-center gap-1.5">
                <span className="text-stone-400">Peran:</span>
                <span className="font-semibold text-[#254a87]">{project.role}</span>
              </div>
            </div>
          </div>

          {/* Hero Showcase with Browser Mockup (Unobstructed & Clean) */}
          <div className="mt-12">
            <div className="mx-auto max-w-4xl">
              <ProjectMockup project={project} size="lg" />
            </div>

            {/* Clean System Metadata Bar (Below Mockup, Zero Image Obstruction) */}
            <div className="mt-6 mx-auto max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-2xl border border-[#e6ded2] bg-[#fffdfa] p-4 shadow-2xs">
                <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400">Tim Pengembang</div>
                <div className="mt-1 text-xs font-bold text-[#1c1917] truncate" title={project.team}>
                  {project.team}
                </div>
              </div>
              <div className="rounded-2xl border border-[#e6ded2] bg-[#fffdfa] p-4 shadow-2xs">
                <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400">Peran Julius</div>
                <div className="mt-1 text-xs font-bold text-[#254a87] truncate">
                  {project.role}
                </div>
              </div>
              <div className="rounded-2xl border border-[#e6ded2] bg-[#fffdfa] p-4 shadow-2xs">
                <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400">Stack Utama</div>
                <div className="mt-1 text-xs font-bold text-stone-700 truncate">
                  {project.stackPrimary}
                </div>
              </div>
              <div className="rounded-2xl border border-[#e6ded2] bg-[#fffdfa] p-4 shadow-2xs">
                <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400">Status Deployment</div>
                <div className="mt-1 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Production Live</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons: Kunjungi Web & GitHub Repo */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <Magnetic strength={0.25}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-2xl bg-[#254a87] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#254a87]/20 transition-all hover:bg-[#1e3d70] hover:scale-105"
              >
                <span>Kunjungi Website Langsung</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </Magnetic>

            {project.githubUrl && (
              <Magnetic strength={0.2}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#ded7ca] bg-[#fffdfa] px-6 py-3.5 text-sm font-semibold text-stone-700 shadow-2xs transition-colors hover:bg-[#f6f2e8]"
                >
                  <span>Lihat Repository GitHub</span>
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </Magnetic>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          STRUCTURED CASE STUDY
         ========================================================================= */}
      <section className="relative px-6 py-20 md:px-12 lg:px-20 bg-[#f0ece1]/70 border-t border-[#e6dfd2]">
        <div className="mx-auto max-w-4xl space-y-16">
          {/* Section 1: Ringkasan Proyek */}
          <div className="rounded-3xl border border-[#e6dfd2] bg-[#fffdfa] p-8 sm:p-10 shadow-sm">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#254a87] bg-[#eaf0fa] px-3.5 py-1 rounded-full mb-3">
              DOKUMENTASI SISTEM
            </div>
            <h2 className="text-2xl font-extrabold text-[#1c1917] sm:text-3xl">
              1. Ringkasan & Gambaran Umum Sistem
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-stone-600">
              <p>{project.loremOverview}</p>
            </div>
          </div>

          {/* Section 1.5: Gallery Tampilan Nyata (Conditionally shown) */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div>
              <div className="mb-5">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0284c7] bg-[#e0f2fe] px-3.5 py-1 rounded-full mb-2 border border-[#0284c7]/20">
                  TAMPILAN NYATA
                </span>
                <h2 className="text-2xl font-extrabold text-[#1c1917] sm:text-3xl">
                  Screenshot Fitur Aplikasi
                </h2>
                <p className="mt-1 text-sm text-stone-500">Tampilan antarmuka sistem yang berjalan di production.</p>
              </div>
              <div className={`grid gap-4 ${project.galleryImages.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                {project.galleryImages.map((img, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-2xl border border-[#e6dfd2] shadow-sm">
                    <Image
                      src={img}
                      alt={`${project.shortTitle} screenshot ${idx + 1}`}
                      width={1200}
                      height={750}
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 2: Problem & Solution Comparison Cards */}

          <div>
            <div className="mb-6">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#254a87] bg-[#eaf0fa] px-3.5 py-1 rounded-full mb-2">
                ANALISIS REKAYASA
              </span>
              <h2 className="text-2xl font-extrabold text-[#1c1917] sm:text-3xl">
                Tantangan Riil & Solusi yang Diterapkan
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Problem Card */}
              <div className="rounded-3xl border border-[#f5d0c5] bg-[#fef8f6] p-7 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#fde8e3] px-3 py-1 text-xs font-bold text-[#b91c1c] uppercase tracking-wider mb-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b91c1c]" />
                    <span>Problem Statement</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1c1917] mb-3">Tantangan yang Dihadapi</h3>
                  <p className="text-sm leading-relaxed text-stone-600">
                    {project.loremProblem}
                  </p>
                </div>
              </div>

              {/* Solution Card */}
              <div className="rounded-3xl border border-[#cbe0f8] bg-[#f4f8fd] p-7 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#e1edfa] px-3 py-1 text-xs font-bold text-[#254a87] uppercase tracking-wider mb-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#254a87]" />
                    <span>Engineered Solution</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1c1917] mb-3">Solusi Rekayasa yang Diterapkan</h3>
                  <p className="text-sm leading-relaxed text-stone-600">
                    {project.loremSolution}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Fitur Utama */}
          <div>
            <div className="mb-6">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#254a87] bg-[#eaf0fa] px-3.5 py-1 rounded-full mb-2">
                KAPABILITAS SISTEM
              </span>
              <h2 className="text-2xl font-extrabold text-[#1c1917] sm:text-3xl">
                2. Fitur & Fungsionalitas Utama
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#e6ded2] bg-[#fffdfa] p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eaf0fa] text-xs font-mono font-bold text-[#254a87] mb-4">
                      0{idx + 1}
                    </div>
                    <h4 className="text-base font-bold text-[#1c1917] mb-2">{feat.title}</h4>
                    <p className="text-xs leading-relaxed text-stone-600">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3.5: Penghargaan & Sertifikat (Conditionally shown) */}
          {project.certificateImage && (
            <div className="rounded-3xl border border-[#e6dfd2] bg-[#fffdfa] p-8 sm:p-10 shadow-sm">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#f4512a] bg-[#fef1ee] px-3.5 py-1 rounded-full mb-2 border border-[#f4512a]/20">
                PENGHARGAAN
              </span>
              <h2 className="text-2xl font-extrabold text-[#1c1917] sm:text-3xl mb-2">
                Sertifikat & Prestasi
              </h2>
              <p className="text-sm text-stone-500 mb-6">
                Penghargaan yang diraih dalam kompetisi teknologi nasional terkait proyek ini.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-8">
                {/* Certificate Image */}
                <div className="w-full sm:w-auto sm:flex-shrink-0 max-w-sm">
                  <div className="relative overflow-hidden rounded-2xl border border-[#e6dfd2] shadow-md group">
                    <Image
                      src={project.certificateImage}
                      alt="Sertifikat Penghargaan Julius Marselinus"
                      width={800}
                      height={570}
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                {/* Certificate Detail */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#fef1ee] border border-[#f4512a]/20 px-3.5 py-1.5 mb-4">
                    <span className="h-2 w-2 rounded-full bg-[#f4512a]" />
                    <span className="text-xs font-bold text-[#f4512a] uppercase tracking-wider">Juara 2</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1c1917] leading-snug mb-2">
                    SOFTWARE DEVELOPMENT COMPETITION
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-4">
                    INSPIRE 1.0 2026 — Innovating Beyond Code: Technology for Meaningful Impact
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-stone-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-stone-300 shrink-0" />
                      <span>Universitas Bunda Mulia · The UBM Lecture Hall</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-stone-300 shrink-0" />
                      <span>26 Agustus 2026</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-stone-300 shrink-0" />
                      <span>Diverifikasi oleh SPMI Universitas Bunda Mulia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 4: Spesifikasi Teknis */}
          <div className="rounded-3xl border border-[#e6ded2] bg-[#fffdfa] p-8 sm:p-10 shadow-sm">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#254a87] bg-[#eaf0fa] px-3.5 py-1 rounded-full mb-2">
              ARSITEKTUR & STACK
            </span>
            <h2 className="text-2xl font-extrabold text-[#1c1917] sm:text-3xl mb-3">
              3. Spesifikasi Teknis & Dependensi
            </h2>
            <p className="text-sm text-stone-500 mb-6">
              Pustaka, framework, dan teknologi yang dirangkai untuk menjamin keandalan sistem:
            </p>

            <div className="flex flex-wrap gap-2 pb-6 border-b border-[#eee8dc]">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl bg-[#f4efe5] px-3.5 py-1.5 text-xs font-mono font-bold text-stone-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              {project.techHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-stone-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#254a87]" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Live Demo Callout Card */}
          <div className="rounded-3xl border border-[#ded7ca] bg-gradient-to-r from-[#eaf0fa] via-[#f7f5ef] to-[#fffdfa] p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#254a87] uppercase tracking-wider mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Deployment Aktif</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1c1917]">
                Ingin membuka langsung web {project.shortTitle}?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 max-w-md">
                Kunjungi website aktif untuk melihat alur sistem, interaktivitas, dan performanya secara real-time.
              </p>
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-2xl bg-[#254a87] px-7 py-3.5 text-xs font-bold text-white shadow-md hover:bg-[#1e3d70] transition-colors"
            >
              <span>Kunjungi {project.shortTitle}</span>
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Next Project Navigator */}
          <div className="pt-8 border-t border-[#e2dcd0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <TLink
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-[#254a87] transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Kembali ke Daftar Proyek</span>
            </TLink>

            <TLink
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#ded7ca] bg-[#fffdfa] px-5 py-2.5 text-xs font-bold text-[#1c1917] shadow-2xs hover:border-[#254a87] hover:text-[#254a87] transition-colors"
            >
              <span>Proyek Selanjutnya: {nextProject.shortTitle}</span>
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
