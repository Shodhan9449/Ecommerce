# 🌐 How to Click Localhost URL to Open in Chrome

## ✅ Solution: Click the URL to Open in Chrome

When you run `npm run dev`, you'll see:
```
➜  Local:   http://localhost:5173/
```

## 🖱️ How to Click and Open in Chrome:

### Method 1: Click the URL (Recommended)
1. **Look for** `Local:   http://localhost:5173/` in your terminal
2. **Hold Ctrl and Click** on `http://localhost:5173/`
   - This opens it in your default browser
3. **To make Chrome default:** Set Chrome as your default browser in Windows settings

### Method 2: Open Chrome Helper Script
While the server is running, open a **new terminal** and run:
```powershell
npm run open-chrome
```
Or double-click: `open-chrome.bat`

### Method 3: Manual Copy-Paste
1. Copy the URL: `http://localhost:5173`
2. Open Chrome manually
3. Paste in address bar

---

## 🔧 Make Chrome Your Default Browser (Optional)

To ensure URLs open in Chrome automatically:

**Windows:**
1. Open **Windows Settings**
2. Go to **Apps** → **Default apps**
3. Click **Web browser**
4. Select **Google Chrome**

---

## 💡 Quick Test

1. Start your server: `npm run dev`
2. Wait for: `➜  Local:   http://localhost:5173/`
3. **Ctrl+Click** on the URL
4. Chrome opens! 🎉

---

## 📝 Notes

- The URL in terminal is clickable in most modern terminals
- If clicking doesn't work, use Method 2 or 3
- The server must be running for the URL to work




