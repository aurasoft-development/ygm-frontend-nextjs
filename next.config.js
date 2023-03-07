/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  staticPageGenerationTimeout :100,
  images: {
    domains: ['https://getyourcollege.in/'],
  },
  output: 'standalone',
}

module.exports = nextConfig
