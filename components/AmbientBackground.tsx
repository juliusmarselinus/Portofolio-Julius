'use client'

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Top Left HIMSI Royal Blue Ambient Glow */}
      <div
        className="absolute -top-32 -left-32 h-[550px] w-[550px] rounded-full bg-[#254a87]/[0.045] blur-[100px]"
        style={{ transform: 'translate3d(0,0,0)' }}
      />
      {/* Middle Right HIMSI Coral Orange Glow */}
      <div
        className="absolute top-[35%] -right-32 h-[500px] w-[500px] rounded-full bg-[#f4512a]/[0.035] blur-[110px]"
        style={{ transform: 'translate3d(0,0,0)' }}
      />
      {/* Bottom Subtle Slate/Blue Glow */}
      <div
        className="absolute -bottom-32 left-[20%] h-[450px] w-[450px] rounded-full bg-[#254a87]/[0.03] blur-[120px]"
        style={{ transform: 'translate3d(0,0,0)' }}
      />
    </div>
  )
}
