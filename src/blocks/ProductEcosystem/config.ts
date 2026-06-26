import type { Block } from 'payload'

import { link } from '@/fields/link'

export const productEcosystem: Block = {
  slug: 'productEcosystem',
  interfaceName: 'ProductEcosystemBlock',
  labels: {
    singular: 'Product Ecosystem',
    plural: 'Product Ecosystems',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Section Eyebrow',
      defaultValue: 'What We Offer',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      defaultValue: 'The MTW Ecosystem',
    },
    {
      name: 'collections',
      type: 'array',
      label: 'Product Collections',
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon',
          defaultValue: '⬡',
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
        },
        {
          name: 'category',
          type: 'text',
          label: 'Category',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
        {
          name: 'products',
          type: 'array',
          label: 'Products',
          minRows: 1,
          fields: [
            {
              name: 'product',
              type: 'text',
              label: 'Product',
              required: true,
            },
          ],
        },
        link({
          overrides: {
            name: 'link',
            label: 'Link',
          },
        }),
      ],
    },
    {
      name: 'packages',
      type: 'array',
      label: 'Packages',
      minRows: 1,
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
        },
        {
          name: 'category',
          type: 'text',
          label: 'Category',
          defaultValue: 'Bundled solution',
        },
        {
          name: 'tagline',
          type: 'text',
          label: 'Tagline',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
        {
          name: 'includes',
          type: 'array',
          label: 'Includes',
          minRows: 1,
          fields: [
            {
              name: 'item',
              type: 'text',
              label: 'Item',
              required: true,
            },
          ],
        },
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
        {
          name: 'accentBg',
          type: 'select',
          label: 'Accent Background',
          defaultValue: 'blue',
          options: [
            { label: 'Blue Tint', value: 'blue' },
            { label: 'Orange Tint', value: 'orange' },
          ],
        },
        link({
          overrides: {
            name: 'link',
            label: 'Link',
          },
        }),
      ],
    },
  ],
}
