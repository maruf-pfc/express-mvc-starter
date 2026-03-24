import { describe, test, expect } from 'bun:test';
import ApiResponse from '../../utils/ApiResponse.ts';

describe('ApiResponse', () => {
  test('should set success to true for 2xx status codes', () => {
    const res = new ApiResponse(200, 'OK');
    expect(res.success).toBe(true);
  });

  test('should set success to false for 4xx status codes', () => {
    const res = new ApiResponse(400, 'Bad Request');
    expect(res.success).toBe(false);
  });

  test('should include data when provided', () => {
    const data = { id: 1, name: 'Test' };
    const res = new ApiResponse(200, 'OK', data);
    expect(res.data).toEqual(data);
  });

  test('should have undefined data when not provided', () => {
    const res = new ApiResponse(201, 'Created');
    expect(res.data).toBeUndefined();
  });

  test('should preserve message', () => {
    const res = new ApiResponse(200, 'Service is healthy');
    expect(res.message).toBe('Service is healthy');
  });
});
