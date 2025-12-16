# 🚀 Quick Start Guide

Get your Funnkar Design House website up and running in minutes!

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
1. Export images from your Figma design
2. Place them in `assets/images/` folder
3. See `assets/images/README.md` for required filenames and specs

## Step 3: Run the Website

1. Right-click on `index.html` in VS Code
2. Select "Open with Live Server"
3. Your website will open in your browser at `http://localhost:5500`

## Step 4: Test All Pages

Navigate through all pages to ensure everything works:
- ✅ Home (index.html) - Hero, services, portfolio preview
- ✅ Services (services.html) - Service details
- ✅ Portfolio (portfolio.html) - Project grid with filters
- ✅ Project (project.html) - Case study template
- ✅ Contact (contact.html) - Form and FAQ

## Step 5: Customize Content

### Update Text Content
1. Open any `.html` file
2. Find the text you want to change
3. Update it directly in the HTML

### Change Colors
1. Open `css/global.css`
2. Modify CSS variables in the `:root` section:
   ```css
   --color-accent-blue: #5B9EFF;  /* Change this */
   --color-accent-coral: #FF6B6B; /* Change this */
   ```

### Add Portfolio Items
1. Open `portfolio.html`
2. Copy an existing `.card.portfolio-item` div
3. Paste and modify the content
4. Update `data-category` for filtering

## Step 6: Test Responsiveness

1. Open Chrome DevTools (F12 or Right-click → Inspect)
2. Click the device toolbar icon (Ctrl+Shift+M / Cmd+Shift+M)
3. Test different screen sizes:
   - Mobile: 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1440px, 1920px

## Common Tasks

### Update Logo
1. Find `.logo-icon` in HTML files
2. Replace the "F" text or add an image:
   ```html
   <div class="logo-icon">
       <img src="assets/images/logo.svg" alt="Logo">
   </div>
   ```

### Change Contact Information
1. Open `contact.html`
2. Update email, phone, and address in the contact info section
3. Update the same info in menu overlay (all HTML files)

### Add FAQ Questions
1. Open `contact.html`
2. Find the `.accordion-item` section
3. Copy an existing accordion item and modify:
   ```html
   <div class="accordion-item">
       <div class="accordion-header">
           <h3 class="accordion-title">Your Question?</h3>
           <span class="accordion-icon">+</span>
       </div>
       <div class="accordion-content">
           <div class="accordion-body">
               <p>Your answer here.</p>
           </div>
       </div>
   </div>
   ```

### Configure Form Backend
1. Open `js/contact.js`
2. Find the `submitForm` function
3. Replace the fetch URL with your API endpoint
4. Or integrate with services like Formspree, Netlify Forms, or EmailJS

## Troubleshooting

### Images Not Showing
- ✅ Check image filenames match exactly (case-sensitive)
- ✅ Verify images are in `assets/images/` folder
- ✅ Check browser console (F12) for 404 errors

### Hamburger Menu Not Working
- ✅ Ensure `js/main.js` is loaded in HTML
- ✅ Check browser console for JavaScript errors
- ✅ Verify element IDs match: `hamburger` and `menuOverlay`

### Portfolio Filter Not Working
- ✅ Ensure `js/portfolio.js` is loaded in `portfolio.html`
- ✅ Check `data-category` attributes on portfolio items
- ✅ Verify `data-filter` attributes on filter buttons

### Form Not Submitting
- ✅ Form currently shows a success message (demo mode)
- ✅ To connect to backend, edit `submitForm()` in `js/contact.js`
- ✅ Check browser console for errors

## Next Steps

### Ready to Deploy?
1. **GitHub Pages**: Push to GitHub, enable Pages in Settings
2. **Netlify**: Drag and drop project folder to Netlify
3. **Vercel**: Connect GitHub repo or use Vercel CLI

### Want to Add Features?
- Add a blog section
- Integrate with a CMS (Contentful, Sanity)
- Add analytics (Google Analytics, Plausible)
- Connect form to email service
- Add loading animations
- Implement image lazy loading

## Need Help?

- 📖 Check `README.md` for detailed documentation
- 🎨 See `.github/copilot-instructions.md` for development guidelines
- 📸 Reference `assets/images/README.md` for image specifications
- 💬 Use GitHub Copilot for code assistance

## Performance Tips

1. **Optimize Images**: Use TinyPNG or Squoosh before uploading
2. **Use WebP**: Convert images to WebP format for better compression
3. **Minify CSS/JS**: Use online tools or build processes for production
4. **Enable Caching**: Configure server headers for static assets
5. **Use a CDN**: Consider Cloudflare or similar for faster delivery

---

**Happy Building! 🎉**

If you encounter any issues or have questions, feel free to create an issue in the GitHub repository.
