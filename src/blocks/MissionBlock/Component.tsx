import React from 'react'
import type { MissionBlock as MissionBlockProps } from '@/payload-types'

export const MissionBlock: React.FC<MissionBlockProps> = ({
  eyebrow,
  headline,
  description,
  tagline,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary via-[#1a4a7a] to-[#0f2d4a] px-6 py-28 lg:px-12 lg:py-36">
      {/* Ambient glow effects */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(91,184,254,0.15) 0%, transparent 60%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 90% 80%, rgba(46,92,138,0.2) 0%, transparent 50%)',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        {eyebrow && (
          <div className="mb-8 inline-flex flex-col items-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-secondary">
              {eyebrow}
            </p>
            <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-secondary to-tertiary" />
          </div>
        )}

        {/* Headline */}
        {headline && (
          <h2 className="mb-8 text-2xl font-extrabold leading-snug tracking-tight text-white md:text-3xl lg:text-4xl">
            {headline}
          </h2>
        )}

        {/* Description */}
        {description && (
          <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
            {description}
          </p>
        )}

        {/* Tagline */}
        {tagline && (
          <div className="inline-flex items-center gap-3">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-secondary/50" />
            <p className="bg-gradient-to-r from-secondary via-[#5bb8fe] to-tertiary bg-clip-text text-lg font-bold italic text-transparent md:text-xl">
              {tagline}
            </p>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-tertiary/50" />
          </div>
        )}
      </div>
    </section>
  )
}
