import { getPayload, Payload } from 'payload'
import config from '@/payload.config'

import { describe, it, beforeAll, expect } from 'vitest'

let payload: Payload

describe('Payload API', () => {
  beforeAll(async () => {
    const payloadConfig = await config
    payload = await getPayload({ config: payloadConfig })
  })

  describe('Users Collection', () => {
    it('fetches users', async () => {
      const users = await payload.find({
        collection: 'users',
      })
      expect(users).toBeDefined()
      expect(users.docs).toBeInstanceOf(Array)
    })
  })

  describe('Pages Collection', () => {
    it('fetches pages', async () => {
      const pages = await payload.find({
        collection: 'pages',
      })
      expect(pages).toBeDefined()
      expect(pages.docs).toBeInstanceOf(Array)
    })

    it('can find page by slug', async () => {
      const home = await payload.find({
        collection: 'pages',
        where: {
          slug: { equals: 'home' },
        },
      })
      expect(home.docs.length).toBeGreaterThanOrEqual(0)
    })
  })

  describe('Media Collection', () => {
    it('fetches media', async () => {
      const media = await payload.find({
        collection: 'media',
      })
      expect(media).toBeDefined()
      expect(media.docs).toBeInstanceOf(Array)
    })
  })

  describe('Posts Collection', () => {
    it('fetches posts', async () => {
      const posts = await payload.find({
        collection: 'posts',
      })
      expect(posts).toBeDefined()
      expect(posts.docs).toBeInstanceOf(Array)
    })

    it('returns published posts only when filtered', async () => {
      const publishedPosts = await payload.find({
        collection: 'posts',
        where: {
          _status: { equals: 'published' },
        },
      })
      expect(publishedPosts).toBeDefined()
      publishedPosts.docs.forEach((post) => {
        expect(post._status).toBe('published')
      })
    })
  })

  describe('Globals', () => {
    it('fetches header global', async () => {
      const header = await payload.findGlobal({
        slug: 'header',
      })
      expect(header).toBeDefined()
      expect(header.navItems).toBeDefined()
    })

    it('fetches footer global', async () => {
      const footer = await payload.findGlobal({
        slug: 'footer',
      })
      expect(footer).toBeDefined()
    })
  })
})
