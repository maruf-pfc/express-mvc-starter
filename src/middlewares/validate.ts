import type { Request, Response, NextFunction, RequestHandler } from 'express';
import type { ZodSchema, ZodError } from 'zod';
import ApiError from '../utils/ApiError.ts';
import { HttpStatus } from '../constants/http.ts';
import { Messages } from '../constants/messages.ts';

/**
 * Higher-order middleware function to validate the request body against a Zod schema.
 * Rejects invalid requests with a 422 HTTP status and specific error messages.
 *
 * @param schema The Zod schema to validate req.body against
 * @returns An Express middleware function
 */
const validate = (schema: ZodSchema): RequestHandler => {
  return (req: Request, _res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const zodError = result.error as ZodError;
      // Extract the first issue message or default to generic validation error
      const errorMessage =
        zodError.issues.length > 0 ? zodError.issues[0]?.message : Messages.VALIDATION_ERROR;

      return next(
        new ApiError(
          HttpStatus.UNPROCESSABLE_ENTITY,
          errorMessage || Messages.VALIDATION_ERROR,
          true,
          zodError.stack // Keep stack locally for debug
        )
      );
    }

    // Replace req.body with the parsed (and potentially transformed/stripped) data
    req.body = result.data;
    next();
  };
};

export default validate;
