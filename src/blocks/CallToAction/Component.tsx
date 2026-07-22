import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary via-[#1a4a7a] to-[#0f2d4a] px-6 py-20 lg:px-12 lg:py-28">
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
        {/* Content */}
        {richText && (
          <div className="mb-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-white md:[&_h2]:text-3xl lg:[&_h2]:text-4xl [&_p]:mx-auto [&_p]:max-w-2xl [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-white/70 md:[&_p]:text-lg">
            <RichText data={richText} enableGutter={false} />
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {(links || []).map(({ link }, i) => {
            const isPrimary = i === 0
            return (
              <CMSLink
                key={i}
                {...link}
                appearance="inline"
                className={
                  isPrimary
                    ? 'group relative overflow-hidden rounded-lg bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
                    : 'rounded-lg border-2 border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10'
                }
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
