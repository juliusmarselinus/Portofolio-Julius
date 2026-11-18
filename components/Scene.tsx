'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sparkles } from '@react-three/drei'
import { Suspense, useEffect, useRef, RefObject } from 'react'
import * as THREE from 'three'
import { scroll } from '@/lib/scroll'

const lightColors = ['#254a87', '#3b82f6', '#f4512a', '#60a5fa', '#f97316'].map(
  (c) => new THREE.Color(c)
)
const lerp = THREE.MathUtils.lerp

function useScrollMotion(ref: RefObject<THREE.Object3D | null>, base: number) {
  useFrame((_, dt) => {
    const o = ref.current
    if (!o) return
    const p = scroll.progress
    o.rotation.y += dt * 0.2 + scroll.velocity * 0.001
    o.rotation.x = lerp(o.rotation.x, p * Math.PI * 1.5, 0.04)
    o.position.x = lerp(o.position.x, 2.2 - p * 3.5, 0.04)
    o.position.y = lerp(o.position.y, 0.5 - p * 1.2, 0.04)
    o.scale.setScalar(lerp(o.scale.x, base * (1.1 + Math.sin(p * Math.PI) * 0.3), 0.04))
  })
}

function Rig() {
  const m = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const h = (e: MouseEvent) => {
      m.current.x = (e.clientX / window.innerWidth) * 2 - 1
      m.current.y = -((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', h)
    return () => window.removeEventListener('mousemove', h)
  }, [])

  useFrame(({ camera }) => {
    camera.position.x = lerp(camera.position.x, m.current.x * 0.4, 0.04)
    camera.position.y = lerp(camera.position.y, m.current.y * 0.3, 0.04)
    camera.lookAt(0, 0, 0)
  })

  return null
}

function PearlBlob() {
  const mesh = useRef<THREE.Mesh>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mat = useRef<any>(null)
  useScrollMotion(mesh, 1.2)

  useFrame(() => {
    if (!mat.current) return
    const p = scroll.progress
    const kick = Math.min(Math.abs(scroll.velocity) * 0.006, 0.3)
    mat.current.distort = lerp(mat.current.distort, 0.28 + p * 0.2 + kick, 0.08)

    const i = p * (lightColors.length - 1)
    const a = Math.floor(i)
    const b = Math.min(a + 1, lightColors.length - 1)
    mat.current.color.lerpColors(lightColors[a], lightColors[b], i - a)
  })

  return (
    <mesh ref={mesh} position={[1.8, 0.4, 0]}>
      <sphereGeometry args={[1.15, 64, 64]} />
      <MeshDistortMaterial
        ref={mat}
        speed={1.8}
        roughness={0.25}
        metalness={0.15}
        clearcoat={0.6}
        clearcoatRoughness={0.2}
      />
    </mesh>
  )
}

export default function Scene() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-transparent">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.8} />
        <directionalLight position={[4, 5, 5]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-4, -3, -2]} intensity={1.5} color="#eaf0fa" />
        <directionalLight position={[0, -4, 3]} intensity={1.0} color="#fff0e9" />
        <Rig />
        <Sparkles
          count={50}
          scale={[10, 7, 4]}
          size={2.0}
          speed={0.3}
          opacity={0.3}
          color="#254a87"
        />
        <Suspense fallback={null}>
          <PearlBlob />
        </Suspense>
      </Canvas>
    </div>
  )
}
