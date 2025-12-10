// Helper script to open Chrome with localhost URL
import { exec } from 'child_process';
import { platform } from 'os';

const url = 'http://localhost:5173';
const os = platform();

let command;

if (os === 'win32') {
  // Windows - find Chrome and open URL
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
  } else {
    console.log(`\n✅ Opening Chrome at ${url}...`);
  }
});




