import type { Request, Response } from 'express';
import catchAsync from '../utils/catchAsync.ts';
import ApiResponse from '../utils/ApiResponse.ts';
import healthService from '../services/health.service.ts';
import { HttpStatus } from '../constants/http.ts';
import { Messages } from '../constants/messages.ts';

/**
 * HealthController — HTTP layer.
 * Parses requests, calls service, formats response.
 */

/**
 * GET /api/v1/health
 * Returns current API + database health status.
 */
const getHealth = catchAsync(async (_req: Request, res: Response) => {
  const data = healthService.getHealthStatus();
  res.status(HttpStatus.OK).json(new ApiResponse(HttpStatus.OK, Messages.SUCCESS, data));
});

/**
 * POST /api/v1/health
 * Demonstrates request body validation and DB insertion.
 */
const createPing = catchAsync(async (req: Request, res: Response) => {
  // We can safely access req.body.message because the validate middleware ran before this
  const { message } = req.body;

  const record = await healthService.createHealthPing(message);

  res
    .status(HttpStatus.CREATED)
    .json(new ApiResponse(HttpStatus.CREATED, Messages.CREATED, record));
});

const healthController = {
  getHealth,
  createPing,
};

export default healthController;
