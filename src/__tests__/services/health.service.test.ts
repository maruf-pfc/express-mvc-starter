import { describe, test, expect, mock } from 'bun:test';
import healthService from '../../services/health.service.ts';

describe('healthService.getHealthStatus', () => {
  test('should return an object with the correct shape', () => {
    const result = healthService.getHealthStatus();
    expect(result).toHaveProperty('status');
    expect(result).toHaveProperty('timestamp');
    expect(result).toHaveProperty('uptime');
    expect(result).toHaveProperty('database');
  });

  test('should return status "ok"', () => {
    const result = healthService.getHealthStatus();
    expect(result.status).toBe('ok');
  });

  test('should return a valid ISO timestamp', () => {
    const result = healthService.getHealthStatus();
    expect(new Date(result.timestamp).toISOString()).toBe(result.timestamp);
  });

  test('should return uptime as a string ending in "s"', () => {
    const result = healthService.getHealthStatus();
    expect(result.uptime).toMatch(/^\d+s$/);
  });
});
