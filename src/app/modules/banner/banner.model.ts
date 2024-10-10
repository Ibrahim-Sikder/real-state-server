import { Schema, model } from 'mongoose';
import { TBanner } from './banner.interface';

const bannerSchema = new Schema<TBanner>(
  {
   
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    
  },
  {
    timestamps: true,
  },
);

export const Banner = model<TBanner>('Banner', bannerSchema);
