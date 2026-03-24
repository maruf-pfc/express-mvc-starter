import { describe, test, expect, beforeAll, afterAll } from 'bun:test';
import type { Server } from 'http';
import app from '../../app.ts';

/**
 * Integration tests for the Health route.
 *
 * Spins up a real HTTP server on a random port, runs tests via fetch,
 * then shuts it down — no database connection needed.
 */
let server: Server;
let baseUrl: string;

beforeAll(async () => {
  await new Promise<void>((resolve) => {
    server = app.listen(0, () => {
      const addr = server.address();
      const port = typeof addr === 'object' && addr ? addr.port : 0;
      baseUrl = `http://localhost:${port}`;
      resolve();
    });
  });
});

afterAll(() => {
  server.close();
});

describe('GET /api/v1/health', () => {
  test('should return 200 with correct shape', async () => {
    const res = await fetch(`${baseUrl}/api/v1/health`);
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
    const res = await fetch(`${baseUrl}/api/v1/nonexistent`);
    expect(res.status).toBe(404);

    const body = (await res.json()) as { success: boolean; message: string };
    expect(body.success).toBe(false);
    expect(body.message).toContain('Route not found');
  });
});
