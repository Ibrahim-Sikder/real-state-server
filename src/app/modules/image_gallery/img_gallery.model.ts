import { Schema, model } from 'mongoose';
import { TImgGallery } from './img_gallery.interface';

const imgGallerySchema = new Schema<TImgGallery>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    slug: {
      type: String,
    },
    thumnail_img: {
      type: String,
      required: [true, 'Image URL is required'],
    },
  },
  {
    timestamps: true,
  },
);

export const ImgGallery = model<TImgGallery>('ImgGallery', imgGallerySchema);
