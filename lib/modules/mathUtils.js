/**
 * Math & Formatting Utilities
 */

module.exports = {
    /**
     * Generate random integer between min and max (inclusive)
     */
    randomInt: (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Constrain a number between min and max
     */
    clamp: (num, min, max) => {
        return Math.min(Math.max(num, min), max);
    },

    /**
     * Round number to specific decimal places
     */
    roundTo: (num, decimals = 2) => {
        return Number(Math.round(num + 'e' + decimals) + 'e-' + decimals);
    },

    /**
     * Format number as currency
     */
    formatCurrency: (num, currency = 'USD', locale = 'en-US') => {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency
        }).format(num);
    },

    /**
     * Format compact number (1k, 1M, etc)
     */
    formatCompactNumber: (num, locale = 'en-US') => {
        return new Intl.NumberFormat(locale, {
            notation: "compact",
            compactDisplay: "short"
        }).format(num);
    }
};
