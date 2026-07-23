import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'MTW brings together cameras, analytics, streaming, scoring, and athlete assessment tools into one sports technology ecosystem.',
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
      width: 1200,
      height: 630,
      alt: 'MTW Sports - More Than Winning',
    },
  ],
  siteName: 'MTW Sports',
  title: 'MTW Sports | Sports Technology Ecosystem',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
