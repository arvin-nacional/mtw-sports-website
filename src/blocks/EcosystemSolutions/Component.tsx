'use client'
import React from 'react'

import type { EcosystemSolutionsBlock as EcosystemSolutionsBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const EcosystemSolutionsBlock: React.FC<EcosystemSolutionsBlockProps> = ({
  sectionTitle,
  featuredEyebrow,
  featuredTitle,
  featuredDescription,
  featuredLink,
  cards,
}) => {
  const [cardOne, cardTwo] = cards || []

  return (
    <section className="bg-surface-container-low px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-primary mb-3 text-3xl font-bold tracking-tight">
            {sectionTitle}
          </h2>
          <div className="bg-primary h-[2px] w-16 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Large featured card */}
          <div
            className="bg-surface-container relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-xl border border-[rgba(42,58,92,0.2)] p-8 lg:col-span-2"
          >
            {/* Ambient orb */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 60% at 70% 40%, rgba(142,213,255,0.06) 0%, transparent 70%)',
              }}
            />
            {/* HUD grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  'linear-gradient(var(--on-surface) 1px, transparent 1px), linear-gradient(90deg, var(--on-surface) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative z-10">
              <p className="text-primary mb-3 text-[10px] font-semibold uppercase tracking-[0.3em]">
                {featuredEyebrow}
              </p>
              <h3 className="text-primary mb-4 text-4xl font-bold leading-tight">
                {featuredTitle}
              </h3>
              <p className="text-on-surface/60 mb-6 max-w-md text-sm leading-relaxed">
                {featuredDescription}
              </p>
              {featuredLink && (
                <CMSLink
                  {...featuredLink}
                  appearance="inline"
                  className="text-primary inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
                />
              )}
            </div>
          </div>

          {/* Right stacked cards */}
          <div className="flex flex-col gap-4">
            {cardOne && (
              <SolutionCard card={cardOne} />
            )}
            {cardTwo && (
              <SolutionCard card={cardTwo} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const accentColorMap = {
  primary: 'border-l-primary text-primary',
  secondary: 'border-l-secondary text-secondary',
  tertiary: 'border-l-tertiary text-tertiary',
}

const SolutionCard: React.FC<{ card: NonNullable<EcosystemSolutionsBlockProps['cards']>[number] }> = ({
  card,
}) => {
  const accentColor = card.accentColor || 'primary'
  const accentClasses = accentColorMap[accentColor]

  return (
    <div
      className={`bg-surface-container flex flex-1 flex-col justify-between rounded-xl border border-[rgba(42,58,92,0.2)] border-l-[3px] p-6 ${accentClasses}`}
    >
      <div>
        <h4 className="text-primary mb-2 text-lg font-bold">
          {card.title}
        </h4>
        <p className="text-on-surface/55 mb-4 text-sm leading-relaxed">
          {card.description}
        </p>
      </div>
      {card.link && (
        <CMSLink
          {...card.link}
          appearance="inline"
          className={`text-[10px] font-semibold uppercase tracking-[0.15em] transition-opacity hover:opacity-70 ${accentClasses}`}
        />
      )}
    </div>
  )
}
