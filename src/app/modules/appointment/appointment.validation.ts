import { z } from 'zod';

const createAppointmentValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    phone: z
      .string({
        required_error: 'Phone number is required',
      })
      .min(1, 'Phone number must be a valid number'),
    email: z
      .string({
        required_error: 'Email is required',
      })
      
      .email('Invalid email format'),
    date: z.string().optional(),
    category: z.string().optional(),
  }),
});


export const appointmentValidations = {
  createAppointmentValidation,

};
