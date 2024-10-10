import { z } from 'zod';

const createImgGalleryValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    slug: z.string().optional(),
    thumnail_img: z.string({
      required_error: 'Image URL is required',
    }),
  }),
});
const updateImgGalleryValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    slug: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const ImgGalleryValidations = {
  createImgGalleryValidationSchema,
  updateImgGalleryValidationSchema,
};
