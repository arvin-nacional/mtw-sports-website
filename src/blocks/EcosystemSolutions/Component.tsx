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
    <section className="bg-gradient-to-b from-[#f1f5f9] to-[#e8eef3] px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-primary mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {sectionTitle}
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Large featured card */}
          <div className="group relative flex min-h-[400px] flex-col justify-end overflow-hidden rounded-2xl border border-primary/10 bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:col-span-2">
            {/* Gradient accent bar */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-secondary to-tertiary" />
            {/* Ambient orb */}
            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-150"
              style={{
                background:
                  'radial-gradient(ellipse 80% 70% at 75% 35%, rgba(91,184,254,0.1) 0%, rgba(30,58,95,0.03) 50%, transparent 80%)',
              }}
            />
            {/* HUD grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />

            <div className="relative z-10">
              <p className="text-secondary mb-4 text-xs font-bold uppercase tracking-[0.3em]">
                {featuredEyebrow}
              </p>
              <h3 className="text-primary mb-5 text-3xl font-extrabold leading-tight lg:text-4xl">
                {featuredTitle}
              </h3>
              <p className="text-on-surface-variant mb-8 max-w-lg text-base leading-relaxed">
                {featuredDescription}
              </p>
              {featuredLink && (
                <CMSLink
                  {...featuredLink}
                  appearance="inline"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                />
              )}
            </div>
          </div>

          {/* Right stacked cards */}
          <div className="flex flex-col gap-6">
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
  primary: 'border-l-primary',
  secondary: 'border-l-secondary',
  tertiary: 'border-l-tertiary',
}

const accentHoverMap = {
  primary: 'group-hover:text-primary',
  secondary: 'group-hover:text-secondary',
  tertiary: 'group-hover:text-tertiary',
}

const SolutionCard: React.FC<{ card: NonNullable<EcosystemSolutionsBlockProps['cards']>[number] }> = ({
  card,
}) => {
  const accentColor = card.accentColor || 'primary'
  const borderClass = accentColorMap[accentColor]
  const hoverClass = accentHoverMap[accentColor]

  return (
    <div
      className={`group flex flex-1 flex-col justify-between rounded-2xl border border-primary/10 border-l-4 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${borderClass}`}
    >
      <div>
        <h4 className={`text-primary mb-3 text-xl font-bold transition-colors ${hoverClass}`}>
          {card.title}
        </h4>
        <p className="text-on-surface-variant mb-5 text-sm leading-relaxed">
          {card.description}
        </p>
      </div>
      {card.link && (
        <CMSLink
          {...card.link}
          appearance="inline"
          className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.15em] text-secondary transition-all hover:gap-2`}
        >
          Learn More
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </CMSLink>
      )}
    </div>
  )
}
