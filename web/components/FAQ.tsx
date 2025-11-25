'use client'
import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Do you offer maintenance services?',
    answer: 'Yes, we provide comprehensive concrete maintenance services to keep your sealed surfaces looking their best year-round. We offer tailored maintenance plans to suit your schedule and budget, including periodic re-sealing and touch-ups.'
  },
  {
    question: 'What types of sealers do you use?',
    answer: 'We use professional-grade, industrial-strength sealers with 25-30% solids content. These penetrate deep into the concrete to provide superior protection against water, oils, stains, and de-icing salts. We offer both semi-gloss and high-gloss finish options.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, we are fully licensed and insured. We carry comprehensive liability insurance and are committed to safety-first job sites. All our work is backed by a workmanship warranty.'
  },
  {
    question: 'How long does the sealing process take?',
    answer: 'Most residential projects can be completed in 1-2 days, depending on the size and condition of the surface. We provide detailed timelines during your free quote consultation.'
  },
  {
    question: 'Do you provide free estimates?',
    answer: 'Yes, we offer free estimates within 24 hours. We\'ll assess your project, discuss your options, and provide a transparent quote with no hidden fees.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-container">
      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
            <button 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <h4>{faq.question}</h4>
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


