/**
 * Get the base path for assets (empty in dev, '/portfolio' in production)
 * This ensures images and other assets work correctly in both dev and production
 */
export const getBasePath = (): string => {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
};

/**
 * Prefix a path with the base path if needed
 */
export const withBasePath = (path: string): string => {
  const basePath = getBasePath();
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  // If basePath is set, prepend it; otherwise return the path as-is
  return basePath ? `${basePath}${cleanPath}` : cleanPath;
};

