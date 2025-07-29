/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "torenc.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
