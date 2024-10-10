import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { aboutValidations } from './about.validation';
import { aboutControllers } from './about.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(aboutValidations.createAbout),
  aboutControllers.createAbout,
);
router.get('/', aboutControllers.getAllAbout);
router.get('/:id', aboutControllers.getSingleAbout);
router.delete('/:id', aboutControllers.deleteAbout);
router.patch(
  '/:id',
  validateRequest(aboutValidations.updateAbout),
  aboutControllers.updateAbout,
);

export const aboutRoutes = router;
