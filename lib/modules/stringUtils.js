/**
 * String Utilities
 */
const crypto = require('crypto');

module.exports = {
    /**
     * Capitalize the first letter of a string
     */
    capitalize: (str) => {
        if (typeof str !== 'string' || str.length === 0) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    /**
     * Convert string to camelCase
     */
    camelCase: (str) => {
        return str
            .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
                index === 0 ? word.toLowerCase() : word.toUpperCase()
            )
            .replace(/\s+/g, '');
    },

    /**
     * Convert string to kebab-case
     */
    kebabCase: (str) => {
        return str
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toLowerCase())
            .join('-');
    },

    /**
     * Convert string to snake_case
     */
    snakeCase: (str) => {
        return str
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toLowerCase())
            .join('_');
    },

    /**
     * Truncate string to a specific length with ellipsis
     */
    truncate: (str, length = 100) => {
        if (str.length <= length) return str;
        return str.slice(0, length) + '...';
    },

    /**
     * Convert string to URL-friendly slug
     */
    slugify: (str) => {
        return str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    },

    /**
     * Generate a random alphanumeric string
     */
    randomString: (length = 16) => {
        return crypto.randomBytes(Math.ceil(length / 2))
            .toString('hex')
            .slice(0, length);
    },

    /**
     * Mask a portion of a string
     */
    maskString: (str, start = 0, end = 4, maskChar = '*') => {
        if (!str) return '';
        const len = str.length;
        return str.slice(0, start) +
            maskChar.repeat(Math.max(0, len - start - end)) +
            str.slice(len - end);
    },

    /**
     * Count words in a string
     */
    wordCount: (str) => {
        if (!str) return 0;
        return str.trim().split(/\s+/).length;
    },

    /**
     * Escape HTML special characters
     */
    escapeHTML: (str) => {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
};
