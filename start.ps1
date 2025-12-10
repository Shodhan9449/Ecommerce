# PowerShell script to start the application (click localhost URL to open browser)
Write-Host "🚀 Starting ShopX E-Commerce Application..." -ForegroundColor Green
Write-Host ""

# Check if backend .env file exists
if (-Not (Test-Path "backend\.env")) {
    Write-Host "❌ Error: backend\.env file not found!" -ForegroundColor Red
    Write-Host "Please create backend\.env file with MONGO_URI, PORT, and JWT_SECRET" -ForegroundColor Yellow
    exit 1
}

# Start backend server in background
Write-Host "📦 Starting backend server..." -ForegroundColor Cyan
$backendProcess = Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; npm run server" -PassThru

# Wait for backend to start (5 seconds)
Write-Host "⏳ Waiting for backend to start..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

# Start frontend server
Write-Host "🎨 Starting frontend server..." -ForegroundColor Cyan
Write-Host ""
Write-Host "═══════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "🌐 When server is ready:" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "   📍 Look for: Local:   http://localhost:5173/" -ForegroundColor White
Write-Host ""
Write-Host "   ✨ To open in Chrome:" -ForegroundColor Green
Write-Host "      Option 1: Ctrl+Click on the URL above" -ForegroundColor Cyan
Write-Host "      Option 2: Run in new terminal: npm run open-chrome" -ForegroundColor Cyan
Write-Host "      Option 3: Double-click: open-chrome.bat" -ForegroundColor Cyan
Write-Host ""
Write-Host "═══════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# Start frontend (click localhost URL in terminal to open browser)
npm run dev

# Cleanup: Close backend when frontend closes
Wait-Process -Id $backendProcess.Id -ErrorAction SilentlyContinue

