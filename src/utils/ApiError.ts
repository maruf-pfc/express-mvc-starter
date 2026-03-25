/**
 * ApiError — a custom error class that carries an HTTP status code.
 *
 * @example
 * throw new ApiError(HttpStatus.NOT_FOUND, Messages.NOT_FOUND);
 */
class ApiError extends Error {
  public statusCode: number;
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
