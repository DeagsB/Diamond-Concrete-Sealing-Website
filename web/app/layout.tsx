import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Diamond Concrete Sealing | Premium Concrete Sealing Okotoks',
  description: 'Professional concrete sealing services in Okotoks & The Foothills. 10+ years of experience. Free quotes. Fully insured. Protect your investment with premium concrete sealing.',
  keywords: 'concrete sealing, Okotoks, Foothills, driveway sealing, patio sealing, concrete protection',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z' fill='gray' stroke='black' stroke-width='2'/><path d='M50 25 L55 45 L70 50 L55 55 L50 75 L45 55 L30 50 L45 45 Z' fill='lightgray'/></svg>",
    apple: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z' fill='gray' stroke='black' stroke-width='2'/><path d='M50 25 L55 45 L70 50 L55 55 L50 75 L45 55 L30 50 L45 45 Z' fill='lightgray'/></svg>",
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
      <body className="bg-white text-slate-900 antialiased concrete-texture">
        <a href="#main" className="skip-link">Skip to main content</a>
        <header className="site-header">
          <div className="header-container">
            <a href="/" className="logo-banner">
              <span className="banner-text">Diamond Concrete Sealing</span>
            </a>
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
        <footer className="site-footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-column">
                <h3>Company</h3>
                <ul className="footer-links">
                  <li><a href="/">Home</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Other pages</h3>
                <ul className="footer-links">
                  <li><a href="#services">Services</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Services</h3>
                <ul className="footer-links">
                  <li><a href="#services">Concrete Sealing</a></li>
                  <li><a href="#services">Pressure Washing</a></li>
                  <li><a href="#services">Crack Repair</a></li>
                </ul>
              </div>
              <div className="footer-column footer-cta">
                <p className="footer-tagline">Unleash the full potential of your concrete surfaces.</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} Diamond Concrete Sealing. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

