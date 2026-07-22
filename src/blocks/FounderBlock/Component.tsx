'use client'

import React from 'react'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import type { FounderBlock as FounderBlockProps, Media } from '@/payload-types'
import RichText from '@/components/RichText'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export const FounderBlock: React.FC<FounderBlockProps> = ({
  eyebrow,
  name,
  title,
  photo,
  story,
  credentials,
  quote,
  yearsExperience,
  linkedInUrl,
}) => {
  const photoMedia = typeof photo === 'object' ? (photo as Media) : null
  const photoUrl = photoMedia ? getMediaUrl(photoMedia.url, photoMedia.updatedAt) : null

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f8fafc] px-6 py-28 lg:px-12">
      {/* Subtle ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(91,184,254,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Eyebrow */}
        {eyebrow && (
          <div className="mb-16 text-center">
            <p className="text-secondary mb-4 text-xs font-bold uppercase tracking-[0.4em]">
              {eyebrow}
            </p>
            <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-primary via-secondary to-tertiary" />
          </div>
        )}

        <div className="grid items-center gap-16 lg:grid-cols-5">
          {/* Photo Column - 2 cols */}
          <div className="relative lg:col-span-2">
            {/* Decorative background shape */}
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/5" />
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border border-primary/10" />

            {/* Photo container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
              {photoUrl && (
                <Image
                  src={photoUrl}
                  alt={photoMedia?.alt || name || 'Founder'}
                  width={photoMedia?.width ?? 500}
                  height={photoMedia?.height ?? 600}
                  className="h-auto w-full object-cover"
                  unoptimized
                />
              )}

              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent px-6 pb-6 pt-16">
                {yearsExperience && (
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-8 rounded-full bg-secondary" />
                    <span className="text-sm font-bold uppercase tracking-widest text-white/90">
                      {yearsExperience}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content Column - 3 cols */}
          <div className="lg:col-span-3">
            {/* Name & Title */}
            <div className="mb-8">
              <h2 className="text-primary mb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {name}
              </h2>
              {title && (
                <p className="text-lg font-medium text-secondary">{title}</p>
              )}
            </div>

            {/* Credentials */}
            {credentials && credentials.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-2">
                {credentials.map((item: { credential: string }, index: number) => (
                  <span
                    key={index}
                    className="rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary"
                  >
                    {item.credential}
                  </span>
                ))}
              </div>
            )}

            {/* Story */}
            {story && (
              <div className="prose prose-lg text-on-surface-variant mb-10 max-w-none leading-relaxed">
                <RichText data={story} enableGutter={false} />
              </div>
            )}

            {/* Quote */}
            {quote && (
              <blockquote className="relative mb-10 border-l-4 border-secondary pl-6">
                <div
                  className="pointer-events-none absolute -left-2 -top-2 text-6xl font-serif text-secondary/20"
                  aria-hidden
                >
                  "
                </div>
                <p className="text-primary text-lg font-medium italic leading-relaxed">
                  {quote}
                </p>
              </blockquote>
            )}

            {/* LinkedIn */}
            {linkedInUrl && (
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl border border-primary/15 bg-white px-6 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                <span className="text-primary text-sm font-semibold">Connect on LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
