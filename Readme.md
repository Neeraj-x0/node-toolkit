# Node.js Media Toolkit

This Node.js toolkit provides various functions for working with media files, including audio and video conversion, fetching XKCD comics, QR code reading, and more. It utilizes popular libraries such as Axios, Cheerio, and FFmpeg for media processing tasks.


## Usage

The toolkit provides a set of functions that can be imported into your Node.js projects. Here's how you can use it:

1. Import the desired functions into your script:
   ```javascript
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
     findMusic 
   } = require('@neeraj-x0/nodetoolkit');
   ```

2. Utilize the imported functions as needed. For example:
   ```javascript
   // Convert a buffer to an audio file
   const audioBuffer = ...; // Buffer containing audio data
   const audioFile = await toAudio(audioBuffer, 'mp3');

   // Fetch a random XKCD comic
   const comic = await XKCDComic();
   console.log('XKCD Comic Image URL:', comic.imageUrl);

   // Get the buffer of a webp image converted to png
   const webpUrl = 'https://example.com/image.webp';
   const pngBuffer = await webp2png(webpUrl);
   ```

## Functions

### Audio/Video Conversion
- `toAudio(buffer, ext)`: Converts an audio buffer to a playable audio file (e.g., mp3).
- `toPTT(buffer, ext)`: Converts an audio buffer to a WhatsApp-compatible audio file (opus format).
- `toVideo(buffer, ext)`: Converts a video buffer to a playable video file (mp4).

### Media Utilities
- `getBuffer(url, options)`: Fetches the buffer of a file from a URL.
- `FiletypeFromUrl(url)`: Detects the file type of a URL.
- `extractUrlFromMessage(message)`: Extracts URLs from a text message.

### Miscellaneous
- `XKCDComic()`: Fetches a random comic from XKCD.
- `webp2png(source)`: Converts a webp image to a png buffer.
- `webp2mp4(source)`: Converts a webp image to a mp4 video buffer.
- `getJson(url, options)`: Fetches JSON data from a URL.
- `start(file)`: Starts a JavaScript file using Node.js clusters.
- `ffmpeg(buffer, args = [], ext = "", ext2 = "")`: Runs FFmpeg commands asynchronously to convert media files.
- `parseJid(text)`: Parses a text for WhatsApp JIDs.
- `parsedJid(text)`: Parses a text for WhatsApp JIDs (alternative function).
- `isIgUrl(url)`: Checks if a URL is an Instagram URL.
- `isUrl(url)`: Checks if a string is a URL.
- `getUrl(url)`: Extracts URLs from a string.
- `qrcode(string)`: Generates a QR code buffer from a string.
- `secondsToDHMS(seconds)`: Converts seconds to Days, Hours, Minutes, and Seconds format.
- `formatBytes(bytes, decimals)`: Formats bytes into a human-readable format.
- `clockString(duration)`: Converts a duration in milliseconds to a clock format (HH:MM:SS).
- `runtime()`: Returns the runtime of the current Node.js process.
- `AddMp3Meta(songbuffer, coverBuffer, options)`: Adds metadata to an mp3 buffer.
- `Mp3Cutter(buffer, start, end)`: Cuts an mp3 buffer from a given start time to end time.
- `Bitly(url)`: Shortens a URL using Bitly.
- `isNumber()`: Checks if a string is a number.
- `getRandom()`: Returns a random element from an array or a random number within a range.
- `findMusic(buffer)`: Identifies music from an audio buffer and returns its details.

## Contributing

Contributions to this project are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This toolkit is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
