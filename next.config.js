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
      'pyxis.nymag.com',
      'i.scdn.co',
      'is1-ssl.mzstatic.com',
      'e-cdns-images.dzcdn.net',
    ],
  },
};

module.exports = nextConfig
