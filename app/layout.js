'use client'

import { useState, useEffect } from 'react'
import './globals.css'

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    // Scroll-based Animation for Service Sections on Tablets and Mobile
    const isTabletOrMobile = window.innerWidth <= 1024;
    
    if (!isTabletOrMobile) return; // Exit if desktop
    
    // Elements to animate on scroll
    const animatedElements = [
      '.service-content',
      '.story-section-desc',
      '.trusted-partner-title',
      '.portfolio-item',
      '.cta-footer-title'
    ];
    
    // Elements that should NEVER be animated
    const excludedElements = [
      '.portfolio-hero',
      '.portfolio-hero-content',
      '.portfolio-hero h1',
      '.portfolio-hero p',
      '.services-hero',
      '.services-hero-content',
      '.services-hero h1',
      '.services-hero p',
      '.hero-landing'
    ];
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    animatedElements.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        // Check if element is in excluded list
        const isExcluded = excludedElements.some(excluded => element.matches(excluded));
        if (!isExcluded) {
          observer.observe(element);
        }
      });
    });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Privacy Modal functionality
    const initPrivacyModal = () => {
      // Create modal HTML if it doesn't exist
      let modal = document.getElementById('privacyModal');
      if (!modal) {
        const modalHTML = `
          <div class="privacy-modal" id="privacyModal">
            <div class="privacy-modal-content">
              <button class="privacy-modal-close" onclick="closePrivacyModal()">×</button>
              <h2 class="privacy-modal-title">Privacy Policy</h2>
              <div class="privacy-modal-body">
                <h3>Data Collection & Usage</h3>
                <p>We collect information submitted through our contact form including name, email, phone, company, and message. This data is used solely to respond to your inquiries.</p>
                
                <h3>Data Storage</h3>
                <p>Your information is securely stored in a Google Sheet via Google Apps Script. We implement industry-standard security measures to protect your data.</p>
                
                <h3>Third-Party Services</h3>
                <p>We use Google Apps Script and Google Workspace to process and store submissions. Google's privacy practices apply to this data.</p>
                
                <h3>Data Retention</h3>
                <p>Contact information is retained for 2 years from submission unless an ongoing business relationship exists.</p>
                
                <h3>Your Rights</h3>
                <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at funnkar.designhouse@gmail.com.</p>
                
                <h3>Contact</h3>
                <p><strong>Email:</strong> funnkar.designhouse@gmail.com<br><strong>Phone:</strong> +91 898 351 6874<br><strong>Location:</strong> Nashik, Maharashtra, India</p>
                
                <p style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.1); font-size: 0.85rem; color: #888;">For the complete Privacy Policy, <a href="/privacy" style="color: #5b9eff; text-decoration: none;" onclick="closePrivacyModal()">click here</a>.</p>
              </div>
            </div>
          </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        modal = document.getElementById('privacyModal');
      }

      // Add event listeners to all privacy policy links
      const privacyLinks = document.querySelectorAll('a[href="#privacy"], .menu-footer-right a[href="/privacy"]');
      privacyLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          // If it's a link to privacy page, allow normal navigation
          if (this.getAttribute('href') === '/privacy') {
            return;
          }
          e.preventDefault();
          openPrivacyModal();
        });
      });
    };

    const openPrivacyModal = () => {
      const modal = document.getElementById('privacyModal');
      if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    };

    // Make functions global
    window.openPrivacyModal = openPrivacyModal;
    window.closePrivacyModal = () => {
      const modal = document.getElementById('privacyModal');
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    };

    initPrivacyModal();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Fixed Logo */}
        <a href="/" className="logo-fixed">
          <img src="/funnkar-logo.png" alt="Funnkar Design House" className="logo-img" loading="lazy" />
        </a>

        {/* Fixed Menu Button */}
        <button className={`menu-btn-fixed ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-expanded={menuOpen} aria-controls="menuOverlay" aria-label="Toggle menu">
          <span className="menu-btn-text">Menu</span>
          <span className="menu-btn-close">✕</span>
        </button>

        <nav className={`menu-overlay ${menuOpen ? 'active' : ''}`} id="menuOverlay">
          <div className="menu-content">
            <ul className="menu-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <ul className="menu-secondary">
              <li><a href="/#about">About Us</a></li>
              <li><a href="/contact#faqs">Faqs</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
          <div className="menu-footer">
            <div className="menu-footer-left">
              <p>Craving Creativity or<br />Got Feedback? <a href="/contact">Let's Talk</a></p>
            </div>
            <div className="menu-footer-center">
              <a href="/privacy">Privacy Policy</a>
            </div>
            <div className="menu-footer-right">
              <a href="https://www.linkedin.com/company/funnkar-design-house/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src="/linkedin-icon.svg" alt="LinkedIn" className="social-icon" />
              </a>
              <a href="https://www.instagram.com/funnkar_design_house?igsh=YnRvNjY5YmtuNHl5" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/instagram-icon.svg" alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>
        </nav>

        <style jsx>{`
          .menu-overlay.active {
            display: flex !important;
          }
        `}</style>

        {children}
      </body>
    </html>
  )
}
