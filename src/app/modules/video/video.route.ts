import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { videoValidations } from './video.validation';
import { videoControllers } from './video.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(videoValidations.createVideoValidationSchema),
  videoControllers.createVideo,
);
router.get('/', videoControllers.getAllVideo);
router.get('/:id', videoControllers.getSingleVideo);
router.delete('/:id', videoControllers.deleteVideo);
router.patch(
  '/:id',
  validateRequest(videoValidations.updateVideoValidationSchema),
  videoControllers.updateVideo,
);

export const videoRoutes = router;
