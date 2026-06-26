import type { Block } from 'payload'

export const logoRibbon: Block = {
  slug: 'logoRibbon',
  interfaceName: 'LogoRibbonBlock',
  labels: {
    singular: 'Logo Ribbon',
    plural: 'Logo Ribbons',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      label: 'Section Label',
      defaultValue: 'Trusted by the best in sports',
    },
    {
      name: 'speed',
      type: 'select',
      label: 'Scroll Speed',
      defaultValue: 'normal',
      options: [
        { label: 'Slow', value: 'slow' },
        { label: 'Normal', value: 'normal' },
        { label: 'Fast', value: 'fast' },
      ],
    },
    {
      name: 'logos',
      type: 'array',
      label: 'Partner Logos',
      minRows: 1,
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Logo',
        },
        {
          name: 'name',
          type: 'text',
          label: 'Partner Name',
          required: true,
        },
      ],
    },
  ],
}
