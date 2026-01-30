/**
 * System and File Utilities
 */
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const os = require('os');

module.exports = {
    /**
     * Ensure directory exists (mkdir -p)
     */
    ensureDir: (dirPath) => {
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
            return true;
        }
        return false;
    },

    /**
     * Safe file removal (no error if file doesn't exist)
     */
    removeFile: (filePath) => {
        try {
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                return true;
            }
        } catch (e) {
            // ignore
        }
        return false;
    },

    /**
     * Get secure SHA256 hash of content
     */
    getHash: (content, algo = 'sha256') => {
        return crypto.createHash(algo).update(content).digest('hex');
    },

    /**
     * Get human readable file size
     */
    getFileSize: (filePath) => {
        try {
            const stats = fs.statSync(filePath);
            const bytes = stats.size;
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if (bytes === 0) return '0 Byte';
            const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
        } catch (e) {
            return 'Unknown';
        }
    },

    /**
     * Get basic system info summary
     */
    getSystemInfo: () => {
        return {
            platform: os.platform(),
            release: os.release(),
            uptime: os.uptime(),
            cpus: os.cpus().length,
            memory: {
                total: os.totalmem(),
                free: os.freemem(),
                percentage: Math.round(((os.totalmem() - os.freemem()) / os.totalmem()) * 100) + '%'
            }
        };
    }
};
