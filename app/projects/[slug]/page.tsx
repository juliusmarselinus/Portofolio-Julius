import { Metadata } from 'next'
import { notFound } from 'next/navigation'
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

export default async function ProjectPage({
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
