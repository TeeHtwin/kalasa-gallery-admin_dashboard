/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'staging.kalasa.gallery',
      },
    ],
  },
};

module.exports = nextConfig;
