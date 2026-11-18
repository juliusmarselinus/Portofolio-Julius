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
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br ${project.mockupBg} p-4 sm:p-6 border border-slate-200/80 transition-all duration-300`}
    >
      {/* Sleek Minimalist Browser Window Frame */}
      <div
        className={`relative w-full rounded-xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 ${
          isLarge
            ? 'shadow-[0_20px_45px_rgba(15,23,42,0.08)]'
            : 'group-hover:shadow-md group-hover:-translate-y-0.5'
        }`}
      >
        {/* Browser Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3.5 py-2.5">
          {/* Traffic dots */}
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          </div>

          {/* URL Pill */}
          <div className="flex items-center gap-1.5 rounded-full border border-slate-200/70 bg-white px-3 py-0.5 text-[10px] font-mono text-slate-500 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="truncate max-w-[160px] sm:max-w-[220px]">
              {project.slug}.web.app
            </span>
          </div>

          {/* Live indicator */}
          <span className="font-mono text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
            LIVE
          </span>
        </div>

        {/* Minimalist Dashboard Preview */}
        <div className="bg-[#fcfdfd] p-4 sm:p-5 min-h-[180px] sm:min-h-[220px] flex flex-col justify-between">
          <div>
            {/* Top Row: Brand & Status */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#254a87] text-[10px] font-bold text-white shadow-xs">
                  {project.shortTitle[0]}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#17243a]">
                    {project.shortTitle}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
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
                    className="rounded-lg border border-slate-100 bg-white p-2 text-center shadow-2xs"
                  >
                    <div className="text-[9px] font-medium text-slate-400 uppercase tracking-wider truncate">
                      {m.label}
                    </div>
                    <div className="mt-0.5 text-xs font-bold text-[#17243a] truncate">
                      {m.value}
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className="rounded-lg border border-slate-100 bg-white p-2 text-center shadow-2xs">
                    <div className="text-[9px] font-medium text-slate-400 uppercase">Status</div>
                    <div className="text-xs font-bold text-emerald-600">Active</div>
                  </div>
                  <div className="rounded-lg border border-slate-100 bg-white p-2 text-center shadow-2xs">
                    <div className="text-[9px] font-medium text-slate-400 uppercase">Framework</div>
                    <div className="text-xs font-bold text-[#254a87]">Next.js</div>
                  </div>
                  <div className="rounded-lg border border-slate-100 bg-white p-2 text-center shadow-2xs">
                    <div className="text-[9px] font-medium text-slate-400 uppercase">Deployment</div>
                    <div className="text-xs font-bold text-[#f4512a]">Production</div>
                  </div>
                </>
              )}
            </div>

            {/* Description Preview */}
            <p className="mt-3 text-[11px] leading-relaxed text-slate-500 line-clamp-2">
              {project.desc}
            </p>
          </div>

          {/* Footer of Preview */}
          <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 text-[10px] text-slate-400">
            <span>{project.team}</span>
            <span className="font-mono font-medium text-[#254a87]">
              {project.stackPrimary}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
