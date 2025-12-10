# ⚡ Quick Start Guide

## ✅ Dependencies Installed!

Both frontend and backend dependencies have been installed.

---

## 🔧 Next Steps to Run the Application

### 1️⃣ Create Backend Environment File

Create a file named `.env` in the `backend` folder with:

```env
MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/shopx?retryWrites=true&w=majority
PORT=5000
JWT_SECRET=mySecretKey12345678901234567890
```

**Option A: MongoDB Atlas (Cloud - Recommended)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account and cluster
3. Get your connection string
4. Replace `your-username`, `your-password`, and `cluster` with your actual values

**Option B: Local MongoDB**
```env
MONGO_URI=mongodb://localhost:27017/shopx
PORT=5000
JWT_SECRET=mySecretKey12345678901234567890
```

---

### 2️⃣ Switch Frontend to Localhost (Optional)

If you want to use your local backend, open `src/contexts/SampleState.jsx`:

**Change from:**
```javascript
// const URL = "http://localhost:5000";
const URL = "https://e-commerce-mern-1-2br8.onrender.com";
```

**To:**
```javascript
const URL = "http://localhost:5000";
// const URL = "https://e-commerce-mern-1-2br8.onrender.com";
```

**Or keep using the production backend** (no changes needed)

---

### 3️⃣ Start the Backend Server

Open a terminal and run:

```bash
cd backend
npm run server
```

You should see:
```
MongoDB connected
Server running on port 5000
```

---

### 4️⃣ Start the Frontend Server

Open a **NEW terminal** (keep backend running) and run:

```bash
npm run dev
```

You should see:
```
  VITE v6.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

---

### 5️⃣ Open Your Browser

Go to: **http://localhost:5173**

---

## 🎯 Summary

**Terminal 1 (Backend):**
```bash
cd backend
npm run server
```

**Terminal 2 (Frontend):**
```bash
npm run dev
```

---

## ❗ Important Notes

- You **MUST** create the `.env` file in the `backend` folder before starting the backend
- Keep both terminals running (backend and frontend)
- If backend fails, check your MongoDB connection string
- Frontend will work with the production backend if you don't change SampleState.jsx

---

## 🆘 Troubleshooting

**Backend won't start:**
- Make sure `.env` file exists in `backend` folder
- Check MongoDB connection string is correct
- Port 5000 might be in use - change PORT in `.env`

**Frontend can't connect:**
- Make sure backend is running
- Check if URL in `SampleState.jsx` matches your backend URL

---

For detailed instructions, see `SETUP_GUIDE.md`




