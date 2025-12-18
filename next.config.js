/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/portfolio' : '';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // REQUIRED for static export
  },
  compiler: {
    removeConsole: isProduction,
  },
  output: 'export',
  // Only apply basePath and assetPrefix in production builds (for GitHub Pages)
  ...(isProduction && {
    basePath: basePath,
    assetPrefix: '/portfolio/',
    trailingSlash: true,
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

module.exports = nextConfig



