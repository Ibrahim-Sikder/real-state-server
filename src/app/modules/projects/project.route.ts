import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { auth } from '../../middlewares/auth';
import { projectControllers } from './project.controller';
import { ProjectValidations } from './projcet.validation';

const router = express.Router();

router.post(
  '/',
  auth('admin'),
  validateRequest(ProjectValidations.createProjectValidation),
  projectControllers.createProject,
);
router.get('/', projectControllers.getAllProject);
router.get('/:id', projectControllers.getSingleProject);
router.delete('/:id', auth('admin'), projectControllers.deleteProject);
router.patch(
  '/:id',
  validateRequest(ProjectValidations.updateProjectValidation),
  projectControllers.updateProject,
);

export const projectRoutes = router;
