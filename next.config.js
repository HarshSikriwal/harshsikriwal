/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { minimumCacheTTL: 60 * 60 * 24 },
};

module.exports = nextConfig;
