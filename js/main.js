// =============================================
// GLOBAL JAVASCRIPT - MAIN FUNCTIONALITY
// =============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initHamburgerMenu();
    initSmoothScroll();
    initActiveNavLinks();
    initScrollAnimations();
});

// =============================================
// HAMBURGER MENU FUNCTIONALITY
// =============================================
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuClose = document.getElementById('menuClose');
    const menuLinks = document.querySelectorAll('.menu-nav a, .menu-secondary a');

    if (!hamburger || !menuOverlay) return;

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        toggleMenu();
    });

    // Close menu on close button click
    if (menuClose) {
        menuClose.addEventListener('click', function() {
            closeMenu();
        });
    }

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });

    // Close menu on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
            closeMenu();
        }
    });

    function toggleMenu() {
        hamburger.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        const isActive = menuOverlay.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isActive.toString());
        document.body.style.overflow = isActive ? 'hidden' : '';
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        menuOverlay.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
}

// =============================================
// SMOOTH SCROLL
// =============================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip empty anchors
            if (href === '#' || href === '') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =============================================
// ACTIVE NAV LINKS
// =============================================
function initActiveNavLinks() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.menu-nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active-page');
        }
    });
}

// =============================================
// SCROLL ANIMATIONS
// =============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.card, .section > .container > div');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// =============================================
// HEADER SCROLL EFFECT - REMOVED (Fixed logo/menu stay constant)
// =============================================
// No longer needed since logo and menu are independent fixed elements

// =============================================
// UTILITY FUNCTIONS
// =============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add resize listener with debounce
window.addEventListener('resize', debounce(function() {
    // Handle any resize-specific logic here
}, 250));
// =============================================
// PRIVACY POLICY MODAL
// =============================================
function initPrivacyModal() {
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
                        
                        <p style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.1); font-size: 0.85rem; color: #888;">For the complete Privacy Policy, <a href="privacy.html" style="color: #5b9eff; text-decoration: none;" onclick="closePrivacyModal()">click here</a>.</p>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        modal = document.getElementById('privacyModal');
    }

    // Add event listeners to all privacy policy links
    const privacyLinks = document.querySelectorAll('a[href="#privacy"], .menu-footer-right a[href="privacy.html"]');
    privacyLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // If it's a link to privacy.html page, allow normal navigation
            if (this.getAttribute('href') === 'privacy.html') {
                return;
            }
            e.preventDefault();
            openPrivacyModal();
        });
    });

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closePrivacyModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.getElementById('privacyModal').classList.contains('active')) {
            closePrivacyModal();
        }
    });
}

function openPrivacyModal() {
    const modal = document.getElementById('privacyModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closePrivacyModal() {
    const modal = document.getElementById('privacyModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Initialize privacy modal
document.addEventListener('DOMContentLoaded', initPrivacyModal);