/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'e-cdn-images.dzcdn.net',
      'images.jamendo.com',
      'media.istockphoto.com',
      'assets.snapmuse.com',
      'images.unsplash.com',
    ],
  },
};

module.exports = nextConfig
