import type { Block } from 'payload'

export const founderBlock: Block = {
  slug: 'founderBlock',
  interfaceName: 'FounderBlock',
  labels: {
    singular: 'Founder Block',
    plural: 'Founder Blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow Text',
      defaultValue: 'Meet the Founder',
    },
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo',
      required: true,
    },
    {
      name: 'story',
      type: 'richText',
      label: 'Story / Bio',
      admin: {
        description: 'The founder\'s story in their own words.',
      },
    },
    {
      name: 'credentials',
      type: 'array',
      label: 'Credentials / Roles',
      maxRows: 6,
      fields: [
        {
          name: 'credential',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'quote',
      type: 'textarea',
      label: 'Featured Quote',
      admin: {
        description: 'A memorable quote or statement from the founder.',
      },
    },
    {
      name: 'yearsExperience',
      type: 'text',
      label: 'Years of Experience',
      admin: {
        description: 'e.g., "35+ Years in Sports"',
      },
    },
    {
      name: 'linkedInUrl',
      type: 'text',
      label: 'LinkedIn URL',
    },
  ],
}
