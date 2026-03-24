import { Router } from 'express';
import healthRoutes from './health.routes.ts';

/**
 * Root API router — /api/v1
 *
 * Register all feature routers here. This is the single entry-point
 * for the Express app to mount all routes at the /api/v1 prefix.
 *
 * Pattern:
 *   router.use('/your-feature', yourFeatureRoutes);
 */
const router = Router();

router.use('/health', healthRoutes);

// ─── Register new feature routes below ───────────────────────────────────────
// router.use('/users',    userRoutes);
// router.use('/products', productRoutes);

export default router;
