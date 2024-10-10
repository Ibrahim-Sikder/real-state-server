import { z } from 'zod';

export const createProjectValidation = z.object({
  body: z.object({
    img_tagline_bangla: z.string().optional(),
    img_tagline_english: z.string().optional(),
    admin_name: z.string({
      required_error: 'Admin Name is required',
    }),
    date: z.string({
      required_error: 'Post Date is required',
    }),
    bangla_title: z.string({
      required_error: 'Bangla title is required',
    }),
    english_title: z.string({
      required_error: 'English title is required',
    }),
    bangla_short_description: z.string({
      required_error: 'Bangla short description is required',
    }),
    english_short_description: z.string({
      required_error: 'English short description is required',
    }),
    bangla_description: z.string({
      required_error: 'Bangla description is required',
    }),
    english_description: z.string({
      required_error: 'English description is required',
    }),
    meta_title: z.string({
      required_error: 'Meta Title is required',
    }),
    meta_description: z.string({
      required_error: 'Meta Description is required',
    }),
    meta_keywords: z.array(z.string(), {
      required_error: 'At least one Meta Keyword is required',
    }),
  }),
});

export const updateProjectValidation = z.object({
  body: z.object({
    img_tagline_bangla: z.string().optional(),
    img_tagline_english: z.string().optional(),
    admin_name: z.string().optional(),
    date: z.string().optional(),
    bangla_title: z.string().optional(),
    english_title: z.string().optional(),
    bangla_short_description: z.string().optional(),
    english_short_description: z.string().optional(),
    bangla_description: z.string().optional(),
    english_description: z.string().optional(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    meta_keywords: z.array(z.string()).optional(),
  }),
});

export const ProjectValidations = {
  createProjectValidation,
  updateProjectValidation,
};
