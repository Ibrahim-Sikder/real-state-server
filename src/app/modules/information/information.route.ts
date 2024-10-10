import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';

import { auth } from '../../middlewares/auth';
import { InformationControllers } from './information.controller';
import { InformationValidations } from './information.validation';

const router = express.Router();

router.post(
  '/', validateRequest(InformationValidations.createInformationValidation),
  InformationControllers.createInformation,
);
router.get('/', InformationControllers.getAllInformation);
router.delete('/:id', auth('admin'), InformationControllers.deleteInformation);


export const informationRoutes = router;
