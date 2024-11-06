import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";
import ProductDetailes from "../Pages/ProductDetailes";
import Checkout from "../Pages/Checkout";
import Watchlist from "../Pages/Watchlist";
import Contact from "../Pages/Contact";
import Help from "../Pages/Help";
import Carrers from "../Pages/Carrers";
import Blog from "../Pages/Blog";

import Dashboard from "../Admin/AdPages/Dashboard";
import AddProduct from "../Admin/AdPages/AddProduct";
import AddCarrers from "../Admin/AdPages/AddCarrers";
import ListProducts from "../Admin/AdPages/ListProducts";
import ListOrders from "../Admin/AdPages/ListOrders";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import AdminLogin from "../Admin/AdComponents/AdminLogin/AdLogin";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
      <Route path="details" element={<ProductDetailes />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="watchList" element={<Watchlist />} />
      <Route path="contact" element={<Contact />} />
      <Route path="help" element={<Help />} />
      <Route path="careers" element={<Carrers />} />
      <Route path="blog" element={<Blog />} />

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />

      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/addProduct" element={<AddProduct />} />
      <Route path="/admin/addCarrers" element={<AddCarrers />} />
      <Route path="/admin/products" element={<ListProducts />} />
      <Route path="/admin/orders" element={<ListOrders />} />
      <Route path="/admin/users" element={<Dashboard />} />
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  );
};

export default Routers;
