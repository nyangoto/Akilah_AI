/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'storage.googleapis.com',
      'www.carsa.co.uk',
      'media.autochek.africa',
      'assets.nexuspointapex.co.uk',
      'images.unsplash.com',
      'www.canva.com',
      'res.cloudinary.com',
    ],
  },
  async rewrites() {
    return [
      {
        source: '/login',
        destination: 'http://localhost:5001/api/v1/auth/login',
      },
      {
        source: '/posts',
        destination: 'http://localhost:5001/api/b1/posts',
      },
    ];
  },
};

module.exports = nextConfig;
