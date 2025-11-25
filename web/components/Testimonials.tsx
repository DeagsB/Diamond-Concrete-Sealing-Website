'use client'
import React from 'react'

interface Testimonial {
  name: string
  rating: number
  review: string
  source: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    review: 'Diamond Concrete Sealing completely exceeded my expectations. From the initial consultation to the final touches, their team was professional and attentive to every detail. My driveway looks brand new!',
    source: 'Google Review'
  },
  {
    name: 'Mike Thompson',
    rating: 5,
    review: 'I\'ve been using Diamond Concrete Sealing for years now, and I couldn\'t be happier with the results. Their team always goes above and beyond to ensure that my concrete surfaces look their best.',
    source: 'Trustpilot'
  },
  {
    name: 'Jennifer Martinez',
    rating: 5,
    review: 'Despite the tight deadline, they completed the project on time and within budget, exceeding my expectations every step of the way. I highly recommend Diamond Concrete Sealing!',
    source: 'Google Review'
  },
  {
    name: 'Robert Chen',
    rating: 5,
    review: 'I\'m so grateful to have found Diamond Concrete Sealing. Their team not only transformed my neglected patio into a beautiful space but also provided great advice on how to maintain it.',
    source: 'Trustpilot'
  }
]

export default function Testimonials() {
  return (
    <div className="testimonials-container">
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card stagger-item">
            <div className="testimonial-rating">
              {'★'.repeat(testimonial.rating)}
            </div>
            <p className="testimonial-text">"{testimonial.review}"</p>
            <div className="testimonial-author">
              <strong>{testimonial.name}</strong>
              <span className="testimonial-source">{testimonial.source}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


