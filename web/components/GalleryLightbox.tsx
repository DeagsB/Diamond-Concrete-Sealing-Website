"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface GalleryLightboxProps {
  images: {
    src: string
    alt: string
    width: number
    height: number
  }[]
  selectedIndex: number
  onClose: () => void
}

export default function GalleryLightbox({ images, selectedIndex, onClose }: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(selectedIndex)

  useEffect(() => {
    setCurrentIndex(selectedIndex)
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedIndex])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
      } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, images.length, onClose])

  const navigateImage = (direction: number) => {
    const newIndex = currentIndex + direction
    if (newIndex >= 0 && newIndex < images.length) {
      setCurrentIndex(newIndex)
    }
  }

  const currentImage = images[currentIndex]

  return (
    <div 
      className="lightbox-overlay" 
      onClick={onClose}
    >
      <button 
        className="lightbox-close" 
        onClick={onClose}
        aria-label="Close lightbox"
      >
        ×
      </button>
      
      {currentIndex > 0 && (
        <button 
          className="lightbox-nav lightbox-prev" 
          onClick={(e) => {
            e.stopPropagation()
            navigateImage(-1)
          }}
          aria-label="Previous image"
        >
          ‹
        </button>
      )}
      
      {currentIndex < images.length - 1 && (
        <button 
          className="lightbox-nav lightbox-next" 
          onClick={(e) => {
            e.stopPropagation()
            navigateImage(1)
          }}
          aria-label="Next image"
        >
          ›
        </button>
      )}

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          width={currentImage.width}
          height={currentImage.height}
          className="lightbox-image"
          priority
        />
        <div className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}

