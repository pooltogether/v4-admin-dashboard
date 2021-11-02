const path = require('path');
/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // trailingSlash: true,
  // basePath: '',
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    DEBUG: process.env.DEBUG, // Add process.env.DEBUG to frontend without NEXT_PUBLIC prefix.
  },
  // eslint-disable-next-line no-unused-vars
  webpack: (config, _params) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public'),
      '@contracts': path.resolve(__dirname, './src/contracts'),
      '@components': path.resolve(__dirname, './src/components'),
      '@views': path.resolve(__dirname, './src/components/views'),
      layouts: path.resolve(__dirname, './src/layouts'),
    };
    return config;
  },
});
