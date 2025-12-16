# Funnkar Design House

A modern, dark-themed creative agency portfolio website showcasing branding, product design, graphics, VFX, and animation services.

## 🎨 Features

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Dark Theme**: Sleek dark UI with blue (#5B9EFF) and coral (#FF6B6B) accents
- **Interactive Components**: Hamburger menu, portfolio filters, FAQ accordion
- **Smooth Animations**: Scroll animations, transitions, and hover effects
- **Form Validation**: Real-time contact form validation
- **Performance Optimized**: Vanilla JS, CSS custom properties, no frameworks

## 📁 Project Structure

```
Funnkar-Design-House/
├── index.html              # Landing page with hero, services, portfolio preview
├── services.html           # Detailed services showcase
├── portfolio.html          # Filterable project gallery
├── project.html            # Project case study template
├── contact.html            # Contact form with FAQ accordion
├── css/
│   ├── global.css         # CSS variables, resets, base styles, utilities
│   └── components.css     # Reusable components (buttons, cards, forms, etc.)
├── js/
│   ├── main.js            # Global functionality (menu, navigation, animations)
│   ├── portfolio.js       # Portfolio filtering logic
│   └── contact.js         # Form validation and FAQ accordion
├── assets/
│   └── images/            # All website imagery (see assets/images/README.md)
└── .github/
    └── copilot-instructions.md  # AI agent guidelines
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
- **Font**: System font stack for performance
- **Headings**: Bold, clamp() for responsive sizing
- **Body**: 16px base, 1.6 line-height

### Breakpoints
- Mobile: 320px - 768px
- Tablet: 769px - 1024px
- Desktop: 1025px+

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
  <img src="assets/images/your-image.jpg" alt="Project" class="card-image">
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

### Contact Form Backend
Replace the simulated submission in `js/contact.js` with your API endpoint:
```javascript
async function submitForm(formData) {
  const response = await fetch('/your-api-endpoint', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  // Handle response
}
```

## 🧪 Testing

Test the website across:
- Multiple browsers (Chrome, Firefox, Safari, Edge)
- Different screen sizes (320px, 768px, 1024px, 1440px+)
- Mobile devices (iOS and Android)

## 📝 Development Notes

### Key Features
- **Hamburger Menu**: Full-screen overlay with smooth transitions
- **Portfolio Filter**: Category-based filtering with animations
- **Form Validation**: Real-time validation with error messages
- **Scroll Animations**: Elements fade in as you scroll
- **Responsive Images**: Flexible sizing and optimization

### Browser Support
- Chrome/Edge: 90+
- Firefox: 88+
- Safari: 14+
- Mobile Safari: iOS 14+

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

### Vercel
```bash
npm install -g vercel
vercel
```

## 📄 License

Copyright © 2025 Funnkar Design House. All rights reserved.

## 🤝 Contributing

This is a portfolio website. For inquiries, please use the contact form or email directly.

## 📞 Contact

- **Email**: info@funnkar.com
- **Phone**: +1 (123) 456-7890
- **Website**: [Live Site URL]

---

Built with ❤️ by Funnkar Design House
