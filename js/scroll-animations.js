/**
 * Scroll-based Animation for Service Sections on Tablets and Mobile
 * Replaces hover effects with scroll-triggered animations on smaller devices
 */

(function() {
  'use strict';
  
  // Check if device is tablet or smaller (1024px or less)
  const isTabletOrMobile = window.innerWidth <= 1024;
  
  if (!isTabletOrMobile) return; // Exit if desktop
  
  // Elements to animate on scroll (EXCLUDE hero sections on services/portfolio pages)
  const animatedElements = [
    '.service-content',
    '.story-section-desc',
    '.trusted-partner-title',
    '.portfolio-item',
    '.cta-footer-title'
  ];
  
  // Elements that should NEVER be animated (always visible)
  const excludedElements = [
    '.portfolio-hero',
    '.portfolio-hero-content',
    '.portfolio-hero h1',
    '.portfolio-hero p',
    '.services-hero',
    '.services-hero-content',
    '.services-hero h1',
    '.services-hero p',
    '.hero-landing' // Main hero
  ];
  
  // Intersection Observer options
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // Trigger when 20% of element is visible
  };
  
  // Callback function for Intersection Observer
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add 'in-view' class when element enters viewport
        entry.target.classList.add('in-view');
        
        // Optional: Stop observing after animation (for performance)
        // observer.unobserve(entry.target);
      } else {
        // Optional: Remove class when element exits viewport (for re-triggering)
        // entry.target.classList.remove('in-view');
      }
    });
  };
  
  // Create Intersection Observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  // Function to observe all animated elements
  const observeElements = () => {
    animatedElements.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        observer.observe(element);
      });
    });
  };
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeElements);
  } else {
    observeElements();
  }
  
  // Re-initialize on window resize (in case device orientation changes)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const currentlyTabletOrMobile = window.innerWidth <= 1024;
      if (currentlyTabletOrMobile && !isTabletOrMobile) {
        observeElements();
      }
    }, 250);
  });
  
})();
