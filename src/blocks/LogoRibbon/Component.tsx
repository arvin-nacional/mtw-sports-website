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
    <section
      className="py-12 border-y border-outline overflow-hidden"
      style={{ backgroundColor: 'var(--surface-container-low)' }}
    >
      {label && (
        <p
          className="mb-8 text-center font-mono text-label-sm font-semibold uppercase tracking-[0.25em]"
          style={{ color: 'var(--on-surface-variant)' }}
        >
          {label}
        </p>
      )}

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className="flex gap-16 items-center animate-marquee"
          style={{ animationDuration: duration }}
        >
          {/* Render logos twice for seamless loop */}
          {[...logos, ...logos].map((item, i) => {
            const media = item.logo as Media
            if (!media?.url) return null
            return (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center h-10 w-32"
                title={item.name}
              >
                <Image
                  src={media.url}
                  alt={item.name}
                  width={media.width ?? 128}
                  height={media.height ?? 40}
                  className="max-h-10 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
