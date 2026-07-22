import type { Block } from 'payload'

export const missionBlock: Block = {
  slug: 'missionBlock',
  interfaceName: 'MissionBlock',
  labels: {
    singular: 'Mission Block',
    plural: 'Mission Blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow Text',
      defaultValue: 'Our Mission',
    },
    {
      name: 'headline',
      type: 'textarea',
      label: 'Headline / Mission Statement',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      admin: {
        description: 'A short memorable phrase (e.g., "More than winning, we help sports move forward.")',
      },
    },
  ],
}
