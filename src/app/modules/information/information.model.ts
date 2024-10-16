import { Schema, model } from 'mongoose';
import { TInformation } from './information.interface';

const InformationSchema = new Schema<TInformation>({
  first_name: {
    type: String,
    required: [true, 'Name is required'],
  },
  last_name: {
    type: String,
    required: [true, 'Name is required'],
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  message: {
    type: String,
  },
},{
  timestamps:true
});

export const Information = model<TInformation>(
  'Information',
  InformationSchema,
);
