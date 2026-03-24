import { describe, test, expect } from 'bun:test';
import ApiError from '../../utils/ApiError.ts';

describe('ApiError', () => {
  test('should create an error with correct statusCode and message', () => {
    const err = new ApiError(404, 'Not Found');
    expect(err.statusCode).toBe(404);
    expect(err.message).toBe('Not Found');
    expect(err.isOperational).toBe(true);
  });

  test('should be an instance of Error', () => {
    const err = new ApiError(500, 'Server Error');
    expect(err).toBeInstanceOf(Error);
  });

  test('should default isOperational to true', () => {
    const err = new ApiError(400, 'Bad Request');
    expect(err.isOperational).toBe(true);
  });

  test('should capture stack trace', () => {
    const err = new ApiError(422, 'Unprocessable');
    expect(err.stack).toBeDefined();
  });

  test('should use provided stack when given', () => {
    const err = new ApiError(400, 'Bad Request', true, 'custom stack');
    expect(err.stack).toBe('custom stack');
  });
});
