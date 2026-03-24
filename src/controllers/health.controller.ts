import type { Request, Response } from 'express';
import catchAsync from '../utils/catchAsync.ts';
import ApiResponse from '../utils/ApiResponse.ts';
import healthService from '../services/health.service.ts';

/**
 * GET /api/v1/health
 *
 * Returns the current health status of the API and database.
 * Demonstrates the controller pattern: parse request → call service → send response.
 */
const getHealth = catchAsync(async (_req: Request, res: Response) => {
  const data = healthService.getHealthStatus();
  res.status(200).json(new ApiResponse(200, 'Service is healthy', data));
});

const healthController = { getHealth };

export default healthController;
