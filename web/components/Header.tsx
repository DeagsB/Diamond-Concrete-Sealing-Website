'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import placeholders from '../lib/placeholders'
import { PhoneIcon } from './Icons'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-container">
        <a href="/" className="logo-banner" onClick={closeMenu}>
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
        
        {/* Desktop Navigation */}
        <nav className="nav-menu">
          <a href="#why" className="nav-link">Why Choose Us</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="tel:+15878306736" className="nav-link nav-phone">
            <PhoneIcon />
            587-830-6736
          </a>
          <a href="#contact" className="header-cta">Get Free Quote</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`} 
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#why" className="mobile-nav-link" onClick={closeMenu}>Why Choose Us</a>
          <a href="#services" className="mobile-nav-link" onClick={closeMenu}>Services</a>
          <a href="#gallery" className="mobile-nav-link" onClick={closeMenu}>Gallery</a>
          <a href="tel:+15878306736" className="mobile-nav-link mobile-phone" onClick={closeMenu}>
            Call (587) 830-6736
          </a>
          <a href="#contact" className="mobile-nav-cta" onClick={closeMenu}>Get Free Quote</a>
        </div>
      </div>
    </header>
  )
}

