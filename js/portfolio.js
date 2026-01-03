// =============================================
// PORTFOLIO FILTERING & PAGINATION FUNCTIONALITY
// =============================================

let currentPage = 1;

document.addEventListener('DOMContentLoaded', function() {
    initPortfolioFilter();
    initPagination();
});

// =============================================
// PAGINATION FUNCTIONALITY
// =============================================

function initPagination() {
    const pageButtons = document.querySelectorAll('.page-btn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (pageButtons.length === 0) return;

    pageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const page = parseInt(this.getAttribute('data-page'));
            showPage(page);
        });
    });

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                showPage(currentPage - 1);
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            const totalPages = document.querySelectorAll('.page-btn').length;
            if (currentPage < totalPages) {
                showPage(currentPage + 1);
            }
        });
    }
}

function showPage(page) {
    currentPage = page;

    // Hide all grids
    document.querySelectorAll('.portfolio-grid').forEach(grid => {
        grid.style.display = 'none';
    });

    // Show selected grid
    const selectedGrid = document.getElementById(`portfolioGridPage${page}`);
    if (selectedGrid) {
        selectedGrid.style.display = 'grid';
        // Add fade-in animation
        selectedGrid.style.opacity = '0';
        setTimeout(() => {
            selectedGrid.style.transition = 'opacity 0.3s ease';
            selectedGrid.style.opacity = '1';
        }, 10);
    }

    // Update pagination buttons
    document.querySelectorAll('.page-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.getAttribute('data-page')) === page) {
            btn.classList.add('active');
        }
    });

    // Update prev/next buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const totalPages = document.querySelectorAll('.page-btn').length;

    if (prevBtn) {
        prevBtn.disabled = page === 1;
    }
    if (nextBtn) {
        nextBtn.disabled = page === totalPages;
    }

    // Scroll to top of grid
    const grid = document.querySelector('.portfolio-grid:not([style*="display: none"])');
    if (grid) {
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// =============================================
// PORTFOLIO FILTERING FUNCTIONALITY
// =============================================

function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn, .filter-btn-hero');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    if (filterButtons.length === 0 || portfolioCards.length === 0) return;

    // Add click event to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter portfolio items on all pages
            portfolioCards.forEach(card => {
                const cardCategories = card.getAttribute('data-category').split(' ');
                const cardPage = parseInt(card.getAttribute('data-page')) || 1;
                const parentGrid = card.closest('.portfolio-grid');

                // Show all if 'all' is selected
                if (filterValue === 'all') {
                    card.style.display = '';
                    card.style.opacity = '1';
                } 
                // Show if matches filter
                else if (cardCategories.includes(filterValue)) {
                    card.style.display = '';
                    card.style.opacity = '1';
                } 
                // Hide if doesn't match
                else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        });
    });
}

// =============================================
// PORTFOLIO CARD ANIMATIONS
// =============================================

// Animate portfolio cards on page load
document.addEventListener('DOMContentLoaded', function() {
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    portfolioCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 80);
    });
});
