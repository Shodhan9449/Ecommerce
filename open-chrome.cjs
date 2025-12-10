// Helper script to open Chrome with localhost URL (CommonJS version)
const { exec } = require('child_process');
const { platform } = require('os');

const url = 'http://localhost:5173';
const os = platform();

let command;

if (os === 'win32') {
  // Windows - open in Chrome
  command = `start chrome "${url}"`;
} else if (os === 'darwin') {
  // macOS
  command = `open -a "Google Chrome" "${url}"`;
} else {
  // Linux
  command = `google-chrome "${url}" || chromium-browser "${url}" || xdg-open "${url}"`;
}

exec(command, (error) => {
  if (error) {
    console.error(`Failed to open Chrome: ${error.message}`);
    console.log(`\nPlease manually open: ${url}`);
    console.log(`Or copy this URL: ${url}`);
  } else {
    console.log(`\n✅ Opening Chrome at ${url}...`);
  }
});




