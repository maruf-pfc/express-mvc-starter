import mongoose from 'mongoose';

/**
 * HealthService — business logic for the /health route.
 *
 * In a real project, services are responsible for all data-access
 * and domain logic. Controllers stay thin and delegate here.
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

const healthService = { getHealthStatus };

export default healthService;
