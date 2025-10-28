'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import placeholders from '../lib/placeholders'
import ContactForm from '../components/ContactForm'
import ScrollReveal from '../components/ScrollReveal'
import GalleryLightbox from '../components/GalleryLightbox'
import Counter from '../components/Counter'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

const galleryImages = [
  { src: '/images/image_2.jpg', alt: 'Sealed driveway', width: 800, height: 600 },
  { src: '/images/image_4.jpg', alt: 'Sealed surface', width: 400, height: 300 },
  { src: '/images/image_7.jpg', alt: 'Application detail', width: 400, height: 300 },
  { src: '/images/image_9.jpg', alt: 'Clean prep', width: 400, height: 300 },
  { src: '/images/image_10.jpg', alt: 'Finished sheen', width: 400, height: 300 },
  { src: '/images/image_13.jpg', alt: 'Before and after', width: 400, height: 300 },
]

export default function Home() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  return (
    <div>
      {/* Hero Section with Strong CTA */}
      <section className="hero-section">
        <div className="hero-gradient"></div>
        <div className="container hero-content">
          <div className="hero-text slide-in-left">
            <div className="badge fade-in">10+ Years of Excellence</div>
            <h1 className="hero-title">
              Protect Your Investment with <span className="highlight">Premium Concrete Sealing</span>
            </h1>
            <p className="hero-description">
              Professional concrete sealing services in Okotoks & the Foothills. We deliver lasting protection against weather, stains, and wear—backed by 10+ years of expertise.
            </p>
            <div className="hero-cta-group">
              <a className="btn-primary-large" href="#contact">
                Get Free Quote →
              </a>
              <a className="btn-secondary" href="tel:+15878306736">
                📞 587‑830‑6736
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <Counter value="500" suffix="+" />
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <Counter value="10" suffix="+" />
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <Counter value="98" suffix="%" />
                <div className="stat-label">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          <div className="hero-image slide-in-right">
            <div className="hero-card float">
              <Image 
                alt="Premium sealed concrete driveway" 
                src="/images/image_1.jpg" 
                width={840} 
                height={560} 
                className="hero-img" 
                priority 
                blurDataURL={placeholders['image_1']} 
                placeholder={placeholders['image_1'] ? 'blur' : undefined} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <ScrollReveal>
        <section className="trust-section">
          <div className="container">
            <div className="trust-grid">
              <div className="trust-item stagger-item">
                <div className="trust-icon">✓</div>
                <div className="trust-text">Fully Insured</div>
              </div>
              <div className="trust-item stagger-item">
                <div className="trust-icon">✓</div>
                <div className="trust-text">Free Quotes</div>
              </div>
              <div className="trust-item stagger-item">
                <div className="trust-icon">✓</div>
                <div className="trust-text">Warranty Included</div>
              </div>
              <div className="trust-item stagger-item">
                <div className="trust-icon">✓</div>
                <div className="trust-text">Local Experts</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Benefits Section */}
      <section id="why" className="benefits-section">
        <ScrollReveal>
          <div className="container">
          <div className="section-header">
            <h2>Why Choose Diamond Concrete Sealing?</h2>
            <p>Professional-grade sealing that stands the test of time</p>
          </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="container">
            <div className="benefits-grid">
              <div className="benefit-card stagger-item">
                <div className="benefit-icon">🛡️</div>
                <h3>Advanced Surface Prep</h3>
                <p>Controlled mild acid wash opens the surface for maximum sealer adhesion—no peeling, guaranteed.</p>
              </div>
              <div className="benefit-card stagger-item">
                <div className="benefit-icon">🔬</div>
                <h3>Industrial-Grade Sealers</h3>
                <p>25–30% solids penetrate deep to repel water, oils, and de‑icing salts. Professional-grade protection.</p>
              </div>
              <div className="benefit-card stagger-item">
                <div className="benefit-icon">✨</div>
                <h3>Flawless Application</h3>
                <p>Precise coverage and ideal timing deliver uniform sheen and long-lasting, even wear.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <ScrollReveal>
          <div className="container">
            <div className="section-header">
              <h2>Our Services</h2>
              <p>Professional concrete sealing for residential and commercial projects</p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="container">
            <div className="services-grid">
              <div className="service-card stagger-item">
                <div className="service-image">
                  <Image alt="Driveway sealing" src="/images/image_2.jpg" width={400} height={250} className="service-img" blurDataURL={placeholders['image_2']} placeholder={placeholders['image_2'] ? 'blur' : undefined} />
                </div>
                <div className="service-content">
                  <h3>Driveways & Walkways</h3>
                  <p>Safe preparation and durable finish for residential surfaces that withstands harsh weather.</p>
                  <a className="btn-small" href="#contact">Get Quote</a>
                </div>
              </div>
              <div className="service-card stagger-item">
                <div className="service-image">
                  <Image alt="Patio sealing" src="/images/image_10.jpg" width={400} height={250} className="service-img" blurDataURL={placeholders['image_10']} placeholder={placeholders['image_10'] ? 'blur' : undefined} />
                </div>
                <div className="service-content">
                  <h3>Patios & Steps</h3>
                  <p>Non‑slip considerations and clean detailed edges for a finished, professional look.</p>
                  <a className="btn-small" href="#contact">Get Quote</a>
                </div>
              </div>
              <div className="service-card stagger-item">
                <div className="service-image">
                  <Image alt="Commercial sealing" src="/images/image_13.jpg" width={400} height={250} className="service-img" blurDataURL={placeholders['image_13']} placeholder={placeholders['image_13'] ? 'blur' : undefined} />
                </div>
                <div className="service-content">
                  <h3>Commercial Pads</h3>
                  <p>Scaled application and coverage calculations for light commercial and industrial work.</p>
                  <a className="btn-small" href="#contact">Get Quote</a>
                </div>
              </div>
            </div>
            <div className="cta-banner">
              <div className="cta-banner-content">
                <h3>Ready to Protect Your Concrete?</h3>
                <p>Get a free quote today and see why 500+ clients trust Diamond Concrete Sealing</p>
                <a className="btn-primary" href="#contact">Request Free Quote</a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <ScrollReveal>
          <div className="container">
            <div className="section-header">
              <h2>Our Work</h2>
              <p>See the quality that sets us apart</p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="container">
            <div className="gallery-grid">
              <div className="gallery-item-large stagger-item" onClick={() => setSelectedImageIndex(0)}>
                <Image alt={galleryImages[0].alt} src={galleryImages[0].src} width={800} height={600} priority className="gallery-img" blurDataURL={placeholders['image_2']} placeholder={placeholders['image_2'] ? 'blur' : undefined} />
              </div>
              <div className="gallery-item stagger-item" onClick={() => setSelectedImageIndex(1)}><Image alt={galleryImages[1].alt} src={galleryImages[1].src} width={400} height={300} className="gallery-img" blurDataURL={placeholders['image_4']} placeholder={placeholders['image_4'] ? 'blur' : undefined} /></div>
              <div className="gallery-item stagger-item" onClick={() => setSelectedImageIndex(2)}><Image alt={galleryImages[2].alt} src={galleryImages[2].src} width={400} height={300} className="gallery-img" blurDataURL={placeholders['image_7']} placeholder={placeholders['image_7'] ? 'blur' : undefined} /></div>
              <div className="gallery-item stagger-item" onClick={() => setSelectedImageIndex(3)}><Image alt={galleryImages[3].alt} src={galleryImages[3].src} width={400} height={300} className="gallery-img" blurDataURL={placeholders['image_9']} placeholder={placeholders['image_9'] ? 'blur' : undefined} /></div>
              <div className="gallery-item stagger-item" onClick={() => setSelectedImageIndex(4)}><Image alt={galleryImages[4].alt} src={galleryImages[4].src} width={400} height={300} className="gallery-img" blurDataURL={placeholders['image_10']} placeholder={placeholders['image_10'] ? 'blur' : undefined} /></div>
              <div className="gallery-item stagger-item" onClick={() => setSelectedImageIndex(5)}><Image alt={galleryImages[5].alt} src={galleryImages[5].src} width={400} height={300} className="gallery-img" blurDataURL={placeholders['image_13']} placeholder={placeholders['image_13'] ? 'blur' : undefined} /></div>
            </div>
          </div>
        </ScrollReveal>
      </section>
      
      {selectedImageIndex !== null && (
        <GalleryLightbox 
          images={galleryImages}
          selectedIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}

      {/* About Section */}
      <section id="about" className="about-section">
        <ScrollReveal>
          <div className="container">
            <div className="about-grid">
              <div className="about-content">
                <h2>Trusted by Okotoks & The Foothills</h2>
                <p className="about-intro">
                  Diamond Concrete Sealing is a family‑run business serving Okotoks and the Foothills for over 10 years. We've built our reputation on careful surface preparation, superior chemistry, and clean workmanship—delivering finishes that look great on day one and still perform seasons later.
                </p>
                <div className="features-list">
                  <div className="feature-item">✓ 10+ years of hands‑on experience</div>
                  <div className="feature-item">✓ Family‑based values & clear communication</div>
                  <div className="feature-item">✓ Fully insured & safety‑first job sites</div>
                  <div className="feature-item">✓ Transparent quotes & punctual timing</div>
                  <div className="feature-item">✓ Professional-grade equipment</div>
                  <div className="feature-item">✓ Respectful cleanup & detailed edges</div>
                </div>
                <p className="about-outro">
                  We're proud of our referral rate and repeat clients. References from recent Okotoks and Foothills projects are available on request.
                </p>
              </div>
              <div className="about-image">
                <Image alt="Professional concrete sealing" src="/images/image_10.jpg" width={600} height={400} className="about-img" blurDataURL={placeholders['image_10']} placeholder={placeholders['image_10'] ? 'blur' : undefined} />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Contact/Quote Section */}
      <section id="contact" className="contact-section">
        <ScrollReveal>
          <div className="container">
            <div className="contact-wrapper">
              <div className="contact-header">
                <h2>Get Your Free Quote Today</h2>
                <p>Professional concrete sealing that protects your investment for years to come</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="container">
            <div className="contact-wrapper">
              <div className="contact-grid">
                <div className="contact-form-wrapper">
                  <ContactForm />
                </div>
                <div className="contact-info">
                  <div className="info-card">
                    <h3>Why Choose Diamond?</h3>
                    <ul className="info-list">
                      <li>🚗 Free estimates within 24 hours</li>
                      <li>⏱️ Same-day or next-day service available</li>
                      <li>🛡️ Full workmanship warranty included</li>
                      <li>💰 Competitive pricing, no hidden fees</li>
                      <li>🎯 Local experts you can trust</li>
                    </ul>
                  </div>
                  <div className="info-card">
                    <h3>Contact Info</h3>
                    <p className="info-company">Diamond Concrete Sealing</p>
                    <p className="info-location">Okotoks, Alberta</p>
                    <a className="btn-primary" href="tel:+15878306736">📞 Call 587‑830‑6736</a>
                    <p className="info-response">We respond to requests within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
