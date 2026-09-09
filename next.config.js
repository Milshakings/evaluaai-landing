/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 1000,
  experimental: {
    workerThreads: false,
    cpus: 1
  }
};

module.exports = nextConfig;
