'use client'
import React from 'react'

import type { ProductEcosystemBlock as ProductEcosystemBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'

const accentBgMap = {
  blue: 'rgba(142,213,255,0.07)',
  orange: 'rgba(255,193,118,0.07)',
}

const accentTextMap = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
}

const accentBorderMap = {
  primary: 'border-l-primary',
  secondary: 'border-l-secondary',
  tertiary: 'border-l-tertiary',
}

export const ProductEcosystemBlock: React.FC<ProductEcosystemBlockProps> = ({
  eyebrow,
  title,
  collections,
  packages,
}) => {
  return (
    <section className="bg-surface px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14">
          <p className="text-primary/70 mb-3 text-xs font-semibold uppercase tracking-[0.3em]">
            {eyebrow}
          </p>
          <h2 className="text-on-surface text-3xl font-bold tracking-tight">
            {title}
          </h2>
          <div className="bg-primary mt-4 h-[2px] w-12 rounded-full" />
        </div>

        {/* Collections grid */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collections?.map((col) => {
            const products = col.products?.map((p) => p.product).filter(Boolean) || []

            return (
              <CMSLink
                key={col.label}
                {...col.link}
                appearance="inline"
                className="group flex flex-col rounded-xl border border-[rgba(42,58,92,0.15)] p-6 transition-colors hover:bg-surface-container-low"
              >
                {/* Icon + category */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-primary/50 text-xl" aria-hidden>
                    {col.icon}
                  </span>
                  <span className="text-on-surface/35 text-[10px] font-semibold uppercase tracking-[0.2em]">
                    {col.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-on-surface mb-2 text-base font-bold">
                  {col.label}
                </h3>

                {/* Description */}
                <p className="text-on-surface/50 mb-5 text-sm leading-relaxed">
                  {col.description}
                </p>

                {/* Product chips */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {products.map((p) => (
                    <span
                      key={p}
                      className="bg-surface-container-high text-primary rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.05em]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </CMSLink>
            )
          })}
        </div>

        {/* Packages */}
        {packages && packages.length > 0 && (
          <div className="mt-12">
            <p className="text-tertiary/80 mb-6 text-xs font-semibold uppercase tracking-[0.3em]">
              Bundled Solutions
            </p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {packages.map((pkg) => {
                const accentColor = pkg.accentColor || 'primary'
                const accentBg = accentBgMap[(pkg.accentBg as 'blue' | 'orange') || 'blue']
                const accentText = accentTextMap[accentColor]
                const accentBorder = accentBorderMap[accentColor]
                const items = pkg.includes?.map((i) => i.item).filter(Boolean) || []

                return (
                  <div
                    key={pkg.label}
                    className={`flex flex-col rounded-xl border border-[rgba(42,58,92,0.15)] border-l-[3px] p-8 ${accentBorder}`}
                    style={{ backgroundColor: accentBg }}
                  >
                    {/* Header */}
                    <div className="mb-1 flex items-center gap-3">
                      <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] opacity-70 ${accentText}`}>
                        {pkg.category}
                      </span>
                    </div>
                    <h3 className="text-on-surface mb-1 text-2xl font-bold">
                      {pkg.label}
                    </h3>
                    <p className={`mb-4 text-sm font-medium ${accentText}`}>
                      {pkg.tagline}
                    </p>
                    <p className="text-on-surface/55 mb-6 text-sm leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Includes */}
                    <div className="mb-6">
                      <p className="text-on-surface/40 mb-3 text-[10px] font-semibold uppercase tracking-[0.2em]">
                        Includes
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                          <span
                            key={item}
                            className={`bg-surface-container-high rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.05em] ${accentText}`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {pkg.link && (
                      <CMSLink
                        {...pkg.link}
                        appearance="inline"
                        className={`mt-auto inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] transition-opacity hover:opacity-70 ${accentText}`}
                      >
                        View Package →
                      </CMSLink>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
