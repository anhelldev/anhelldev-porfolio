/** @type {import('next').NextConfig} */

// Get the repository name from environment variable or use empty string for custom domain
const isProd = process.env.NODE_ENV === 'production'
const repoName = process.env.NEXT_PUBLIC_BASE_PATH || '/anhelldev-porfolio'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  // Only use basePath in production (GitHub Pages)
  // Comment out these lines if using a custom domain
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? repoName : '',
  images: {
    unoptimized: true, // Required for static export
  },
}

export default nextConfig
