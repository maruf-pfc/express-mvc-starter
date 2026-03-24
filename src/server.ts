import app from './app.ts';
import connectDB from './db/connectDB.ts';
import config from './config/index.ts';

/**
 * Bootstrap the server:
 *  1. Connect to MongoDB
 *  2. Start listening for HTTP requests
 *
 * Any startup failure exits the process to allow the container
 * orchestrator (Docker, k8s) to restart it.
 */
async function bootstrap(): Promise<void> {
  try {
    await connectDB();

    app.listen(config.port, () => {
      console.log(`🚀 Server running on http://localhost:${config.port}`);
      console.log(`   Environment : ${config.env}`);
      console.log(`   Health check: http://localhost:${config.port}/api/v1/health`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
  }
}

bootstrap();
