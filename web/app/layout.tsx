import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Diamond Concrete Sealing',
  description: 'Professional concrete sealing in Okotoks'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <a href="#main" className="skip-link">Skip to main content</a>
        <header className="site-header border-b">
          <div className="container flex items-center justify-between py-4">
            <div className="logo">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                <div style={{ width: 44, height: 44, background: 'linear-gradient(135deg,#9aa3ad,#cbd5e1)', borderRadius: 8, boxShadow: 'inset 0 -6px 12px rgba(0,0,0,0.06)' }} aria-hidden />
                <div>
                  <div style={{ fontWeight: 800 }}>Diamond Concrete</div>
                  <small>Sealing & Surface Prep</small>
                </div>
              </div>
            </div>
            <nav className="flex items-center gap-4">
              <a className="text-sm hover:underline" href="#why">Why</a>
              <a className="text-sm hover:underline" href="#services">Services</a>
              <a className="text-sm hover:underline" href="#gallery">Gallery</a>
              <a className="btn btn-sm cta-large" href="tel:+15878306736">Call 587‑830‑6736</a>
            </nav>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer border-t mt-12">
          <div className="container py-6 text-center">
            <p className="muted">© {new Date().getFullYear()} Diamond Concrete &amp; Sailing. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

