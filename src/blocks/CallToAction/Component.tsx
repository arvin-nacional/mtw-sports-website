import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <div className="container">
      <div className="bg-surface-container-lowest border border-outline rounded-lg p-8 flex flex-col gap-8 md:flex-row md:justify-between md:items-center shadow-elevated">
        <div className="max-w-lg flex items-center">
          {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
        </div>
        <div className="flex flex-col gap-4">
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} appearance="default" {...link} />
          })}
        </div>
      </div>
    </div>
  )
}
