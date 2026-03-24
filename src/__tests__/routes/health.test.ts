import { describe, test, expect } from 'bun:test';
import app from '../../app.ts';

/**
 * Integration tests for the Health route.
 *
 * These tests spin up the Express app without a real database.
 * We test the HTTP layer only (routes → controller → service).
 * The service returns mongoose.connection.readyState which will be
 * 0 (disconnected) in this context — that's perfectly fine for route tests.
 */
describe('GET /api/v1/health', () => {
  test('should return 200 with correct shape', async () => {
    const req = new Request('http://localhost/api/v1/health');
    const res = await app.handle(req);

    expect(res.status).toBe(200);

    const body = (await res.json()) as {
      success: boolean;
      message: string;
      data: { status: string; timestamp: string; uptime: string; database: string };
    };

    expect(body.success).toBe(true);
    expect(body.message).toBe('Service is healthy');
    expect(body.data.status).toBe('ok');
    expect(body.data).toHaveProperty('timestamp');
    expect(body.data).toHaveProperty('uptime');
    expect(body.data).toHaveProperty('database');
  });
});

describe('GET /api/v1/nonexistent', () => {
  test('should return 404 for unknown routes', async () => {
    const req = new Request('http://localhost/api/v1/nonexistent');
    const res = await app.handle(req);

    expect(res.status).toBe(404);

    const body = (await res.json()) as { success: boolean; message: string };
    expect(body.success).toBe(false);
    expect(body.message).toContain('Route not found');
  });
});
