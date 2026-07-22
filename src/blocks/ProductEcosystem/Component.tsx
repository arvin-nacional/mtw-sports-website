'use client'
import React from 'react'

import type { ProductEcosystemBlock as ProductEcosystemBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'

const accentBgMap = {
  blue: 'bg-gradient-to-br from-[#f0f7ff] to-[#e8f4ff]',
  orange: 'bg-gradient-to-br from-[#fff8f0] to-[#fff3e8]',
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

const accentGradientMap = {
  primary: 'from-primary to-secondary',
  secondary: 'from-secondary to-tertiary',
  tertiary: 'from-tertiary to-secondary',
}

export const ProductEcosystemBlock: React.FC<ProductEcosystemBlockProps> = ({
  eyebrow,
  title,
  collections,
  packages,
}) => {
  return (
    <section className="bg-white px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-secondary mb-4 text-xs font-bold uppercase tracking-[0.4em]">
            {eyebrow}
          </p>
          <h2 className="text-primary mb-5 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {title}
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-primary via-secondary to-tertiary" />
        </div>

        {/* Collections grid - Bento style */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {collections?.map((col) => {
            const products = col.products?.map((p) => p.product).filter(Boolean) || []

            return (
              <CMSLink
                key={col.label}
                {...col.link}
                appearance="inline"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-b from-white to-[#f8fafc] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Hover gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Icon + category */}
                <div className="relative mb-5 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-lg text-primary transition-colors group-hover:bg-primary group-hover:text-white" aria-hidden>
                    {col.icon}
                  </span>
                  <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-[0.2em]">
                    {col.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-primary relative mb-3 text-lg font-bold transition-colors group-hover:text-secondary">
                  {col.label}
                </h3>

                {/* Description */}
                <p className="text-on-surface-variant relative mb-6 text-sm leading-relaxed">
                  {col.description}
                </p>

                {/* Product chips */}
                <div className="relative mt-auto flex flex-wrap gap-2">
                  {products.map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-primary transition-colors group-hover:bg-primary group-hover:text-white"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                
                {/* Arrow indicator */}
                <div className="absolute bottom-7 right-7 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="text-sm">→</span>
                </div>
              </CMSLink>
            )
          })}
        </div>

        {/* Packages */}
        {packages && packages.length > 0 && (
          <div className="mt-16">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-tertiary/30" />
              <p className="text-tertiary text-xs font-bold uppercase tracking-[0.3em]">
                Bundled Solutions
              </p>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-tertiary/30" />
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {packages.map((pkg) => {
                const accentColor = pkg.accentColor || 'primary'
                const accentBg = accentBgMap[(pkg.accentBg as 'blue' | 'orange') || 'blue']
                const accentText = accentTextMap[accentColor]
                const accentBorder = accentBorderMap[accentColor]
                const accentGradient = accentGradientMap[accentColor]
                const items = pkg.includes?.map((i) => i.item).filter(Boolean) || []

                return (
                  <div
                    key={pkg.label}
                    className={`group relative flex flex-col overflow-hidden rounded-2xl border border-primary/10 border-l-4 p-9 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${accentBorder} ${accentBg}`}
                  >
                    {/* Header */}
                    <div className="mb-2 flex items-center gap-3">
                      <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${accentText}`}>
                        {pkg.category}
                      </span>
                    </div>
                    <h3 className="text-primary mb-2 text-2xl font-extrabold">
                      {pkg.label}
                    </h3>
                    <p className={`mb-5 text-sm font-semibold ${accentText}`}>
                      {pkg.tagline}
                    </p>
                    <p className="text-on-surface-variant mb-7 text-sm leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Includes */}
                    <div className="mb-7">
                      <p className="text-on-surface-variant/60 mb-4 text-[10px] font-bold uppercase tracking-[0.2em]">
                        Includes
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                          <span
                            key={item}
                            className={`rounded-full border border-current/20 bg-white/80 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide ${accentText}`}
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
                        className={`mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r ${accentGradient} px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md`}
                      />
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
