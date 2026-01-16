# Responsive Breakpoints Reference Guide

## Quick Breakpoint Reference

```
┌─────────────────────────────────────────────────────────────────┐
│                     RESPONSIVE BREAKPOINTS                     │
└─────────────────────────────────────────────────────────────────┘

📱 MOBILE
├─ Screen Width: 320px - 480px
├─ Padding: 1rem - 1.5rem (with clamp)
├─ Menu: Hamburger (≡) - 40×40px
├─ Grid: 1 column
├─ Portfolio: Single column cards
├─ Touch Targets: 44×44px minimum
└─ Use Cases: iPhone SE, Galaxy S21, Moto G

📱 TABLET (Portrait)
├─ Screen Width: 481px - 768px
├─ Padding: 1.5rem - 2.5rem (fluid)
├─ Menu: Hamburger (≡) - 44×44px
├─ Grid: 2 columns
├─ Portfolio: 2-column layout
├─ Form: Full-width inputs
└─ Use Cases: iPad Mini, Galaxy Tab S6

🖥️  TABLET LANDSCAPE / SMALL DESKTOP
├─ Screen Width: 769px - 1024px
├─ Padding: 2rem - 2.5rem
├─ Menu: Still hamburger
├─ Grid: 2 columns
├─ Portfolio: 2-column grid
├─ Desktop Features: Start to activate
└─ Use Cases: iPad, iPad Air, small laptops

🖥️  DESKTOP
├─ Screen Width: 1025px - 1440px
├─ Padding: 3rem - 4rem
├─ Menu: Hidden (desktop nav active)
├─ Grid: 3 columns
├─ Portfolio: 3-column full grid
├─ Layout: Full desktop experience
└─ Use Cases: MacBook, Dell, HP laptops

🖥️  WIDE DESKTOP
├─ Screen Width: 1441px+
├─ Padding: 4rem - 5rem
├─ Max-width: 1400px container
├─ Grid: 3 columns with side spacing
├─ Typography: Large, impactful
└─ Use Cases: 27" monitors, ultra-wide displays
```

## Padding Scale by Breakpoint

```
Mobile (320-480px)       Tablet (481-768px)       Desktop (1025px+)
─────────────────────    ──────────────────────   ──────────────────
1rem (16px)              1.5rem (24px)            3rem (48px)
└─ Tight but safe        └─ Balanced              └─ Spacious
   for small screens        breathing room          and comfortable

clamp(1rem, 2.5vw, X)    clamp(1.5rem, 3vw, X)   clamp(3rem, 5vw, 4rem)
```

## Menu Visibility

```
Mobile/Tablet           Desktop
──────────────         ────────
☰ (Hamburger)         ✕ (Hidden)
Shows Full Overlay     Standard Nav
44-40px Size           Not Displayed
Always Visible         display: none
```

## Grid Layouts

```
Mobile              Tablet              Desktop
──────              ──────              ───────
[  Item  ]          [ Item ][ Item ]    [ Item ][ Item ][ Item ]
                    
                    
[  Item  ]          [ Item ][ Item ]    [ Item ][ Item ][ Item ]

                    
Single Column       Two Columns         Three Columns
1fr                 1fr 1fr             1fr 1fr 1fr
```

## Touch Target Sizing

```
❌ Too Small            ✅ Correct
─────────────────      ──────────────
25×25px                44×44px minimum
Hard to tap            Easy to tap
Accessibility issues   WCAG compliant
```

## Typography Scaling

```
Using clamp(min, preferred, max)

Small Device         Medium Device        Large Device
─────────────        ──────────────       ────────────
Base: 0.85rem        Base: 1rem           Base: 1rem
H1: 2rem             H1: 2.5rem           H1: 5rem
H2: 1.5rem           H2: 2rem             H2: 3rem

Scales smoothly - no jarring jumps!
```

## Color & Contrast Maintained

```
All breakpoints maintain:
─────────────────────────
✓ Dark theme (#0A0A0A background)
✓ Blue accents (#5B9EFF)
✓ Coral highlights (#FF6B6B)
✓ White text (#FFFFFF)
✓ Secondary text (#B0B0B0)

WCAG AA compliance at all sizes
```

## Common Device Sizes

```
📱 Mobile Devices
├─ iPhone SE (375px)         → Mobile breakpoint
├─ iPhone 14 (390px)         → Mobile breakpoint
├─ Galaxy S21 (360px)        → Mobile breakpoint
└─ Google Pixel 6 (412px)    → Mobile breakpoint

📱 Tablets
├─ iPad Mini (768px)         → Tablet breakpoint
├─ iPad Air (820px)          → Small desktop
├─ Galaxy Tab S6 (800px)     → Tablet breakpoint
└─ iPad Pro (1024px)         → Small desktop

🖥️  Desktops & Laptops
├─ MacBook Pro 13" (1280px)  → Desktop
├─ MacBook Pro 16" (1728px)  → Wide desktop
├─ Dell XPS 13 (1280px)      → Desktop
├─ Standard Monitor (1920px) → Wide desktop
└─ Ultra-wide (3440px)       → Wide desktop (clamped)
```

## Testing Viewport Sizes

### Recommended Viewport Tests
```
1. 375px (iPhone SE)
2. 480px (Mobile limit)
3. 768px (Tablet limit)
4. 1024px (Small desktop limit)
5. 1280px (Standard desktop)
6. 1440px (Desktop limit)
7. 1920px (Wide monitor)
```

### DevTools Testing
```
Chrome/Edge DevTools → F12 → Ctrl+Shift+M
1. Select "Responsive Design Mode"
2. Test these widths: 375, 480, 768, 1024, 1280
3. Test portrait/landscape
4. Test touch interactions
```

## Media Query Format Used

```css
/* Mobile-first approach */
Base styles apply to all devices

/* Then add features */
@media (max-width: 480px) { }     /* Mobile specific */
@media (max-width: 768px) { }     /* Tablet & below */
@media (max-width: 1024px) { }    /* Small desktop & below */
@media (min-width: 1025px) { }    /* Desktop & above */
@media (min-width: 1441px) { }    /* Wide desktop */
```

## Performance Tips

✅ What to Do:
- Test on actual devices
- Check responsiveness in DevTools
- Verify touch targets work
- Test menu open/close
- Verify form inputs

❌ What NOT to Do:
- Don't force specific pixel widths
- Don't disable viewport meta tag
- Don't use overflow-x: hidden globally
- Don't ignore focus states
- Don't test only in DevTools

## Validation Checklist

Use this to verify responsive design:

```
Mobile (375px)
─────────────
☐ No horizontal scroll
☐ Hamburger menu visible
☐ Buttons 44×44px+ 
☐ Padding not tight to edges
☐ Forms full-width
☐ Images scale properly
☐ Text readable
☐ Menu overlay works

Tablet (768px)
──────────────
☐ 2-column grid showing
☐ More generous padding
☐ Still uses hamburger
☐ Touch targets adequate
☐ No weird layout breaks

Desktop (1280px)
────────────────
☐ 3-column portfolio grid
☐ Hamburger hidden
☐ Spacious padding
☐ Full layout active
☐ No max-width issues

Wide (1920px)
─────────────
☐ Max-width respected
☐ Content not stretched
☐ Side padding proper
☐ Layout balanced
```

---

**Quick Start**: View this site on multiple devices and confirm all items in the checklist pass!
