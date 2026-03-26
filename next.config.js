/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "innovateit.com.bd",
        pathname: "/public/medies/**",
      },
      {
        protocol: "https",
        hostname: "smartlife.com.bd",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "systechsmart.solutions",
      },
    ],
  },
};
module.exports = nextConfig;
