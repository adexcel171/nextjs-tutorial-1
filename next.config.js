/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
  
  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true
    };
    return config;
  },
};
module.exports = nextConfig;
