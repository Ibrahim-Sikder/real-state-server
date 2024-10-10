import express from 'express';
import { UserController } from './user.controller';
import { validateRequest } from '../../../utils/validateRequest';
import { userValidations } from './user.validation';
import { auth } from '../../middlewares/auth';
const router = express.Router();

router.get('/',  UserController.getAllUser);
router.post(
  '/',

  validateRequest(userValidations.createUserValidation),
  UserController.createUser,
);
router.delete('/:id', auth('admin'), UserController.deleteUser);
export const userRoutes = router;
