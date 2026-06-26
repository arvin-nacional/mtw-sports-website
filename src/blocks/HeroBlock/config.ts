import type { Block } from 'payload'

import { linkGroup } from '@/fields/linkGroup'

export const heroBlock: Block = {
  slug: 'heroBlock',
  interfaceName: 'HeroBlock',
  fields: [
    {
      name: 'dataLabel',
      type: 'text',
      label: 'Data Label',
      defaultValue: 'More Than Winning',
    },
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      defaultValue: 'Transforming Sports Through Technology',
      required: true,
    },
    {
      name: 'gradientText',
      type: 'text',
      label: 'Gradient Text (part of headline to highlight)',
      defaultValue: 'Sports Through Technology',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'Engineering elite performance through kinetic data. We transform athletic potential into measurable dominance with the world\'s most advanced sports tracking ecosystem.',
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
  ],
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks',
  },
  graphQL: {
    singularName: 'HeroBlock',
  },
}
