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
// Telegram Integration
async function sendToTelegram(formData) {
    const BOT_TOKEN = 'YOUR_BOT_TOKEN'; // Replace with your bot token
    const CHAT_ID = 'YOUR_CHAT_ID';     // Replace with your chat ID
    
    const message = `
🔔 New Audit Request

📧 Email: ${formData.get('email')}
🔐 Protocol: ${formData.get('protocol')}
💻 Language: ${formData.get('language')}
📊 Lines of Code: ${formData.get('lines')}
⚙️ Complexity: ${formData.get('Complexity')}
📝 Details:
${formData.get('message')}
    `;
    
    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to send to Telegram');
        }
    } catch (error) {
        console.error('Telegram Error:', error);
    }
}

// Contact Form Handler
async function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    // Format message for Telegram
    const message = `
🔔 New Contact Form Submission
👤 Name: ${data.name}
📧 Email: ${data.email}
📋 Service: ${data.subject}
💬 Message:
${data.message}
    `;

    try {
        const response = await sendToTelegram(message);
        if (response.ok) {
            showNotification('Message sent successfully!', 'success');
            form.reset();
        } else {
            showNotification('Failed to send message. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        showNotification('Failed to send message. Please try again.', 'error');
    }
}

async function sendToTelegram(message) {
    const BOT_TOKEN = 'YOUR_BOT_TOKEN';
    const CHAT_ID = 'YOUR_CHAT_ID';
    
    return await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'HTML'
        })
    });
}

// Notification System
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Fade in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize form handler
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            // Don't prevent default - let Formspree handle the form normally
            const formData = new FormData(e.target);
            // Send to Telegram in parallel
            await sendToTelegram(formData);
            handleFormSubmit(e);
        });
    }
});