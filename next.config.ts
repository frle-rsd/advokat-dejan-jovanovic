import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/o-nama",
        destination: "/o-meni",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
