/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { videoRoutes } from '../modules/video/video.route';
import { authRoutes } from '../modules/Auth/auth.route';
import { userRoutes } from '../modules/user/user.route';
import { imgGalleryRoutes } from '../modules/image_gallery/img_gallery.route';
import { aboutRoutes } from '../modules/about/about.route';
import { imageGalleryRoutes } from '../modules/gallery/gallery.route';
import { bannerRoutes } from '../modules/banner/banner.route';
import { projectRoutes } from '../modules/projects/project.route';
const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/videos',
    route: videoRoutes,
  },
  {
    path: '/gallery',
    route: imageGalleryRoutes,
  },

  {
    path: '/image-gallery',
    route: imgGalleryRoutes,
  },
  {
    path: '/about',
    route: aboutRoutes,
  },
  
  {
    path: '/banner',
    route: bannerRoutes,
  },
  {
    path: '/project',
    route: projectRoutes,
  },
 
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
