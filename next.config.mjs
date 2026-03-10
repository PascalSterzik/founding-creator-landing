/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static HTML export for Vercel/any hosting
  images: {
    unoptimized: true,  // Required for static export
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  trailingSlash: true,  // Better for SEO: /about/ not /about
}

export default nextConfig
