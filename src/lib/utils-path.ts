// Helper to add basePath for GitHub Pages deployment
export function getAssetPath(path: string): string {
  const basePath =
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_BASE_PATH || '/anhelldev-porfolio'
      : ''

  // Don't add basePath to external URLs
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  // Don't add basePath to anchors
  if (path.startsWith('#')) {
    return path
  }

  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return `${basePath}${normalizedPath}`
}
