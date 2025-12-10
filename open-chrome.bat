@echo off
echo.
echo 🌐 Opening Chrome at http://localhost:5173...
echo.

start chrome http://localhost:5173

if %errorlevel% neq 0 (
    echo.
    echo ❌ Could not open Chrome automatically.
    echo Please manually open Chrome and go to: http://localhost:5173
    echo.
    pause
)




