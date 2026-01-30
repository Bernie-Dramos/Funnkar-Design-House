// =============================================
// GLOBAL JAVASCRIPT - MAIN FUNCTIONALITY
// =============================================
console.log('MAIN.JS LOADED');
document.addEventListener('DOMContentLoaded', function() {
    initHamburgerMenu();
    initSmoothScroll();
    initActiveNavLinks();
    initScrollAnimations();
    initPrivacyModal();
    initLogoMenuScrollReveal();
});
// ...existing code...
// LOGO & MENU BUTTON SCROLL REVEAL
function initLogoMenuScrollReveal() {
    const logo = document.querySelector('.logo-fixed');
    const menuBtn = document.querySelector('.menu-btn-fixed');
    console.log('[ScrollReveal] logo:', logo, 'menuBtn:', menuBtn);
    if (!logo || !menuBtn) {
        console.log('[ScrollReveal] Logo or menu button not found.');
        return;
    }
    let lastScrollY = window.scrollY;
    let ticking = false;
    let isVisible = true;
    const threshold = 2; // px, to avoid jitter
    function show() {
        if (!isVisible) {
            logo.classList.add('show-on-scroll');
            menuBtn.classList.add('show-on-scroll');
            isVisible = true;
            console.log('[ScrollReveal] Show logo/menu');
        }
    }
    function hide() {
        if (isVisible) {
            logo.classList.remove('show-on-scroll');
            menuBtn.classList.remove('show-on-scroll');
            isVisible = false;
            console.log('[ScrollReveal] Hide logo/menu');
        }
    }
    function onScroll() {
        const currentScrollY = window.scrollY;
        console.log('[ScrollReveal] Scroll event. current:', currentScrollY, 'last:', lastScrollY);
        if (currentScrollY < 10) {
            show();
        } else if (currentScrollY < lastScrollY - threshold) {
            // Scrolling up
            show();
        } else if (currentScrollY > lastScrollY + threshold) {
            // Scrolling down
            hide();
        }
        lastScrollY = currentScrollY;
        ticking = false;
    }
    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(onScroll);
            ticking = true;
        }
    }
    window.addEventListener('scroll', requestTick);
    // Initial state: hidden unless at top
    if (window.scrollY < 10) {
        show();
    } else {
        hide();
    }
    console.log('[ScrollReveal] Initialized. Initial scrollY:', window.scrollY);
}
// ...existing code...
