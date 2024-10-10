import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { serviceValidations } from './service.validation';
import { serviceControllers } from './service.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(serviceValidations.createServiceValidationSchema),
  serviceControllers.createService,
);
router.get('/', serviceControllers.getAllService);
router.get('/:id', serviceControllers.getSingleService);
router.delete('/:id', serviceControllers.deleteService);
router.patch(
  '/:id',
  validateRequest(serviceValidations.updateServiceValidationSchema),
  serviceControllers.updateService,
);

export const serviceRoutes = router;
