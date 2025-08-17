/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shopo.quomodothemes.website",
      },
    ],
  },
};

export default nextConfig;
