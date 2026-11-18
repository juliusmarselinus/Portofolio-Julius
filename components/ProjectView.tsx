'use client'
import { useRef } from 'react'
import { notFound } from 'next/navigation'
import { useReveal } from '@/lib/useReveal'
import { TLink } from '@/components/Transition'
import ProjectMockup from '@/components/ProjectMockup'
import AmbientBackground from '@/components/AmbientBackground'
import { projectsData, STUDENT_INFO, ProjectData } from '@/lib/data'

export default function ProjectView({ slug }: { slug: string }) {
  const root = useRef<HTMLElement>(null)
  useReveal(root)

  const i = projectsData.findIndex((p) => p.slug === slug)
  if (i === -1) notFound()

  const project: ProjectData = projectsData[i]
  const nextProject = projectsData[(i + 1) % projectsData.length]

  return (
    <main ref={root} className="relative z-10 min-h-screen bg-white himsi-grid-bg">
      <AmbientBackground />

      {/* =========================================================================
          PROJECT DETAIL HERO
         ========================================================================= */}
      <section className="relative px-6 pt-32 pb-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          {/* Back button */}
          <div className="mb-6">
            <TLink
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-2xs backdrop-blur-md transition-colors hover:border-[#254a87] hover:text-[#254a87]"
            >
              <span>←</span>
              <span>Kembali ke Daftar Proyek</span>
            </TLink>
          </div>

          {/* Title & Description */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#254a87] bg-[#eaf0fa] px-3.5 py-1 rounded-full mb-3">
              {project.category} · {project.year}
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#17243a] sm:text-5xl leading-tight">
              {project.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              {project.desc}
            </p>
          </div>

          {/* Hero Showcase with Mockup & Floating Badges */}
          <div className="mt-12 relative">
            {/* Center Mockup */}
            <div className="relative z-10 mx-auto max-w-3xl">
              <ProjectMockup project={project} size="lg" />
            </div>

            {/* Floating Element 1: Top Left Tech Badge */}
            <div className="hidden sm:flex absolute -top-4 -left-6 z-20 items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf0fa] text-xs font-mono font-bold text-[#254a87]">
                &lt;/&gt;
              </div>
              <div>
                <div className="text-xs font-bold text-[#17243a]">{project.stackPrimary}</div>
                <div className="text-[10px] text-slate-400">Web Architecture</div>
              </div>
            </div>

            {/* Floating Element 2: Bottom Left Spec Note */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 z-20 -rotate-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg">
              <div className="text-xs font-bold text-[#17243a] leading-tight">
                {project.shortTitle}
              </div>
              <div className="text-[11px] text-[#254a87] font-semibold mt-0.5">
                Sistem Informasi UMN
              </div>
            </div>

            {/* Floating Element 3: Bottom Right Spec Card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 z-20 rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-lg backdrop-blur-md min-w-[210px]">
              <div className="text-xs font-bold text-[#17243a] border-b border-slate-100 pb-1.5 mb-2">
                Spesifikasi Sistem
              </div>
              <div className="space-y-1.5 text-[11px]">
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase">Tim Pengembang</span>
                  <span className="font-semibold text-[#254a87]">{project.team}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[9px] uppercase">Stack Utama</span>
                  <span className="font-semibold text-[#f4512a]">{project.stackPrimary}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Action Button: Kunjungi Live Demo */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-[#f4512a] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[#db3f1a] hover:scale-105"
            >
              <span>Kunjungi Live Demo</span>
              <span className="text-base">→</span>
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-2xs transition-colors hover:bg-slate-50"
              >
                <span>Lihat Repository GitHub</span>
                <span className="text-xs">↗</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          STRUCTURED CASE STUDY
         ========================================================================= */}
      <section className="relative px-6 py-20 md:px-12 lg:px-20 bg-white/90 border-t border-slate-200/80">
        <div className="mx-auto max-w-4xl space-y-16">
          {/* Section 1: Ringkasan Proyek */}
          <div>
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#254a87] bg-[#eaf0fa] px-3 py-1 rounded-full mb-3">
              DOKUMENTASI SISTEM
            </div>
            <h2 className="text-2xl font-extrabold text-[#17243a] sm:text-3xl">
              1. Ringkasan & Gambaran Umum Sistem
            </h2>
            <div className="mt-4 space-y-3 text-base leading-relaxed text-slate-600">
              <p>{project.loremOverview}</p>
            </div>
          </div>

          {/* Section 2: Problem & Solution */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/90 bg-[#f8fafc] p-6 shadow-2xs">
              <div className="text-xs font-bold text-[#f4512a] uppercase tracking-wider mb-2">
                Problem Statement
              </div>
              <h3 className="text-base font-bold text-[#17243a] mb-2">Tantangan yang Dihadapi</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {project.loremProblem}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-[#eaf0fa]/50 p-6 shadow-2xs">
              <div className="text-xs font-bold text-[#254a87] uppercase tracking-wider mb-2">
                System Solution
              </div>
              <h3 className="text-base font-bold text-[#17243a] mb-2">Solusi Rekayasa yang Diterapkan</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {project.loremSolution}
              </p>
            </div>
          </div>

          {/* Section 3: Fitur Utama */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#17243a] sm:text-3xl mb-6">
              2. Fitur & Fungsionalitas Utama
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf0fa] text-xs font-mono font-bold text-[#254a87] mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-[#17243a] mb-1.5">{feat.title}</h4>
                  <p className="text-xs leading-relaxed text-slate-600">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Spesifikasi Teknis */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#17243a] sm:text-3xl mb-4">
              3. Spesifikasi Teknis & Dependensi
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Arsitektur aplikasi dan pustaka pendukung yang digunakan selama pengembangan:
            </p>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs">
              <div className="flex flex-wrap gap-2 pb-5 border-b border-slate-100">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-[#eaf0fa] px-3 py-1.5 text-xs font-mono font-bold text-[#254a87]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 space-y-2.5">
                {project.techHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f4512a]" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Direct Live Demo Callout Card */}
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-[#eaf0fa] to-white p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-[#254a87] uppercase tracking-wider">
                Deployment Aktif
              </span>
              <h3 className="text-xl font-bold text-[#17243a] mt-1">
                Ingin membuka langsung web {project.shortTitle}?
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md">
                Kunjungi website aktif untuk melihat alur sistem dan interaktivitas secara real-time.
              </p>
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#254a87] px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-[#1e3d70] transition-colors"
            >
              <span>Kunjungi {project.shortTitle}</span>
              <span>→</span>
            </a>
          </div>

          {/* Next Project Navigator */}
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <TLink
              href="/#projects"
              className="text-xs font-semibold text-slate-500 hover:text-[#254a87] transition-colors"
            >
              ← Kembali ke Daftar Proyek
            </TLink>

            <TLink
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-[#17243a] shadow-2xs hover:border-[#254a87] hover:text-[#254a87] transition-colors"
            >
              <span>Proyek Selanjutnya: {nextProject.shortTitle}</span>
              <span>→</span>
            </TLink>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-xs text-slate-400 bg-white border-t border-slate-200/80">
        <p>© 2026 {STUDENT_INFO.institution} · {STUDENT_INFO.major}</p>
      </footer>
    </main>
  )
}
