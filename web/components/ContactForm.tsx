"use client"
import React from 'react'

export default function ContactForm() {
  const [status, setStatus] = React.useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const submit = form.querySelector('button[type="submit"]') as HTMLButtonElement | null
    if (submit) {
      submit.disabled = true
      submit.textContent = 'Sending...'
    }
    
    const fd = new FormData(form)
    const obj: Record<string, string> = {}
    fd.forEach((v, k) => { obj[k] = typeof v === 'string' ? v : '' })
    
    try {
      const res = await fetch('/api/quote', { 
        method: 'POST', 
        body: JSON.stringify(obj), 
        headers: { 'Content-Type': 'application/json' } 
      })
      
      if (!res.ok) throw new Error('Network error')
      
      form.reset()
      setStatus({ type: 'success', message: 'Thanks! We received your request and will respond within 24 hours.' })
    } catch (err: any) {
      setStatus({ type: 'error', message: 'Sorry, there was an error. Please call us at 587-830-6736.' })
    } finally {
      if (submit) {
        submit.disabled = false
        submit.textContent = 'Get Free Quote'
      }
      
      // Clear status after 5 seconds
      setTimeout(() => setStatus({ type: null, message: '' }), 5000)
    }
  }

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form" aria-live="polite">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name *</label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            placeholder="John Smith" 
            className="input" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email *</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="john@example.com" 
            className="input" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input 
            id="phone" 
            name="phone" 
            type="tel" 
            placeholder="(587) 123-4567" 
            className="input" 
          />
        </div>

        <div className="form-group">
          <label htmlFor="details" className="form-label">Project Details *</label>
          <textarea 
            id="details" 
            name="details" 
            placeholder="Tell us about your project: size (square footage), type (driveway, patio, etc.), location, preferred timing, and any special requirements."
            className="input" 
            rows={6}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-primary full-width">
          Get Free Quote
        </button>

        {status.type === 'success' && (
          <div className="form-status success" role="status">
            <span className="status-icon">✓</span>
            <span>{status.message}</span>
          </div>
        )}

        {status.type === 'error' && (
          <div className="form-status error" role="alert">
            <span className="status-icon">⚠</span>
            <span>{status.message}</span>
          </div>
        )}
      </form>
    </div>
  )
}
