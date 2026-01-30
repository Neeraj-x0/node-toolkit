const {
  toAudio,
  XKCDComic,
  start,
  getBuffer,
  getJson,
  webp2png,
  webp2mp4,
  extractUrlFromMessage,
  FiletypeFromUrl,
  toVideo,
  toPTT,
  ffmpeg,
  parseJid,
  parsedJid,
  isIgUrl,
  isUrl,
  getUrl,
  qrcode,
  secondsToDHMS,
  formatBytes,
  clockString,
  runtime,
  AddMp3Meta,
  Mp3Cutter,
  Bitly,
  isNumber,
  getRandom,
  findMusic,
  // New String Utils
  capitalize, camelCase, kebabCase, snakeCase, truncate, slugify, randomString, maskString, wordCount, escapeHTML,
  // New Array Utils
  chunk, unique, shuffle, pick, omit, groupBy, flatten, difference, intersection, deepClone,
  // New Math Utils
  randomInt, clamp, roundTo, formatCurrency, formatCompactNumber,
  // New Date Utils
  sleep, addDays, formatDate, timeAgo, isLeapYear,
  // New Validation Utils
  isEmail, isPhoneNumber, isStrongPassword, isEmpty, isValidDate,
  // New Function Wrappers
  retry, debounce, throttle, once, memoize,
  // New System Utils
  ensureDir, removeFile, getFileSize, getHash, getSystemInfo,
  // New Network Utils
  fetchJSON, getPublicIP, geoLocateIP, checkWebsiteStatus, getExchangeRate, getRandomQuote, getDictionaryDefinition, shortenURL, downloadFile, whois
} = require("./lib");

module.exports = {
  // Original Exports
  toAudio,
  XKCDComic,
  start,
  getBuffer,
  getJson,
  webp2png,
  webp2mp4,
  extractUrlFromMessage,
  FiletypeFromUrl,
  toVideo,
  toPTT,
  ffmpeg,
  parseJid,
  parsedJid,
  isIgUrl,
  isUrl,
  getUrl,
  qrcode,
  secondsToDHMS,
  formatBytes,
  clockString,
  runtime,
  AddMp3Meta,
  Mp3Cutter,
  Bitly,
  isNumber,
  getRandom,
  findMusic,

  // New String Utils
  capitalize, camelCase, kebabCase, snakeCase, truncate, slugify, randomString, maskString, wordCount, escapeHTML,
  // New Array Utils
  chunk, unique, shuffle, pick, omit, groupBy, flatten, difference, intersection, deepClone,
  // New Math Utils
  randomInt, clamp, roundTo, formatCurrency, formatCompactNumber,
  // New Date Utils
  sleep, addDays, formatDate, timeAgo, isLeapYear,
  // New Validation Utils
  isEmail, isPhoneNumber, isStrongPassword, isEmpty, isValidDate,
  // New Function Wrappers
  retry, debounce, throttle, once, memoize,
  // New System Utils
  ensureDir, removeFile, getFileSize, getHash, getSystemInfo,
  // New Network Utils
  fetchJSON, getPublicIP, geoLocateIP, checkWebsiteStatus, getExchangeRate, getRandomQuote, getDictionaryDefinition, shortenURL, downloadFile, whois
};
