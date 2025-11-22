import './globals.css'
import React from 'react'
import Image from 'next/image'
import placeholders from '../lib/placeholders'

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
              <Image 
                src="/images/image_1.jpg" 
                alt="Diamond Concrete Sealing" 
                width={200} 
                height={60}
                className="header-logo-image"
                priority
                blurDataURL={placeholders['image_1']}
                placeholder={placeholders['image_1'] ? 'blur' : undefined}
              />
            </a>
            <nav className="nav-menu">
              <a href="#why" className="nav-link">Why Choose Us</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#gallery" className="nav-link">Gallery</a>
              <a href="tel:+15878306736" className="nav-link nav-phone">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                587-830-6736
              </a>
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

