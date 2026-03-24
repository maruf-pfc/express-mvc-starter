import express, { type Application, type Request, type Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './routes/index.ts';
import globalErrorHandler from './middlewares/globalErrorHandler.ts';
import notFound from './middlewares/notFound.ts';

const app: Application = express();

// ─── Global Middlewares ───────────────────────────────────────────────────────

// 1. Security HTTP headers
app.use(helmet());

// 2. CORS — configure origins as needed for your project
app.use(cors());

// 3. HTTP request logger (use 'combined' in production for full logs)
app.use(morgan('dev'));

// 4. Parse incoming JSON bodies
app.use(express.json());

// 5. Parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({ extended: true }));

// ─── Routes ──────────────────────────────────────────────────────────────────

// Root ping — useful for load-balancer / uptime checks
app.get('/', (_req: Request, res: Response) => {
  res.json({ message: '🚀 Express MVC Starter is running!' });
});

// Versioned API routes
app.use('/api/v1', router);

// ─── Error Handling ───────────────────────────────────────────────────────────

// 404 handler — must come after all routes
app.use(notFound);

// Global error handler — must be the very last middleware
app.use(globalErrorHandler);

export default app;
