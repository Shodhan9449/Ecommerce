import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ProfileLoader from "./components/auth/ProfileLoader";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Profile from "./components/Profile";
import Cart from './components/Cart';
import Orders from './components/Orders';
import Help from './components/Help';
import ProductDetail from './components/ProductDetail';
import { CartProvider } from "./contexts/CartContext";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev); // ✅ toggle logic

  return (
    <CartProvider>
      <Header onMenuClick={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
      <div
        style={{
          paddingTop: "60px", // ✅ Matches header height
          paddingLeft: sidebarOpen ? "220px" : "0",
          transition: "padding-left 0.3s",
        }}
      >
        <ProfileLoader/>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/about" element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
          } />
          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />
          <Route path="/orders" element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          } />
          <Route path="/product/:id" element={
            <ProtectedRoute>
              <ProductDetail />
            </ProtectedRoute>
          } />
          <Route path="/help" element={
            <ProtectedRoute>
              <Help />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
