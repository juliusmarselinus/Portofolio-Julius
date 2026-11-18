'use client'
import dynamic from 'next/dynamic'
import Cursor from './Cursor'
import Nav from './Nav'
import Preloader from './Preloader'
import SmoothScroll from './SmoothScroll'
import { TransitionProvider } from './Transition'

const Scene = dynamic(() => import('./Scene'), { ssr: false })

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <TransitionProvider>
      <Scene />
      <SmoothScroll />
      <Cursor />
      <Nav />
      {children}
      <Preloader />
    </TransitionProvider>
  )
}
