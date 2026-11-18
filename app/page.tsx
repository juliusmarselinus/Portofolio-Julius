'use client'
import { useRef } from 'react'
import { useReveal } from '@/lib/useReveal'
import { TLink } from '@/components/Transition'
import Split from '@/components/Split'
import Magnetic from '@/components/Magnetic'
import ProjectMockup from '@/components/ProjectMockup'
import AmbientBackground from '@/components/AmbientBackground'
import { projectsData, STUDENT_INFO } from '@/lib/data'

export default function Home() {
  const root = useRef<HTMLElement>(null)
  useReveal(root)

  return (
    <main ref={root} className="relative z-10 min-h-screen bg-[#f6f4ee] himsi-grid-bg">
      <AmbientBackground />

      {/* =========================================================================
          HERO SECTION (Minimalist, Modern & Fast)
         ========================================================================= */}
      <section id="home" className="relative px-6 pt-36 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Headline */}
            <div className="lg:col-span-7">
              {/* Status Badge */}
              <div className="hero-line mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#e5dfd3] bg-[#fffdfa]/95 px-4 py-1.5 text-xs font-semibold tracking-wide text-stone-700 shadow-2xs backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f4512a] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f4512a]" />
                </span>
                <span>{STUDENT_INFO.badge}</span>
              </div>

              {/* Headline with GSAP Split Text */}
              <div className="space-y-1">
                <Split
                  as="h1"
                  mode="load"
                  className="text-4xl font-black tracking-tight text-[#1c1917] sm:text-6xl lg:text-7xl leading-[1.08]"
                >
                  Rekayasa web &
                </Split>
                <Split
                  as="h1"
                  mode="load"
                  delay={0.12}
                  className="text-4xl font-black tracking-tight text-[#254a87] sm:text-6xl lg:text-7xl leading-[1.08]"
                >
                  sistem digital.
                </Split>
              </div>

              <p className="hero-line mt-6 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
                Showcase proyek aplikasi web, arsitektur sistem informasi, dan antarmuka pengguna interaktif yang dibangun dengan standar rekayasa perangkat lunak modern.
              </p>

              {/* Action Buttons */}
              <div className="hero-line mt-9 flex flex-wrap items-center gap-4">
                <Magnetic strength={0.25}>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#254a87] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[#254a87]/20 transition-all hover:bg-[#1e3d70] hover:shadow-lg"
                  >
                    <span>Lihat Showcase Proyek</span>
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </a>
                </Magnetic>

                <Magnetic strength={0.2}>
                  <a
                    href="#capabilities"
                    className="inline-flex items-center gap-2 rounded-full border border-[#ddd6c8] bg-[#fffdfa] px-7 py-3.5 text-xs font-semibold tracking-wide text-stone-700 shadow-2xs transition-colors hover:border-[#cbc2b2] hover:bg-[#f6f2e8]"
                  >
                    <span>Keahlian & Stack</span>
                  </a>
                </Magnetic>
              </div>
            </div>

            {/* Right Side: Minimalist Metrics Panel */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl border border-[#e7e1d4] bg-[#fffdfa]/95 p-6 sm:p-7 shadow-[0_10px_35px_rgba(40,30,20,0.05)] backdrop-blur-xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#eee7db] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold text-[#1c1917]">OVERVIEW SISTEM</span>
                  </div>
                  <span className="font-mono text-[10px] text-stone-400">ACTIVE</span>
                </div>

                {/* Key Metrics */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-[#eae4d7] bg-[#f9f7f1] p-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                      Showcase Proyek
                    </div>
                    <div className="mt-1 text-2xl font-black text-[#254a87]">
                      0{projectsData.length} Apps
                    </div>
                    <div className="mt-0.5 text-[11px] text-stone-500">Live Website Aktif</div>
                  </div>

                  <div className="rounded-2xl border border-[#eae4d7] bg-[#f9f7f1] p-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                      Framework Utama
                    </div>
                    <div className="mt-1 text-2xl font-black text-[#1c1917]">Next.js 16</div>
                    <div className="mt-0.5 text-[11px] text-stone-500">TypeScript & React</div>
                  </div>
                </div>

                {/* Tags row */}
                <div className="mt-4 rounded-2xl border border-[#eae4d7] bg-[#f9f7f1] p-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                    Teknologi & Dependensi
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Next.js 16', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Supabase', 'REST API', 'GSAP'].map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-[#ded7c9] bg-[#fffdfa] px-2.5 py-1 text-[11px] font-mono text-stone-700 shadow-2xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Info bar */}
                <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#eee7db] text-[11px] text-stone-500">
                  <span>Universitas Multimedia Nusantara</span>
                  <span className="font-mono text-[#254a87] font-semibold">2026 Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SELECTED PROJECTS SHOWCASE
         ========================================================================= */}
      <section id="projects" className="relative px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#254a87] bg-[#eaf0fa] px-3.5 py-1 rounded-full mb-3">
              KARYA & SHOWCASE
            </span>
            <Split as="h2" className="text-3xl font-extrabold text-[#1c1917] sm:text-5xl">
              Proyek Rekayasa Web
            </Split>
            <p className="mt-3 text-sm text-stone-600 max-w-2xl leading-relaxed">
              Daftar proyek di bawah ini terhubung langsung ke live website aktif. Kamu dapat membuka website secara langsung dengan tombol <strong>Kunjungi Web ↗</strong> atau membaca telaah arsitekturnya lewat <strong>Studi Kasus →</strong>.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid gap-10 md:grid-cols-2">
            {projectsData.map((project, idx) => (
              <div
                key={project.slug}
                className="reveal group relative flex flex-col justify-between rounded-3xl border border-[#e6e0d4] bg-[#fffdfa] p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#d6cebf]"
              >
                <div>
                  {/* Top: Minimalist Browser Mockup */}
                  <TLink href={`/projects/${project.slug}`} className="block">
                    <ProjectMockup project={project} size="sm" />
                  </TLink>

                  {/* Metadata Bar */}
                  <div className="mt-5 flex items-center justify-between border-b border-[#eee8dc] pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#254a87] bg-[#eaf0fa] px-3 py-0.5 rounded-full">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-stone-400">
                      0{idx + 1} // {project.year}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-3.5">
                    <TLink href={`/projects/${project.slug}`}>
                      <h3 className="text-xl font-bold tracking-tight text-[#1c1917] group-hover:text-[#254a87] transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </TLink>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tech stack tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-[#f4efe5] px-2 py-0.5 text-[10px] font-mono text-stone-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer with DUAL ACTIONS: Kunjungi Web & Studi Kasus */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#eee8dc] pt-5">
                  <div>
                    <div className="text-xs font-bold text-[#1c1917]">{project.team}</div>
                    <div className="text-[10px] text-stone-400">{project.author}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Direct Live Website Link */}
                    <Magnetic strength={0.25}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-[#254a87] px-4 py-2 text-xs font-bold text-white shadow-xs transition-colors hover:bg-[#1e3d70]"
                        title={`Buka live website ${project.shortTitle}`}
                      >
                        <span>Kunjungi Web</span>
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </Magnetic>

                    {/* Case Study Details Link */}
                    <Magnetic strength={0.2}>
                      <TLink
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-[#ded7ca] bg-[#fffdfa] px-3.5 py-2 text-xs font-semibold text-stone-700 shadow-2xs transition-colors hover:border-[#cbc3b2] hover:bg-[#f7f3ea]"
                      >
                        <span>Detail</span>
                        <span>→</span>
                      </TLink>
                    </Magnetic>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAPABILITIES BENTO GRID
         ========================================================================= */}
      <section id="capabilities" className="relative px-6 py-24 md:px-12 lg:px-20 bg-[#f0ece1]/70 border-y border-[#e6dfd2]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#254a87] bg-[#eaf0fa] px-3.5 py-1 rounded-full mb-3">
              KOMPETENSI TEKNIS
            </span>
            <Split as="h2" className="text-3xl font-extrabold text-[#1c1917] sm:text-5xl">
              Arsitektur & Keahlian Rekayasa
            </Split>
            <p className="mt-3 text-sm text-stone-600 max-w-2xl leading-relaxed">
              Prinsip perancangan dan keahlian teknis yang diterapkan dalam setiap pengembangan sistem web.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="reveal rounded-3xl border border-[#e6dfd3] bg-[#fffdfa] p-7 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf0fa] text-[#254a87] mb-5 font-mono text-sm font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-[#1c1917]">Frontend Architecture</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Penerapan Next.js App Router, Server Components untuk efisiensi render, serta tata letak responsif berbasis Tailwind CSS yang terstruktur.
              </p>
            </div>

            <div className="reveal rounded-3xl border border-[#e6dfd3] bg-[#fffdfa] p-7 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf0fa] text-[#254a87] mb-5 font-mono text-sm font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-[#1c1917]">Backend & Database</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Perancangan skema relasional PostgreSQL, integrasi database realtime Supabase, sistem otentikasi aman, dan komunikasi RESTful API.
              </p>
            </div>

            <div className="reveal rounded-3xl border border-[#e6dfd3] bg-[#fffdfa] p-7 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf0fa] text-[#254a87] mb-5 font-mono text-sm font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-[#1c1917]">Code Quality & Standards</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Penerapan strict typing TypeScript, struktur kode modular yang mudah diuji, manajemen versi Git yang rapi, dan performa optimal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT & ACADEMIC BACKGROUND
         ========================================================================= */}
      <section id="about" className="relative px-6 py-24 md:px-12 lg:px-20 bg-[#f1eee5] border-y border-[#e6dfd2]">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-6">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#254a87] bg-[#eaf0fa] px-3.5 py-1 rounded-full mb-3">
                LATAR BELAKANG
              </span>
              <Split as="h2" className="text-3xl font-extrabold text-[#1c1917] sm:text-4xl">
                Sistem Informasi UMN
              </Split>
              <p className="reveal mt-5 text-base leading-relaxed text-stone-600">
                Fokus studi ditekankan pada analisis kebutuhan sistem, rekayasa perangkat lunak web, dan implementasi teknologi informasi untuk memecahkan persoalan operasional nyata.
              </p>
              <p className="reveal mt-3 text-base leading-relaxed text-stone-600">
                Seluruh proyek yang tercantum dibangun dengan komitmen terhadap keterbacaan kode, kecepatan muat halaman, dan keandalan sistem multi-perangkat.
              </p>
            </div>

            <div className="md:col-span-6">
              <div className="reveal rounded-3xl border border-[#e5ded1] bg-[#fffdfa] p-8 shadow-sm">
                <div className="flex items-center gap-3 border-b border-[#eee8dc] pb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#254a87] text-white font-mono font-bold text-sm">
                    SI
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1c1917]">{STUDENT_INFO.institution}</h3>
                    <p className="text-xs text-stone-500">{STUDENT_INFO.major}</p>
                  </div>
                </div>

                <div className="mt-5 space-y-3.5 text-xs text-stone-600">
                  <div className="flex justify-between py-1 border-b border-[#f2ede3]">
                    <span className="text-stone-400">Program Studi</span>
                    <span className="font-semibold text-[#1c1917]">Sistem Informasi</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f2ede3]">
                    <span className="text-stone-400">Bidang Kajian</span>
                    <span className="font-semibold text-[#1c1917]">Web Engineering & Software Systems</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f2ede3]">
                    <span className="text-stone-400">Core Technologies</span>
                    <span className="font-semibold text-[#254a87]">Next.js, TypeScript, PostgreSQL</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-stone-400">Tahun Akademik</span>
                    <span className="font-semibold text-[#1c1917]">2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOOTER
         ========================================================================= */}
      <footer className="px-6 py-12 md:px-12 lg:px-20 bg-[#ede9de] border-t border-[#e2dcd0]">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-stone-600">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#eaf0fa] text-xs font-mono font-bold text-[#254a87]">
              SI
            </div>
            <div>
              <p className="font-bold text-[#1c1917]">Portofolio Sistem Informasi UMN</p>
              <p className="text-[11px] text-stone-400">Dibuat menggunakan Next.js & Tailwind CSS</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href={STUDENT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#254a87] transition-colors font-medium">
              GitHub
            </a>
            <a href={STUDENT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#254a87] transition-colors font-medium">
              LinkedIn
            </a>
            <a href={`mailto:${STUDENT_INFO.email}`} className="hover:text-[#254a87] transition-colors font-medium">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
