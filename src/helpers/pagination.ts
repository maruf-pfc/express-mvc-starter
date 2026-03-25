/**
 * Parses the page number from query parameters.
 * Defaults to 1 if not provided or invalid.
 */
export const parsePage = (query: unknown): number => {
  const page = parseInt(String(query), 10);
  return Number.isNaN(page) || page < 1 ? 1 : page;
};

/**
 * Parses the limit (items per page) from query parameters.
 * Defaults to 10, with an optional maximum cap.
 */
export const parseLimit = (query: unknown, max = 100): number => {
  const limit = parseInt(String(query), 10);
  if (Number.isNaN(limit) || limit < 1) return 10;
  return limit > max ? max : limit;
};

/**
 * Builds standard pagination metadata for list endpoints.
 */
export const buildMeta = (
  total: number,
  page: number,
  limit: number
): { total: number; page: number; limit: number; totalPages: number } => {
  return {
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
};
