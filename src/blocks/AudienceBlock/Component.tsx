import React from 'react'
import {
  GraduationCap,
  Dumbbell,
  Users,
  Trophy,
  Building2,
  Globe,
  PersonStanding,
  BarChart3,
} from 'lucide-react'
import type { AudienceBlock as AudienceBlockProps } from '@/payload-types'

const iconMap = {
  GraduationCap,
  Dumbbell,
  Users,
  Trophy,
  Building2,
  Globe,
  PersonStanding,
  BarChart3,
}

const colorVariants = [
  { bg: 'bg-primary/10', text: 'text-primary', hover: 'group-hover:bg-primary' },
  { bg: 'bg-secondary/10', text: 'text-secondary', hover: 'group-hover:bg-secondary' },
  { bg: 'bg-tertiary/10', text: 'text-tertiary', hover: 'group-hover:bg-tertiary' },
]

export const AudienceBlock: React.FC<AudienceBlockProps> = ({
  eyebrow,
  headline,
  audiences,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] to-white px-6 py-28 lg:px-12">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 0%, rgba(91,184,254,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          {eyebrow && (
            <p className="text-secondary mb-4 text-xs font-bold uppercase tracking-[0.4em]">
              {eyebrow}
            </p>
          )}
          {headline && (
            <h2 className="text-primary mx-auto mb-5 max-w-3xl text-3xl font-extrabold tracking-tight lg:text-4xl">
              {headline}
            </h2>
          )}
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-primary via-secondary to-tertiary" />
        </div>

        {/* Audience Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences?.map((item: { icon: string; title: string; description: string }, index: number) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            const colorVariant = colorVariants[index % colorVariants.length]

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Top accent line */}
                <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-primary via-secondary to-tertiary transition-transform duration-300 group-hover:scale-x-100" />

                {/* Icon */}
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${colorVariant.bg} ${colorVariant.text} transition-all duration-300 ${colorVariant.hover} group-hover:text-white`}
                >
                  {Icon && <Icon className="h-7 w-7" />}
                </div>

                {/* Content */}
                <h3 className="text-primary mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
