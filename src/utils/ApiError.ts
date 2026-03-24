/**
 * ApiError — a custom error class that carries an HTTP status code.
 *
 * Throw this instead of plain `Error` so the global error handler
 * can distinguish operational errors from unexpected bugs and
 * respond with the correct status code.
 *
 * @example
 * throw new ApiError(404, 'Resource not found');
 */
class ApiError extends Error {
  public statusCode: number;
  /** Marks errors that are expected and safe to expose to the client. */
  public isOperational: boolean;

  constructor(statusCode: number, message: string, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
