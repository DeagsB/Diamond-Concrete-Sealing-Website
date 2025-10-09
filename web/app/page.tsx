import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Seal it once. Shine for years.</h1>
            <p className="muted">Professional concrete cleaning, prep, and premium industrial‑grade sealer sealing (25–30% solids). Long‑lasting results.</p>
            <div style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href="#contact">Request Quote</a>
              <a className="btn" href="tel:+15878306736">Call 587‑830‑6736</a>
            </div>
          </div>

          <div className="hero-card">
            <img alt="Sealed driveway" src="/images/image_1.jpg" />
          </div>
        </div>
      </section>

      <section id="why">
        <div className="container">
          <div className="grid cols-3">
            <div className="card">
              <h3>Prep that bonds</h3>
              <p className="muted">Controlled mild acid wash opens the surface so sealer grips and won’t peel.</p>
            </div>
            <div className="card">
              <h3>Premium industrial‑grade sealer</h3>
              <p className="muted">25–30% solids penetrate to repel water, oils, and de‑icing salts.</p>
            </div>
            <div className="card">
              <h3>Professional application</h3>
              <p className="muted">Measured coverage + ideal timing deliver a uniform sheen and long, even wear.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2>About Us</h2>
          <p className="muted">Diamond Concrete Sealing is a family‑run business serving Okotoks and the Foothills for over 10 years. We’ve built our name on careful surface preparation, better chemistry, and clean workmanship—delivering finishes that look great on day one and still perform seasons later.</p>
          <ul style={{ margin: '14px 0', paddingLeft: 18 }}>
            <li>10+ years of hands‑on experience with residential driveways, walkways, steps, and small commercial pads.</li>
            <li>Family‑based values: clear communication, punctual arrival, and respect for your property.</li>
            <li>Fully insured; safety‑first job sites with proper masking and containment.</li>
            <li>Transparent quotes and start/finish timing—no surprises on the day.</li>
            <li>Professional equipment: surface cleaners, calibrated sprayers, and moisture testing tools.</li>
            <li>Respectful cleanup—edges detailed, walkways rinsed, and job area left tidy.</li>
          </ul>
          <p className="muted">We’re proud of our referral rate and repeat clients. References from recent Okotoks and Foothills projects are available on request.</p>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <h2>Our Services</h2>
          <p className="muted">Available with professional, industrial‑grade sealer options in Semi‑gloss or High‑gloss finishes.</p>
          <div style={{ background: 'var(--ink)', color: '#e2e8f0', padding: 18, borderRadius: 14, margin: '14px 0' }}>Quality Products, Guaranteed Results — Tough as Concrete. Sharp as a Diamond.</div>
          <div className="grid cols-3">
            <div className="card">
              <h3>Driveways &amp; Walkways</h3>
              <p className="muted">Safe preparation and a durable finish for residential surfaces.</p>
            </div>
            <div className="card">
              <h3>Residential Steps &amp; Patios</h3>
              <p className="muted">Non‑slip considerations and clean detailed edges for a finished look.</p>
            </div>
            <div className="card">
              <h3>Small Commercial Pads</h3>
              <p className="muted">Scaled application and coverage calculations for light commercial work.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="warranty">
        <div className="container">
          <h2>Warranty &amp; Maintenance</h2>
          <p className="muted">We stand behind our work. Proper prep and application are the foundation of a long‑lasting seal. Here’s how our coverage and care program work:</p>
          <div className="grid cols-3">
            <div className="card">
              <h3>Limited Workmanship Warranty</h3>
              <p className="muted">If you see issues caused by our prep or application within the first season, we’ll return to assess and correct.</p>
              <ul style={{ margin: '10px 0', paddingLeft: 18 }}>
                <li>Covers adhesion defects linked to our workmanship.</li>
                <li>Excludes substrate defects, structural cracks, or incompatible past coatings not disclosed.</li>
                <li>Weather‑related events outside spec are assessed case‑by‑case.</li>
              </ul>
            </div>
            <div className="card">
              <h3>Expected Service Life</h3>
              <p className="muted">With proper care, our sealer offers long service life; care and maintenance instructions are provided at handover.</p>
            </div>
            <div className="card">
              <h3>Care Notes</h3>
              <p className="muted">Allow 24–48 hours before vehicle traffic; avoid water pooling during early cure. Brush off de‑icing salts in winter; rinse in spring.</p>
              <p><a href="/diamond_care_sheet.html">Download printable care sheet</a></p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="container">
          <h2>Gallery</h2>
          <div className="gallery" style={{ marginTop: 12 }}>
            <div className="g1"><img alt="Sealed driveway" src="/images/image_2.jpg" /></div>
            <div className="g2"><img alt="Sealed surface" src="/images/image_3.jpg" /></div>
            <div className="g3"><img alt="Application detail" src="/images/image_4.jpg" /></div>
            <div className="g4"><img alt="Clean prep" src="/images/image_5.jpg" /></div>
            <div className="g5"><img alt="Finished sheen" src="/images/image_6.jpg" /></div>
            <div className="g6"><img alt="Before and after" src="/images/image_7.jpg" /></div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2>Get a Fast Quote</h2>
          <div style={{ display: 'flex', gap: 24, marginTop: 12, flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 320px', maxWidth: 540 }}>
              {/* Accessible client-side form component */}
              {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
              <div>
                {/* ContactForm is a client component */}
                {/* @ts-ignore */}
                <ContactForm />
              </div>
            </div>
            <div style={{ flex: '0 0 260px' }}>
              <h3>Contact</h3>
              <p className="muted">Diamond Concrete Sealing • Okotoks, Alberta</p>
              <p><a className="btn" href="tel:+15878306736">Call 587‑830‑6736</a></p>
              <p className="muted">We respond quickly to requests and can provide references from recent Okotoks and Foothills projects.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
