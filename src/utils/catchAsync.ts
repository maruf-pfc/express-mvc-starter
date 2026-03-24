import type { Request, Response, NextFunction, RequestHandler } from 'express';

/**
 * catchAsync — wraps an async route handler and forwards any rejected
 * promise to Express's next() so the global error handler picks it up.
 *
 * Without this wrapper every async route would need its own try/catch.
 *
 * @example
 * router.get('/example', catchAsync(async (req, res) => {
 *   const data = await someAsyncOperation();
 *   res.json(new ApiResponse(200, 'OK', data));
 * }));
 */
const catchAsync = (fn: RequestHandler): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export default catchAsync;
