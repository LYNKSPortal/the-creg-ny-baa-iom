import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.mux.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // Old WordPress site's page slugs -> their new equivalents, so links
      // and search results pointing at the old site still land somewhere
      // useful instead of 404ing.
      { source: "/our-facilities", destination: "/functions-events", permanent: true },
      { source: "/our-facilities/:path*", destination: "/functions-events", permanent: true },
      { source: "/mgp", destination: "/mgp-classic-tt", permanent: true },
      { source: "/mgp/:path*", destination: "/mgp-classic-tt", permanent: true },
      { source: "/tt-2026", destination: "/tt-2027", permanent: true },
      { source: "/tt-2026/:path*", destination: "/tt-2027", permanent: true },
      { source: "/our-merchandise", destination: "/merchandise", permanent: true },
      { source: "/our-merchandise/:path*", destination: "/merchandise", permanent: true },
      { source: "/our-menus", destination: "/menus", permanent: true },
      { source: "/our-menus/:path*", destination: "/menus", permanent: true },
      // Old WordPress system paths that no longer exist on this site.
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-json/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      { source: "/feed/:path*", destination: "/", permanent: true },
      { source: "/xmlrpc.php", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
