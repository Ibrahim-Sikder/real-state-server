/* eslint-disable @typescript-eslint/no-explicit-any */
import * as z from 'zod';
import { IBlog } from './blog.interface';

type Properties<Input> = {
  [K in keyof Input]: any;
};

export const createBlogSchema = z.object({
  body: z.object<Partial<Properties<IBlog>>>({
    title: z.string().min(3),
    description: z.string().min(3),
    content: z.string().min(3),
    thumbnail: z.array(z.string()),
  })
});

export const updateBlogSchema = z.object({
  body: z.object<Partial<Properties<IBlog>>>({
    title: z.string().min(3).optional(),
    description: z.string().min(3).optional(),
    content: z.string().min(3).optional(),
    thumbnail: z.array(z.string()).optional()
  })
});
