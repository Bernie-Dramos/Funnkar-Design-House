// =============================================
// PORTFOLIO FILTERING & PAGINATION FUNCTIONALITY
// =============================================

const PAGE_SIZE = 6;
let currentPage = 1;
let activeFilter = 'all';
let filteredCards = [];

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
    // Filtered view: paginate within matched cards only
    if (activeFilter !== 'all') {
        const totalPages = Math.max(1, Math.ceil(filteredCards.length / PAGE_SIZE));
        currentPage = Math.min(Math.max(page, 1), totalPages);

        // Hide all cards first
        document.querySelectorAll('.portfolio-card').forEach(card => {
            card.style.display = 'none';
        });

        // Show only the slice for the current filtered page
        const start = (currentPage - 1) * PAGE_SIZE;
        const visibleCards = filteredCards.slice(start, start + PAGE_SIZE);
        
        visibleCards.forEach((card) => {
            card.style.display = '';
            card.style.opacity = '1';
        });

        // Show ALL grids so cards from all pages are visible
        document.querySelectorAll('.portfolio-grid').forEach((grid) => {
            grid.style.display = 'grid';
        });

        updatePaginationButtons(totalPages);
        updatePrevNext(totalPages);
        return;
    }

    // Default "All" view pagination by grid
    currentPage = page;

    // Hide all grids first
    document.querySelectorAll('.portfolio-grid').forEach(grid => {
        grid.style.display = 'none';
    });

    // Show selected grid
    const selectedGrid = document.getElementById(`portfolioGridPage${page}`);
    if (selectedGrid) {
        selectedGrid.style.display = 'grid';
        selectedGrid.style.opacity = '0';
        setTimeout(() => {
            selectedGrid.style.transition = 'opacity 0.3s ease';
            selectedGrid.style.opacity = '1';
        }, 10);
    }

    updatePaginationButtons(document.querySelectorAll('.page-btn').length);
    updatePrevNext(document.querySelectorAll('.page-btn').length);

    const grid = document.querySelector('.portfolio-grid:not([style*="display: none"])');
    if (grid) {
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function updatePaginationButtons(totalPages) {
    const pageButtons = document.querySelectorAll('.page-btn');
    pageButtons.forEach((btn, index) => {
        const pageNum = index + 1;
        const shouldShow = pageNum <= totalPages;
        btn.style.display = shouldShow ? '' : 'none';
        if (shouldShow) {
            btn.setAttribute('data-page', pageNum);
            btn.textContent = pageNum;
            btn.classList.toggle('active', pageNum === currentPage);
        }
    });
}

function updatePrevNext(totalPages) {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
        prevBtn.style.display = totalPages > 1 ? '' : 'none';
    }
    if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.style.display = totalPages > 1 ? '' : 'none';
    }
}

// =============================================
// PORTFOLIO FILTERING FUNCTIONALITY
// =============================================

function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn, .filter-btn-hero');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    const pagination = document.querySelector('.portfolio-pagination');
    const grids = document.querySelectorAll('.portfolio-grid');

    if (filterButtons.length === 0 || portfolioCards.length === 0) return;

    // Add click event to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            activeFilter = filterValue;

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            if (filterValue === 'all') {
                // Reset to "All" view - show all cards and grids
                filteredCards = [];
                
                // Hide all grids first
                grids.forEach(grid => grid.style.display = 'none');
                
                // Show all cards across all grids
                portfolioCards.forEach(card => {
                    card.style.display = '';
                    card.style.opacity = '1';
                });

                // Show pagination with 3 pages
                pagination.style.display = '';
                updatePaginationButtons(3);
                updatePrevNext(3);
                
                // Show first grid
                const grid1 = document.getElementById('portfolioGridPage1');
                if (grid1) {
                    grid1.style.display = 'grid';
                }
                currentPage = 1;
                updatePaginationButtons(3);
                return;
            }

            // Build filtered list for specific category
            filteredCards = [];
            portfolioCards.forEach(card => {
                const cardCategories = card.getAttribute('data-category').split(' ').map(c => c.toLowerCase());
                const match = cardCategories.includes(filterValue.toLowerCase());
                if (match) {
                    filteredCards.push(card);
                }
            });

            const totalPages = Math.max(1, Math.ceil(filteredCards.length / PAGE_SIZE));

            // Filtered view: show all grids, paginate only if > PAGE_SIZE
            grids.forEach(grid => grid.style.display = 'grid');
            pagination.style.display = filteredCards.length > PAGE_SIZE ? '' : 'none';
            showPage(1);
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
