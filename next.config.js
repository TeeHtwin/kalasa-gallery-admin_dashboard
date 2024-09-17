/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.kalasa.gallery',
      },
      {
        protocol: 'https',
        hostname: 'staging.kalasa.gallery',
      },
    ],
  },
};

module.exports = nextConfig;
