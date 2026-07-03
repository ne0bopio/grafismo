import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.241"],
  async redirects() {
    return [
      // proclin-pharma was merged into the regulatory-packaging case (2026-07-01)
      {
        source: "/proyectos/proclin-pharma",
        destination: "/proyectos/regulatory-packaging",
        permanent: true,
      },
      {
        source: "/en/projects/proclin-pharma",
        destination: "/en/projects/regulatory-packaging",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
