import { Schema, model } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  image: {
    type: String,
    required: [true, 'Description is required'],
  },
});

export const Project = model<TProject>('Project', projectSchema);
