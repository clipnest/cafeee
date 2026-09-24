/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static export for GitHub Pages / any static host
  output: 'export',

  // Required for static export — disables Next.js image optimization
  images: {
    unoptimized: true,
  },

  // ──────────────────────────────────────────────────────
  // If deploying to a PROJECT site (username.github.io/repo-name),
  // uncomment and set these two lines:
  //
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
  //
  // Then also update the frame path in components/CoffeeScroll.tsx
  // and all <img src="..."> paths to include the prefix.
  // ──────────────────────────────────────────────────────
};

module.exports = nextConfig;
