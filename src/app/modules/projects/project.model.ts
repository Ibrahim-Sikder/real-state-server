import { Schema, model } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>(
  
    
 
);

export const Project = model<TProject>('Project', projectSchema);
