import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
        port: '',
        pathname: '/photo-*',
      },
      {
        hostname: 'img.staticmb.com',
        protocol: 'https',
        port: '',
        pathname: '**', // Allows any path
      },
    ],
  },
};

export default nextConfig;
