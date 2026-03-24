import mongoose, { Schema, type Document } from 'mongoose';

/**
 * IHealthCheck — document interface for the HealthCheck model.
 *
 * Replace this with your own domain entity.
 * This model exists solely to demonstrate the Mongoose pattern in this starter.
 */
export interface IHealthCheck extends Document {
  status: string;
  checkedAt: Date;
}

const HealthCheckSchema = new Schema<IHealthCheck>(
  {
    status: {
      type: String,
      required: true,
      default: 'ok',
    },
    checkedAt: {
      type: Date,
      default: () => new Date(),
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const HealthCheck = mongoose.model<IHealthCheck>('HealthCheck', HealthCheckSchema);

export default HealthCheck;
