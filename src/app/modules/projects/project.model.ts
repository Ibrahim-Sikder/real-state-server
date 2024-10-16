import { Schema, model } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema: Schema = new Schema(
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
      type: String,
    },
    overview_Location: {
      type: [String],
    },
    short_description: {
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
    floorImage: {
      type: String,
    },
    conceptImage: {
      type: String,
    },
    locationImg: {
      type: String,
    },
    overviewImage: {
      type: String,
    },
    videoUrls: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
);

export const Project = model<TProject>('Project', projectSchema);
