'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import placeholders from '../lib/placeholders'
import ContactForm from '../components/ContactForm'
import ScrollReveal from '../components/ScrollReveal'
import GalleryLightbox from '../components/GalleryLightbox'
import Counter from '../components/Counter'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import FAQ from '../components/FAQ'
import Testimonials from '../components/Testimonials'
import { PhoneIcon, CheckIcon } from '../components/Icons'

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
      {/* Hero Section */}
      <section className="hero-section concrete-overlay bg-blueprint">
        <div className="hero-gradient"></div>
        <div className="container hero-content-new">
          <div className="hero-text-new">
            <div className="tech-label">EST. 2024 • INDUSTRIAL GRADE PROTECTION</div>
            <div className="hero-badge">From 500+ Projects</div>
            <h1 className="hero-title-new uppercase">
              Crafting durable protection, <span className="highlight">sealing concrete excellence</span>
            </h1>
            <p className="hero-description-new">
              With our expert team of concrete sealing professionals, we turn ordinary surfaces into extraordinary, long-lasting protected spaces.
            </p>
            <div className="hero-location">
              <span>Okotoks, Alberta</span>
              <span>Foothills Area</span>
            </div>
          </div>
          <div className="hero-image-new">
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
        
        {/* Book a Call Section */}
        <ScrollReveal>
          <div className="container">
            <div className="book-call-section">
              <h3>Book a call with our experts</h3>
              <div className="book-call-content">
                <div className="book-call-info">
                <div className="expert-card">
                  <div className="expert-avatar-wrapper">
                    <Image 
                      src="https://images.unsplash.com/photo-1504307651254-35680f6df652?w=200&h=200&fit=crop&crop=face" 
                      alt="Diamond Concrete Team professional" 
                      width={200} 
                      height={200}
                      className="expert-avatar-image"
                    />
                  </div>
                  <div className="expert-details">
                    <h4>Diamond Concrete Team</h4>
                    <p>We take the time to understand your unique needs and preferences to ensure that your concrete sealing project reflects your vision and protects your investment.</p>
                  </div>
                </div>
                </div>
                <div className="book-call-cta">
                  <a href="#contact" className="btn-primary-large">Request a Quote</a>
                  <a href="tel:+15878306736" className="book-call-phone">
                    <PhoneIcon />
                    <span>(587) 830-6736</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Beliefs Section */}
      <section id="why" className="beliefs-section concrete-texture">
        <ScrollReveal>
          <div className="container">
            <div className="section-header">
              <h2 className="uppercase">We believe in turning your concrete surfaces into protected investments</h2>
              <p>Whether you have a sprawling driveway or a cozy patio, our team of experienced concrete sealing professionals is dedicated to bringing your protection dreams to life.</p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="container">
            <div className="beliefs-grid">
              <div className="belief-card stagger-item">
                <div className="belief-image-wrapper">
                  <Image 
                    src="/images/image_7.jpg" 
                    alt="Professional-grade concrete sealer application" 
                    width={600} 
                    height={400}
                    className="belief-image"
                    blurDataURL={placeholders['image_7']}
                    placeholder={placeholders['image_7'] ? 'blur' : undefined}
                  />
                </div>
                <h4>Professional-grade sealing practices</h4>
                <p>We use only industrial-strength sealers with 25-30% solids content for maximum protection and durability.</p>
              </div>
              <div className="belief-card stagger-item">
                <div className="belief-image-wrapper">
                  <Image 
                    src="/images/image_2.jpg" 
                    alt="Custom concrete sealing project" 
                    width={600} 
                    height={400}
                    className="belief-image"
                    blurDataURL={placeholders['image_2']}
                    placeholder={placeholders['image_2'] ? 'blur' : undefined}
                  />
                </div>
                <h4>Personalized service for your needs</h4>
                <p>Every project is tailored to your specific requirements, ensuring results that exceed expectations.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Availability Section */}
      <ScrollReveal>
        <section className="availability-section">
          <div className="container">
            <div className="availability-content">
              <h2 className="uppercase">Our team is available Monday to Friday</h2>
              <div className="availability-info">
                <a href="tel:+15878306736" className="availability-phone">(587) 830-6736</a>
                <p className="availability-hours">From 9am to 5pm</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Services Section */}
      <section id="services" className="services-section-new concrete-texture">
        <ScrollReveal>
          <div className="container">
            <div className="section-header">
              <h2 className="uppercase">Our services</h2>
              <p>Our team combines expertise with creativity to transform concrete surfaces into protected, beautiful spaces that enhance the value of any property.</p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="container">
            <div className="services-grid-new">
              <div className="service-card-new">
                <div className="service-image-wrapper">
                  <Image 
                    src="/images/image_2.jpg" 
                    alt="Exposed aggregate concrete sealing" 
                    width={400} 
                    height={300}
                    className="service-image"
                    blurDataURL={placeholders['image_2']}
                    placeholder={placeholders['image_2'] ? 'blur' : undefined}
                  />
                </div>
                <h3>Exposed Aggregate Sealing</h3>
                <p>Deep protection that highlights the natural stone while resisting water and salts.</p>
              </div>
              
              <div className="service-card-new">
                <div className="service-image-wrapper">
                  <Image 
                    src="/images/image_4.jpg" 
                    alt="Stamped concrete sealing with pattern" 
                    width={400} 
                    height={300}
                    className="service-image"
                    blurDataURL={placeholders['image_4']}
                    placeholder={placeholders['image_4'] ? 'blur' : undefined}
                  />
                </div>
                <h3>Stamped Concrete Sealing</h3>
                <p>Enhances colour and pattern; optional high-gloss for a showpiece finish.</p>
              </div>
              
              <div className="service-card-new">
                <div className="service-image-wrapper">
                  <Image 
                    src="/images/image_10.jpg" 
                    alt="Broom finish concrete sealing" 
                    width={400} 
                    height={300}
                    className="service-image"
                    blurDataURL={placeholders['image_10']}
                    placeholder={placeholders['image_10'] ? 'blur' : undefined}
                  />
                </div>
                <h3>Broom Concrete Sealing</h3>
                <p>Clean, uniform look with tuned slip-resistance for walkways and steps.</p>
              </div>
              
              <div className="service-card-new">
                <div className="service-image-wrapper">
                  <Image 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80" 
                    alt="Asphalt driveway sealing" 
                    width={400} 
                    height={300}
                    className="service-image"
                  />
                </div>
                <h3>Asphalt Sealing</h3>
                <p>Protects and refreshes asphalt drives and small lots.</p>
              </div>
              
              <div className="service-card-new">
                <div className="service-image-wrapper">
                  <Image 
                    src="/images/image_9.jpg" 
                    alt="Pressure washing concrete surface preparation" 
                    width={400} 
                    height={300}
                    className="service-image"
                    blurDataURL={placeholders['image_9']}
                    placeholder={placeholders['image_9'] ? 'blur' : undefined}
                  />
                </div>
                <h3>Pressure Washing & Stain Removal</h3>
                <p>Degreasing and surface cleaning to prep properly and restore appearance.</p>
              </div>
              
              <div className="service-card-new">
                <div className="service-image-wrapper">
                  <Image 
                    src="/images/image_13.jpg" 
                    alt="Concrete staining and crack repair" 
                    width={400} 
                    height={300}
                    className="service-image"
                    blurDataURL={placeholders['image_13']}
                    placeholder={placeholders['image_13'] ? 'blur' : undefined}
                  />
                </div>
                <h3>Concrete Staining & Crack Repair</h3>
                <p>Colour options and discreet repairs for a seamless finish.</p>
              </div>
              
              <div className="service-card-new">
                <div className="service-image-wrapper">
                  <Image 
                    src="/images/image_7.jpg" 
                    alt="Anti-slip concrete surface application" 
                    width={400} 
                    height={300}
                    className="service-image"
                    blurDataURL={placeholders['image_7']}
                    placeholder={placeholders['image_7'] ? 'blur' : undefined}
                  />
                </div>
                <h3>Anti-Slip Additives</h3>
                <p>Traction options for steps and high-traffic areas.</p>
              </div>
              
              <div className="service-card-new">
                <div className="service-image-wrapper">
                  <Image 
                    src="/images/image_9.jpg" 
                    alt="Acid washing concrete surface" 
                    width={400} 
                    height={300}
                    className="service-image"
                    blurDataURL={placeholders['image_9']}
                    placeholder={placeholders['image_9'] ? 'blur' : undefined}
                  />
                </div>
                <h3>Acid Washing</h3>
                <p>Controlled etch to open pores and remove mineral deposits as needed.</p>
              </div>
              
              <div className="service-card-new">
                <div className="service-image-wrapper">
                  <Image 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80" 
                    alt="Asphalt repair and patching" 
                    width={400} 
                    height={300}
                    className="service-image"
                  />
                </div>
                <h3>Asphalt Repairs</h3>
                <p>Small patch and edge repairs to clean up problem areas.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Gallery Section - Our Recent Works */}
      <section id="gallery" className="gallery-section concrete-texture">
        <ScrollReveal>
          <div className="container">
            <div className="section-header">
              <h2 className="uppercase">Our recent works</h2>
              <p>We take a personalized approach to every project, ensuring that each concrete sealing job we complete is a reflection of our client's unique vision and protection needs.</p>
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

      {/* Testimonials Section */}
      <section className="testimonials-section concrete-texture">
        <ScrollReveal>
          <div className="container">
            <div className="section-header">
              <h2 className="uppercase">Trusted by 500+ customers</h2>
              <div className="testimonials-rating">
                <div className="rating-score">4.9</div>
                <p className="rating-text">From 500+ ratings</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="container">
            <Testimonials />
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

      {/* FAQ Section */}
      <section className="faq-section concrete-texture">
        <ScrollReveal>
          <div className="container">
            <div className="section-header">
              <h2 className="uppercase">Frequently Asked Questions</h2>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="container">
            <FAQ />
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <ScrollReveal>
          <div className="container">
            <div className="cta-content">
              <h2 className="uppercase">Need concrete sealing service?</h2>
              <a href="#contact-form" className="btn-primary-large">Request a quote</a>
              <p className="cta-subtitle">Unleash the full potential of your concrete surfaces.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="contact-section">
        <ScrollReveal>
          <div className="container">
            <div className="contact-wrapper">
              <div className="contact-header">
                <h2 className="uppercase">Get Your Free Quote Today</h2>
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
                      <li><CheckIcon /> Free estimates within 24 hours</li>
                      <li><CheckIcon /> Same-day or next-day service available</li>
                      <li><CheckIcon /> Full workmanship warranty included</li>
                      <li><CheckIcon /> Competitive pricing, no hidden fees</li>
                      <li><CheckIcon /> Local experts you can trust</li>
                    </ul>
                  </div>
                  <div className="info-card">
                    <h3>Contact Info</h3>
                    <p className="info-company">Diamond Concrete Sealing</p>
                    <p className="info-location">Okotoks, Alberta</p>
                    <a className="btn-primary" href="tel:+15878306736">
                      <PhoneIcon />
                      <span>Call 587‑830‑6736</span>
                    </a>
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
