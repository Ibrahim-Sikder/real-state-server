import { Schema, model } from 'mongoose';
import { TImgGallery } from './img_gallery.interface';

const imgGallerySchema = new Schema<TImgGallery>(
  {
    title: {
      type: String,
      required: [true, 'Name is required'],
    },
    
    images: {
      type: [String],
      required: [true, 'Image URL is required'],
    },
  },
  {
    timestamps: true,
  },
);

export const ImgGallery = model<TImgGallery>('ImgGallery', imgGallerySchema);
