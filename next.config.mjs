/** @type {import('next').NextConfig} */

// import path from "path";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "cdn.buymeacoffee.com",
      },
      {
        protocol: "https",
        hostname: "portfolio-payload.vercel.app",
      },
    ],
  },
  // webpack: (config) => {
  //   config.resolve.alias["load"] = path.resolve(
  //     "./node_modules/payload/dist/config/load.js"
  //   );
  //   return config;
  // },
};

export default nextConfig;
