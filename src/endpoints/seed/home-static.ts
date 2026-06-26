import type { RequiredDataFromCollectionSlug } from 'payload'

// Used for pre-seeded content so that the homepage is not empty
export const homeStatic: RequiredDataFromCollectionSlug<'pages'> = {
  slug: 'home',
  _status: 'published',
  layout: [
    {
      blockType: 'heroBlock',
      headlinePlain: 'Payload Website Template',
      description: 'An open-source website built with Payload and Next.js.',
      links: [
        {
          link: {
            type: 'custom',
            newTab: false,
            url: '/admin',
            label: 'Visit the admin dashboard',
            appearance: 'default',
          },
        },
      ],
    },
  ],
  meta: {
    description: 'An open-source website built with Payload and Next.js.',
    title: 'Payload Website Template',
  },
  title: 'Home',
}
