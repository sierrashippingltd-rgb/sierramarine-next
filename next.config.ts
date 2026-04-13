/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // trailingSlash: true, // gerekirse ekleyebilirsiniz
};

module.exports = nextConfig;
