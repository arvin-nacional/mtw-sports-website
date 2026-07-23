'use client'

import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { AudienceBlock } from '@/blocks/AudienceBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContactSectionBlock } from '@/blocks/ContactSection/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { EcosystemSolutionsBlock } from '@/blocks/EcosystemSolutions/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { FounderBlock } from '@/blocks/FounderBlock/Component'
import { HeroBlock } from '@/blocks/HeroBlock/Component'
import { LogoRibbonBlock } from '@/blocks/LogoRibbon/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { MissionBlock } from '@/blocks/MissionBlock/Component'
import { ProductEcosystemBlock } from '@/blocks/ProductEcosystem/Component'
import { ScrollReveal } from '@/components/ScrollReveal'

const blockComponents = {
  archive: ArchiveBlock,
  audienceBlock: AudienceBlock,
  contactSectionBlock: ContactSectionBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  ecosystemSolutions: EcosystemSolutionsBlock,
  formBlock: FormBlock,
  founderBlock: FounderBlock,
  heroBlock: HeroBlock,
  logoRibbon: LogoRibbonBlock,
  mediaBlock: MediaBlock,
  missionBlock: MissionBlock,
  productEcosystem: ProductEcosystemBlock,
}

const noAnimationBlocks = ['heroBlock']

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]
            const skipAnimation = noAnimationBlocks.includes(blockType)

            if (Block) {
              const blockContent = (
                <>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </>
              )

              return skipAnimation ? (
                <div key={index}>{blockContent}</div>
              ) : (
                <ScrollReveal key={index} delay={index > 1 ? 100 : 0}>
                  {blockContent}
                </ScrollReveal>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
