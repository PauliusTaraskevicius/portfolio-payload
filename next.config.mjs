/** @type {import('next').NextConfig} */
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

  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.mdx/,
  //     use: [
  //       options.defaultLoaders.babel,
  //       {
  //         loader: "@mdx-js/loader",
  //         options: pluginOptions.options,
  //         sharp: "commonjs sharp",
  //       },
  //     ],
  //   });

  //   return config;
  // },
};

export default nextConfig;
