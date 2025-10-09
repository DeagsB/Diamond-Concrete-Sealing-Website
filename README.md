# Diamond Concrete Sealing — Website

This repository contains a static website (single-file HTML) for Diamond Concrete Sealing. The project currently includes an improved `index.html` intended as a production-ready front page and a helper script to extract embedded images into separate files for optimization.

What I changed
- Added `index.html` — cleaned, accessible, with meta tags (SEO/Open Graph), and a simple mailto fallback for quote requests. Replace the placeholder email address before publishing.
- Added guidance below and a helper script to extract embedded base64 images into `/images`.

Quick next steps before publishing
1. Update contact email in `index.html` (mailto fallback) and any other placeholders.
2. Run the image-extraction script to pull out base64 images into `images/` and replace the data-URIs with file paths. Optimize the images (resize, convert to WebP/AVIF, compress) using image tools (eg. ImageMagick, Squoosh, or sharp).
3. Add a proper analytics/privacy snippet if needed and create `manifest.json` and favicons for progressive web app support.
4. Deploy to a static host: GitHub Pages, Netlify, Vercel, or a simple S3 + CloudFront setup. See the example deploy notes below.

Image extraction
1. Ensure you have Python 3 installed.
2. Run: python tools/extract_images.py "diamond_site_embedded_v8 (1).html" images
3. The script writes files into `images/` and prints replacements you can use to swap data URLs with file paths.

Deployment (short)
- GitHub Pages: push to a repository and enable Pages for the `main` branch (or `gh-pages`).
- Netlify/Vercel: connect the repo and set build (none) — they'll publish the static folder.

Security & privacy
- Do not embed credentials. Use server-side forms or a third-party forms service (Formspree, Netlify forms) for robust submissions.

If you'd like, I can:
- Run the image extraction and replace data URIs with optimized images.
- Add a small GitHub Action to build/validate (HTML validation) and deploy to GitHub Pages or Netlify.
