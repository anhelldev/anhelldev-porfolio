# GitHub Pages Deployment Guide

## Quick Setup

### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 2. Update Repository Name (if different)
If your repository name is NOT `anhelldev-porfolio`, update `next.config.mjs`:

```javascript
const repoName = process.env.NEXT_PUBLIC_BASE_PATH || '/your-repo-name'
```

### 3. Deploy
Push your changes to the `main` branch:

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

The GitHub Action will automatically build and deploy your site.

## Custom Domain (Optional)

If you're using a custom domain (e.g., `yourdomain.com`):

1. In `next.config.mjs`, comment out or remove the `basePath` and `assetPrefix` lines:
   ```javascript
   // basePath: isProd ? repoName : '',
   // assetPrefix: isProd ? repoName : '',
   ```

2. Add a `CNAME` file in the `public` folder with your domain name

3. Configure your DNS settings to point to GitHub Pages

## Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm start
```

## Troubleshooting

### Images not loading
- Make sure all images are in the `public` folder
- Use paths starting with `/` (e.g., `/yo.jpg`, not `yo.jpg`)
- The basePath will be automatically prepended in production

### Links not working
- Internal links should use Next.js `Link` component or relative paths
- The basePath handles routing automatically

### 404 errors
- Ensure `trailingSlash: true` is set in `next.config.mjs`
- Check that `.nojekyll` file exists in the `public` folder
