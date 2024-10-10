import { Schema, model } from 'mongoose';
import { TServices } from './service.interface';

const servicesSchema = new Schema<TServices>(
  {
   
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    description:{
        type:String,
    }
    
  },
  {
    timestamps: true,
  },
);

export const Services = model<TServices>('Service', servicesSchema);
