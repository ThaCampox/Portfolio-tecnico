import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    docId: z.string().regex(/^DOC-[A-Z]{3}-\d{3}$/, 'Use o formato DOC-SUP-001'),
    area: z.enum(['support', 'infrastructure', 'security', 'noc', 'automation']),
    level: z.enum(['basic', 'intermediate', 'advanced']),
    origin: z.enum(['professional', 'lab', 'study']),
    status: z.enum(['example', 'draft', 'published']).default('draft'),
    revision: z.string().default('1.0'),
    created: z.coerce.date(),
    updated: z.coerce.date(),
    author: z.string().default('Thaina Campos'),
    environment: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { docs };
