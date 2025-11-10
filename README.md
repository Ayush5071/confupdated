# SCES-2026 Conference Website (HTML/CSS/JS Version)

This is a pure HTML, CSS, and JavaScript version of the SCES-2026 conference website with the exact same design as the Next.js version.

## Folder Structure

```
html-website/
├── index.html              # Main homepage with all sections
├── assets/
│   ├── css/
│   │   └── styles.css      # All styling for the website
│   ├── js/
│   │   └── main.js         # JavaScript for interactions and navigation
│   └── images/
│       ├── logo.png        # Conference logo
│       ├── springer.jpg    # Springer logo
│       └── mnnit.jpg       # Hero section background image
```

## Features Implemented

### ✅ Homepage (index.html)
- **Top Navbar**: Sticky navigation with dropdowns for Committees, Archives, Previous Proceedings, and Important Links
- **Mobile Menu**: Hamburger menu with slide-in drawer for mobile devices
- **Sidebar**: Fixed sidebar with section navigation (desktop only)
- **Hero Section**: 
  - Mobile logos above hero image
  - Desktop logos positioned on left and right
  - Conference title, theme, dates, and organizing institution
  - Background overlay for text contrast
- **Important Dates Section**: Table showing key conference dates
- **About the Conference**: Full description of SCES-2026
- **About Department**: Details about Electrical Engineering Department
- **Sponsorship Opportunities**: Table showing sponsorship categories and fees
- **Our Sponsors**: "Coming Soon" placeholder
- **Footer**: Copyright and developer credits

### Sections (Accessible via Sidebar)
1. About (default/homepage content)
2. Program Schedule (shows "Coming soon" alert)
3. Keynote Speakers
4. Tutorial Speakers
5. Track Chair
6. Special Session
7. Important Dates
8. Call for Paper
9. Guidelines for Paper Submission
10. Camera Ready Paper Submission
11. Technical Track
12. Contact Us

## Design Features

- **Color Scheme**: 
  - Background: Subtle cream (#fffefc)
  - Primary blue: #1d4ed8
  - Section headings: #337ab7
  
- **Responsive Design**: 
  - Mobile-first approach
  - Breakpoints at 640px, 768px, and 1024px
  - Mobile drawer navigation
  - Adaptive hero section sizing

- **Interactions**:
  - Dropdown menus in top navbar
  - Mobile drawer with smooth slide-in animation
  - Section switching without page reload
  - Active state highlighting for current section
  - Smooth scrolling

## How to Use

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Navigate sections**: Click sidebar items to switch between different sections
3. **Mobile view**: Resize browser or open on mobile to see responsive design
4. **Dropdowns**: Click on Committees, Archives, etc. to see dropdown menus

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Next Steps

To add more pages (Registration, Committee pages, etc.):
1. Create new HTML files (e.g., `registration.html`)
2. Copy the navbar and footer structure from `index.html`
3. Link to `assets/css/styles.css` and `assets/js/main.js`
4. Add page-specific content

## Notes

- All images are loaded from `assets/images/` directory
- CSS uses modern flexbox and grid layouts
- JavaScript uses vanilla ES6+ (no frameworks required)
- No build process needed - just open and run!

## Credits

Developed and Managed by [Ayush Tiwari](http://ayush-delta.vercel.app/)
