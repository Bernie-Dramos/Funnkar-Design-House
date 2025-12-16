// =============================================
// PORTFOLIO FILTERING FUNCTIONALITY
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    initPortfolioFilter();
});

function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterButtons.length === 0 || portfolioItems.length === 0) return;

    // Add click event to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter portfolio items
            filterPortfolioItems(filterValue, portfolioItems);
        });
    });
}

function filterPortfolioItems(filterValue, items) {
    items.forEach(item => {
        // Get item categories
        const itemCategories = item.getAttribute('data-category').split(' ');

        // Show all items if 'all' is selected
        if (filterValue === 'all') {
            showItem(item);
        } 
        // Show item if it matches the filter
        else if (itemCategories.includes(filterValue)) {
            showItem(item);
        } 
        // Hide item if it doesn't match
        else {
            hideItem(item);
        }
    });
}

function showItem(item) {
    item.style.display = 'block';
    // Trigger animation
    setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
    }, 10);
}

function hideItem(item) {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.8)';
    // Hide after animation completes
    setTimeout(() => {
        item.style.display = 'none';
    }, 300);
}

// =============================================
// PORTFOLIO ITEM ANIMATIONS
// =============================================

// Add transition styles to portfolio items
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });

    // Stagger animation on initial load
    portfolioItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// =============================================
// PORTFOLIO COUNT UPDATE
// =============================================

function updatePortfolioCount() {
    const visibleItems = document.querySelectorAll('.portfolio-item:not([style*="display: none"])');
    const countElement = document.getElementById('portfolioCount');
    
    if (countElement) {
        countElement.textContent = `Showing ${visibleItems.length} projects`;
    }
}

// =============================================
// LOAD MORE FUNCTIONALITY (Optional)
// =============================================

function initLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener('click', function() {
        // Logic to load more portfolio items
        // This would typically involve AJAX calls or revealing hidden items
        console.log('Load more clicked');
    });
}
