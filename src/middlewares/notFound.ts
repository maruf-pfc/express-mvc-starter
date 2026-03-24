import type { Request, Response, NextFunction } from 'express';
import ApiError from '../utils/ApiError.ts';

/**
 * 404 Not Found handler.
 *
 * Catches any request that didn't match a route and forwards a standardised
 * 404 ApiError to the global error handler.
 *
 * Must be registered AFTER all routes, but BEFORE the global error handler.
 */
const notFound = (req: Request, _res: Response, next: NextFunction): void => {
  next(new ApiError(404, `Route not found: ${req.originalUrl}`));
};

export default notFound;
