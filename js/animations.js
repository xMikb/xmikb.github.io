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

// Initialize animations
function initializeAnimations() {
    // Add fade-in animation to sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('fade-in-element');
        observer.observe(section);
    });

    // Add hover effect to cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Initialize logo carousel
    initializeCarousel();
}

// Logo Carousel Animation
function initializeCarousel() {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

    const slides = Array.from(track.getElementsByClassName('carousel-slide'));
    const slideWidth = slides[0]?.offsetWidth || 250;
    const gap = 64; // 4rem gap

    // Clone slides for infinite scroll
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
    });

    // Pause animation on hover
    track.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
    });

    track.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
    });
}

// Loading Animation
function initializeLoadingAnimation() {
    const loader = document.querySelector('.loading');
    if (!loader) return;

    loader.classList.add('fade-out');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
}

// Smooth Scroll
function initializeSmoothScroll() {
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
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    initializeSmoothScroll();
});

window.addEventListener('load', initializeLoadingAnimation);