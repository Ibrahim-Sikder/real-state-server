import { z } from 'zod';

export const createServiceValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    image: z.string().optional(),
    description:z.string().optional()
  }),
});

export const updateServiceValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    image: z.string().optional(),
    description:z.string().optional()

  }),
});

export const serviceValidations = {
  createServiceValidationSchema,
  updateServiceValidationSchema,
};
