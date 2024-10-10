import { Schema, model } from 'mongoose';
import { TAppointment } from './appointment.interface';

const appointmentSchema = new Schema<TAppointment>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    phone: {
      type: Number,
      required: [true, 'Phone number is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    dob: {
      type: String,
      required: [true, 'Date of birth is required'],
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true, 
  },
);

export const Appointment = model<TAppointment>('Appointment', appointmentSchema);
