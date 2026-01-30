/**
 * Validation Utilities
 */

module.exports = {
    /**
     * Check if string is a valid email
     */
    isEmail: (str) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
    },

    /**
     * Check if string is a basic phone number
     */
    isPhoneNumber: (str) => {
        return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(str);
    },

    /**
     * Check basic password strength (min 8 chars, 1 number, 1 lowercase, 1 uppercase)
     */
    isStrongPassword: (str) => {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(str);
    },

    /**
     * Check if value is empty (null, undefined, empty string, empty array, empty object)
     */
    isEmpty: (val) => {
        if (val === null || val === undefined) return true;
        if (typeof val === 'string' && val.trim().length === 0) return true;
        if (Array.isArray(val) && val.length === 0) return true;
        if (typeof val === 'object' && Object.keys(val).length === 0) return true;
        return false;
    },

    /**
     * Check if value is a valid date object
     */
    isValidDate: (val) => {
        return val instanceof Date && !isNaN(val);
    }
};
