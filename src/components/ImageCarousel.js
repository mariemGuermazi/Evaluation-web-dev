"use client"

import { useState, useEffect } from "react"
import "./ImageCarousel.css"
import { ChevronLeft, ChevronRight } from "lucide-react"

function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "	https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide2-1100x300.jpg",
      caption: "Sidi Bousaid, Tunisia",
    },
    {
      image: "	https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide3.jpg",
      caption: "Panoramic view of ancient Carthage, Tunis",
    },
    
    {
      image: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide1.jpg",
      caption: "Satellite view of the Mediterranean region",
    },
    {
      image: "	https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide6-1100x300.jpg",
      caption: "City of Culture, Tunis",
    },
    {
      image: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide7-1100x300.jpg",
      caption: "Enjoy your summer holiday in Tunisia"
,
    },
    {
      image: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide4-1100x300.jpg",
      caption: "National Bardo Museum presents to you an impressive and unique collection of the ancient art"
,
    },
    {
      image: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide5-1100x300.jpg",
      caption: "I love Tunis and Ibn Khaldūn Status (1332-1406)"
,
    },
    {
      image: "https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide10-1096x299.jpg",
      caption: "City center of Tunis"
,
    },
    {
      image: "	https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide9-1100x300.jpg",
      caption: "Star Wars movie was here, South of Tunisia",
    },
    {
      image: 	"https://2025.ieee-jurse.org/wp-content/uploads/sites/595/2023/01/slide8.jpg",
      caption:  "Amphitheatre of El Jem, UNESCO World Heritage Centre",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <div className="carousel-container">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="caption">{slide.caption}</div>
          </div>
        ))}

        <button className="carousel-button prev" onClick={prevSlide}>
          <ChevronLeft size={20} />
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          <ChevronRight size={20} />
        </button>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel
