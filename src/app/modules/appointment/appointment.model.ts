import { Schema, model } from 'mongoose';
import { TAppointment } from './appointment.interface';

const appointmentSchema = new Schema<TAppointment>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    date: {
      type: String,
    },
    category: {
      type: String,
    },
    status: {
      type: String,
      default:'Pending'
    },
  },
  {
    timestamps: true, 
  },
);

export const Appointment = model<TAppointment>('Appointment', appointmentSchema);
