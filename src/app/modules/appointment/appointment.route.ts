import express from 'express';

import { auth } from '../../middlewares/auth';
import { appointmentValidations } from './appointment.validation';
import { appointmentControllers } from './appointment.controller';
import { validateRequest } from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/',
  validateRequest(appointmentValidations.createAppointmentValidation),
  appointmentControllers.createAppointment,
);
router.get('/', appointmentControllers.getAllAppointment);
router.delete('/:id', auth('admin'), appointmentControllers.deleteAppointment);
router.patch(
  '/:id',
  appointmentControllers.upateAppointment,
);
export const appointmentRoutes = router;
