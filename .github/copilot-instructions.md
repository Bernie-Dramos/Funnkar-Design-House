# Funnkar Design House - Copilot Instructions

## Project Overview
Funnkar Design House is a modern creative agency portfolio website featuring dark-themed design with blue accent colors. The site showcases services in branding, product design, graphics, VFX, and animation.

## Technology Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Design**: Mobile-first responsive design
- **Theme**: Dark mode with blue (#5B9EFF) and coral (#FF6B6B) accents
- **No build tools**: Direct file serving for simplicity

## Project Structure
```
/
├── index.html              # Landing page
├── services.html           # Services showcase
├── portfolio.html          # Project gallery with filters
├── project.html            # Project detail template
├── contact.html            # Contact form + FAQ
├── css/
│   ├── global.css         # CSS variables, resets, utilities
│   ├── components.css     # Reusable components (buttons, cards)
│   └── [page].css         # Page-specific styles
├── js/
│   ├── main.js            # Global functionality (nav, menu)
│   ├── portfolio.js       # Portfolio filtering
│   └── contact.js         # Form handling, FAQ accordion
└── assets/
    └── images/            # All imagery
```

## Design System
### Colors
- **Background**: `#0A0A0A` (primary), `#1A1A1A` (secondary)
- **Accent Blue**: `#5B9EFF`, gradients with opacity
- **Accent Coral**: `#FF6B6B` (CTAs)
- **Text**: `#FFFFFF` (headings), `#B0B0B0` (body)

### Typography
- **Headings**: Bold, large scale (clamp 2rem-5rem)
- **Body**: 1rem base, 1.6 line-height
- **Font**: System fonts for performance

### Key Components
- **Hero Sections**: Full viewport height, centered content with imagery
- **Service Cards**: Grid layout, hover effects with blue glow
- **Portfolio Grid**: 3-column responsive grid with category filters
- **Hamburger Menu**: Full-screen overlay, slide-in animation
- **Forms**: Floating labels, validation states

## Critical Patterns
### Navigation
- Fixed header with logo and hamburger trigger
- Full-screen menu overlay with blur backdrop
- Smooth scroll to sections on same page
- Active state management across pages

### Responsive Breakpoints
```css
--mobile: 320px-768px
--tablet: 769px-1024px  
--desktop: 1025px+
```

### Image Strategy
- High-quality hero images with overlay gradients
- Lazy loading for portfolio items
- WebP format preferred, PNG/JPG fallbacks

## Development Workflow
1. **Local Development**: Open `index.html` in browser (use Live Server extension)
2. **Testing**: Check all breakpoints (320px, 768px, 1024px, 1440px)
3. **Forms**: Currently client-side only, backend integration needed

## Key Interactions
- Hamburger menu toggle (slide from right)
- Portfolio category filtering (show/hide items)
- FAQ accordion (expand/collapse)
- Smooth scroll navigation
- Form validation before submit

## File Naming Conventions
- HTML: lowercase with hyphens (`project-detail.html`)
- CSS: lowercase, component-based (`button.css`, `hero.css`)
- JS: camelCase (`portfolioFilter.js`)
- Images: lowercase-with-hyphens, descriptive (`hero-laptop-glow.png`)

## When Adding New Features
- Maintain dark theme consistency
- Use CSS custom properties for colors/spacing
- Keep JavaScript modular (separate concerns)
- Test mobile-first, then scale up
- Add hover states with blue glow effects for interactive elements

## Known Limitations
- No backend for contact form (needs integration)
- Static content (CMS integration possible future enhancement)
- Manual portfolio item updates (no admin panel)
