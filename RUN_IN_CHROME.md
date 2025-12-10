# 🌐 How to Run the Application in Chrome Browser

## ✅ Configuration Complete!

- ✅ Frontend configured to use localhost backend
- ✅ Backend `.env` file is ready
- ✅ Dependencies installed

---

## 🚀 Step-by-Step: Run in Chrome

### Step 1: Start the Backend Server

Open **Terminal 1** (PowerShell or Command Prompt) and run:

```powershell
cd backend
npm run server
```

**You should see:**
```
MongoDB connected
Server running on port 5000
```

✅ **Keep this terminal running!** Don't close it.

---

### Step 2: Start the Frontend Server

Open **Terminal 2** (a NEW terminal window) and run:

```powershell
npm run dev
```

**You should see something like:**
```
  VITE v6.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

✅ **Keep this terminal running too!**

---

### Step 3: Open in Chrome

1. Open **Google Chrome** (or any browser)
2. Go to: **http://localhost:5173**
3. The application will load in your browser! 🎉

---

## 📋 Quick Reference

**Terminal 1 (Backend):**
```powershell
cd backend
npm run server
```

**Terminal 2 (Frontend):**
```powershell
npm run dev
```

**Browser:**
```
http://localhost:5173
```

---

## ⚠️ Important Notes

1. **Both terminals must stay open** while using the app
2. **Backend runs on:** http://localhost:5000 (API only)
3. **Frontend runs on:** http://localhost:5173 (The website you see)
4. **MongoDB must be running** (local or Atlas)

---

## 🔧 Troubleshooting

### Backend won't start?
- Check MongoDB is running (if local) or MongoDB Atlas connection is correct
- Verify `.env` file exists in `backend` folder with:
  - `MONGO_URI=mongodb://localhost:27017/shopx`
  - `PORT=5000`
  - `JWT_SECRET=...`

### Frontend won't start?
- Make sure you're in the root directory (not `backend` folder)
- Run `npm install` if needed

### Can't access in Chrome?
- Make sure both servers are running
- Check the URL is exactly: `http://localhost:5173`
- Try refreshing the page (Ctrl+R or F5)

### Page loads but shows errors?
- Check that backend is running and connected to MongoDB
- Open Chrome DevTools (F12) and check Console for errors

---

## 🎯 What You'll See

Once everything is running:
- 🏠 Home page with products
- 🛒 Shopping cart
- 🔐 Login/Signup pages
- 📦 Order management
- 👤 User profile

Enjoy your e-commerce application! 🛍️




