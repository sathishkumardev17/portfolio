/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    removeConsole: isProduction,
  },
  output: 'export',
  // Only apply basePath and assetPrefix in production builds (for GitHub Pages)
  ...(isProduction && {
    basePath: '/portfolio',
    assetPrefix: '/portfolio/',
    images: {
      unoptimized: true, // REQUIRED for GitHub Pages
    },
  }),
}

module.exports = nextConfig



