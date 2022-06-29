/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

module.exports = {
  extends: [
    'plugin:@next/next/recommended',
  ],
  images: {
    domains: ['images.ctfassets.net'],
    disableStaticImages: true,
    minimumCacheTTL: 60,
  }
}


