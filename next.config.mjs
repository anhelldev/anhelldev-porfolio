/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true, // Recomendado para evitar errores con next/image en static export
  },
}

export default nextConfig
