import { Schema, model } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>(
  {
    img_tagline_bangla: {
      type: String,
    },
    img_tagline_english: {
      type: String,
    },

    img_bangla: {
      type: String,
    },
    img_english: {
      type: String,
    },
    thumnail_img: {
      type: String,
    },
    slug: {
      type: String,
    },
    admin_name: {
      type: String,
      required: [true, 'Admin Name is required'],
    },
    date: {
      type: String,
    },
    bangla_title: {
      type: String,
      required: [true, 'Bangla title is required'],
    },
    english_title: {
      type: String,
      required: [true, 'English title is required'],
    },
    bangla_short_description: {
      type: String,
      required: [true, 'Bangla short description is required'],
    },
    english_short_description: {
      type: String,
      required: [true, 'English short description is required'],
    },
    bangla_description: {
      type: String,
      required: [true, 'Bangla description is required'],
    },
    english_description: {
      type: String,
      required: [true, 'English description is required'],
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

export const Project = model<TProject>('Project', projectSchema);
