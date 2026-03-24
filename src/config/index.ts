import 'dotenv/config';

const config = {
  port: process.env['PORT'] || 5000,
  env: process.env['NODE_ENV'] || 'development',
  database_url: process.env['DATABASE_URL'] || '',
} as const;

export default config;
