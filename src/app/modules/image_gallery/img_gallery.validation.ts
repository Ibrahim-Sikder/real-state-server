import { z } from 'zod';

const createImgGalleryValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Name is required',
    }),
    image: z.string({
      required_error: 'Image URL is required',
    }),
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
