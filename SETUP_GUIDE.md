# 🚀 How to Run the ShopX E-Commerce Application

This is a MERN stack application (MongoDB, Express, React, Node.js). Follow these steps to run it locally.

## Prerequisites

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - Either:
  - MongoDB Atlas (cloud) - [Get free cluster](https://www.mongodb.com/cloud/atlas)
  - MongoDB installed locally
- **npm** (comes with Node.js)

---

## Step 1: Set Up Backend

### 1.1 Navigate to backend directory
```bash
cd backend
```

### 1.2 Install dependencies
```bash
npm install
```

### 1.3 Create environment file

Create a `.env` file in the `backend` directory with the following:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key_here
```

**Example for MongoDB Atlas:**
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/shopx?retryWrites=true&w=majority
PORT=5000
JWT_SECRET=mySecretKey123
```

**Example for local MongoDB:**
```env
MONGO_URI=mongodb://localhost:27017/shopx
PORT=5000
JWT_SECRET=mySecretKey123
```

### 1.4 Start the backend server
```bash
npm run server
```

The server should start and you'll see:
```
MongoDB connected
Server running on port 5000
```

---

## Step 2: Set Up Frontend

### 2.1 Open a new terminal window

Keep the backend running, and open a **new terminal** for the frontend.

### 2.2 Navigate to root directory
```bash
cd ..
```

### 2.3 Install dependencies
```bash
npm install
```

### 2.4 Update API URL (for local development)

Open `src/contexts/SampleState.jsx` and change:
- ✅ **Uncomment** `const URL = "http://localhost:5000";`
- ❌ **Comment out** the production URL

It should look like:
```javascript
const URL = "http://localhost:5000";
// const URL = "https://e-commerce-mern-1-2br8.onrender.com";
```

### 2.5 Start the frontend development server
```bash
npm run dev
```

The frontend will start and you'll see something like:
```
  VITE v6.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

## Step 3: Access the Application

Open your browser and go to:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000

---

## Quick Start Commands Summary

### Terminal 1 (Backend):
```bash
cd backend
npm install
# Create .env file with MONGO_URI and PORT
npm run server
```

### Terminal 2 (Frontend):
```bash
# Make sure you're in the root directory
npm install
# Update src/contexts/SampleState.jsx to use localhost:5000
npm run dev
```

---

## Troubleshooting

### Backend Issues:

1. **MongoDB connection error:**
   - Check your `MONGO_URI` in the `.env` file
   - Make sure MongoDB is running (if local)
   - Verify MongoDB Atlas credentials (if cloud)

2. **Port already in use:**
   - Change the `PORT` in `.env` to a different port (e.g., 5001)
   - Update the frontend URL accordingly

### Frontend Issues:

1. **Cannot connect to backend:**
   - Make sure backend is running on port 5000
   - Check that `SampleState.jsx` has the correct URL (`http://localhost:5000`)
   - Check CORS settings in backend (should allow all origins)

2. **Module not found errors:**
   - Run `npm install` again in the root directory
   - Delete `node_modules` and `package-lock.json`, then run `npm install`

---

## Project Structure

```
E-COMMERCE-MERN-main/
├── backend/           # Express.js backend
│   ├── controllers/   # Route controllers
│   ├── models/        # MongoDB models
│   ├── routes/        # API routes
│   ├── server.js      # Server entry point
│   └── .env          # Environment variables (create this)
├── src/              # React frontend
│   ├── components/   # React components
│   ├── contexts/     # React contexts
│   └── ...
└── package.json      # Frontend dependencies
```

---

## Features

- 🛒 Shopping cart functionality
- 🔑 User authentication (login/signup)
- 📦 Order management
- 💳 Checkout process
- 🎨 Modern UI with animations

Enjoy building! 🎉




