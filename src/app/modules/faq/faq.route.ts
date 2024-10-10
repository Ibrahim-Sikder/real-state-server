import express from 'express';
import { validateRequest } from '../../../utils/validateRequest';
import { faqValidation } from './faq.validation';
import { faqController } from './faq.controller';


const router = express.Router();

router.post(
  '/',
  validateRequest(faqValidation.faqValidationSchema),
  faqController.createFaq,
);
router.get('/', faqController.getAllFaq);
router.delete('/:id', faqController.deleteFaq);
router.patch(
  '/:id',
  validateRequest(faqValidation.updateFaqValidationSchema),
  faqController.updateFaq,
);

export const faqRoutes = router;
