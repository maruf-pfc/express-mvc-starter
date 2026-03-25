/**
 * Standard API error and success messages.
 * Centralized to avoid hardcoded strings across the application.
 */
export const Messages = {
  SUCCESS: 'Operation successful',
  CREATED: 'Resource created successfully',
  NOT_FOUND: 'Resource not found',
  VALIDATION_ERROR: 'Validation error',
  UNAUTHORIZED: 'Unauthorized access',
  FORBIDDEN: 'Access forbidden',
  INTERNAL_ERROR: 'Internal server error',
} as const;
