import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and update if deploying to a subdirectory (e.g., username.github.io/repo-name)
  // basePath: '/website',
  // assetPrefix: '/website',
};

export default nextConfig;
