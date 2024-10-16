import { Schema, model } from 'mongoose';
import { TTeam } from './team.interface';

const teamSchema = new Schema<TTeam>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  designation: {
    type: String,
    required: [true, 'Designation is required'],
  },
  date: {
    type: String,
    required: [true, 'Designation is required'],
  },
  image: {
    type: String,
    required: [true, 'Designation is required'],
  },
  social_link: {
    type: String,
  },
}, {
  timestamps: true,
});

export const Team = model<TTeam>('Team', teamSchema);
