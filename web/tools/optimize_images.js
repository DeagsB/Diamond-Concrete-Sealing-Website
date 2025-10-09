/*
  Node script to optimize images in web/public/images
  - writes web/public/images/webp and web/public/images/avif
  - creates small blur placeholder images in web/public/images/placeholders
*/
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const publicDir = path.join(process.cwd(), 'public', 'images')
const outWebp = path.join(publicDir, 'webp')
const outAvif = path.join(publicDir, 'avif')
const outPlace = path.join(publicDir, 'place')

if (!fs.existsSync(publicDir)) {
  console.error('public/images does not exist; run from web/ root')
  process.exit(1)
}
;[outWebp, outAvif, outPlace].forEach(d => { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }) })

async function processFile(file) {
  const src = path.join(publicDir, file)
  const base = path.parse(file).name
  try {
    await sharp(src).resize({ width: 1600 }).toFile(path.join(outWebp, base + '.webp'))
    await sharp(src).resize({ width: 1600 }).toFile(path.join(outAvif, base + '.avif'))
    await sharp(src).resize({ width: 20 }).blur(1).toFile(path.join(outPlace, base + '.jpg'))
    console.log('wrote', base)
  } catch (err) {
    console.error('error', file, err.message)
  }
}

async function main() {
  const files = fs.readdirSync(publicDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f))
  for (const f of files) {
    await processFile(f)
  }
}

main().catch(err => { console.error(err); process.exit(1) })
