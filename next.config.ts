import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/programs",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/events",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
