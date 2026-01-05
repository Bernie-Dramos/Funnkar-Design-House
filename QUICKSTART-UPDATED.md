# 🚀 Quick Start Guide - Updated

Get your Funnkar Design House website up and running in minutes!

## Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- VS Code with Live Server extension (recommended)
- For contact form: Google Account (to set up serverless backend)

## Step 1: Open the Project

1. Open this folder in VS Code
2. Install the "Live Server" extension if you don't have it:
   - Open VS Code Extensions (Ctrl+Shift+X / Cmd+Shift+X)
   - Search for "Live Server"
   - Click Install

## Step 2: Add Images

You have two options:

### Option A: Use Placeholder Images (Quick Start)
1. Open `image-guide.html` in your browser
2. Click "Generate" buttons to create placeholder images
3. Right-click and save each image to `assets/images/` folder
4. Use the exact filenames shown in the guide

### Option B: Use Real Images
1. Export images from your design tool
2. Place them in `assets/images/` folder
3. See `assets/images/README.md` for required filenames and specs
4. **Important**: All images use `loading="lazy"` for performance

## Step 3: Setup Contact Form (Production Ready)

The contact form is already integrated with Google Sheets via Google Apps Script!

### Quick Setup:
1. Create a Google Form and corresponding Google Sheet
2. Note the sheet URL to get your **SHEET_ID**
3. Go to [script.google.com](https://script.google.com)
4. Create a new Apps Script project
5. Paste the provided Apps Script code (documented in README)
6. Deploy as a web app (Execute as: your account, Who has access: Anyone)
7. Copy the deployment URL
8. Update `GOOGLE_FORM_URL` in `js/contact.js`
9. Update `SHEET_NAME` to match your Google Sheet tab name
10. Test the form - responses will appear in your Google Sheet

**Status**: Contact form is **PRODUCTION READY** - no backend server needed!

## Step 4: Run the Website

1. Right-click on `index.html` in VS Code
2. Select "Open with Live Server"
3. Your website will open at `http://localhost:5500`

## Step 5: Test All Pages

Navigate and verify each page works:
- ✅ **Home** (index.html) - Hero, services, portfolio preview
- ✅ **Services** (services.html) - Service details with images
- ✅ **Portfolio** (portfolio.html) - Project grid with **working filters**
- ✅ **Project** (project.html) - Case study template
- ✅ **Contact** (contact.html) - Form with **real submission** + FAQ

### Test Contact Form
1. Fill out the form with test data
2. Click Submit
3. Check your Google Sheet - data should appear!

### Test on Mobile
1. Open DevTools (F12)
2. Click Device Toolbar (Ctrl+Shift+M)
3. Test at these breakpoints:
   - **Mobile**: 375px, 480px
   - **Tablet**: 768px, 1024px
   - **Desktop**: 1440px, 1920px
4. Verify responsive layout and touch interactions

## Step 6: Customize Content

### Update Text Content
1. Open any `.html` file
2. Find the text you want to change
3. Update it directly in the HTML

### Change Colors
1. Open `css/global.css`
2. Modify CSS variables in the `:root` section:
   ```css
   --color-accent-blue: #5B9EFF;  /* Primary accent */
   --color-accent-coral: #FF6B6B; /* CTA buttons */
   ```

### Update Contact Information
Update all `.html` files:
- Email: funnkar.designhouse@gmail.com → your email
- Phone: +91 898 351 6874 → your phone
- Location: Nashik, Maharashtra → your location
- Social links in menu overlay

### Add Portfolio Items
1. Open `portfolio.html`
2. Copy an existing `.card.portfolio-item` block
3. Paste and update:
   - Image src
   - Project title
   - Description
   - `data-category` (all, branding, ui-ux, web-dev, graphics, vfx)
4. Add image to `assets/images/` with `loading="lazy"`

## Step 7: Test Responsiveness (Critical)

### Mobile-First Responsive Breakpoints
```
Mobile Phone:      320px - 480px
Tablet Portrait:   481px - 768px  
Tablet Landscape:  769px - 1024px
Desktop:           1025px+
```

### Responsive Testing Checklist
- ✅ Menu hamburger visible on mobile, hidden on desktop
- ✅ Portfolio items stack on mobile, grid on desktop
- ✅ Form inputs full-width on mobile, side-by-side on tablet
- ✅ Images scale proportionally
- ✅ Text readable without zooming
- ✅ Touch targets minimum 44px on mobile
- ✅ No horizontal scroll

### Browser DevTools Testing
1. Press F12 to open DevTools
2. Click responsive design mode (Ctrl+Shift+M)
3. Test all device presets:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - Samsung S21 (360px)
   - iPad (768px)
   - iPad Pro (1024px)
4. Test landscape orientation
5. Check console for errors

## Common Tasks

### Update Logo
Find `.logo-fixed` in HTML files:
```html
<a href="index.html" class="logo-fixed">
    <img src="assets/images/your-logo.png" alt="Logo" loading="lazy">
</a>
```

### Add FAQ Questions
In `contact.html`, add to the accordion:
```html
<div class="accordion-item">
    <div class="accordion-header">
        <h3 class="accordion-title">Your Question?</h3>
        <span class="accordion-icon">+</span>
    </div>
    <div class="accordion-content">
        Your answer text here
    </div>
</div>
```

### Change Page Title
Update the `<title>` tag in each HTML file's `<head>` section - this changes browser tab and SEO.

### Add Custom Styling
Edit the relevant CSS file:
- Global styles → `css/global.css`
- Component styles → `css/components.css`
- Landing page → `css/landing.css`

Follow existing naming conventions (kebab-case).

## Performance Optimizations (Already Applied)

✅ **Lazy Loading** - All images use `loading="lazy"` attribute  
✅ **No Build Tools** - Pure HTML, CSS, JavaScript  
✅ **Zero Dependencies** - No external libraries  
✅ **Compressed Media** - Optimized GIFs, MP4 videos  
✅ **CSS Variables** - Centralized colors and spacing  
✅ **Production Clean** - No console.log or debug code  

## Troubleshooting

### Images Not Showing
- ✅ Check filenames match exactly (case-sensitive)
- ✅ Verify files are in `assets/images/` folder
- ✅ Check browser console (F12 → Console) for 404 errors

### Contact Form Error
- ✅ Ensure `GOOGLE_FORM_URL` is set correctly in `js/contact.js`
- ✅ Verify Google Apps Script is deployed (not just saved)
- ✅ Check `SHEET_NAME` matches your Google Sheet tab exactly
- ✅ Confirm "Anyone" can access the Apps Script web app

### Portfolio Filter Not Working
- ✅ Check `js/portfolio.js` is linked in `portfolio.html`
- ✅ Verify `data-category` attributes on all portfolio items
- ✅ Check browser console for JavaScript errors

### Responsive Layout Issues
- ✅ Check DevTools (F12) → responsive design mode
- ✅ Test at exact breakpoints: 375px, 480px, 768px, 1024px
- ✅ Check CSS media queries in `global.css` and `components.css`
- ✅ Verify no fixed widths preventing responsiveness

## Deployment

### GitHub Pages (Recommended)
1. Push to GitHub
2. Go to repository Settings → Pages
3. Select branch `main`, folder `/root`
4. Done! Site available at `yourusername.github.io/Funnkar-Design-House`

### Netlify (Easy)
1. Drag and drop entire folder to Netlify
2. Or connect GitHub repo for automatic deploys
3. Custom domain available

### Vercel
```bash
npm install -g vercel
vercel
```

## Next Steps

### Enhancements to Consider
- [ ] Add blog section
- [ ] Integrate with CMS (Contentful, Sanity)
- [ ] Add Google Analytics
- [ ] Add image optimization (WebP format)
- [ ] Add service worker for offline support
- [ ] Add email notifications for form submissions

### Performance Improvements
- [ ] Minify CSS/JS for production
- [ ] Optimize images with TinyPNG
- [ ] Enable server-side caching
- [ ] Use CDN for static assets
- [ ] Add performance monitoring

## Resources

- 📖 **Full Docs**: See `README.md` for comprehensive documentation
- 🎨 **Dev Guidelines**: See `.github/copilot-instructions.md`
- 📸 **Image Specs**: See `assets/images/README.md`
- ✅ **Production Checklist**: See `PRODUCTION-CHECKLIST.md`

## Get Help

- Check the browser console (F12) for error messages
- Review the source HTML/CSS to understand structure
- Use GitHub Copilot or ChatGPT for code questions
- Test in multiple browsers for compatibility

---

**You're all set! 🎉 Happy building!**

For issues or questions, create a GitHub issue or reach out to the team.
