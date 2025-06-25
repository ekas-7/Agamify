import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "images.pexels.com",
      // ...add other allowed domains here if needed...
    ],
  },
};

export default nextConfig;
