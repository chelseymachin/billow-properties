import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com'
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com'
      },
      {
        protocol: 'https',
        hostname: 'hygraph.com'
      },
      {
        protocol: 'https',
        hostname: 'us-west-2.graphassets.com'
      }
    ]
  }
};

export default nextConfig;
