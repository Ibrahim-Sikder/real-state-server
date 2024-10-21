import { z } from 'zod';

const createImgGalleryValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Name is required',
    }),
    images: z.array(z.string()).optional(),
  }),
});
const updateImgGalleryValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const ImgGalleryValidations = {
  createImgGalleryValidationSchema,
  updateImgGalleryValidationSchema,
};
