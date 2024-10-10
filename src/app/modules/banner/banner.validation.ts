import { z } from 'zod';

export const createBannerValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    title: z.string(),
    image: z.string().optional(),
  }),
});

export const updateBannerValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    title: z.string().optional(),
    image: z.string().optional(),

  }),
});

export const bannerValidations = {
  createBannerValidationSchema,
  updateBannerValidationSchema,
};
