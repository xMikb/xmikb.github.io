// Custom JavaScript for Beyond Audit website

// Loading Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loading');
    loader.classList.add('fade-out');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in animation to sections
document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-in-element');
    observer.observe(section);
});

// Dynamic Copyright Year
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.querySelector('.copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Navbar Hide/Show on Scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('#mainNav');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    // Add background when scrolled
    if (currentScroll > 50) {
        navbar.classList.add('navbar-shrink');
    } else {
        navbar.classList.remove('navbar-shrink');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Add hover effect to cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Floating Logo Animation
const floatingLogo = document.querySelector('#floating-logo');
const sections = document.querySelectorAll('.section');
let currentSection = 0;
let positions = [];

// Initialize position markers for each section
function initPositionMarkers() {
    positions = [];
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        positions[index] = {
            top: rect.top + window.scrollY + (rect.height / 2),
            left: index % 2 === 0
        };
    });
}

// Update logo position based on scroll
function updateLogoPosition() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    // Find the current section
    let activeSection = 0;
    positions.forEach((pos, index) => {
        if (scrollPosition >= pos.top - window.innerHeight / 2) {
            activeSection = index;
        }
    });
    
    if (activeSection !== currentSection || !currentSection) {
        currentSection = activeSection;
        
        // Update logo position
        const position = positions[currentSection];
        if (position) {
            const targetTop = position.top - window.scrollY;
            floatingLogo.style.top = `${targetTop}px`;
            floatingLogo.style.transform = `translate(${position.left ? '-50%' : '50%'}, -50%)`;
            floatingLogo.style.left = position.left ? '10%' : '90%';
        }
    }
}

// Initialize on page load
window.addEventListener('load', () => {
    initPositionMarkers();
    updateLogoPosition();
});

// Update on scroll
window.addEventListener('scroll', () => {
    requestAnimationFrame(updateLogoPosition);
});

// Update positions on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        initPositionMarkers();
        updateLogoPosition();
    }, 100);
});
