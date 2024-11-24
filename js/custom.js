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
document.addEventListener('DOMContentLoaded', function() {
    const floatingLogo = document.getElementById('floating-logo');
    const sections = ['performance', 'languages', 'team', 'contact'];
    let currentSection = '';

    function updateLogoPosition() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        for (let i = 0; i < sections.length; i++) {
            const section = document.getElementById(sections[i]);
            if (!section) continue;
            
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                if (currentSection !== sections[i]) {
                    currentSection = sections[i];
                    
                    // Simple left/right alternating position
                    const isEven = i % 2 === 0;
                    floatingLogo.style.left = isEven ? '10%' : '90%';
                    floatingLogo.style.transform = `translateX(${isEven ? '-50%' : '-50%'})`;
                    
                    // Vertical position in middle of viewport
                    const viewportMiddle = window.innerHeight / 2;
                    floatingLogo.style.top = `${viewportMiddle}px`;
                }
                break;
            }
        }
    }

    // Initial position
    setTimeout(updateLogoPosition, 100);

    // Update on scroll
    window.addEventListener('scroll', updateLogoPosition);
    
    // Update on resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateLogoPosition, 100);
    });
});
