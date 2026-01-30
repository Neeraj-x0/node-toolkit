# Node.js Media Toolkit

This Node.js toolkit provides a robust collection of over 50+ utility functions for working with media files, strings, arrays, network requests, system operations, and more. It utilizes popular libraries such as Axios, Cheerio, and FFmpeg to simplify your daily development tasks.

## Usage

1. Import specific functions into your project:

```javascript
const {
  // Network
  fetchJSON, getExchangeRate, getPublicIP, downloadFile,
  
  // String
  capitalize, slugify, camelCase, truncate,
  
  // System
  getSystemInfo, getFileSize,
  
  // Date
  timeAgo, formatDate,
  
  // Media (Original)
  toAudio, toVideo, webp2mp4
} = require('@neeraj-x0/nodetoolkit');
```

2. Use them in your async functions:

```javascript
// Get a random quote
const quote = await getRandomQuote();

// Download a file
await downloadFile('https://example.com/image.jpg', './image.jpg');

// Format currency
console.log(formatCurrency(1234.56, 'USD')); // "$1,234.56"
```

## Functions API

### Network & API Utilities
*Robust wrappers with retry logic.*
- `fetchJSON(url, options)`: Fetch JSON with auto-retries.
- `getExchangeRate(from, to)`: Get real-time currency exchange rates.
- `getPublicIP()`: Retrieve your public IP address.
- `geoLocateIP(ip)`: Get geographical location for an IP.
- `checkWebsiteStatus(url)`: Check if a website is reachable.
- `downloadFile(url, outputPath)`: Download a file to disk.
- `getRandomQuote()`: Fetch a random quote.
- `getDictionaryDefinition(word)`: Get word definitions.
- `shortenURL(url)`: Shorten a long URL.
- `whois(domain)`: Get domain WHOIS information.

### String Utilities
- `capitalize(str)`: Capitalize the first letter.
- `camelCase(str)`: Convert string to camelCase.
- `kebabCase(str)`: Convert string to kebab-case.
- `snakeCase(str)`: Convert string to snake_case.
- `truncate(str, length)`: Truncate string with ellipses.
- `slugify(str)`: Create URL-friendly slugs.
- `randomString(length)`: Generate random alphanumeric string.
- `maskString(str, visibleCount)`: Mask sensitive data.
- `wordCount(str)`: Count words in a string.
- `escapeHTML(str)`: Escape HTML special characters.

### Array & Object Utilities
- `chunk(arr, size)`: Split array into chunks.
- `unique(arr)`: Remove duplicates from array.
- `shuffle(arr)`: Randomly shuffle array elements.
- `pick(obj, keys)`: Pick specific keys from an object.
- `omit(obj, keys)`: Omit specific keys from an object.
- `groupBy(arr, key)`: Group array of objects by key.
- `flatten(arr)`: Flatten nested arrays.
- `difference(arr1, arr2)`: Get difference between arrays.
- `intersection(arr1, arr2)`: Get intersection of arrays.
- `deepClone(obj)`: Deeply copy an object.

### Math & Number Utilities
- `randomInt(min, max)`: Generate random integer.
- `clamp(num, min, max)`: Constrain number within range.
- `roundTo(num, decimals)`: Round to decimal places.
- `formatCurrency(num, currency)`: Format number as currency.
- `formatCompactNumber(num)`: Format large numbers (1.2K, 1M).

### Date & Time Utilities
- `sleep(ms)`: Async delay.
- `addDays(date, days)`: Add days to a date.
- `formatDate(date, format)`: Format date string (YYYY-MM-DD).
- `timeAgo(date)`: Relative time string (e.g., "2 hours ago").
- `isLeapYear(year)`: Check for leap year.

### System Utilities
- `ensureDir(path)`: Ensure directory exists.
- `removeFile(path)`: Safely remove a file.
- `getHash(data)`: Calculate SHA256 hash.
- `getFileSize(path)`: Get human-readable file size.
- `getSystemInfo()`: Get OS, CPU, and Memory usage stats.

### Validation Utilities
- `isEmail(str)`: Validate email format.
- `isPhoneNumber(str)`: Validate phone number.
- `isStrongPassword(str)`: Check password strength.
- `isEmpty(value)`: Check if null, undefined, or empty.
- `isValidDate(date)`: Check if valid date object.

### Function Wrappers
- `retry(fn, retries)`: Retry an async function on failure.
- `debounce(fn, ms)`: Debounce function execution.
- `throttle(fn, ms)`: Throttle function execution.
- `once(fn)`: Ensure function runs only once.
- `memoize(fn)`: Cache function results.

### Original Media Toolkit
- `toAudio(buffer, ext)` / `toVideo(buffer, ext)`: Media conversion.
- `extractUrlFromMessage(msg)`: Extract URLs from text.
- `webp2mp4(source)`: Convert WebP to MP4.
- `qrcode(string)`: Generate QR codes.
- `XKCDComic()`: Fetch random comics.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT License. See [LICENSE](LICENSE) file.
