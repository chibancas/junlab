import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins:["10.13.13.*"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gtabase.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-images.dzcdn.net",
        pathname: "/**",
      },
      {
        protocol:"https",
        hostname:"static.posters.cz",
        pathname:"/**"
      },
      {
        protocol:"https",
        hostname:"upload.wikimedia.org",
        pathname:"/**"
      },
      {
        protocol:"https",
        hostname:"assets.vg247.com",
        pathname:"/**"
      }
    ],
  },
};

export default nextConfig;
