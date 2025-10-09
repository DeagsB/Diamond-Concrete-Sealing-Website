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
            <div>
              <h3 className="site-title text-lg font-bold">Diamond Concrete &amp; Sailing</h3>
              <p className="muted text-sm">Driveway &amp; concrete sealing</p>
            </div>
            <nav className="flex items-center gap-4">
              <a className="text-sm hover:underline" href="#why">Why</a>
              <a className="text-sm hover:underline" href="#services">Services</a>
              <a className="text-sm hover:underline" href="#gallery">Gallery</a>
              <a href="#contact" className="btn btn-sm">Contact</a>
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

