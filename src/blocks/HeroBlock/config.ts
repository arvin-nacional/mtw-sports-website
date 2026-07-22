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
      name: 'headlinePlain',
      type: 'text',
      label: 'Headline — Plain Part',
      defaultValue: 'Transforming',
      required: true,
    },
    {
      name: 'headlineGradient',
      type: 'text',
      label: 'Headline — Gradient Part',
      defaultValue: 'Sports Through Technology',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'Engineering elite performance through kinetic data. We transform athletic potential into measurable dominance with the world\'s most advanced sports tracking ecosystem.',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      admin: {
        description: 'Optional hero background image. Leave empty for gradient background.',
      },
    },
    {
      name: 'overlayOpacity',
      type: 'select',
      label: 'Overlay Darkness',
      defaultValue: 'medium',
      options: [
        { label: 'Light', value: 'light' },
        { label: 'Medium', value: 'medium' },
        { label: 'Dark', value: 'dark' },
      ],
      admin: {
        description: 'Controls how dark the overlay is on the background image.',
        condition: (_, siblingData) => Boolean(siblingData?.backgroundImage),
      },
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
