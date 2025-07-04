/** @type {import('next').NextConfig} */
const nextConfig = {
  // config options here
  webpack: (config, { isServer }) => {
    // If client-side, don't polyfill or include these node modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
