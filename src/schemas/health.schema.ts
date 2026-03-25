import { z } from 'zod';

/**
 * Zod schemas for validating health-related request shapes.
 */

export const createHealthSchema = z.object({
  /**
   * A demo message required for creating a health ping record.
   */
  message: z
    .string({
      message: 'message is required',
    })
    .min(3, 'message must be at least 3 characters long'),
});
