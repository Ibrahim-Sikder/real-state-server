import { Document, Model, Types } from 'mongoose';

export interface IBlog extends Document {
  _id: Types.ObjectId;
  title: string;
  thumbnail: [string];
  description: string;
  content: string;
  slug: string;
  tags: string[];
}

export interface IBlogModel extends Model<IBlog> {}
