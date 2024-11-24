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
// Add hover effect to cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});
