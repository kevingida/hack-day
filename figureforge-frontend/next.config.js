/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tsumeart-1d733.kxcdn.com",
      },
      {
        protocol: "https",
        hostname: "www.sideshow.com",
      },
    ],
  },
};
