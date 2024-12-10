// Handle form submission
async function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const formEntries = Array.from(formData.entries());
    
    // Create message for Telegram
    let message = '<b>New Contact Form Submission</b>\n\n';
    formEntries.forEach(([field, value]) => {
        message += `<b>${field}:</b> ${value}\n`;
    });
    
    // Disable form while submitting
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    try {
        const success = await sendToTelegram(message);
        if (success) {
            utils.showNotification('Message sent successfully!', 'success');
            form.reset();
        } else {
            utils.showNotification('Failed to send message. Please try again.', 'error');
        }
    } catch (error) {
        utils.showNotification('An error occurred. Please try again.', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }
}

// Initialize form handler
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Initialize copyright year
    utils.updateCopyright();
});