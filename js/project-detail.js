// Project Detail Page - Image Gallery and Swapping

// Sample project data with placeholder images from assets
const projectData = {
    title: 'Language Learning App',
    date: 'Created: 09/12/25',
    intro: 'The Language Learning Mobile App was designed with a powerful mission: to make African languages more accessible to the world. It empowers users to learn, practice, and master diverse African languages while also providing seamless translation into widely spoken international languages.',
    context: 'There is a significant gap in online resources for learning African languages and inaccuracy in translations. This creates barriers for both native speakers and global learners interested in these rich linguistic traditions.',
    problem: 'There is a significant gap in online resources for learning African languages, which has created barriers for both native speakers and global learners. While many international languages enjoy extensive digital platforms, apps, and scholarly materials, African languages remain underrepresented and underserved in the digital space.'
};

// Array of available images from assets folder
const projectImages = [
    'assets/images/hero-vid.gif',
    'assets/images/laptop-roll.gif',
    'assets/images/video-editor.gif',
    'assets/images/phone+laptop-scroll.gif',
    'assets/images/agent.png'
];

let currentImageIndex = 0;
let sidebarImages = [0, 1, 2, 3, 4]; // All 5 images shown as thumbnails

// Initialize the gallery
document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
    setupThumbnailListeners();
});

function initializeGallery() {
    // Create thumbnail items for sidebar (all 5 images)
    const thumbnailList = document.getElementById('thumbnailList');
    thumbnailList.innerHTML = '';

    sidebarImages.forEach((sidebarIndex) => {
        const thumbnailItem = document.createElement('div');
        thumbnailItem.className = 'thumbnail-item';
        thumbnailItem.dataset.sidebarIndex = sidebarIndex;
        thumbnailItem.dataset.index = sidebarIndex;

        // Mark as active if this is the initial main image
        if (sidebarIndex === currentImageIndex) {
            thumbnailItem.classList.add('active');
        }

        thumbnailItem.innerHTML = `
            <img src="${projectImages[sidebarIndex]}" alt="Project thumbnail ${sidebarIndex + 1}" loading="lazy">
        `;

        thumbnailItem.addEventListener('click', () => switchMainImage(sidebarIndex));
        thumbnailList.appendChild(thumbnailItem);
    });

    // Set initial main image (index 0)
    setMainImage(0);
}

function switchMainImage(newMainIndex) {
    currentImageIndex = newMainIndex;
    
    // Update display
    setMainImage(newMainIndex);
    updateSidebarThumbnails();
}

function setMainImage(index) {
    const mainImage = document.getElementById('mainImage');
    const imageBadge = document.getElementById('imageBadge');

    // Set image with fade effect
    mainImage.style.opacity = '0';
    setTimeout(() => {
        mainImage.src = projectImages[index];
        mainImage.style.opacity = '1';
        imageBadge.textContent = `${index + 1}/${projectImages.length}`;
    }, 100);
}

function updateSidebarThumbnails() {
    // Re-render sidebar with updated images
    const thumbnailList = document.getElementById('thumbnailList');
    thumbnailList.innerHTML = '';

    sidebarImages.forEach((sidebarIndex) => {
        const thumbnailItem = document.createElement('div');
        thumbnailItem.className = 'thumbnail-item';
        thumbnailItem.dataset.index = sidebarIndex;

        // Mark as active if this is the current main image
        if (sidebarIndex === currentImageIndex) {
            thumbnailItem.classList.add('active');
        }

        thumbnailItem.innerHTML = `
            <img src="${projectImages[sidebarIndex]}" alt="Project thumbnail ${sidebarIndex + 1}" loading="lazy">
        `;

        thumbnailItem.addEventListener('click', () => switchMainImage(sidebarIndex));
        thumbnailList.appendChild(thumbnailItem);
    });
}

function setupThumbnailListeners() {
    // Setup close button listener
    const closeBtn = document.getElementById('closeBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            goBackToPortfolio();
        });
    }

    // Setup navigation button listeners
    const navLeftBtn = document.getElementById('navLeft');
    const navRightBtn = document.getElementById('navRight');

    if (navLeftBtn) {
        navLeftBtn.addEventListener('click', () => {
            const prevIndex = currentImageIndex === 0 ? projectImages.length - 1 : currentImageIndex - 1;
            switchMainImage(prevIndex);
        });
    }

    if (navRightBtn) {
        navRightBtn.addEventListener('click', () => {
            const nextIndex = currentImageIndex === projectImages.length - 1 ? 0 : currentImageIndex + 1;
            switchMainImage(nextIndex);
        });
    }

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            const nextIndex = currentImageIndex === projectImages.length - 1 ? 0 : currentImageIndex + 1;
            switchMainImage(nextIndex);
        } else if (e.key === 'ArrowLeft') {
            const prevIndex = currentImageIndex === 0 ? projectImages.length - 1 : currentImageIndex - 1;
            switchMainImage(prevIndex);
        } else if (e.key === 'Escape') {
            // Close on Escape key
            goBackToPortfolio();
        }
    });
}

function goBackToPortfolio() {
    // Get the saved scroll position from sessionStorage
    const savedScrollY = sessionStorage.getItem('portfolioScrollY');
    
    // Navigate back to portfolio
    window.location.href = 'portfolio.html';
    
    // After page loads, scroll to saved position
    window.addEventListener('load', function() {
        if (savedScrollY) {
            window.scrollTo(0, parseInt(savedScrollY));
            sessionStorage.removeItem('portfolioScrollY');
        }
    });
}

// Add fade transition to main image
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    #mainImage {
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(styleSheet);
