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
    'assets/images/agent.png',
    'assets/images/red-car.gif'
];

let currentImageIndex = 0;
let sidebarImages = [1, 2, 3, 4, 5]; // Sidebar starts with images 1-5

// Initialize the gallery
document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
    setupThumbnailListeners();
});

function initializeGallery() {
    // Create thumbnail items for sidebar (only 5 images, not the current main)
    const thumbnailList = document.getElementById('thumbnailList');
    thumbnailList.innerHTML = '';

    sidebarImages.forEach((sidebarIndex) => {
        const thumbnailItem = document.createElement('div');
        thumbnailItem.className = 'thumbnail-item';
        thumbnailItem.dataset.sidebarIndex = sidebarIndex;
        thumbnailItem.dataset.index = sidebarIndex;

        thumbnailItem.innerHTML = `
            <img src="${projectImages[sidebarIndex]}" alt="Project thumbnail ${sidebarIndex + 1}" loading="lazy">
            <div class="thumbnail-badge">${sidebarIndex + 1}/${projectImages.length}</div>
        `;

        thumbnailItem.addEventListener('click', () => switchMainImage(sidebarIndex));
        thumbnailList.appendChild(thumbnailItem);
    });

    // Set initial main image (index 0)
    setMainImage(0);
}

function switchMainImage(newMainIndex) {
    const oldMainIndex = currentImageIndex;
    
    // Find position of clicked image in sidebar
    const clickedSidebarPosition = sidebarImages.indexOf(newMainIndex);
    
    // Swap: old main goes into sidebar where new main was, new main becomes main
    sidebarImages[clickedSidebarPosition] = oldMainIndex;
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

        thumbnailItem.innerHTML = `
            <img src="${projectImages[sidebarIndex]}" alt="Project thumbnail ${sidebarIndex + 1}" loading="lazy">
            <div class="thumbnail-badge">${sidebarIndex + 1}/${projectImages.length}</div>
        `;

        thumbnailItem.addEventListener('click', () => switchMainImage(sidebarIndex));
        thumbnailList.appendChild(thumbnailItem);
    });
}

function setupThumbnailListeners() {
    // Optional: Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            // Get next image from sidebar or wrap around
            const nextSidebarImage = sidebarImages[0];
            switchMainImage(nextSidebarImage);
        } else if (e.key === 'ArrowLeft') {
            // Get previous image from sidebar or wrap around
            const prevSidebarImage = sidebarImages[sidebarImages.length - 1];
            switchMainImage(prevSidebarImage);
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
