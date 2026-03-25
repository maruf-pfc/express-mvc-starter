import mongoose from 'mongoose';
import Health, { type IHealth } from '../models/health.model.ts';

/**
 * HealthService — business logic for the health domain.
 */

const getHealthStatus = () => {
  const dbState = mongoose.connection.readyState;

  const dbStatus: Record<number, string> = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };

  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())}s`,
    database: dbStatus[dbState] ?? 'unknown',
  };
};

/**
 * Creates a new health "ping" record in the database.
 * Demonstrates a standard create operation formatting data for the DB.
 */
const createHealthPing = async (message: string): Promise<IHealth> => {
  const healthRecord = await Health.create({
    message,
    source: 'user-ping',
  });

  return healthRecord;
};

const healthService = {
  getHealthStatus,
  createHealthPing,
};

export default healthService;
