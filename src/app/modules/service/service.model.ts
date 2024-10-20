import { Schema, model } from 'mongoose';
import { TServices } from './service.interface';

const servicesSchema = new Schema<TServices>(
  {
    title: {
      type: String,
    },
    images: {
      type: [String],
    },
    description: {
      type: String,
    },
    slug: {
      type: String,
    },
    date: {
      type: String,
    },
    meta_title: {
      type: String,
    },
    meta_description: {
      type: String,
    },
    meta_keywords: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
);

export const Services = model<TServices>('Service', servicesSchema);
