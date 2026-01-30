'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Portfolio() {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'ui-ux', label: 'UI/UX Design' },
    { key: 'interior', label: 'Interior Design' },
    { key: 'game', label: 'Game Design & Development' },
    { key: '3d-animation', label: '3D Animation' },
    { key: 'vfx', label: 'VFX' },
    { key: 'web-development', label: 'Web Development' }
  ]

  const portfolioItems = [
    { id: 1, category: 'ui-ux', page: 1, tags: ['UI/UX DESIGN', 'MOBILE APP DEVELOPMENT'], image: '/UI1-3.png', alt: 'UI/UX Design - Card 1' },
    { id: 2, category: 'interior', page: 1, tags: ['INTERIOR DESIGN', 'SPACE PLANNING'], image: '/ID1-3.png', alt: 'Interior Design - Card 1' },
    { id: 3, category: 'game', page: 1, tags: ['GAME DESIGN', 'ASSET DEVELOPMENT'], image: '/game1-5.png', alt: 'Game Design - Card 1' },
    { id: 4, category: '3d-animation', page: 1, tags: ['ARCHITECTURE', '3D ANIMATION'], image: '/3d2-3.png', alt: '3D Animation - Card 1' },
    { id: 5, category: 'vfx', page: 1, tags: ['IMMERSIVE UI', 'PROCEDURAL FX'], image: '/vfx3-2.jpg', alt: 'VFX IMMERSION' },
    { id: 6, category: 'web-development', page: 1, tags: ['WEB DESIGN', 'DEVELOPMENT'], image: '/web1-3.png', alt: 'Web Development - Card 1' },
    { id: 7, category: 'ui-ux', page: 2, tags: ['UI/UX DESIGN', 'MOBILE APP DEVELOPMENT'], image: '/UI2-5.png', alt: 'UI/UX Design - Card 2' },
    { id: 8, category: 'interior', page: 2, tags: ['RESIDENTIAL DESIGN', '3D VISUALIZATION'], image: '/ID2-3.png', alt: 'Interior Design - Card 2' },
    { id: 9, category: 'game', page: 2, tags: ['GAME DEVELOPMENT', 'LEVEL DESIGN'], image: '/game2-3.png', alt: 'Game Design - Card 2' },
    { id: 10, category: '3d-animation', page: 2, tags: ['3D RENDERING', 'VISUALIZATION'], image: '/3d1-5.png', alt: '3D Animation - Card 2' },
    { id: 11, category: 'vfx', page: 2, tags: ['SIMULATION FX', 'CHARACTER FX'], image: '/vfx2-5.png', alt: 'Simulation FX Project' },
    { id: 12, category: 'web-development', page: 2, tags: ['WEB DESIGN', 'DEVELOPMENT'], image: '/web2-1.png', alt: 'Web Development - Card 2' },
    { id: 13, category: 'ui-ux', page: 3, tags: ['GRAPHICS DESIGN', 'CONCEPT DESIGN'], image: '/UI3-1.png', alt: 'UI/UX Design - Card 3' },
    { id: 14, category: 'interior', page: 3, tags: ['COMMERCIAL SPACE', 'INTERIOR CONCEPT'], image: '/ID3-5.png', alt: 'Interior Design - Card 3' },
    { id: 15, category: 'game', page: 3, tags: ['MOBILE GAME', 'UI/UX DESIGN'], image: '/game3-2.png', alt: 'Game Design - Card 3' },
    { id: 16, category: '3d-animation', page: 3, tags: ['MOTION DESIGN', 'ANIMATION'], image: '/3d3-1.png', alt: '3D Animation - Card 3' },
    { id: 17, category: 'vfx', page: 3, tags: ['WORLD-BUILDING VFX', 'COMPOSTING'], image: '/vfx1-2.png', alt: 'World-Building VFX and Compositing' },
    { id: 18, category: 'web-development', page: 3, tags: ['MOBILE APP', 'IOS DESIGN'], image: '/web3-2.png', alt: 'Web Development - Card 3' }
  ]

  const filteredItems = activeFilter === 'all' ? portfolioItems.filter(item => item.page === currentPage) : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <>
      {/* Hero Section */}
      <section className="hero-landing portfolio-hero custom-portfolio-hero">
        <div className="hero-background">
          <video src="/astro.mp4" alt="Portfolio Hero" className="hero-bg-media" loop autoPlay muted playsInline></video>
        </div>
        <div className="hero-landing-overlay">
          <div className="portfolio-hero-content custom-portfolio-hero-content">
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="portfolio-hero-hover-content custom-portfolio-hero-hover-content">
              <p className="portfolio-hero-description custom-portfolio-hero-description">
                Funnkar Design House creates striking functional designs that set your brand apart.
              </p>
              <div className="portfolio-hero-video-wrap">
                <img src="/video-editor.gif" alt="Video Editor Demo" className="portfolio-hero-demo-video" style={{ borderRadius: '12px', width: '180px', height: 'auto', boxShadow: '0 4px 32px rgba(0,0,0,0.25)' }} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-section">
        <div className="container">
          {/* Filter Buttons */}
          <div className="portfolio-filter-wrapper">
            <div className="filter-group-horizontal">
              {filters.map(filter => (
                <button
                  key={filter.key}
                  className={`filter-btn-hero ${activeFilter === filter.key ? 'active' : ''}`}
                  data-filter={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="portfolio-grid">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="portfolio-card"
                data-category={item.category}
                data-page={item.page}
                data-project={item.id}
                onClick={() => {
                  // Save current scroll position and page
                  sessionStorage.setItem('portfolioScrollY', window.scrollY);
                  sessionStorage.setItem('portfolioPage', currentPage.toString());
                  // Navigate to project page
                  router.push(`/project/${item.id}`)
                }}
                style={{ cursor: 'pointer' }}
              >
                <div className="portfolio-card-tags">
                  {item.tags.map(tag => (
                    <span key={tag} className="portfolio-tag">{tag}</span>
                  ))}
                </div>
                <div className="portfolio-card-imagewrap">
                  <img src={item.image} alt={item.alt} className="portfolio-card-image" loading="lazy" />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="portfolio-pagination">
            <button className="pagination-btn prev-btn" aria-label="Previous page" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>
              <img src="/arrow-left.svg" alt="Previous" />
            </button>
            {[1, 2, 3].map(page => (
              <button
                key={page}
                className={`pagination-btn page-btn ${currentPage === page ? 'active' : ''}`}
                data-page={page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button className="pagination-btn next-btn" aria-label="Next page" onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}>
              <img src="/arrow-right.svg" alt="Next" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA + Footer Merged Section */}
      <section className="cta-footer-merged">
        <div className="cta-footer-content">
          <div className="cta-footer-main">
            <h2 className="cta-footer-title"><span className="cta-footer-bold">Lets talk.</span> We’d love <br />to hear from you</h2>
            <a href="/contact" className="cta-footer-btn">Book A Call</a>
          </div>
          <div className="cta-footer-bottom">
            <span className="cta-footer-copyright">Copyright © 2025 Funnkar Design House. All rights reserved</span>
            <span className="cta-footer-privacy"><a href="/privacy">Privacy & Terms</a></span>
            <div className="cta-footer-socials">
              <a href="https://www.linkedin.com/company/funnkar-design-house/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src="/linkedin-icon.svg" alt="LinkedIn" className="social-icon" />
              </a>
              <a href="https://www.instagram.com/funnkar_design_house?igsh=YnRvNjY5YmtuNHl5" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/instagram-icon.svg" alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
