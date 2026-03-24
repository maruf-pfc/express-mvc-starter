import type { ErrorRequestHandler } from 'express';
import config from '../config/index.ts';

/**
 * Global error handler middleware.
 *
 * Catches all errors forwarded via `next(err)` — including those thrown
 * inside `catchAsync` wrappers — and returns a standardised JSON response.
 *
 * Must be registered LAST, after all routes.
 */
const globalErrorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const statusCode: number = (err as { statusCode?: number }).statusCode ?? 500;
  const message: string = (err as Error).message || 'Something went wrong!';

  res.status(statusCode).json({
    success: false,
    message,
    // Expose full error details only in development
    ...(config.env === 'development' && {
      errorOrigin: err,
      stack: (err as Error).stack,
    }),
  });
};

export default globalErrorHandler;
