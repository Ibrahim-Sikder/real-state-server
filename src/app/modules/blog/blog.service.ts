import { Request } from 'express';

import httpStatus from 'http-status';
import { IBlog } from './blog.interface';
import QueryBuilder from '../../builder/QueryBuilder';
import { AppError } from '../../error/AppError';
import { getQueryCondition } from '../../../utils/objectId';
import { TMeta } from '../../../utils/sendResponse';
import Blog from './blog.model';

const getAllBlog = async (
  query: Record<string, unknown>,
): Promise<{ meta: TMeta; blogs: IBlog[] }> => {
  const BlogSearchableFields: (keyof IBlog)[] = [
    'title',
    'description',
    'content',
    'slug',
    'tags',
  ];
  const blogQuery = new QueryBuilder(Blog.find(), query)
    .search(BlogSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await blogQuery.countTotal();
  const blogs = await blogQuery.modelQuery;

  return {
    meta,
    blogs,
  };
};

const getBlogById = async (id: string): Promise<IBlog> => {
  const queryConditions = getQueryCondition(id);
  const blog = await Blog.findOne({ ...queryConditions });
  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, 'This Blog is not found');
  }
  return blog;
};

const createBlog = async (req: Request): Promise<IBlog> => {
  const result = await Blog.create(req.body);
  return result;
};

const updateBlog = async (id: string, req: Request): Promise<IBlog | null> => {
  const blog = await Blog.findOne({ _id: id });
  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
  }

  const { ...remainingData } = req.body;

  if (req.body.title) {
    remainingData.slug = req.body.title;
  }

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingData,
  };

  const result = await Blog.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteBlog = async (id: string): Promise<null> => {
  const blog = await Blog.findOne({ _id: id });
  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, 'This Blog is not found');
  }

  await Blog.findByIdAndDelete(id);

  return null;
};

export const BlogService = {
  getAllBlog,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
