import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Diamond Concrete Sealing | Premium Concrete Sealing Okotoks',
  description: 'Professional concrete sealing services in Okotoks & The Foothills. 10+ years of experience. Free quotes. Fully insured. Protect your investment with premium concrete sealing.',
  keywords: 'concrete sealing, Okotoks, Foothills, driveway sealing, patio sealing, concrete protection',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💎</text></svg>",
    apple: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💎</text></svg>",
  },
  openGraph: {
    title: 'Diamond Concrete Sealing - Premium Concrete Sealing in Okotoks',
    description: 'Professional concrete sealing services with 10+ years of experience. Get a free quote today!',
    url: 'https://diamondconcrete.ca',
    siteName: 'Diamond Concrete Sealing',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <a href="#main" className="skip-link">Skip to main content</a>
        <header className="site-header">
          <div className="header-container">
            <div className="logo">
              <div className="logo-icon">💎</div>
              <div className="logo-text">
                <span className="logo-name">Diamond Concrete Sealing</span>
                <span className="logo-tagline">Okotoks & The Foothills</span>
              </div>
            </div>
            <nav className="nav-menu">
              <a href="#why" className="nav-link">Why Choose Us</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#gallery" className="nav-link">Gallery</a>
              <a href="tel:+15878306736" className="nav-link nav-phone">📞 587-830-6736</a>
              <a href="#contact" className="header-cta">Get Free Quote</a>
            </nav>
            <button className="mobile-menu-toggle" aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer border-t mt-12">
          <div className="container py-6 text-center">
            <p className="muted">© {new Date().getFullYear()} Diamond Concrete Sealing. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

