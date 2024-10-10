import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { ImgGalleryValidations } from './img_gallery.validation';
import { imgGalleryControllers } from './img_gallery.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(ImgGalleryValidations.createImgGalleryValidationSchema),
  imgGalleryControllers.createImgGallery,
);
router.get('/', imgGalleryControllers.getAllImgGallery);
router.get('/:id', imgGalleryControllers.getSingleImgGallery);
router.delete('/:id', imgGalleryControllers.deleteImgGallery);
router.patch(
  '/:id',
  validateRequest(ImgGalleryValidations.updateImgGalleryValidationSchema),
  imgGalleryControllers.updateImgGallery,
);

export const imgGalleryRoutes = router;
