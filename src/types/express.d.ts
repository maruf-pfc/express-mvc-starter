/**
 * Global TypeScript type augmentations.
 */

declare global {
  namespace Express {
    interface Request {
      /**
       * Standard property added by authentication middleware.
       * Contains the authenticated user's minimum identity payload.
       */
      user?: {
        id: string;
        role: string;
      };

      /**
       * A unique request ID, useful for correlation in logs.
       */
      id?: string;
    }
  }
}

// Needed to make this file a module
export {};
