'use client'

import '../../../css/project-detail.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const project = {
  title: 'Game Level Design',
  date: 'Created: July 15, 2023',
  images: [
    '/game2-1.png',
    '/game2-2.png',
    '/game2-3.png',
    '/game2-4.png',
    '/game2-5.png'
  ],
  intro: 'Game level design creates the foundation for player experiences. Each level must balance challenge, pacing, and narrative progression to maintain engagement.',
  context: 'Video games represent complex interactive experiences where every design element contributes to the overall player journey. Level design bridges gameplay mechanics and storytelling.',
  problem: 'Poor level design leads to frustrating player experiences and game abandonment. Creating levels that are both challenging and enjoyable requires careful balance and iteration.'
}

export default function Project9() {
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageOpacity, setImageOpacity] = useState(1)

  const switchMainImage = (newIndex) => {
    if (newIndex === currentImageIndex) return
    
    setImageOpacity(0)
    setTimeout(() => {
      setCurrentImageIndex(newIndex)
      setImageOpacity(1)
    }, 150)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % project.images.length
    switchMainImage(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + project.images.length) % project.images.length
    switchMainImage(prevIndex)
  }

  const switchToImage = (index) => {
    switchMainImage(index)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          prevImage()
          break
        case 'ArrowRight':
          nextImage()
          break
        case 'Escape':
          goBack()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentImageIndex])

  const goBack = () => {
    // Restore scroll position and page from sessionStorage
    const savedScrollY = sessionStorage.getItem('portfolioScrollY')
    const savedPage = sessionStorage.getItem('portfolioPage')

    if (savedPage) {
      router.push(`/portfolio?page=${savedPage}`)
    } else {
      router.push('/portfolio')
    }

    // Restore scroll position after navigation
    setTimeout(() => {
      if (savedScrollY) {
        window.scrollTo(0, parseInt(savedScrollY))
      }
    }, 100)
  }

  return (
    <>
      {/* Project Detail Section */}
      <section className="project-detail-section">
        <div className="project-detail-container">
          {/* Left Sidebar with Thumbnail Grid */}
          <div className="project-thumbnails">
            <div className="thumbnail-list">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail-item ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => switchToImage(index)}
                >
                  <img src={image} alt={`Project thumbnail ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="project-detail-main">
            {/* Large Main Image */}
            <div className="project-main-image-wrapper">
              <button className="close-button" onClick={goBack} aria-label="Close project details">
                <img src="/x.svg" alt="Close" loading="lazy" />
              </button>
              <button className="nav-button nav-left" onClick={prevImage} aria-label="Previous image">
                <img src="/navigate-left.png" alt="Previous" loading="lazy" />
              </button>
              <img
                src={project.images[currentImageIndex]}
                alt="Project main image"
                className="project-main-image"
                style={{ opacity: imageOpacity, transition: 'opacity 0.15s ease-in-out' }}
                loading="lazy"
              />
              <div className="project-image-badge">{currentImageIndex + 1}/{project.images.length}</div>
              <button className="nav-button nav-right" onClick={nextImage} aria-label="Next image">
                <img src="/navigate-right.png" alt="Next" loading="lazy" />
              </button>
            </div>
          </div>

          {/* Divider Line */}
          <div className="project-detail-divider"></div>

          {/* Right Content Area */}
          <div className="project-info-panel">
            <div className="project-info-content">
              <div className="project-header">
                <h1 className="project-title">{project.title}</h1>
                <p className="project-date">{project.date}</p>
              </div>

              {/* Introduction */}
              <div className="project-section">
                <h2 className="project-section-title">Introduction</h2>
                <p className="project-section-text">{project.intro}</p>
              </div>

              {/* Context */}
              <div className="project-section">
                <h2 className="project-section-title">Context</h2>
                <p className="project-section-text">{project.context}</p>
              </div>

              {/* Problem */}
              <div className="project-section">
                <h2 className="project-section-title">Problem</h2>
                <p className="project-section-text">{project.problem}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}