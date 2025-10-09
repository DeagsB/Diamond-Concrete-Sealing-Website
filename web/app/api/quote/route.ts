import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const outDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)
    const file = path.join(outDir, `${Date.now()}.json`)
    fs.writeFileSync(file, JSON.stringify(data, null, 2))
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
