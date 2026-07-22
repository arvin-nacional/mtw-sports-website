'use client'
import React from 'react'
import Image from 'next/image'

import type { LogoRibbonBlock as LogoRibbonBlockProps, Media } from '@/payload-types'

const speedMap = {
  slow: '60s',
  normal: '35s',
  fast: '18s',
}

export const LogoRibbonBlock: React.FC<LogoRibbonBlockProps> = ({ label, logos, speed = 'normal' }) => {
  if (!logos?.length) return null

  const duration = speedMap[speed as keyof typeof speedMap] ?? speedMap.normal

  return (
    <section className="relative overflow-hidden border-y border-primary/10 bg-gradient-to-r from-[#f8fafc] via-white to-[#f8fafc] py-14">
      {/* Subtle ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 80% at 50% 50%, rgba(91,184,254,0.04) 0%, transparent 70%)',
        }}
      />

      {label && (
        <div className="relative mb-10 flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary/20" />
          <p className="text-on-surface-variant text-xs font-bold uppercase tracking-[0.35em]">
            {label}
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/20" />
        </div>
      )}

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          className="flex items-center gap-20 animate-marquee"
          style={{ animationDuration: duration }}
        >
          {/* Render logos twice for seamless loop */}
          {[...logos, ...logos].map((item, i) => {
            const media = item.logo as Media
            if (!media?.url) return null
            return (
              <div
                key={i}
                className="group flex-shrink-0 flex items-center justify-center h-12 w-36"
                title={item.name}
              >
                <Image
                  src={media.url}
                  alt={item.name}
                  width={media.width ?? 144}
                  height={media.height ?? 48}
                  unoptimized
                  className="max-h-12 w-auto object-contain opacity-40 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
