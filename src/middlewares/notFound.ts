import type { Request, Response, NextFunction } from 'express';
import ApiError from '../utils/ApiError.ts';
import { HttpStatus } from '../constants/http.ts';

/**
 * 404 Not Found handler.
 * Must be registered AFTER all routes, BEFORE the global error handler.
 */
const notFound = (req: Request, _res: Response, next: NextFunction): void => {
  next(new ApiError(HttpStatus.NOT_FOUND, `Route not found: ${req.originalUrl}`));
};

export default notFound;
