/**
 * Array & Object Utilities
 */

module.exports = {
    /**
     * Split array into chunks of specific size
     */
    chunk: (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
    },

    /**
     * Remove duplicates from array (supports primitives)
     */
    unique: (arr) => {
        return [...new Set(arr)];
    },

    /**
     * Randomly shuffle an array (Fisher-Yates)
     */
    shuffle: (arr) => {
        const newArr = [...arr];
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
    },

    /**
     * Pick specific keys from an object
     */
    pick: (obj, keys) => {
        return keys.reduce((acc, key) => {
            if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
                acc[key] = obj[key];
            }
            return acc;
        }, {});
    },

    /**
     * Omit specific keys from an object
     */
    omit: (obj, keys) => {
        const newObj = { ...obj };
        keys.forEach(key => delete newObj[key]);
        return newObj;
    },

    /**
     * Group array of objects by a key
     */
    groupBy: (arr, key) => {
        return arr.reduce((acc, item) => {
            const groupKey = typeof key === 'function' ? key(item) : item[key];
            (acc[groupKey] = acc[groupKey] || []).push(item);
            return acc;
        }, {});
    },

    /**
     * Flatten nested arrays to specific depth
     */
    flatten: (arr, depth = 1) => {
        return arr.flat(depth);
    },

    /**
     * Get values present in arr1 but not in arr2
     */
    difference: (arr1, arr2) => {
        const s = new Set(arr2);
        return arr1.filter(x => !s.has(x));
    },

    /**
     * Get common values between two arrays
     */
    intersection: (arr1, arr2) => {
        const s = new Set(arr2);
        return arr1.filter(x => s.has(x));
    },

    /**
     * Deep clone an object or array
     */
    deepClone: (obj) => {
        if (typeof structuredClone === 'function') {
            return structuredClone(obj);
        }
        return JSON.parse(JSON.stringify(obj));
    }
};
