'use client'
import Cursor from './Cursor'
import Nav from './Nav'
import Preloader from './Preloader'
import SmoothScroll from './SmoothScroll'
import { TransitionProvider } from './Transition'

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <TransitionProvider>
      <SmoothScroll />
      <Cursor />
      <Nav />
      {children}
      <Preloader />
    </TransitionProvider>
  )
}
