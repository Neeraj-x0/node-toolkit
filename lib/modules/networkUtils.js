/**
 * Network & External Service Utilities
 */
const axios = require('axios');
const fs = require('fs');

/**
 * Internal helper for robust requests with retry
 */
const robustGet = async (url, retries = 3) => {
    try {
        const res = await axios.get(url, {
            timeout: 10000,
            headers: { 'User-Agent': 'Mozilla/5.0 (NodeToolkit/1.0)' }
        });
        return res.data;
    } catch (err) {
        if (retries <= 0) throw err;
        await new Promise(r => setTimeout(r, 1500));
        return robustGet(url, retries - 1);
    }
};

module.exports = {
    /**
     * Fetch JSON from URL with auto-retry
     */
    fetchJSON: async (url) => {
        return await robustGet(url);
    },

    /**
     * Get Public IP Address (uses ipify - very stable)
     */
    getPublicIP: async () => {
        try {
            const data = await robustGet('https://api.ipify.org?format=json');
            return data.ip;
        } catch (e) {
            return null;
        }
    },

    /**
     * Get IP Location Info (uses ip-api - stable free tier)
     */
    geoLocateIP: async (ip = '') => {
        try {
            const endpoint = ip ? `http://ip-api.com/json/${ip}` : 'http://ip-api.com/json/';
            return await robustGet(endpoint);
        } catch (e) {
            return null;
        }
    },

    /**
     * Check if a website is up (returns boolean)
     */
    checkWebsiteStatus: async (url) => {
        try {
            await axios.head(url, { timeout: 5000 });
            return true;
        } catch (e) {
            return false;
        }
    },

    /**
     * Get Currency Exchange Rate (uses frankfurter.app - open source & robust)
     */
    getExchangeRate: async (from = 'USD', to = 'EUR') => {
        try {
            const data = await robustGet(`https://api.frankfurter.app/latest?from=${from}&to=${to}`);
            return data.rates[to];
        } catch (e) {
            return null;
        }
    },

    /**
     * Get Random Quote (uses quotable.io)
     */
    getRandomQuote: async () => {
        try {
            return await robustGet('https://api.quotable.io/random');
        } catch (e) {
            return null;
        }
    },

    /**
     * Get Dictionary Definition (uses dictionaryapi.dev)
     */
    getDictionaryDefinition: async (word) => {
        try {
            const data = await robustGet(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            return Array.isArray(data) ? data[0] : null;
        } catch (e) {
            return null;
        }
    },

    /**
     * Shorten URL (uses tinyurl.com generic API)
     */
    shortenURL: async (url) => {
        try {
            const res = await axios.get(`https://tinyurl.com/api-create.php?url=${url}`);
            return res.data;
        } catch (e) {
            return url;
        }
    },

    /**
     * Download file from URL to local path
     */
    downloadFile: async (url, destPath) => {
        const writer = fs.createWriteStream(destPath);
        const response = await axios({
            url,
            method: "GET",
            responseType: "stream",
            timeout: 20000
        });

        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on("finish", resolve);
            writer.on("error", reject);
        });
    },

    /**
     * Basic WHOIS info via RDAP (more robust than raw WHOIS)
     */
    whois: async (domain) => {
        try {
            return await robustGet(`https://rdap.org/domain/${domain}`);
        } catch (e) {
            return null;
        }
    }
};
