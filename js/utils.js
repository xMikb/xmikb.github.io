// Utility Functions

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Format currency
function formatCurrency(amount) {
    return `$${formatNumber(Math.round(amount))}`;
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Update copyright year
function updateCopyright() {
    const yearElement = document.querySelector('.copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Export utilities
window.utils = {
    debounce,
    formatNumber,
    formatCurrency,
    showNotification,
    updateCopyright
};
