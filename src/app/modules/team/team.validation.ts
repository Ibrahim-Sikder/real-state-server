import { z } from 'zod';

export const createTeamValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    designation: z.string({
      required_error: 'Designation is required',
    }),
    social_link: z
      .string({
        required_error: 'Social link is required',
      })
      .url('Invalid URL format for social link'),
  }),
});

export const updateTeamValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    designation: z.string().optional(),
    social_link: z
      .string()
      .url('Invalid URL format for social link')
      .optional(),
  }),
});

export const TeamValidations = {
  createTeamValidation,
  updateTeamValidation,
};
