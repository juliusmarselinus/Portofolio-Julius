import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import ProjectView from '@/components/ProjectView'
import { projects } from '@/lib/data'

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const p = projects.find((item) => item.slug === slug)
  if (!p) return { title: 'Project Not Found' }

  return {
    title: `${p.title} — Portfolio Case Study`,
    description: p.desc,
  }
}

async function ProjectContent({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const projectExists = projects.some((p) => p.slug === slug)
  if (!projectExists) {
    notFound()
  }

  return <ProjectView slug={slug} />
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f6f4ee] flex items-center justify-center">
          <div className="h-6 w-6 rounded-full border-2 border-[#254a87] border-t-transparent animate-spin" />
        </div>
      }
    >
      <ProjectContent params={params} />
    </Suspense>
  )
}
