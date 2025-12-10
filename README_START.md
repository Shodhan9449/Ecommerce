# 🚀 How to Start - Click Localhost to Open in Chrome

## ✅ Simple Steps:

### 1. Start the Application
Run one of these:
- Double-click `start.bat`
- Or run: `.\start.ps1`

### 2. Wait for Server to Start
You'll see output like:
```
VITE v6.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

### 3. Click the URL to Open in Chrome

**Option A: Click the URL (if Chrome is your default browser)**
- **Ctrl + Click** on `http://localhost:5173/` in the terminal
- It will open in Chrome automatically

**Option B: Use Helper Script (Opens Chrome directly)**
- Open a **NEW terminal** window
- Run: `npm run open-chrome`
- Or double-click: `open-chrome.bat`

**Option C: Manual**
- Open Chrome manually
- Type: `http://localhost:5173`

---

## 🔧 If URL Clicking Doesn't Open Chrome:

### Make Chrome Your Default Browser:
1. Open **Windows Settings** (Win + I)
2. Go to **Apps** → **Default apps**
3. Find **Web browser**
4. Click and select **Google Chrome**

OR

### Use the Helper Script:
```powershell
npm run open-chrome
```

This will open Chrome directly, bypassing the default browser setting.

---

## 💡 Quick Reference

**Start everything:**
```powershell
.\start.bat
# or
.\start.ps1
```

**Open Chrome (in new terminal while server runs):**
```powershell
npm run open-chrome
```

**Manual start:**
```powershell
# Terminal 1
cd backend
npm run server

# Terminal 2
npm run dev
# Then click: http://localhost:5173
```

---

## 🎯 That's It!

The URL in the terminal is clickable - just **Ctrl+Click** on it to open in Chrome! 🎉




