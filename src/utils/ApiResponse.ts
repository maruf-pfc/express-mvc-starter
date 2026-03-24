import type { IApiResponse } from '../interfaces/index.ts';

/**
 * ApiResponse — a helper class that standardises all success responses.
 *
 * @example
 * res.status(200).json(new ApiResponse(200, 'Fetched', data));
 */
class ApiResponse<T = unknown> implements IApiResponse<T> {
  public success: boolean;
  public message: string;
  public data?: T;
  public statusCode: number;

  constructor(statusCode: number, message: string, data?: T) {
    this.statusCode = statusCode;
    this.success = statusCode < 400;
    this.message = message;
    this.data = data;
  }
}

export default ApiResponse;
