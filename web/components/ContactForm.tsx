"use client"
import React from 'react'

export default function ContactForm() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const submit = form.querySelector('button[type="submit"]') as HTMLButtonElement | null
    if (submit) submit.disabled = true
    const fd = new FormData(form)
    const obj: Record<string, string> = {}
    fd.forEach((v, k) => { obj[k] = typeof v === 'string' ? v : '' })
    try {
      const res = await fetch('/api/quote', { method: 'POST', body: JSON.stringify(obj), headers: { 'Content-Type': 'application/json' } })
      if (!res.ok) throw new Error('Network error')
      form.reset()
      const statusEl = document.createElement('p')
      statusEl.setAttribute('role', 'status')
      statusEl.className = 'text-muted'
      statusEl.textContent = 'Thanks — we received your request and will respond shortly.'
      form.appendChild(statusEl)
    } catch (err: any) {
      const errEl = document.createElement('p')
      errEl.setAttribute('role', 'alert')
      errEl.className = 'text-muted'
      errEl.textContent = 'Error: ' + (err?.message || 'An error occurred')
      form.appendChild(errEl)
    } finally {
      if (submit) submit.disabled = false
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-3" aria-live="polite">
  <label className="sr-only" htmlFor="name">Name</label>
  <input id="name" name="name" placeholder="Your name" className="input" required />

  <label className="sr-only" htmlFor="email">Email</label>
  <input id="email" name="email" type="email" placeholder="you@example.com" className="input" required />

  <label className="sr-only" htmlFor="phone">Phone</label>
  <input id="phone" name="phone" placeholder="Phone" className="input" />

  <label className="sr-only" htmlFor="details">Details</label>
  <textarea id="details" name="details" placeholder="Job details: size, location, preferred timing" className="input" rows={5}></textarea>

        <div style={{ display: 'flex', gap: 10 }}>
          <button type="submit" className="btn btn-primary">Request my quote</button>
          <button type="button" className="btn" onClick={() => { (document.getElementById('details') as HTMLTextAreaElement)?.focus() }}>Add details</button>
        </div>
      </form>
    </div>
  )
}
