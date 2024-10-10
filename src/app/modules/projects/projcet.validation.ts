import { z } from 'zod';

export const createProjectValidation = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    image: z.string({
      required_error: 'Image URL is required',
    }),
  }),
});

export const updateProjectValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const ProjectValidations = {
  createProjectValidation,
  updateProjectValidation,
};
