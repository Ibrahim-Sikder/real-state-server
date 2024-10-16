import express from 'express';
import { faqValidation } from './faq.validation';
import { faqController } from './faq.controller';
import { validateRequest } from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/',
  validateRequest(faqValidation.faqValidationSchema),
  faqController.createFaq,
);
router.get('/', faqController.getAllFaq);
router.get('/:id', faqController.getSingleFaq);
router.delete('/:id', faqController.deleteFaq);
router.patch(
  '/:id',
  validateRequest(faqValidation.updateFaqValidationSchema),
  faqController.updateFaq,
);

export const faqRoutes = router;
