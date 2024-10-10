import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';

import { auth } from '../../middlewares/auth';
import { appointmentValidations } from './appointment.validation';
import { appointmentControllers } from './appointment.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(appointmentValidations.createAppointmentValidation),
  appointmentControllers.createAppointment,
);
router.get('/', appointmentControllers.getAllAppointment);
router.delete('/:id', auth('admin'), appointmentControllers.deleteAppointment);

export const appointmentRoutes = router;
