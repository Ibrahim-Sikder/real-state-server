import { Schema, model } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema: Schema = new Schema<TProject>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    sub_title: {
      type: String,
      required: [true, 'Subtitle is required'],
    },
    project_type: {
      type: String,
    },
    project_address: {
      type: String,
    },
    land_area: {
      type: String,
    },
    storied: {
      type: String,
    },
    apartment_contains: {
      type: [String],
    },
    special_amenities: {
      type: [String],
    },
    common_features: {
      type: [String],
    },
    home_loan_partner: {
      type: [String],
    },
    overview_Location: {
      type: [String],
    },
    short_description: {
      type: String,
    },
    sub_short_description: {
      type: String,
    },
    overview_description: {
      type: String,
    },
    concept_Location: {
      type: [String],
    },
    concept_description: {
      type: String,
    },
    floor_title: {
      type: String,
    },
    floor_Location: {
      type: [String],
    },
    floor_description: {
      type: String,
    },
    map_Location: {
      type: [String],
    },
    map_description: {
      type: String,
    },
    floorImages: {
      type: [String],
    },
    conceptImages: {
      type: [String],
    },
    locationImgs: {
      type: [String],
    },
    overviewImages: {
      type: [String],
    },
    location: {
      type: String,
    },
    videoUrls: {
      type: [String],
    },
    category: {
      type: String,
    },
    looking_for: {
      type: String,
    },
    feature: {
      type: Boolean,
    },
    high_budget: {
      type: Number,
    },
    low_budget: {
      type: Number,
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
