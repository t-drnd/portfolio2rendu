/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactive ESLint pendant le build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Désactive la vérification des types TypeScript pendant le build
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
