import type { Document } from 'mongoose';
import mongoose, { Schema, type Model } from 'mongoose';

/**
 * Interface representing a Health document in MongoDB.
 */
export interface IHealth extends Document {
  message: string;
  source: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Proper Mongoose schema for the Health model, demonstrating:
 * 1. Typed interface (IHealth)
 * 2. Automatic timestamps
 * 3. Schema definition with validations
 * 4. Indexing for performance
 */
const healthSchema = new Schema<IHealth>(
  {
    message: {
      type: String,
      required: true,
      trim: true,
    },
    source: {
      type: String,
      default: 'api',
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

// Example of an index to speed up queries by source
healthSchema.index({ source: 1 });

/**
 * Health Model
 */
const Health: Model<IHealth> = mongoose.model<IHealth>('Health', healthSchema);

export default Health;
