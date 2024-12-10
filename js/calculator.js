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
        
        // Update all displays
        document.getElementById('totalPrice').textContent = `$${price.total.toLocaleString()}`;
        document.getElementById('basePrice').textContent = `$${price.basePrice.toLocaleString()}`;
        document.getElementById('complexityFactor').textContent = `${price.complexityMultiplier}x`;
        document.getElementById('teamCost').textContent = `$${price.teamCost.toLocaleString()}`;
        document.getElementById('overhead').textContent = `$${price.overhead.toLocaleString()}`;
        
        // Always update days when lines or auditors change
        const activeElement = document.activeElement;
        if (activeElement && (activeElement.id === 'calcLines' || activeElement.id === 'calcAuditors')) {
            const daysInput = document.getElementById('calcDays');
            if (daysInput) {
                daysInput.value = price.recommendedDays;
                updateDaysDisplay(price.recommendedDays);
            }
        }
    }
}

// Helper function to update days display
function updateDaysDisplay(days) {
    const daysValue = document.getElementById('daysValue');
    const dayText = document.querySelector('.day-text');
    
    if (daysValue) {
        daysValue.textContent = days;
    }
    if (dayText) {
        dayText.textContent = days === 1 ? 'day' : 'days';
    }
}

function updateRangeInput(input) {
    const value = input.value;
    const daysValue = document.getElementById(`${input.id}Value`);
    if (daysValue) {
        daysValue.textContent = value;
        // Update day/days text for the days input
        if (input.id === 'calcDays') {
            const dayText = document.querySelector('.day-text');
            if (dayText) {
                dayText.textContent = value === '1' ? 'day' : 'days';
            }
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
        
        // Update days slider if lines or auditors changed
        const activeElement = document.activeElement;
        if (activeElement && (activeElement.id === 'calcLines' || activeElement.id === 'calcAuditors')) {
            updateDaysSlider(price.recommendedDays);
        }
    }
}, 150); // 150ms debounce

function updateDaysSlider(recommendedDays) {
    const daysInput = document.getElementById('calcDays');
    if (!daysInput) return;

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
}

// Initialize all event listeners when the document loads
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('auditCalculator');
    const inputs = form.querySelectorAll('input, select');
    
    inputs.forEach(input => {
        // Use 'change' event for range inputs to catch all changes
        if (input.type === 'range') {
            input.addEventListener('input', () => {
                updateRangeInput(input);
                updatePrice();
            });
            input.addEventListener('change', () => {
                updateRangeInput(input);
                updatePrice();
            });
        } else {
            input.addEventListener('input', updatePrice);
            input.addEventListener('change', updatePrice);
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
