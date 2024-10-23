import express from 'express';
import { auth } from '../../middlewares/auth';
import { projectControllers } from './project.controller';
import { ProjectValidations } from './projcet.validation';
import { validateRequest } from '../../middlewares/validateRequest';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.super_admin),
  validateRequest(ProjectValidations.createProjectValidation),
  projectControllers.createProject,
);
router.get('/',   auth(USER_ROLE.admin, USER_ROLE.super_admin), projectControllers.getAllProject);
router.get('/:id',   auth(USER_ROLE.admin, USER_ROLE.super_admin), projectControllers.getSingleProject);
router.delete('/:id',   auth(USER_ROLE.admin, USER_ROLE.super_admin), projectControllers.deleteProject);
router.patch(
  '/:id',   auth(USER_ROLE.admin, USER_ROLE.super_admin),
  validateRequest(ProjectValidations.updateProjectValidation),
  projectControllers.updateProject,
);

export const projectRoutes = router;
