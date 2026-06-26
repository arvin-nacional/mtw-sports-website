import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
        {
          label: 'Kinetic Hero',
          value: 'kineticHero',
        },
      ],
      required: true,
    },
    {
      name: 'dataLabel',
      type: 'text',
      label: 'Data Label',
      defaultValue: 'More Than Winning',
      admin: {
        condition: (_, { type } = {}) => type === 'kineticHero',
      },
    },
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      defaultValue: 'Transforming Sports Through Technology',
      required: true,
      admin: {
        condition: (_, { type } = {}) => type === 'kineticHero',
      },
    },
    {
      name: 'gradientText',
      type: 'text',
      label: 'Gradient Text (part of headline to highlight)',
      defaultValue: 'Sports Through Technology',
      admin: {
        condition: (_, { type } = {}) => type === 'kineticHero',
      },
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: 'Description',
      defaultValue: [
        {
          type: 'paragraph',
          children: [
            {
              text: 'Engineering elite performance through kinetic data. We transform athletic potential into measurable dominance with the world\'s most advanced sports tracking ecosystem.'
            }
          ]
        }
      ],
      admin: {
        condition: (_, { type } = {}) => type === 'kineticHero',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact', 'lowImpact'].includes(type),
      },
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: false,
    },
  ],
  label: false,
}
