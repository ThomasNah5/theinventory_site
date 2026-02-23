import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        cover: z.string().optional(),
        tags: z.array(z.string()).optional(),
      }),
    }),
    products: defineCollection({
      type: 'data',
      source: 'products/*.json',
      schema: z.object({
        name: z.string(),
        url: z.string(),
        description: z.array(z.string()),
      }),
    }),
  },
})
