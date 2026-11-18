'use client'
import { ProjectData } from '@/lib/data'

export default function ProjectMockup({
  project,
  size = 'md',
}: {
  project: ProjectData
  size?: 'sm' | 'md' | 'lg'
}) {
  const isLarge = size === 'lg'

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br ${project.mockupBg} p-4 sm:p-7 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 group-hover:border-slate-300`}>
      {/* Subtle background ambient blur */}
      <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#254a87]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#f4512a]/5 blur-3xl" />

      {/* Realistic Browser / Laptop Window Frame */}
      <div className={`relative w-full rounded-xl border border-slate-300/80 bg-white shadow-[0_12px_36px_rgba(15,23,42,0.08)] overflow-hidden transition-transform duration-500 ${isLarge ? 'shadow-[0_20px_50px_rgba(15,23,42,0.12)]' : 'group-hover:-translate-y-1'}`}>
        {/* Browser Top Navigation Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/90 px-3.5 py-2.5 backdrop-blur-md">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e]/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123]/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f] border border-[#1aab29]/40" />
          </div>

          {/* URL Search bar */}
          <div className="flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3.5 py-1 text-[11px] font-mono text-slate-500 shadow-2xs w-48 sm:w-64 justify-center">
            <svg className="h-3 w-3 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="truncate text-slate-600 font-medium">{project.slug}.system.app</span>
          </div>

          {/* Right badge */}
          <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-mono font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden sm:inline">LIVE</span>
          </div>
        </div>

        {/* Dynamic Project Interface Screen */}
        <div className="bg-[#fafbfd] text-slate-800 p-4 sm:p-6 min-h-[200px] sm:min-h-[250px] flex flex-col justify-between">
          <div>
            {/* Inner Header Bar */}
            <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#254a87] text-[11px] font-bold text-white shadow-xs">
                  {project.shortTitle[0]}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#17243a] leading-tight">
                    {project.shortTitle}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    v2.4.0 · Production
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="rounded-md bg-[#eaf0fa] px-2.5 py-0.5 text-[10px] font-semibold text-[#254a87]">
                  {project.category}
                </span>
                <span className="hidden sm:inline-block rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[10px] text-slate-500">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Project Specific Rich Screen Content */}
            {project.slug === 'gate' && (
              <div className="mt-4 space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg border border-slate-200/80 bg-white p-2.5 shadow-2xs">
                    <div className="text-[10px] text-slate-400 font-medium">Daily Access</div>
                    <div className="text-sm font-bold text-[#17243a]">3,420 logs</div>
                  </div>
                  <div className="rounded-lg border border-slate-200/80 bg-white p-2.5 shadow-2xs">
                    <div className="text-[10px] text-slate-400 font-medium">Success Rate</div>
                    <div className="text-sm font-bold text-emerald-600">99.8%</div>
                  </div>
                  <div className="rounded-lg border border-slate-200/80 bg-white p-2.5 shadow-2xs">
                    <div className="text-[10px] text-slate-400 font-medium">Latency</div>
                    <div className="text-sm font-bold text-[#254a87]">18 ms</div>
                  </div>
                </div>
                <div className="rounded-lg border border-slate-200/80 bg-white p-3 shadow-2xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-mono text-slate-600">POST /api/v1/auth/verify</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">200 OK</span>
                </div>
              </div>
            )}

            {project.slug === 'bridegu' && (
              <div className="mt-4 space-y-3">
                <div className="rounded-lg border border-slate-200/80 bg-white p-3 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#254a87] uppercase tracking-wider">Matching Algorithm</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">94% Match</span>
                  </div>
                  <div className="text-xs font-bold text-[#17243a] mt-1">Enterprise Research Study</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Kolaborasi industri terverifikasi dengan pembimbing akademik.</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-slate-200/80 bg-white p-2 text-center">
                    <div className="text-[10px] text-slate-400">Partner Industry</div>
                    <div className="text-xs font-bold text-[#17243a]">12 Companies</div>
                  </div>
                  <div className="rounded-lg border border-slate-200/80 bg-white p-2 text-center">
                    <div className="text-[10px] text-slate-400">Active Teams</div>
                    <div className="text-xs font-bold text-[#f4512a]">34 Projects</div>
                  </div>
                </div>
              </div>
            )}

            {project.slug === 'isfestumn' && (
              <div className="mt-4 space-y-3">
                <div className="rounded-lg bg-gradient-to-r from-[#254a87] to-[#1e3d70] text-white p-3 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">HIMSI UMN Event</span>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded">2026</span>
                  </div>
                  <div className="text-xs font-bold mt-1">National Technology Competition</div>
                  <div className="text-[10px] text-slate-200 mt-0.5">Portal pendaftaran & validasi berkas peserta resmi.</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg border border-slate-200/80 bg-white p-2 text-center">
                    <div className="text-[9px] text-slate-400">Total Teams</div>
                    <div className="text-xs font-bold text-[#254a87]">180+</div>
                  </div>
                  <div className="rounded-lg border border-slate-200/80 bg-white p-2 text-center">
                    <div className="text-[9px] text-slate-400">Universities</div>
                    <div className="text-xs font-bold text-[#17243a]">32</div>
                  </div>
                  <div className="rounded-lg border border-slate-200/80 bg-white p-2 text-center">
                    <div className="text-[9px] text-slate-400">Status</div>
                    <div className="text-xs font-bold text-emerald-600">Active</div>
                  </div>
                </div>
              </div>
            )}

            {project.slug === 'dapurtwin' && (
              <div className="mt-4 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-slate-200/80 bg-white p-2.5 shadow-2xs">
                    <div className="text-[10px] text-slate-400 font-medium">Selected Items</div>
                    <div className="text-xs font-bold text-[#17243a] mt-0.5">Paket Prasmanan B</div>
                    <div className="text-[10px] text-emerald-600 font-semibold mt-1">Rp 1.450.000</div>
                  </div>
                  <div className="rounded-lg border border-slate-200/80 bg-white p-2.5 shadow-2xs">
                    <div className="text-[10px] text-slate-400 font-medium">Order Status</div>
                    <div className="text-xs font-bold text-[#f4512a] mt-0.5">Instant Checkout</div>
                    <div className="text-[10px] text-slate-500 mt-1">Format WhatsApp Terstruktur</div>
                  </div>
                </div>
                <div className="rounded-lg border border-slate-200/80 bg-white p-2 flex items-center justify-between text-[11px]">
                  <span className="text-slate-600 font-medium">Kalkulasi Otomatis Porsi & Biaya</span>
                  <span className="font-bold text-[#254a87]">Ready</span>
                </div>
              </div>
            )}
          </div>

          {/* Mockup Footer */}
          <div className="mt-4 flex items-center justify-between border-t border-slate-200/80 pt-2.5 text-[10px] text-slate-400">
            <span className="font-medium text-slate-500">{project.team}</span>
            <span className="font-mono font-semibold text-[#254a87]">{project.stackPrimary}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
