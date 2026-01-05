# Funnkar Design House – Copilot AI Agent Instructions

## Project Purpose & Structure
Funnkar Design House is a static, dark-themed creative agency portfolio. It showcases branding, product design, graphics, VFX, and animation services. The site is built with vanilla HTML, CSS, and JavaScript—no frameworks or build tools required.

**Current Status**: ✅ PRODUCTION READY
- All features implemented and tested
- Contact form integrated with Google Sheets backend
- Responsive design optimized for all major devices
- Performance optimized with lazy loading and zero dependencies

**Key files/directories:**
- `index.html` – Landing page (hero, about, service previews, portfolio preview)
- `services.html` – Service details (grid sections, image + text pairs)
- `portfolio.html` – Filterable project gallery (category filter, project cards)
- `project.html` – Project case study template (challenge, approach, results)
- `contact.html` – Contact form (Google Forms integration) and FAQ accordion
- `image-guide.html` – Interactive image placeholder generator for development
- `css/global.css` – CSS variables, resets, base styles, responsive breakpoints
- `css/components.css` – All reusable UI components (cards, buttons, forms, menu, grid)
- `css/landing.css` – Landing page hero and animation styles
- `js/main.js` – Global JS: hamburger menu, smooth scroll, nav state, scroll animations
- `js/portfolio.js` – Portfolio filtering logic (category filter, show/hide with animation)
- `js/contact.js` – Contact form submission to Google Apps Script, validation, FAQ accordion logic
- `assets/images/` – All imagery (see `assets/images/README.md` for specs)
- `README.md` – Complete project documentation
- `QUICKSTART.md` – Quick setup guide
- `QUICKSTART-UPDATED.md` – Updated quickstart with contact form details
- `PRODUCTION-CHECKLIST.md` – Production optimization summary
- `PROJECT-COMPLETE.md` – Project completion checklist

## Design & UI Patterns
- **Dark mode:** Uses `--color-bg-primary` (#0A0A0A) / `secondary` (#1A1A1A) with blue (#5B9EFF) and coral (#FF6B6B) accents
- **Mobile-first responsive:** Breakpoints at 480px (mobile), 768px (tablet), 1024px (desktop), 1440px+ (wide)
- **Hero sections:** Full viewport, centered, with animated backgrounds (GIFs/WebP)
- **Cards & grids:** `.card`, `.portfolio-item`, `.grid-2`, `.grid-3` for layout
- **Hamburger menu:** Full-screen overlay, slide-in, blur backdrop (`js/main.js`)
- **Portfolio filter:** `.filter-btn` toggles, filters `.portfolio-item` by `data-category` (`js/portfolio.js`)
- **Contact form:** Floating labels, real-time validation, error states, Google Forms submission (`js/contact.js`)
- **FAQ accordion:** Expand/collapse with `.accordion-item` and `.accordion-header` (`js/contact.js`)
- **Lazy loading:** All images use `loading="lazy"` attribute for performance

## Contact Form Integration (NEW)
**Status**: ✅ Production-ready with Google Apps Script backend

- Form submits to Google Apps Script web app (no server needed)
- Data writes directly to Google Sheet (`FDH_Website_Responses` tab)
- Features:
  - Real-time validation (required fields: Full Name, Email, Subject, Message)
  - Country code dropdown (40+ countries)
  - Phone number with +code format
  - Inline status messages (success/error)
  - Toast notifications
- Setup: See `QUICKSTART-UPDATED.md` for Google Apps Script deployment
- **Entry Point**: `GOOGLE_FORM_URL` in `js/contact.js` (update with your deployment URL)

## Responsive Design & Accessibility
- **Breakpoints**: 480px (mobile), 768px (tablet), 1024px (desktop), 1440px+ (wide)
- **Mobile-first approach:** Start with mobile, enhance for larger screens
- **Touch-friendly:** Minimum 44px touch targets on mobile
- **Images:** All use `loading="lazy"` for performance
- **Semantic HTML:** Proper use of `<nav>`, `<section>`, `<button>`, `<form>`
- **ARIA labels:** Form status container uses `role="status" aria-live="polite"`
- **Alt text:** All images have descriptive alt text

## Developer Workflow
- **No build step:** Open `index.html` directly or use VS Code Live Server
- **Testing:** Manually test all breakpoints (375px, 480px, 768px, 1024px, 1440px) and browsers
- **Image management:** Place/optimize images in `assets/images/` (see `assets/images/README.md`)
- **Portfolio updates:** Add new cards in `portfolio.html` with proper `data-category`
- **Contact form:** Already integrated; configure Google Apps Script backend for your use
- **Performance:** No console.log in production, lazy loading on images, CSS variables for theming

## Code Quality Standards
- **No external dependencies** – vanilla JS, no libraries
- **Clean code:** No unused imports, dead code, or debug statements
- **CSS conventions:** Use CSS variables from `global.css`, kebab-case for class names
- **JS conventions:** camelCase for variables/functions, semantic function names
- **HTML conventions:** Lowercase tags/attributes, semantic elements
- **Comments:** Minimal, only for complex logic

## Naming & Conventions
- **HTML:** Lowercase, hyphens (`portfolio-item`, `menu-overlay`)
- **CSS:** Lowercase, component-based (`.card`, `.hero`, `.portfolio-item`)
- **JS:** camelCase (`portfolioFilter()`, `validateForm()`)
- **Images:** Lowercase, hyphens, descriptive (`hero-vid.gif`, `laptop.png`)
- **CSS Variables:** `--color-*`, `--spacing-*`, `--font-*` (defined in `global.css`)

## Integration & Extensibility
- **No external JS dependencies** – all logic is custom and modular
- **Static content** – no dynamic/CMS features; all content manually updated in HTML
- **CSS custom properties** – centralized in `:root` for easy theming
- **Modular JS** – separate files for concerns (main.js, portfolio.js, contact.js)
- **Google Apps Script backend** – serverless solution for contact form

## Known Limitations & Future Considerations
- ✅ Contact form fully integrated with Google Sheets (no longer a limitation)
- Static content only (no dynamic/CMS features)
- Portfolio/project updates require manual HTML edits
- No backend server required (uses Google Apps Script)

## Performance & Optimization Status
✅ **Already Implemented:**
- Lazy loading on all images
- No console.log or debug code
- CSS variables for theming
- Minimal CSS/JS (no minification needed for small size)
- No external fonts (using system fonts + Poppins via Google Fonts)
- Intersection Observer for scroll animations (efficient)
- Debounced event listeners (resize, scroll)

## Testing Checklist for AI Agents
Before deploying changes:
- [ ] Test all pages (index, services, portfolio, project, contact)
- [ ] Test responsive breakpoints (375px, 480px, 768px, 1024px, 1440px)
- [ ] Test on mobile, tablet, desktop (Chrome, Firefox, Safari, Edge)
- [ ] Test portfolio filter functionality
- [ ] Test contact form submission
- [ ] Check browser console (F12) for errors
- [ ] Verify lazy loading images load on scroll
- [ ] Test hamburger menu on mobile
- [ ] Test form validation (required fields, email format)
- [ ] Verify no unused CSS classes or dead code

## Best Practices for AI Agents
1. **Always test responsive design** – test at all breakpoints, not just desktop
2. **Maintain dark theme consistency** – use CSS variables for colors
3. **Keep it vanilla** – no frameworks, pure HTML/CSS/JS
4. **Lazy load images** – add `loading="lazy"` to all img tags
5. **No external dependencies** – all functionality in vanilla JS
6. **Clean code** – remove console.log, unused code before committing
7. **Update documentation** – keep README and QUICKSTART current
8. **Test form submission** – ensure Google Apps Script integration working
9. **Maintain modular JS** – keep main.js, portfolio.js, contact.js separate
10. **Use CSS variables** – all colors/spacing from global.css

## Deployment Instructions
1. **GitHub Pages:** Push to GitHub, enable Pages in Settings
2. **Netlify:** Drag folder to Netlify or connect GitHub repo
3. **Vercel:** Use Vercel CLI: `vercel`
4. **Custom domain:** Update DNS settings to point to hosting service

## Contact Information (Update as Needed)
- **Email:** funnkar.designhouse@gmail.com
- **Phone:** +91 898 351 6874
- **Location:** Nashik, Maharashtra

---

**For AI agents:**
- Follow the modular JS pattern (one concern per file)
- Use CSS custom properties for all colors/spacing
- Maintain dark theme and blue/coral accent consistency
- Lazy load all images for performance
- Test responsive design at multiple breakpoints
- Keep code clean and production-ready (no debug code)
- Document major changes in README and QUICKSTART files
