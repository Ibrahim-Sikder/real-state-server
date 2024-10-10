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
import { serviceRoutes } from '../modules/service/service.route';
import { informationRoutes } from '../modules/information/information.route';
import { teamRoutes } from '../modules/team/team.route';
import { faqRoutes } from '../modules/faq/faq.route';
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
    path: '/gallery',
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
    path: '/service',
    route: serviceRoutes,
  },
  {
    path: '/project',
    route: projectRoutes,
  },
  {
    path: '/contact',
    route: informationRoutes,
  },
  {
    path: '/team',
    route: teamRoutes,
  },
  {
    path: '/faq',
    route: faqRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
