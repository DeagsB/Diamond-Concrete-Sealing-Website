import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const FROM_EMAIL = process.env.FROM_EMAIL || 'no-reply@example.com'
const TO_EMAIL = process.env.TO_EMAIL || 'owner@example.com'

async function sendEmailUsingSendGrid(subject: string, html: string) {
  const resp = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: TO_EMAIL }] }],
      from: { email: FROM_EMAIL },
      subject,
      content: [{ type: 'text/html', value: html }]
    })
  })
  return resp.ok
}

export async function POST(req: Request) {
  try {
    const data = await req.json()
    // Basic validation
    if (!data?.email || !data?.name) {
      return NextResponse.json({ ok: false, error: 'name and email are required' }, { status: 400 })
    }

    const subject = `New quote request from ${data.name}`
    const html = `<p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Phone:</strong> ${data.phone || ''}</p><p><strong>Details:</strong> ${data.details || ''}</p>`

    if (SENDGRID_API_KEY) {
      const ok = await sendEmailUsingSendGrid(subject, html)
      if (!ok) throw new Error('SendGrid failed')
      return NextResponse.json({ ok: true, via: 'sendgrid' })
    }

    // Fallback to writing a file for local/dev
    const outDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)
    const file = path.join(outDir, `${Date.now()}.json`)
    fs.writeFileSync(file, JSON.stringify(data, null, 2))
    return NextResponse.json({ ok: true, via: 'file' })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
