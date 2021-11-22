const path = require('path');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPWA = require('next-pwa')
const PWA = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    scope: '/',
  }
})

const BundleAnalyzer = withBundleAnalyzer({
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    DEBUG: process.env.DEBUG, // Add process.env.DEBUG to frontend without NEXT_PUBLIC prefix.
  },
  webpack: (config, _params) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    };
    return config;
  }
})

module.exports = withPlugins([
  PWA,
  BundleAnalyzer
])