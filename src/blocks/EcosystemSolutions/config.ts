import type { Block } from 'payload'

import { link } from '@/fields/link'

export const ecosystemSolutions: Block = {
  slug: 'ecosystemSolutions',
  interfaceName: 'EcosystemSolutionsBlock',
  labels: {
    singular: 'Ecosystem Solutions',
    plural: 'Ecosystem Solutions',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title',
      defaultValue: 'Performance Solutions',
    },
    {
      name: 'featuredEyebrow',
      type: 'text',
      label: 'Featured Eyebrow',
      defaultValue: 'Full Ecosystem',
    },
    {
      name: 'featuredTitle',
      type: 'text',
      label: 'Featured Title',
      defaultValue: 'Complete Performance Suite',
    },
    {
      name: 'featuredDescription',
      type: 'textarea',
      label: 'Featured Description',
      defaultValue:
        'End-to-end kinetic data infrastructure for professional clubs and national programs. Combines AI tracking, live analytics, scoreboard integration, and dedicated performance engineering support.',
    },
    link({
      overrides: {
        name: 'featuredLink',
        label: 'Featured Link',
      },
    }),
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      minRows: 1,
      maxRows: 2,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
        link({
          overrides: {
            name: 'link',
            label: 'Link',
          },
        }),
        {
          name: 'accentColor',
          type: 'select',
          label: 'Accent Color',
          defaultValue: 'primary',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Tertiary', value: 'tertiary' },
          ],
        },
      ],
    },
  ],
}
