import { z } from 'zod';

const createAppointmentValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    phone: z
      .number({
        required_error: 'Phone number is required',
      })
      .min(1, 'Phone number must be a valid number'),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email('Invalid email format'),
    dob: z.string({
      required_error: 'Date of birth is required',
    }),
    message: z.string().optional(),
  }),
});

export const appointmentValidations = {
  createAppointmentValidation,
};
