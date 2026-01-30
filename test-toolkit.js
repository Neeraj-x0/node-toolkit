const toolkit = require('./index');

async function testToolkit() {
    console.log('--- Testing Node Toolkit Expansion ---');

    // String Utils
    const str = 'hello world';
    console.log(`Capitalize: ${toolkit.capitalize(str)}`); // Hello world
    console.log(`Slugify: ${toolkit.slugify('Hello World! 123')}`); // hello-world-123

    // Array Utils
    const arr = [1, 2, 3, 4, 5];
    console.log(`Chunk:`, toolkit.chunk(arr, 2)); // [[1,2], [3,4], [5]]
    console.log(`Shuffle:`, toolkit.shuffle([1, 2, 3]));

    // Math Utils
    console.log(`Random Int (1-10): ${toolkit.randomInt(1, 10)}`);
    console.log(`Currency: ${toolkit.formatCurrency(1234.56, 'EUR')}`);

    // Date Utils
    console.log(`Time Ago: ${toolkit.timeAgo(new Date(Date.now() - 3600000))}`); // 1 hour ago

    // Validation
    console.log(`Is Email (test@example.com): ${toolkit.isEmail('test@example.com')}`); // true

    // System Utils
    console.log('System Info:', toolkit.getSystemInfo().platform);

    // Network Utils (Async)
    console.log('\n--- Testing Network APIs (may take a moment) ---');

    try {
        const ip = await toolkit.getPublicIP();
        console.log(`Public IP: ${ip}`);

        const rate = await toolkit.getExchangeRate('USD', 'EUR');
        console.log(`1 USD to EUR: ${rate}`);

        const quote = await toolkit.getRandomQuote();
        console.log(`Random Quote: "${quote.content}" - ${quote.author}`);

    } catch (err) {
        console.error('Network test failed:', err.message);
    }

    console.log('\n--- Verification Complete ---');
}

testToolkit();
