/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "innovateit.com.bd",
        pathname: "/public/medies/**",
      },
    ],
  },
};
module.exports = nextConfig;
