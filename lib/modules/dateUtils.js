/**
 * Date Utilities
 */

module.exports = {
    /**
     * Async sleep function
     */
    sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    /**
     * Add days to a date
     */
    addDays: (date, days) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    },

    /**
     * Simple date formatter (YYYY-MM-DD HH:mm:ss)
     */
    formatDate: (date = new Date(), format = 'YYYY-MM-DD HH:mm:ss') => {
        const d = new Date(date);
        const pad = (n) => n.toString().padStart(2, '0');

        const map = {
            YYYY: d.getFullYear(),
            MM: pad(d.getMonth() + 1),
            DD: pad(d.getDate()),
            HH: pad(d.getHours()),
            mm: pad(d.getMinutes()),
            ss: pad(d.getSeconds())
        };

        return format.replace(/YYYY|MM|DD|HH|mm|ss/g, matched => map[matched]);
    },

    /**
     * Get relative time string (e.g. "5 minutes ago")
     */
    timeAgo: (date) => {
        const seconds = Math.floor((new Date() - new Date(date)) / 1000);
        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60
        };

        for (const [unit, secondsInUnit] of Object.entries(intervals)) {
            const interval = Math.floor(seconds / secondsInUnit);
            if (interval >= 1) {
                return interval + ' ' + unit + (interval === 1 ? '' : 's') + ' ago';
            }
        }
        return 'just now';
    },

    /**
     * Check if a year is a leap year
     */
    isLeapYear: (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
};
