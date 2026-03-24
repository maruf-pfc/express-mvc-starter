import mongoose from 'mongoose';
import config from '../config/index.ts';

const connectDB = async (): Promise<void> => {
  if (!config.database_url) {
    throw new Error('DATABASE_URL is not defined in environment variables.');
  }

  await mongoose.connect(config.database_url);
  console.log('🛢️  Database connected successfully');
};

export default connectDB;
