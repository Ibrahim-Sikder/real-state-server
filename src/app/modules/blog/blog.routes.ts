import { Router } from 'express';
import { BlogController } from './blog.controller';

import { createBlogSchema, updateBlogSchema } from './blog.validation';
import { auth } from '../../middlewares/auth';
import { validateRequest } from '../../middlewares/validateRequest';

const router = Router();

router.get('/all', BlogController.getAllBlog);

router.get('/:id', BlogController.getBlogById);

router.post(
  '/create',
  auth('admin', 'super_admin'),
  validateRequest(createBlogSchema),
  BlogController.createBlog,
);

router.patch(
  '/update/:id',
  auth('admin', 'super_admin'),
  validateRequest(updateBlogSchema),
  BlogController.updateBlog,
);

router.delete(
  '/delete/:id',
  auth('admin', 'super_admin'),
  BlogController.deleteBlog,
);

export const blogRoutes = router;
