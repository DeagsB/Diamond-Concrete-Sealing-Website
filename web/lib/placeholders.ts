import fs from 'fs'
import path from 'path'

const placeDir = path.join(process.cwd(), 'public', 'images', 'place')
const map: Record<string, string> = {}

if (fs.existsSync(placeDir)) {
  for (const file of fs.readdirSync(placeDir)) {
    const name = file.replace(/\.(jpe?g|png)$/i, '')
    const buf = fs.readFileSync(path.join(placeDir, file))
    const b64 = buf.toString('base64')
    map[name] = 'data:image/jpeg;base64,' + b64
  }
}

export default map
