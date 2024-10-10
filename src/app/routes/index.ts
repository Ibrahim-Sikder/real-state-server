/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { videoRoutes } from '../modules/video/video.route';
import { authRoutes } from '../modules/Auth/auth.route';
import { userRoutes } from '../modules/user/user.route';
import { imgGalleryRoutes } from '../modules/image_gallery/img_gallery.route';
import { aboutRoutes } from '../modules/about/about.route';
import { imageGalleryRoutes } from '../modules/gallery/gallery.route';
import { programmRoutes } from '../modules/programm/programm.route';
import { reportRoutes } from '../modules/reports/report.route';
import { informationRoutes } from '../modules/information/information.route';
import { bannerRoutes } from '../modules/banner/banner.route';
import { activityRoutes } from '../modules/recent-activity/activity.route';
import { projectRoutes } from '../modules/projects/project.route';
import { ebookRoutes } from '../modules/ebook/ebook.route';
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
    path: '/activity',
    route: activityRoutes,
  },
  {
    path: '/report',
    route: reportRoutes,
  },
  {
    path: '/information',
    route: informationRoutes,
  },
  {
    path: '/banner',
    route: bannerRoutes,
  },
  {
    path: '/project',
    route: projectRoutes,
  },
  {
    path: '/programm',
    route: programmRoutes,
  },
  {
    path: '/ebook',
    route: ebookRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
