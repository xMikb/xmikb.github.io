// Pricing Calculator
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Pricing Calculator
function calculateAuditPrice(language, complexity, linesOfCode, numAuditors, numDays) {
    // Constants
    const LINES_PER_DAY = 100;
    const AUDITOR_DAILY_RATE = 500;

    // Complexity multipliers
    const complexityMultipliers = {
        'low': 0.9,
        'medium': 1,
        'high': 1.25
    };

    // Calculate the recommended days needed based on lines of code (divided by number of auditors)
    const recommendedDays = Math.ceil(linesOfCode / (LINES_PER_DAY * numAuditors));
    
    // Base cost calculation
    const baseCost = recommendedDays * numAuditors * AUDITOR_DAILY_RATE;
    
    // Apply complexity multiplier
    const complexityMultiplier = complexityMultipliers[complexity] || 1;
    let totalCost = baseCost * complexityMultiplier;
    
    // If they request different days than recommended, increase price
    if (numDays !== recommendedDays) {
        const deviation = Math.abs(numDays - recommendedDays) / recommendedDays;
        const rushMultiplier = 1 + (deviation * 0.5); // 50% increase per 100% deviation
        totalCost *= rushMultiplier;
    }

    // Move the days slider to recommended position when lines or auditors change
    const daysInput = document.getElementById('calcDays');
    const linesInput = document.getElementById('calcLines');
    const auditorsInput = document.getElementById('calcAuditors');
    
    // Only move the slider if the lines or auditors input was the last changed
    if ((document.activeElement === linesInput || document.activeElement === auditorsInput) && daysInput) {
        daysInput.value = recommendedDays;
        
        // Update the days display
        const daysValue = document.getElementById('daysValue');
        if (daysValue) {
            daysValue.textContent = recommendedDays;
        }
        
        // Update the day/days text
        const dayText = document.querySelector('.day-text');
        if (dayText) {
            dayText.textContent = recommendedDays === 1 ? 'day' : 'days';
        }
        
        // Trigger input event to ensure all UI elements update
        const event = new Event('input', {
            bubbles: true,
            cancelable: true,
        });
        daysInput.dispatchEvent(event);
    }
    
    return {
        basePrice: Math.round(baseCost),
        recommendedDays: recommendedDays,
        complexityMultiplier: complexityMultiplier,
        teamCost: 0,
        overhead: 0,
        total: Math.round(totalCost)
    };
}

// Update price display
function updatePrice() {
    const language = document.getElementById('calcLanguage').value;
    const complexity = document.getElementById('calcComplexity').value;
    const lines = parseInt(document.getElementById('calcLines').value) || 0;
    const auditors = parseInt(document.getElementById('calcAuditors').value);
    const days = parseInt(document.getElementById('calcDays').value);

    if (language && complexity && lines) {
        const price = calculateAuditPrice(language, complexity, lines, auditors, days);
        
        document.getElementById('totalPrice').textContent = `$${price.total.toLocaleString()}`;
        document.getElementById('basePrice').textContent = `$${price.basePrice.toLocaleString()}`;
        document.getElementById('complexityFactor').textContent = `${price.complexityMultiplier}x`;
        document.getElementById('teamCost').textContent = `$${price.teamCost.toLocaleString()}`;
        document.getElementById('overhead').textContent = `$${price.overhead.toLocaleString()}`;
    }
}

function updateRangeInput(input) {
    const value = input.value;
    if (input.id === 'calcDays') {
        const daysValue = document.getElementById('daysValue');
        const dayText = document.querySelector('.day-text');
        if (daysValue) {
            daysValue.textContent = value;
        }
        if (dayText) {
            dayText.textContent = value === '1' ? 'day' : 'days';
        }
    } else {
        const valueDisplay = document.getElementById(`${input.id}Value`);
        if (valueDisplay) {
            valueDisplay.textContent = value;
        }
    }
}

// Debounced version of updatePrice
const debouncedUpdatePrice = debounce(function() {
    const language = document.getElementById('calcLanguage').value;
    const complexity = document.getElementById('calcComplexity').value;
    const lines = parseInt(document.getElementById('calcLines').value) || 0;
    const auditors = parseInt(document.getElementById('calcAuditors').value) || 1;
    const days = parseInt(document.getElementById('calcDays').value) || 1;

    if (language && complexity && lines) {
        const price = calculateAuditPrice(language, complexity, lines, auditors, days);
        
        // Update price displays
        document.getElementById('totalPrice').textContent = `$${price.total.toLocaleString()}`;
        document.getElementById('basePrice').textContent = `$${price.basePrice.toLocaleString()}`;
        document.getElementById('complexityFactor').textContent = `${price.complexityMultiplier}x`;
        document.getElementById('teamCost').textContent = `$${price.teamCost.toLocaleString()}`;
        document.getElementById('overhead').textContent = `$${price.overhead.toLocaleString()}`;
    }
}, 150); // 150ms debounce

// Initialize all event listeners when the document loads
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('auditCalculator');
    const inputs = form.querySelectorAll('input, select');
    
    inputs.forEach(input => {
        if (input.type === 'range') {
            // For range inputs, update display and trigger price calculation
            input.addEventListener('input', () => {
                updateRangeInput(input);
                updatePrice(); // Immediate update for better responsiveness
            });
        } else {
            // For other inputs, update price immediately
            input.addEventListener('input', updatePrice);
        }
    });

    // Initial update for range inputs
    const rangeInputs = document.querySelectorAll('input[type="range"]');
    rangeInputs.forEach(input => {
        updateRangeInput(input);
    });
    
    // Initial price calculation
    updatePrice();
});
