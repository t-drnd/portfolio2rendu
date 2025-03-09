/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactive ESLint pendant le build
  eslint: {
    ignoreDuringBuilds: true,
    dirs: [], // Désactive complètement la vérification ESLint
  },
  // Désactive la vérification des types TypeScript pendant le build
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/i,
      use: ["style-loader", "css-loader", "postcss-loader"],
    });
    return config;
  },
};

module.exports = nextConfig;
