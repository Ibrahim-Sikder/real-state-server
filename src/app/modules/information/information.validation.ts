import { z } from 'zod';

const createInformationValidation = z.object({
  body: z.object({
    first_name: z.string({
      required_error: 'First name is required',
    }),
    last_name: z.string({
      required_error: 'Last name is required',
    }),
    phone: z.string().optional(),
    email: z.string().email('Invalid email format'),
    address: z.string().optional(),

    message: z.string().optional(),
  }),
});
const updateInformationValidation = z.object({
  body: z.object({
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().email('Invalid email format'),
    address: z.string(),

    message: z.string(),
  }),
});

export const InformationValidations = {
  createInformationValidation,
  updateInformationValidation,
};
