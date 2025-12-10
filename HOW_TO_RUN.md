# 🌐 How to Run - Click Localhost URL to Open in Chrome

## 🎯 Quick Start (One Command!)

### ✅ Option 1: Double-Click to Run
Just **double-click** `start.bat` file in Windows Explorer!

### ✅ Option 2: Run in PowerShell
```powershell
.\start.ps1
```

### ✅ Option 3: Run in Command Prompt
```cmd
start.bat
```

---

## 🚀 What Happens

1. ✅ Backend server starts (runs in separate window)
2. ✅ Frontend server starts  
3. ✅ **You'll see a clickable URL** in the terminal: `Local: http://localhost:5173/`
4. ✅ **Click on that URL** to open in Chrome (or your default browser)
5. ✅ Application is ready to use!

---

## 📋 Manual Method (If Needed)

If you prefer to run manually in separate terminals:

**Terminal 1 - Backend:**
```powershell
cd backend
npm run server
```

**Terminal 2 - Frontend:**
```powershell
npm run dev
```

After running `npm run dev`, you'll see something like:
```
  VITE v6.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

**Just click on `http://localhost:5173/` to open in Chrome!**

---

## ⚙️ Configuration Details

- **Vite is configured** to NOT auto-open browser
- **Port:** Frontend runs on `http://localhost:5173`
- **Backend:** Runs on `http://localhost:5000` (API only)
- **Browser:** Click the localhost URL in terminal to open in Chrome

---

## ❗ Requirements

1. **MongoDB** must be running (local or Atlas)
2. **backend\.env** file must exist with:
   - `MONGO_URI=...`
   - `PORT=5000`
   - `JWT_SECRET=...`
3. **Google Chrome** must be installed (or your default browser)

---

## 🆘 Troubleshooting

**Script won't run?**
- PowerShell: Run `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` once
- Or just use `start.bat` instead (double-click it)

**Can't click the URL?**
- You can manually copy and paste `http://localhost:5173` into your browser
- Or just type it in the address bar

**Backend errors?**
- Check `backend\.env` file exists
- Verify MongoDB connection string is correct
- Make sure MongoDB is running

---

## 🎉 That's It!

Run `start.bat` or `.\start.ps1`, then **click on the localhost URL** that appears in the terminal to open in Chrome!

Happy coding! 🚀
