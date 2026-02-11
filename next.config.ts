import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // This forces the router to use its dynamic matching engine
        source: "/debug/:path*",
        destination: "/:path*",
      },
    ];
  },
};

export default nextConfig;
