'use client'
import React from 'react'
import Image from 'next/image'

import type { HeroBlock as HeroBlockProps, Media } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { getMediaUrl } from '@/utilities/getMediaUrl'

const overlayOpacityMap = {
  light: 'bg-white/40',
  medium: 'bg-white/60',
  dark: 'bg-white/75',
}

export const HeroBlock: React.FC<HeroBlockProps> = ({ 
  dataLabel, 
  headlinePlain, 
  headlineGradient, 
  description,
  backgroundImage,
  overlayOpacity = 'medium',
  links 
}) => {
  const bgImage = typeof backgroundImage === 'object' ? backgroundImage as Media : null
  const bgUrl = bgImage ? getMediaUrl(bgImage.url, bgImage.updatedAt) : null
  const hasBackgroundImage = Boolean(bgUrl)

  return (
    <section className={`relative flex flex-col items-center justify-center overflow-hidden px-6 py-32 text-center min-h-[100vh] box-border ${!hasBackgroundImage ? 'bg-gradient-to-b from-[#f8fafc] to-[#eef4f8]' : ''}`}>
      {/* Background Image */}
      {hasBackgroundImage && bgUrl && (
        <>
          <Image
            src={bgUrl}
            alt={bgImage?.alt || 'Hero background'}
            fill
            priority
            unoptimized
            className="object-cover object-center"
          />
          {/* Overlay for readability */}
          <div className={`absolute inset-0 ${overlayOpacityMap[overlayOpacity as keyof typeof overlayOpacityMap] || overlayOpacityMap.medium}`} />
          {/* Gradient fade on left side for text area */}
          <div 
            className="pointer-events-none absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 40%, transparent 70%)',
            }}
          />
        </>
      )}

      {/* Animated gradient orb - only show without background image */}
      {!hasBackgroundImage && (
        <>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 90% 70% at 50% 30%, rgba(91,184,254,0.12) 0%, rgba(30,58,95,0.04) 50%, transparent 80%)',
            }}
          />
          {/* Secondary accent orb */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 80% 60%, rgba(46,92,138,0.08) 0%, transparent 60%)',
            }}
          />
        </>
      )}

      {/* Subtle grid overlay for HUD feel */}
      <div
        className={`pointer-events-none absolute inset-0 ${hasBackgroundImage ? 'opacity-[0.015]' : 'opacity-[0.025]'}`}
        style={{
          backgroundImage:
            'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Data label with animated underline */}
        {dataLabel && (
          <div className="mb-8 inline-flex flex-col items-center">
            <p className="text-secondary mb-2 font-mono text-xs font-bold uppercase tracking-[0.4em]">
              {dataLabel}
            </p>
            <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-secondary to-tertiary" />
          </div>
        )}

        {/* Display headline — Bold condensed for sports */}
        <h1 className="mb-8 text-4xl font-extrabold leading-[0.95] tracking-tight text-primary md:text-5xl lg:text-7xl">
          {headlinePlain}{' '}
          {headlineGradient && (
            <span className="bg-gradient-to-r from-secondary via-[#3d7ab8] to-tertiary bg-clip-text text-transparent">
              {headlineGradient}
            </span>
          )}
        </h1>

        {description && (
          <p className="text-on-surface-variant mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl">
            {description}
          </p>
        )}

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {Array.isArray(links) && links.length > 0 && (
            <>
              {/* Primary — bold gradient CTA with hover lift */}
              {links[0] && (
                <CMSLink
                  {...links[0].link}
                  className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-secondary px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
                  appearance="inline"
                />
              )}
              {/* Secondary — outlined with hover fill */}
              {links[1] && (
                <CMSLink
                  {...links[1].link}
                  className="text-primary border-primary/30 hover:bg-primary rounded-lg border-2 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:text-white"
                  appearance="inline"
                />
              )}
            </>
          )}
        </div>

        {/* Trust indicator */}
        <div className="text-on-surface-variant/50 mt-16 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest">
          <div className="h-[1px] w-8 bg-current opacity-30" />
          <span>Trusted by Elite Sports Programs</span>
          <div className="h-[1px] w-8 bg-current opacity-30" />
        </div>
      </div>
    </section>
  )
}
