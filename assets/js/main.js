// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerClose = document.getElementById('drawerClose');

function openMobileMenu() {
    if (mobileDrawer) {
        mobileDrawer.classList.add('active');
    }
}

function closeMobileMenu() {
    if (mobileDrawer) {
        mobileDrawer.classList.remove('active');
    }
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
}
if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeMobileMenu);
}
if (drawerClose) {
    drawerClose.addEventListener('click', closeMobileMenu);
}

// Desktop Dropdown Toggle
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.dropdown-btn');
    
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Close other dropdowns
        dropdowns.forEach(d => {
            if (d !== dropdown) {
                d.classList.remove('active');
            }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('active');
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
    });
});

// Mobile Drawer Dropdown Toggle
const drawerDropdowns = document.querySelectorAll('.drawer-dropdown');

drawerDropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.drawer-dropdown-btn');
    
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('active');
    });
});

// Section Navigation - Dynamic Loading
const sidebarLinks = document.querySelectorAll('.sidebar-link[data-section]');
const contentContainer = document.getElementById('content-container');

// Map section IDs to their CSS classes
const sectionClasses = {
    'about': 'content-section active',
    'important-dates': 'content-section important-dates-section active',
    'keynote-speakers': 'content-section simple-section active',
    'tutorial-speakers': 'content-section simple-section active',
    'track-chair': 'content-section simple-section active',
    'special-session': 'content-section simple-section active',
    'call-for-paper': 'content-section simple-section active',
    'guidelines': 'content-section guidelines-section active',
    'camera-ready': 'content-section simple-section active',
    'technical-track': 'content-section technical-track-section active',
    'contact-us': 'content-section contact-section active'
};

async function loadSection(sectionId) {
    if (!contentContainer) return;
    
    try {
        // Show loading state
        contentContainer.innerHTML = '<div class="loading">Loading...</div>';
        
        // Fetch the section HTML
        console.log('Loading section:', sectionId);
        const response = await fetch(`sections/${sectionId}.html`);
        if (!response.ok) {
            throw new Error('Section not found');
        }
        
        const html = await response.text();
        
        // Get the appropriate CSS class for this section
        const sectionClass = sectionClasses[sectionId] || 'content-section';
        
        // Update container with section content
        contentContainer.innerHTML = `<section id="${sectionId}" class="${sectionClass}">${html}</section>`;
        
    } catch (error) {
        console.error('Error loading section:', error);
        contentContainer.innerHTML = '<div class="error">Failed to load section. Please try again.</div>';
    }
}

function showSection(sectionId) {
    // Load the section content
    loadSection(sectionId);
    
    // Update active state on sidebar links
    sidebarLinks.forEach(link => {
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Update active state on drawer links
    const drawerLinks = document.querySelectorAll('.drawer-sections .sidebar-link[data-section]');
    drawerLinks.forEach(link => {
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Close mobile drawer if open
    closeMobileMenu();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Attach click handlers to sidebar links (only if they exist)
if (sidebarLinks.length > 0) {
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            const section = link.dataset.section;
            if (section) {
                showSection(section);
            }
        });
    });
}

// Attach click handlers to drawer section links (only if they exist)
const drawerSectionLinks = document.querySelectorAll('.drawer-sections .sidebar-link[data-section]');
if (drawerSectionLinks.length > 0) {
    drawerSectionLinks.forEach(link => {
        link.addEventListener('click', () => {
            const section = link.dataset.section;
            if (section) {
                showSection(section);
            }
        });
    });
}

// Close drawer when clicking on a regular drawer link (Home, Registration, etc.)
const regularDrawerLinks = document.querySelectorAll('.drawer-nav .drawer-link:not(.drawer-dropdown-btn)');
if (regularDrawerLinks.length > 0) {
    regularDrawerLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

// Handle browser back/forward buttons with sections (only for homepage)
if (contentContainer) {
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.section) {
            showSection(e.state.section);
        }
    });
}

// Initialize: load the about section by default (only on homepage)
document.addEventListener('DOMContentLoaded', () => {
    if (contentContainer) {
        showSection('about');
    }
});
