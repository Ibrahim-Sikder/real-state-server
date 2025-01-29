import { Schema, model } from 'mongoose';
import { IBlog, IBlogModel } from './blog.interface';

const BlogSchema = new Schema<IBlog, IBlogModel>(
  {
    title: {
      type: String,
      required: true
    },
    thumbnail: {
      type: [String],
      required: true
    },
    description: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      unique: true
    },
    tags: {
      type: [String],
      required: true
    }
  },
  {
    timestamps: true
  }
);

BlogSchema.pre('save', function (next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  }
  next();
});

const Blog = model<IBlog, IBlogModel>('Blog', BlogSchema);
export default Blog;
