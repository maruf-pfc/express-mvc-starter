import { Router } from 'express';
import healthController from '../controllers/health.controller.ts';
import validate from '../middlewares/validate.ts';
import { createHealthSchema } from '../schemas/health.schema.ts';

/**
 * Health Router
 * @route /api/v1/health
 */
const router = Router();

// GET request — no body validation required
router.get('/', healthController.getHealth);

// POST request — demonstrates Zod generic validation middleware applied before controller
router.post('/', validate(createHealthSchema), healthController.createPing);

export default router;
