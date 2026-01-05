# Funnkar Design House

A modern, dark-themed creative agency portfolio website showcasing branding, product design, graphics, VFX, and animation services.

## 🎨 Features

- **Responsive Design**: Mobile-first approach with breakpoints at 480px, 768px, 1024px, 1440px
- **Dark Theme**: Sleek dark UI with blue (#5B9EFF) and coral (#FF6B6B) accents
- **Interactive Components**: Full-screen hamburger menu, portfolio filters, FAQ accordion
- **Smooth Animations**: Scroll animations, transitions, hover effects with glow
- **Form Validation**: Real-time contact form validation with inline error messages
- **Google Forms Integration**: Contact form submits to Google Sheets via Apps Script backend
- **Portfolio Filter**: Category-based filtering with animated transitions
- **Performance Optimized**: Vanilla JS, CSS custom properties, lazy loading on images, no external dependencies
- **Production Ready**: All code cleaned, optimized, and tested for deployment
- **Accessibility**: Semantic HTML, ARIA labels, mobile-friendly navigation

## 🚀 Status

✅ **PRODUCTION READY** - All features implemented, tested, and optimized

## 📁 Project Structure

```
Funnkar-Design-House/
├── index.html              # Landing page with hero, services, portfolio preview
├── services.html           # Detailed services showcase
├── portfolio.html          # Filterable project gallery
├── project.html            # Project case study template
├── contact.html            # Contact form with FAQ accordion
├── image-guide.html        # Interactive image placeholder generator
├── css/
│   ├── global.css         # CSS variables, resets, base styles, utilities
│   ├── components.css     # Reusable components (buttons, cards, forms, etc.)
│   └── landing.css        # Landing page hero and animation styles
├── js/
│   ├── main.js            # Global functionality (menu, navigation, animations)
│   ├── portfolio.js       # Portfolio filtering logic
│   └── contact.js         # Form validation and FAQ accordion
├── assets/
│   └── images/            # All website imagery (see assets/images/README.md)
├── .github/
│   └── copilot-instructions.md  # AI agent guidelines
├── QUICKSTART.md           # Quick setup guide
├── PROJECT-COMPLETE.md     # Project completion checklist
├── .gitignore              # Git ignore configuration
└── .gitattributes          # Git line ending configuration
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- VS Code with Live Server extension (recommended for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bernie-Dramos/Funnkar-Design-House.git
   cd Funnkar-Design-House
   ```

2. **Add Images**
   - Place your images in `assets/images/` directory
   - See `assets/images/README.md` for required image list and specifications
   - Use placeholder images from Unsplash or Pexels during development

3. **Run Locally**
   - **Option 1**: Right-click `index.html` → Open with Live Server (VS Code)
   - **Option 2**: Open `index.html` directly in your browser
   - **Option 3**: Use any local server (Python, Node.js, etc.)

## 🎯 Pages Overview

### Landing Page (`index.html`)
- Hero section with animated introduction
- About section with company overview
- Service previews (Branding, Graphics, VFX)
- Portfolio showcase grid
- Call-to-action section

### Services Page (`services.html`)
- Detailed service descriptions
- Service-specific imagery
- Feature lists for each service
- CTA to contact page

### Portfolio Page (`portfolio.html`)
- Filterable project grid (All, Branding, UI/UX, Web Dev, Graphics, VFX)
- Project cards with tags
- Animated filtering transitions

### Project Page (`project.html`)
- Project hero with client info
- Detailed case study layout
- Challenge, approach, and solution sections
- Results metrics
- Project gallery

### Contact Page (`contact.html`)
- Contact form with validation
- Contact information sidebar
- FAQ accordion section
- Social media links

## 🎨 Design System

### Colors
```css
--color-bg-primary: #0A0A0A      /* Main background */
--color-bg-secondary: #1A1A1A    /* Secondary background */
--color-accent-blue: #5B9EFF     /* Primary accent */
--color-accent-coral: #FF6B6B    /* CTA buttons */
--color-text-primary: #FFFFFF    /* Headings */
--color-text-secondary: #B0B0B0  /* Body text */
```

### Typography
- **Font**: Poppins (Google Fonts) with system font fallback
- **Headings**: Bold, clamp() for responsive sizing
- **Body**: 16px base, 1.6 line-height

### Responsive Breakpoints (Standardized ✅)
The site uses consistent, industry-standard CSS breakpoints across all files:

```css
@media (max-width: 480px)  { } /* Mobile: iPhones, small Android phones */
@media (max-width: 768px)  { } /* Tablet: iPad, Samsung Tab */
@media (max-width: 1024px) { } /* Small Desktop: iPad landscape, small laptops */
@media (min-width: 1025px) { } /* Desktop: Full-size monitors */
```

**Device Coverage:**
- 📱 **Mobile** (320-480px): iPhone SE (375px), iPhone 12 (390px), Galaxy S21 (360px)
- 📱 **Tablet** (481-768px): iPad mini (520px), iPad (768px)
- 💻 **Desktop** (769-1024px): iPad landscape (1024px), small laptops (900px+)
- 💻 **Wide** (1025px+): MacBook (1440px), Desktop (1920px), 4K (2560px)

### Mobile-First Approach ✅
- Base styles optimized for **mobile devices**
- Media queries **add** features for larger screens
- Reduces CSS bloat on mobile devices
- Better performance on slower connections

### Responsive Features
- ✅ **Flexible Typography**: Uses `clamp()` for fluid font sizing (scales smoothly)
- ✅ **Flexible Layouts**: Grid and flexbox adapt to all screen sizes
- ✅ **Responsive Images**: `width: 100%; height: auto;` with `loading="lazy"`
- ✅ **Touch-Friendly**: Minimum 44px × 44px touch targets on mobile
- ✅ **Full-Screen Menu**: Hamburger menu works perfectly on all devices
- ✅ **Form Responsive**: Contact form adjusts from 1-2 columns based on screen size
- ✅ **Portfolio Grid**: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)

## 📧 Contact Form Integration

The contact form is integrated with **Google Apps Script** for serverless backend:

1. Form submits to Google Apps Script web app
2. Data is automatically written to `FDH_Website_Responses` Google Sheet
3. Inline status messages confirm success/error
4. Country code dropdown (40+ countries supported)
5. Real-time validation for required fields
6. Phone number accepts +country-code format

**Note**: Form is production-ready and requires no backend server.

## 🛠️ Customization

### Changing Colors
Edit CSS variables in `css/global.css`:
```css
:root {
  --color-accent-blue: #YOUR_COLOR;
  --color-accent-coral: #YOUR_COLOR;
}
```

### Adding Portfolio Items
In `portfolio.html`, add a new card:
```html
<div class="card portfolio-item" data-category="branding ui-ux">
  <img src="assets/images/your-image.jpg" alt="Project" class="card-image" loading="lazy">
  <div class="card-content">
    <h3 class="card-title">Your Project</h3>
    <p class="card-description">Description</p>
    <div class="card-tags">
      <span class="tag">Tag1</span>
      <span class="tag">Tag2</span>
    </div>
  </div>
</div>
```

### Update Contact Form
1. Create a Google Form
2. Create a Google Apps Script with the provided code
3. Update the `GOOGLE_FORM_URL` in `js/contact.js`
4. Update sheet name if needed

## 🧪 Responsive Testing

Comprehensive responsive design has been implemented and tested across all major devices.

### Testing at Each Breakpoint

#### Mobile (480px) - ✅ Tested
```
Devices: iPhone SE (375px), iPhone 12 (390px), Galaxy S21 (360px)
Status: ✅ Full Width
- Hamburger menu visible and functional
- Form inputs full-width (98vw)
- Touch targets minimum 44px × 44px
- Portfolio items single column
- All text readable without zooming
- No horizontal scroll
- Hero image/video properly scaled
- Navigation smooth and accessible
```

#### Tablet Portrait (768px) - ✅ Tested
```
Devices: iPad (768px), iPad mini (520px), Samsung Tab (600px)
Status: ✅ Optimized
- Menu hamburger still visible
- Portfolio items 2-column grid
- Form has better spacing
- Readable without zooming
- All interactions smooth
```

#### Tablet Landscape & Small Desktop (1024px) - ✅ Tested
```
Devices: iPad landscape (1024px), small laptops (900px-1024px)
Status: ✅ Desktop Features Active
- Full desktop layout
- Multi-column grids working
- Container max-width applied
- Proper spacing and hierarchy
```

#### Large Desktop (1440px+) - ✅ Tested
```
Devices: MacBook (1440px), Desktop (1920px), 4K (2560px)
Status: ✅ Fully Optimized
- Maximum width container (~1200px-1400px)
- Content properly centered
- No excessive white space
- Full feature set active
```

### Cross-Browser Compatibility ✅
Tested on:
- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (macOS 12+)
- ✅ Safari (iOS 14+)
- ✅ Edge (latest)

### Specific Component Testing

**Contact Form**
- ✅ Full-width on mobile (98vw)
- ✅ Country code dropdown accessible on all sizes
- ✅ Phone validation working
- ✅ Two-column layout at 768px+
- ✅ Form status messages display correctly
- ✅ Submit button full-width on mobile, auto on desktop

**Portfolio & Gallery**
- ✅ Single column (mobile, 480px)
- ✅ 2-column grid (tablet, 768px)
- ✅ 3-column grid (desktop, 1024px+)
- ✅ Filter buttons responsive
- ✅ Pagination buttons properly sized

**Navigation & Menu**
- ✅ Fixed logo always visible
- ✅ Hamburger menu button (44px × 44px)
- ✅ Full-screen overlay menu
- ✅ Menu closes on back/close button
- ✅ Smooth animations
- ✅ No overlap with content

**Hero Sections**
- ✅ Mobile: 60-70vh height
- ✅ Tablet: 70-80vh height
- ✅ Desktop: 90-100vh height
- ✅ Text readable at all sizes
- ✅ Background images/videos scale properly

### Performance Testing ✅
- ✅ **Lazy Loading**: All images use `loading="lazy"` attribute
- ✅ **Fast Mobile**: No layout shift during load
- ✅ **Smooth Animations**: Menu and transitions 60fps
- ✅ **Form Responsive**: Submit works instantly on all devices

### For Manual Testing

**Using VS Code DevTools:**
1. Open DevTools (F12)
2. Click device toggle (Ctrl+Shift+M)
3. Select device from dropdown:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - iPad Pro (1024px)
4. Test form submission
5. Verify menu interactions
6. Check portfolio filter

**On Actual Devices:**
- Open `http://localhost:5500` in browser
- Test contact form submission
- Verify touch interactions
- Check menu on mobile
- Test form validation

### Known Good Practices
- ✅ Consistent breakpoints (480px, 768px, 1024px)
- ✅ Mobile-first CSS approach
- ✅ Flexible images and media
- ✅ Touch-friendly form inputs
- ✅ Semantic HTML structure
- ✅ ARIA labels for accessibility

---

### Comprehensive Responsive Testing Guide
For detailed testing procedures and checklists, see [RESPONSIVE-TESTING-GUIDE.md](RESPONSIVE-TESTING-GUIDE.md)

## 📝 Development Notes

### Performance Features
- ✅ **Lazy Loading**: All images use `loading="lazy"` attribute
- ✅ **No Build Tools**: Pure HTML, CSS, JavaScript
- ✅ **Minimal Dependencies**: Zero external libraries
- ✅ **Optimized Media**: Compressed GIFs, MP4 videos
- ✅ **CSS Variables**: Centralized color and spacing system
- ✅ **Production Clean**: No console.log or debug code

### Browser Support
- Chrome/Edge: 85+
- Firefox: 80+
- Safari: 13+
- Mobile Safari: iOS 12+

## 🚀 Deployment

### GitHub Pages
1. Go to repository Settings → Pages
2. Select branch: `main`
3. Select folder: `/ (root)`
4. Save and wait for deployment

### Netlify
1. Drag and drop the entire folder to Netlify
2. Or connect your GitHub repository
3. Build settings: None needed (static site)
4. Set environment variables for Google Forms if needed

### Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow prompts to deploy

## 📄 License

Copyright © 2025 Funnkar Design House. All rights reserved.

## 🤝 Contributing

This is a portfolio website. For inquiries, please use the contact form or email directly.

## 📞 Contact

- **Email**: funnkar.designhouse@gmail.com
- **Phone**: +91 898 351 6874
- **Location**: Nashik, Maharashtra
- **Website**: [Live Site URL]

---

Built with ❤️ by Funnkar Design House
