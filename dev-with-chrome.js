// Custom script to start dev server and provide Chrome opening option
import { spawn } from 'child_process';
import { exec } from 'child_process';
import { platform } from 'os';

const os = platform();

console.log('🚀 Starting development server...\n');

// Start Vite dev server
const vite = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true
});

// Function to open Chrome
function openChrome() {
  const url = 'http://localhost:5173';
  let command;

  if (os === 'win32') {
    command = `start chrome "${url}"`;
  } else if (os === 'darwin') {
    command = `open -a "Google Chrome" "${url}"`;
  } else {
    command = `google-chrome "${url}" || chromium-browser "${url}"`;
  }

  setTimeout(() => {
    exec(command, (error) => {
      if (error) {
        console.log(`\n⚠️  Could not auto-open Chrome. Please click on: ${url}`);
      }
    });
  }, 3000); // Wait 3 seconds for server to start
}

// Listen for server ready message
let serverReady = false;
let chromeOpened = false;

// Note: We'll print instructions instead
setTimeout(() => {
  if (!chromeOpened) {
    console.log('\n');
    console.log('═'.repeat(50));
    console.log('🌐 Server is ready!');
    console.log('═'.repeat(50));
    console.log(`\n📋 To open in Chrome:`);
    console.log(`   1. Click on: http://localhost:5173/`);
    console.log(`   2. Or run: node open-chrome.cjs`);
    console.log(`   3. Or double-click: open-chrome.bat`);
    console.log('\n');
  }
}, 3000);

vite.on('close', (code) => {
  process.exit(code);
});




