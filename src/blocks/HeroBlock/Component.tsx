'use client'
import React from 'react'

import type { HeroBlock as HeroBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeroBlock: React.FC<HeroBlockProps> = ({ 
  dataLabel, 
  headlinePlain, 
  headlineGradient, 
  description,
  links 
}) => {

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-32 text-center h-[80vh] box-border bg-[var(--surface)]"
      
    >
      {/* Ambient glow — tonal, not harsh */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(142,213,255,0.07) 0%, transparent 70%)',
        }}
      />
      {/* Subtle grid overlay for HUD feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--on-surface) 1px, transparent 1px), linear-gradient(90deg, var(--on-surface) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Data label */}
        {dataLabel && (
          <p
            className="mb-6 font-mono text-label-sm font-semibold uppercase tracking-[0.35em]"
            style={{ color: 'var(--secondary)' }}
          >
            {dataLabel}
          </p>
        )}

        {/* Display headline — Geist */}
        <h1
          className="font-geist mb-6 text-2xl font-bold leading-[1.05] md:text-3xl md:text-display-lg-mobile lg:text-6xl"
          style={{ color: 'var(--on-surface)' }}
        >
          {headlinePlain}{' '}
          {headlineGradient && (
            <span className="bg-gradient-to-r from-[#006398] to-[#5bb8fe] bg-clip-text text-transparent">
              {headlineGradient}
            </span>
          )}
        </h1>

        {description && (
          <p
            className="mx-auto max-w-2xl font-inter text-body-lg leading-relaxed md:text-body-lg"
            style={{ color: 'var(--on-surface)', opacity: 0.6 }}
          >
            {description}
          </p>
        )}

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {Array.isArray(links) && links.length > 0 && (
            <>
              {/* Primary — gradient CTA */}
              {links[0] && (
                <CMSLink
                  {...links[0].link}
                  className="btn-primary transition-opacity hover:opacity-90"
                  appearance="default"
                />
              )}
              {/* Secondary — ghost */}
              {links[1] && (
                <CMSLink
                  {...links[1].link}
                  className="rounded-md px-8 py-3 font-mono text-label-sm font-semibold uppercase tracking-[0.05em] transition-colors border border-outline text-on-surface hover:bg-surface-container-high"
                  appearance="link"
                />
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
