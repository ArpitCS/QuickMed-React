import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Navigate,
} from "react-router-dom";

import "./App.css";

import CartProvider from "./context/CartContext";

import Home from "./pages/Home";
import Store from "./pages/Store";
import Tests from "./pages/Tests";
import FirstAid from "./pages/FirstAid";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import Blogs from "./pages/Blogs";
import Nearby from "./pages/Nearby";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

import PrivateRoute from "./config/PrivateRoute";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/firstaid" element={<FirstAid />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />}/>} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/nearby" element={<Nearby />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
