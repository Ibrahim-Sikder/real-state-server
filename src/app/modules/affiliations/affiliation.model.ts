import { Schema, model } from 'mongoose';
import { TAffiliation } from './affiliation.interface';

const aboutSchema = new Schema<TAffiliation>(
  {
    images: {
      type: [String],
      required: [true, 'Image is required'],
    },
    createdAt: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const Affiliation = model<TAffiliation>('Affiliation', aboutSchema);
