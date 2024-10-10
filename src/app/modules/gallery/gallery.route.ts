import { Router } from 'express';
import { imageGalleryController } from './gallery.controller';

import {
  deleteImageFromGallerySchema,
  uploadImageToGallerySchema,
  createFolderSchema,
} from './gallery.validation';
import { validateRequest } from '../../../utils/validateRequest';
import { upload } from '../../../utils/sendImageToCloudinary';
import { auth } from '../../middlewares/auth';

const router = Router();

router.get('/all', imageGalleryController.getAllImages);
router.get(
  '/folder/:folder',
  auth('admin'),
  imageGalleryController.getImagesByFolder,
);
router.post(
  '/upload',

  upload.array('images'),
  validateRequest(uploadImageToGallerySchema),
  imageGalleryController.createImage,
);

router.post(
  '/delete',

  validateRequest(deleteImageFromGallerySchema),
  imageGalleryController.deleteImage,
);

router.get('/folders',  imageGalleryController.getFolders);

router.post(
  '/folder',

  validateRequest(createFolderSchema),
  imageGalleryController.createFolder,
);

router.delete(
  '/folder/:id',

  imageGalleryController.deleteFolder,
);

export const imageGalleryRoutes = router;
