'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  beforePlaceholder?: string
  afterPlaceholder?: string
}

export default function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeAlt, 
  afterAlt,
  beforePlaceholder,
  afterPlaceholder 
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percent = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percent)))
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div 
      className="before-after-slider"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ touchAction: 'none' }}
    >
      <div className="slider-wrapper">
        <div className="slider-image-container">
          <Image 
            src={beforeImage} 
            alt={beforeAlt} 
            fill
            className="slider-image"
            style={{ objectFit: 'cover' }}
            placeholder={beforePlaceholder ? 'blur' : undefined}
            blurDataURL={beforePlaceholder}
          />
        </div>
        <div 
          className="slider-image-overlay" 
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image 
            src={afterImage} 
            alt={afterAlt} 
            fill
            className="slider-image"
            style={{ objectFit: 'cover' }}
            placeholder={afterPlaceholder ? 'blur' : undefined}
            blurDataURL={afterPlaceholder}
          />
        </div>
        <div 
          className="slider-handle" 
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="slider-handle-line"></div>
          <div className="slider-handle-icon">⇄</div>
        </div>
      </div>
      <div className="slider-labels">
        <span>Before</span>
        <span>After</span>
      </div>
    </div>
  )
}

