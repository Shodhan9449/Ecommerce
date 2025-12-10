# 🔍 Login Troubleshooting Guide

## ✅ Changes Made

I've improved the login error handling to show **actual error messages** instead of generic "Login failed" messages.

## 🔧 Common Login Issues & Solutions

### 1. **"Cannot connect to server" Error**

**Problem:** Backend server is not running or not accessible.

**Solution:**
- Make sure backend server is running: `cd backend && npm run server`
- Check if you see: `MongoDB connected` and `Server running on port 5000`
- Verify backend URL in `src/contexts/SampleState.jsx` is `http://localhost:5000`

### 2. **"Invalid credentials" Error**

**Problem:** Email or password is incorrect, OR user doesn't exist in database.

**Solution:**
- Make sure you have signed up first! Go to `/signup` to create an account
- Check if you're using the correct email and password
- The database might be empty - create a new account first

### 3. **"MongoDB connection error"**

**Problem:** MongoDB is not running or connection string is wrong.

**Solution:**
- If using local MongoDB: Start MongoDB service
- If using MongoDB Atlas: Check your connection string in `backend/.env`
- Verify `backend/.env` has correct `MONGO_URI`

### 4. **Login succeeds but immediately redirects back to login**

**Problem:** ProtectedRoute is checking `islogin` before state updates.

**Solution:** Already fixed! Added a small delay before navigation to ensure state updates.

### 5. **"Server error" or "500 error"**

**Problem:** Backend code issue or JWT_SECRET missing.

**Solution:**
- Check `backend/.env` has `JWT_SECRET` set
- Check backend console for error logs
- Make sure all dependencies are installed: `cd backend && npm install`

## 📋 Step-by-Step Debugging

### Step 1: Check Backend Status
```bash
cd backend
npm run server
```

**Expected output:**
```
MongoDB connected
Server running on port 5000
```

### Step 2: Check Frontend URL
Open `src/contexts/SampleState.jsx` - should have:
```javascript
const URL = "http://localhost:5000";
```

### Step 3: Try Sign Up First
If you haven't created an account:
1. Go to `/signup` page
2. Create a new account
3. Then try logging in

### Step 4: Check Browser Console
1. Open browser DevTools (F12)
2. Go to Console tab
3. Try logging in
4. Look for error messages

### Step 5: Check Network Tab
1. Open browser DevTools (F12)
2. Go to Network tab
3. Try logging in
4. Check the `/api/auth/login` request:
   - Status code (should be 200)
   - Response body (should have user and token)
   - Any error messages

## 🎯 Quick Test

1. **Start Backend:**
   ```bash
   cd backend
   npm run server
   ```

2. **Start Frontend:**
   ```bash
   npm run dev
   ```

3. **Sign Up First** (if no account):
   - Go to: http://localhost:5173/signup
   - Create an account

4. **Login:**
   - Go to: http://localhost:5173/login
   - Use your credentials
   - Check the error message if it fails (now shows actual error!)

## 📝 What the Error Messages Mean

- **"Cannot connect to server"** → Backend not running or wrong URL
- **"Invalid credentials"** → Wrong email/password or user doesn't exist
- **"MongoDB connection error"** → Database not accessible
- **"Server error"** → Check backend console for details
- **"Network Error"** → CORS issue or backend not responding

## ✅ After Fixing

The login page will now show **detailed error messages** to help identify the exact problem!

