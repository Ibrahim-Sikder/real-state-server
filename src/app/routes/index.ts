/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { videoRoutes } from '../modules/video/video.route';
import { authRoutes } from '../modules/Auth/auth.route';
import { userRoutes } from '../modules/user/user.route';
import { photoGalleryRoutes } from '../modules/image_gallery/img_gallery.route';
import { aboutRoutes } from '../modules/about/about.route';
import { bannerRoutes } from '../modules/banner/banner.route';
import { projectRoutes } from '../modules/projects/project.route';
import { serviceRoutes } from '../modules/service/service.route';
import { informationRoutes } from '../modules/information/information.route';
import { teamRoutes } from '../modules/team/team.route';
import { faqRoutes } from '../modules/faq/faq.route';
import { appointmentRoutes } from '../modules/appointment/appointment.route';
import { galleryRoutes } from '../modules/gallery/gallery.route';
import { reviewRoutes } from '../modules/review/review.route';
import { affiliationRoutes } from '../modules/affiliations/affiliation.route';
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
  {
    path: '/appointment',
    route: appointmentRoutes,
  },
  {
    path: '/gallery',
    route: galleryRoutes,
  },
  {
    path: '/image-gallery',
    route: photoGalleryRoutes,
  },
  {
    path: '/reviews',
    route: reviewRoutes,
  },
  {
    path: '/affiliation',
    route: affiliationRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
