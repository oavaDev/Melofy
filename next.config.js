/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'e-cdn-images.dzcdn.net'],
  },
};

module.exports = nextConfig
