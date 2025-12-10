@echo off
echo 🚀 Starting ShopX E-Commerce Application...
echo.

REM Check if backend .env file exists
if not exist "backend\.env" (
    echo ❌ Error: backend\.env file not found!
    echo Please create backend\.env file with MONGO_URI, PORT, and JWT_SECRET
    pause
    exit /b 1
)

echo 📦 Starting backend server...
start "Backend Server" cmd /k "cd backend && npm run server"

REM Wait for backend to start
echo ⏳ Waiting for backend to start...
timeout /t 5 /nobreak > nul

echo.
echo ═══════════════════════════════════════════════════
echo 🎨 Starting frontend server...
echo ═══════════════════════════════════════════════════
echo.
echo 🌐 When server is ready:
echo.
echo    📍 Look for: Local:   http://localhost:5173/
echo.
echo    ✨ To open in Chrome:
echo       Option 1: Ctrl+Click on the URL above
echo       Option 2: Run in new terminal: npm run open-chrome
echo       Option 3: Double-click: open-chrome.bat
echo.
echo ═══════════════════════════════════════════════════
echo.

REM Start frontend (click localhost URL in terminal to open browser)
npm run dev

