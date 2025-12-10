# PowerShell script to open Chrome with localhost URL
$url = "http://localhost:5173"

Write-Host ""
Write-Host "🌐 Opening Chrome at $url..." -ForegroundColor Green
Write-Host ""

try {
    Start-Process "chrome.exe" -ArgumentList $url
    Write-Host "✅ Chrome opened successfully!" -ForegroundColor Green
} catch {
    Write-Host "❌ Could not open Chrome automatically." -ForegroundColor Red
    Write-Host "Please manually open Chrome and go to: $url" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Or press Ctrl+Click on this URL: $url" -ForegroundColor Cyan
}




