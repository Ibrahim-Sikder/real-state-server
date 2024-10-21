import { z } from 'zod';

export const createTeamValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    designation: z.string({
      required_error: 'Designation is required',
    }),
    images: z.array(z.string()).optional(),
    social_link: z
      .string().optional()
  }),
});

export const updateTeamValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    images: z.array(z.string()).optional(),
    designation: z.string().optional(),
    social_link: z
      .string().optional(),
  }),
});

export const TeamValidations = {
  createTeamValidation,
  updateTeamValidation,
};
