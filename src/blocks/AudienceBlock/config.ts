import type { Block } from 'payload'

export const audienceBlock: Block = {
  slug: 'audienceBlock',
  interfaceName: 'AudienceBlock',
  labels: {
    singular: 'Audience Block',
    plural: 'Audience Blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow Text',
      defaultValue: 'Who We Help',
    },
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      required: true,
    },
    {
      name: 'audiences',
      type: 'array',
      label: 'Audiences',
      minRows: 1,
      maxRows: 8,
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          required: true,
          options: [
            { label: 'School / University', value: 'GraduationCap' },
            { label: 'Academy / Training', value: 'Dumbbell' },
            { label: 'Teams / Coaches', value: 'Users' },
            { label: 'Leagues / Events', value: 'Trophy' },
            { label: 'Facilities / Venues', value: 'Building2' },
            { label: 'Federations / Organizations', value: 'Globe' },
            { label: 'Athletes', value: 'PersonStanding' },
            { label: 'Analytics', value: 'BarChart3' },
          ],
        },
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
      ],
    },
  ],
}
