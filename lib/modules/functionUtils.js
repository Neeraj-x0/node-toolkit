/**
 * Function Wrappers
 */

module.exports = {
    /**
     * Retry an async function multiple times
     */
    retry: async (fn, retries = 3, delay = 1000) => {
        try {
            return await fn();
        } catch (err) {
            if (retries === 0) throw err;
            await new Promise(resolve => setTimeout(resolve, delay));
            return module.exports.retry(fn, retries - 1, delay);
        }
    },

    /**
     * Debounce a function (wait until inactivity)
     */
    debounce: (fn, ms) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(this, args), ms);
        };
    },

    /**
     * Throttle a function (limit execution rate)
     */
    throttle: (fn, ms) => {
        let lastExec = 0;
        return function (...args) {
            const now = Date.now();
            if (now - lastExec >= ms) {
                lastExec = now;
                fn.apply(this, args);
            }
        };
    },

    /**
     * Run a function only once
     */
    once: (fn) => {
        let result;
        let called = false;
        return function (...args) {
            if (!called) {
                called = true;
                result = fn.apply(this, args);
            }
            return result;
        };
    },

    /**
     * Memoize function results
     */
    memoize: (fn) => {
        const cache = new Map();
        return function (...args) {
            const key = JSON.stringify(args);
            if (cache.has(key)) return cache.get(key);
            const result = fn.apply(this, args);
            cache.set(key, result);
            return result;
        };
    }
};
