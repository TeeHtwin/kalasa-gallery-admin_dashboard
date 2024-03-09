/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.kalasa.gallery',
      },
    ],
  },
};

module.exports = nextConfig;
