# 🚀 Start Application - Click URL to Open in Chrome

## ✨ Quick Start - One Command!

### Option 1: Using PowerShell Script (Recommended for Windows)
```powershell
.\start.ps1
```

### Option 2: Using Batch File
Double-click `start.bat` or run:
```cmd
start.bat
```

### Option 3: Manual Start
```powershell
# Terminal 1 - Backend
cd backend
npm run server

# Terminal 2 - Frontend
npm run dev
# Then click on the Local: http://localhost:5173/ URL shown in terminal
```

---

## 🎯 What Happens

1. ✅ Backend server starts automatically
2. ✅ Frontend server starts automatically  
3. ✅ **A clickable URL appears** in the terminal: `Local: http://localhost:5173/`
4. ✅ **Click on that URL** to open in Chrome
5. ✅ Application is ready to use!

---

## 📝 Notes

- The scripts will check if `backend\.env` file exists
- Backend starts in a separate window (you can see logs)
- **Browser does NOT auto-open** - you control when to open it
- **Click the localhost URL** in the terminal to open in Chrome
- **Keep both windows open** while using the app

---

## 🔧 Troubleshooting

**Script won't run?**
- For PowerShell: Run `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` in PowerShell as Administrator
- Or use the batch file (`start.bat`) instead

**How to open browser?**
- Look for the line: `➜  Local:   http://localhost:5173/`
- **Click on that URL** in your terminal (most terminals support this)
- Or copy and paste it into Chrome's address bar
- Or just type `http://localhost:5173` in Chrome

**Backend fails?**
- Check `backend\.env` file exists and has correct MongoDB connection
- Make sure MongoDB is running (local or Atlas)

---

## 💡 Tips

- The URL in the terminal is **clickable** in most modern terminals (PowerShell, Command Prompt, VS Code Terminal, etc.)
- If clicking doesn't work, just copy the URL and paste it in Chrome
- You can also press `Ctrl + Click` on the URL in some terminals

---

Enjoy your e-commerce application! 🛍️
