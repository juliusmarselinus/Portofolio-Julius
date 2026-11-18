'use client'
import Image from 'next/image'
import { ProjectData } from '@/lib/data'

export default function ProjectMockup({
  project,
  size = 'md',
}: {
  project: ProjectData
  size?: 'sm' | 'md' | 'lg'
}) {
  const isLarge = size === 'lg'

  // Extract clean domain from liveUrl or fallback
  const cleanDomain = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//i, '').replace(/\/.*$/, '')
    : `${project.slug}.com`

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br ${project.mockupBg} p-3.5 sm:p-5 border border-[#e5ded2] transition-all duration-300`}
    >
      {/* Sleek Minimalist Browser Window Frame */}
      <div
        className={`relative w-full overflow-hidden rounded-xl border border-[#eae3d6] bg-[#fffdf9] shadow-sm transition-all duration-300 ${
          isLarge
            ? 'shadow-[0_20px_45px_rgba(40,30,20,0.08)]'
            : 'group-hover:shadow-md group-hover:-translate-y-0.5'
        }`}
      >
        {/* Browser Header Bar */}
        <div className="flex items-center justify-between border-b border-[#ece6db] bg-[#f5f1e8] px-3.5 py-2">
          {/* Traffic dots */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
            <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
            <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
          </div>

          {/* URL Pill */}
          <div className="flex items-center gap-1.5 rounded-full border border-[#ded7ca] bg-[#fffdfa] px-3 py-0.5 text-[10px] font-mono text-stone-600 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="truncate max-w-[160px] sm:max-w-[220px]">
              {cleanDomain}
            </span>
          </div>

          {/* Live indicator */}
          <span className="font-mono text-[9px] font-semibold text-emerald-700 bg-emerald-50/90 border border-emerald-200/60 px-2 py-0.5 rounded shrink-0">
            LIVE
          </span>
        </div>

        {/* Body: Screenshot (Full Uncropped Natural Height) or Styled UI Dashboard */}
        {project.previewImage ? (
          <div className="relative w-full overflow-hidden bg-[#f7f5ee]">
            <Image
              src={project.previewImage}
              alt={`${project.shortTitle} preview`}
              width={1200}
              height={600}
              className="w-full h-auto block object-contain object-top transition-transform duration-500 group-hover:scale-[1.01]"
              priority={isLarge}
            />
          </div>
        ) : (
          <div className="relative w-full min-h-[220px] sm:min-h-[260px] bg-[#faf8f3] p-4 sm:p-5 flex flex-col justify-between">
            {/* Top Row: Brand & Status */}
            <div>
              <div className="flex items-center justify-between border-b border-[#ece6dc] pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#254a87] text-xs font-bold text-white shadow-xs">
                    {project.shortTitle[0]}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1c1917]">
                      {project.shortTitle}
                    </div>
                    <div className="text-[10px] text-stone-400 font-mono">
                      {project.category}
                    </div>
                  </div>
                </div>
                <span className="rounded-full bg-[#eaf0fa] px-2.5 py-0.5 text-[10px] font-semibold text-[#254a87]">
                  {project.year}
                </span>
              </div>

              {/* Metrics Row */}
              <div className="mt-3.5 grid grid-cols-3 gap-2">
                {project.metrics && project.metrics.length > 0 ? (
                  project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-[#eae4d8] bg-[#fffdfa] p-2 text-center shadow-2xs"
                    >
                      <div className="text-[9px] font-medium text-stone-400 uppercase tracking-wider truncate">
                        {m.label}
                      </div>
                      <div className="mt-0.5 text-xs font-bold text-[#1c1917] truncate">
                        {m.value}
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="rounded-lg border border-[#eae4d8] bg-[#fffdfa] p-2 text-center shadow-2xs">
                      <div className="text-[9px] font-medium text-stone-400 uppercase">Status</div>
                      <div className="text-xs font-bold text-emerald-600">Active</div>
                    </div>
                    <div className="rounded-lg border border-[#eae4d8] bg-[#fffdfa] p-2 text-center shadow-2xs">
                      <div className="text-[9px] font-medium text-stone-400 uppercase">Framework</div>
                      <div className="text-xs font-bold text-[#254a87]">Next.js</div>
                    </div>
                    <div className="rounded-lg border border-[#eae4d8] bg-[#fffdfa] p-2 text-center shadow-2xs">
                      <div className="text-[9px] font-medium text-stone-400 uppercase">Deployment</div>
                      <div className="text-xs font-bold text-[#f4512a]">Production</div>
                    </div>
                  </>
                )}
              </div>

              {/* Description Preview */}
              <p className="mt-3 text-[11px] leading-relaxed text-stone-600 line-clamp-2">
                {project.desc}
              </p>
            </div>

            {/* Footer of Preview */}
            <div className="flex items-center justify-between border-t border-[#ece6dc] pt-2.5 text-[10px] text-stone-400">
              <span className="font-medium text-stone-600">{project.team}</span>
              <span className="font-mono font-medium text-[#254a87]">
                {project.stackPrimary}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
