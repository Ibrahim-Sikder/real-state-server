
import { RequestHandler} from 'express';
import { BlogService } from './blog.service';
import { catchAsync } from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';


const getAllBlog: RequestHandler = catchAsync(async (req, res) => {
  const result = await BlogService.getAllBlog(req.query); 
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Blog retrieved successfully',
    data: result,
  });
});

const getBlogById: RequestHandler = catchAsync(async (req, res) => {
  const result = await BlogService.getBlogById(req.params.id); 

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Blog retrieved successfully',
    data: result
  });
});

const createBlog: RequestHandler = catchAsync(async (req, res) => {
  const result = await BlogService.createBlog(req); 

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Blog created successfully',
    data: result
  });
});

const updateBlog: RequestHandler = catchAsync(async (req, res) => {
  const result = await BlogService.updateBlog(req.params.id, req); 

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Blog updated successfully',
    data: result
  });
});

const deleteBlog: RequestHandler = catchAsync(async (req, res) => {
  await BlogService.deleteBlog(req.params.id); 

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Blog deleted successfully',
    data: null
  });
});

export const BlogController = {
  getAllBlog,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
};
