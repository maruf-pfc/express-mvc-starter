import { Router } from 'express';
import healthController from '../controllers/health.controller.ts';

const router = Router();

/**
 * @route   GET /api/v1/health
 * @desc    Returns API + database health status
 * @access  Public
 */
router.get('/', healthController.getHealth);

export default router;
