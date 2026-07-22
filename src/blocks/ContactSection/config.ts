import type { Block } from 'payload'

export const contactSectionBlock: Block = {
  slug: 'contactSectionBlock',
  interfaceName: 'ContactSectionBlock',
  labels: {
    singular: 'Contact Section',
    plural: 'Contact Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Get in Touch',
      required: true,
    },
    {
      name: 'contactItems',
      type: 'array',
      label: 'Contact Items',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          required: true,
          options: [
            { label: 'Map Pin', value: 'MapPin' },
            { label: 'Phone', value: 'Phone' },
            { label: 'Mail', value: 'Mail' },
            { label: 'Clock', value: 'Clock' },
          ],
        },
        {
          name: 'iconColor',
          type: 'select',
          label: 'Icon Color',
          defaultValue: 'primary',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Tertiary', value: 'tertiary' },
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
        {
          name: 'linkUrl',
          type: 'text',
          label: 'Link URL (optional)',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Schedule Meeting Section',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'showScheduleMeeting',
          type: 'checkbox',
          label: 'Show Schedule Meeting',
          defaultValue: true,
        },
        {
          name: 'scheduleMeetingHeading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Schedule a Meeting',
          admin: {
            condition: (_, siblingData) => siblingData?.showScheduleMeeting,
          },
        },
        {
          name: 'scheduleMeetingDescription',
          type: 'textarea',
          label: 'Description',
          admin: {
            condition: (_, siblingData) => siblingData?.showScheduleMeeting,
          },
        },
        {
          name: 'scheduleMeetingUrl',
          type: 'text',
          label: 'Calendly/Meeting URL',
          admin: {
            condition: (_, siblingData) => siblingData?.showScheduleMeeting,
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Why Contact Us Section',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'showWhyContactUs',
          type: 'checkbox',
          label: 'Show Why Contact Us',
          defaultValue: false,
        },
        {
          name: 'whyContactUsHeading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Why Contact Us?',
          admin: {
            condition: (_, siblingData) => siblingData?.showWhyContactUs,
          },
        },
        {
          name: 'whyContactUsItems',
          type: 'array',
          label: 'Items',
          admin: {
            condition: (_, siblingData) => siblingData?.showWhyContactUs,
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Text',
              required: true,
            },
            {
              name: 'color',
              type: 'select',
              label: 'Bullet Color',
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
    },
    {
      type: 'collapsible',
      label: 'Contact Form',
      fields: [
        {
          name: 'formHeading',
          type: 'text',
          label: 'Form Heading',
          defaultValue: 'Send Us a Message',
        },
        {
          name: 'formDescription',
          type: 'textarea',
          label: 'Form Description',
        },
        {
          name: 'form',
          type: 'relationship',
          relationTo: 'forms',
          required: true,
        },
        {
          name: 'privacyText',
          type: 'text',
          label: 'Privacy Text',
          defaultValue: 'By submitting this form, you agree to our Privacy Policy.',
        },
      ],
    },
  ],
}
