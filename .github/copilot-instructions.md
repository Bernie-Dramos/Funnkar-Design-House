
# Funnkar Design House – Copilot AI Agent Instructions

## Project Purpose & Structure
Funnkar Design House is a static, dark-themed creative agency portfolio. It showcases branding, product design, graphics, VFX, and animation services. The site is built with vanilla HTML, CSS, and JavaScript—no frameworks or build tools.

**Key files/directories:**
- `index.html` – Landing page (hero, about, service previews, portfolio preview)
- `services.html` – Service details (grid sections, image + text pairs)
- `portfolio.html` – Filterable project gallery (category filter, project cards)
- `project.html` – Project case study template (challenge, approach, results)
- `contact.html` – Contact form (client-side validation) and FAQ accordion
- `css/global.css` – CSS variables, resets, base styles
- `css/components.css` – All reusable UI components (cards, buttons, overlays, forms, menu, grid)
- `css/landing.css` – Landing page hero and animation styles
- `js/main.js` – Global JS: hamburger menu, smooth scroll, nav state, scroll animations
- `js/portfolio.js` – Portfolio filtering logic (category filter, show/hide with animation)
- `js/contact.js` – Contact form validation, FAQ accordion logic
- `assets/images/` – All imagery (see `assets/images/README.md` for required files/specs)

## Design & UI Patterns
- **Dark mode:** Uses `--color-bg-primary`/`secondary` and blue/coral accents (see `css/global.css`)
- **Mobile-first:** Responsive breakpoints at 768px, 1024px, 1440px
- **Hero sections:** Full viewport, centered, with animated backgrounds (GIFs/WebP preferred)
- **Cards & grids:** `.card`, `.portfolio-item`, `.grid-2`, `.grid-3` for layout
- **Hamburger menu:** Full-screen overlay, slide-in, blur backdrop (`js/main.js`)
- **Portfolio filter:** `.filter-btn` toggles, filters `.portfolio-item` by `data-category` (`js/portfolio.js`)
- **Forms:** Floating labels, real-time validation, error states (`js/contact.js`)
- **FAQ accordion:** Expand/collapse with `.accordion-item` and `.accordion-header` (`js/contact.js`)

## Developer Workflow
- **No build step:** Open `index.html` directly or use VS Code Live Server
- **Testing:** Manually check all breakpoints and browsers (Chrome, Firefox, Safari, Edge)
- **Image management:** Place/optimize images in `assets/images/` (see `assets/images/README.md`)
- **Portfolio updates:** Add new cards in `portfolio.html` (see card markup example in README)
- **Contact form:** Client-side only; backend integration requires replacing simulated submit in `js/contact.js`

## Naming & Conventions
- **HTML:** Lowercase, hyphens (`project-detail.html`)
- **CSS:** Lowercase, component-based (`button.css`, `hero.css`)
- **JS:** camelCase (`portfolioFilter.js`)
- **Images:** Lowercase, hyphens, descriptive (`hero-laptop-glow.png`)

## Integration & Extensibility
- **No external JS dependencies**; all logic is custom and modular
- **No CMS/admin**; all content is static and updated manually
- **Image formats:** Prefer WebP/GIF for animations, JPG/PNG for photos (optimize for web)

## Known Limitations
- No backend for contact form (API integration needed for production)
- Static content only (no dynamic/CMS features)
- Portfolio/project updates require manual HTML edits

---
**For AI agents:**
- Follow the modular JS pattern (one concern per file)
- Use CSS custom properties for all colors/spacing
- Maintain dark theme and blue/coral accent consistency
- Reference `assets/images/README.md` for image requirements
- Test all UI at mobile, tablet, and desktop breakpoints
