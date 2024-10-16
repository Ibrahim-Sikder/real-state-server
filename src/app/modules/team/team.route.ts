import express from 'express';
import { auth } from '../../middlewares/auth';
import { TeamValidations } from './team.validation';
import { teamControllers } from './team.controller';
import { validateRequest } from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/',
  auth('admin'),
  validateRequest(TeamValidations.createTeamValidation),
  teamControllers.createTeam,
);
router.get('/', teamControllers.getAllTeam);
router.get('/:id', teamControllers.getSingleTeam);
router.delete('/:id', auth('admin'), teamControllers.deleteTeam);
router.patch(
  '/:id',
  validateRequest(TeamValidations.updateTeamValidation),
  teamControllers.updateTeam,
);

export const teamRoutes = router;
