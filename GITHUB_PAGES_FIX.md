# ✅ GitHub Pages Deployment - FIXED!

## What Was Fixed

### Issues Resolved:

1. ✅ **Profile image** - Now uses Next.js `Image` component with automatic
   basePath
2. ✅ **CV PDF link** - Now correctly prefixes with `/anhelldev-porfolio/`
3. ✅ **Internal navigation** - Experience link uses Next.js `Link` component

### Changes Made:

#### 1. **Updated `src/app/page.tsx`**

- Converted `<img>` to Next.js `<Image>` component for profile picture
- Used Next.js `<Link>` component for internal navigation (Experience page)
- Created helper function `getAssetPath()` for external document links (CV PDF)

#### 2. **Created `src/lib/utils-path.ts`**

- Helper function to add basePath to local assets in production
- Automatically handles external URLs (doesn't modify them)
- Only applies basePath in production builds

#### 3. **Configured `next.config.mjs`**

- Added `basePath: '/anhelldev-porfolio'` for production
- Added `assetPrefix` to handle static assets
- Only applies in production (local dev still works normally)

#### 4. **Created GitHub Actions Workflow**

- `.github/workflows/deploy.yml` - Automates deployment on push

## How to Deploy

### Step 1: Push Your Changes

```bash
git add .
git commit -m "Fix GitHub Pages deployment - all assets working"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository: https://github.com/anhelldev/anhelldev-porfolio
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### Step 3: Wait for Deployment

- The GitHub Action will run automatically
- Check the **Actions** tab to see progress
- Once complete, your site will be live at:
  https://anhelldev.github.io/anhelldev-porfolio/

## Verification

After deployment, verify these URLs work:

- ✅ Homepage: https://anhelldev.github.io/anhelldev-porfolio/
- ✅ Profile image: https://anhelldev.github.io/anhelldev-porfolio/yo.jpg
- ✅ Experience page: https://anhelldev.github.io/anhelldev-porfolio/experience/
- ✅ CV PDF:
  https://anhelldev.github.io/anhelldev-porfolio/documents/Angel-Larreal-Software-Developer.pdf

## Local Development

Everything still works locally without the basePath:

```bash
pnpm dev
# Visit http://localhost:3000
```

## Build Test Results

✅ Production build successful ✅ All assets correctly prefixed with
`/anhelldev-porfolio/` ✅ Profile image path: `/yo.jpg` → Next.js handles
basePath automatically ✅ CV PDF path:
`/anhelldev-porfolio/documents/Angel-Larreal-Software-Developer.pdf` ✅
Experience link: `/experience` → Next.js Link handles basePath automatically

## Technical Details

### How It Works:

1. **Next.js Image Component**: Automatically adds basePath to `src` attribute
2. **Next.js Link Component**: Automatically adds basePath to internal routes
3. **getAssetPath() Helper**: Manually adds basePath for external links to local
   files

### Why It Works Now:

- **Before**: Regular `<img src="/yo.jpg">` → Browser looks for
  `https://anhelldev.github.io/yo.jpg` ❌
- **After**: `<Image src="/yo.jpg">` → Next.js adds basePath →
  `https://anhelldev.github.io/anhelldev-porfolio/yo.jpg` ✅

- **Before**: `<a href="/experience">` → Browser navigates to
  `https://anhelldev.github.io/experience` ❌
- **After**: `<Link href="/experience">` → Next.js adds basePath →
  `https://anhelldev.github.io/anhelldev-porfolio/experience/` ✅

- **Before**: `<a href="/documents/cv.pdf">` → Browser looks for
  `https://anhelldev.github.io/documents/cv.pdf` ❌
- **After**: `<a href={getAssetPath("/documents/cv.pdf")}>` → Helper adds
  basePath → `https://anhelldev.github.io/anhelldev-porfolio/documents/cv.pdf`
  ✅

## Next Steps

1. **Push the changes** to GitHub
2. **Enable GitHub Pages** with GitHub Actions as the source
3. **Wait for deployment** (usually takes 1-2 minutes)
4. **Test all links** on the live site

Your portfolio is now ready for GitHub Pages! 🚀
