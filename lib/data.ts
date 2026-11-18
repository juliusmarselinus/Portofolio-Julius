import { PROJECTS_LIST, SITE_INFO, ProjectItem } from '@/projects.config'

export { PROJECTS_LIST, SITE_INFO }
export const STUDENT_INFO = SITE_INFO

export interface ProjectData {
  slug: string
  title: string
  shortTitle: string
  category: string
  author: string
  team: string
  role: string
  year: string
  desc: string
  liveUrl: string
  githubUrl?: string
  stackPrimary: string
  stack: string[]
  mockupAccent: string
  mockupBg: string
  loremOverview: string
  loremProblem: string
  loremSolution: string
  features: { title: string; desc: string }[]
  techHighlights: string[]
  metrics?: { label: string; value: string }[]
  previewImage?: string
}

const colorMap: Record<string, { accent: string; bg: string }> = {
  dapurtwin: { accent: '#f4512a', bg: 'from-orange-50/60 via-[#f9f7f2] to-amber-50/40' },
  isfestumn: { accent: '#254a87', bg: 'from-blue-50/60 via-[#f9f7f2] to-indigo-50/40' },
  bridegu: { accent: '#0284c7', bg: 'from-sky-50/60 via-[#f9f7f2] to-blue-50/40' },
  gate: { accent: '#254a87', bg: 'from-blue-50/60 via-[#f9f7f2] to-slate-50/40' },
}

export const projectsData: ProjectData[] = PROJECTS_LIST.map((p) => {
  const c = colorMap[p.id] || { accent: '#254a87', bg: 'from-slate-50 to-blue-50/40' }
  return {
    slug: p.id,
    title: `${p.title} – ${p.subtitle}`,
    shortTitle: p.title,
    category: p.category,
    author: 'Julius Marselinus',
    team: p.team,
    role: p.role,
    year: p.year,
    desc: p.description,
    liveUrl: p.liveUrl,
    githubUrl: p.githubUrl,
    stackPrimary: p.tags.slice(0, 2).join(' · '),
    stack: p.tags,
    mockupAccent: c.accent,
    mockupBg: c.bg,
    loremOverview: p.overview,
    loremProblem: p.problem,
    loremSolution: p.solution,
    features: p.features.map((f) => ({ title: f.title, desc: f.description })),
    techHighlights: p.tags.map((t) => `Implementasi arsitektur sistem berbasis ${t}`),
    metrics: p.metrics,
    previewImage: p.previewImage,
  }
})

export const projects = projectsData
