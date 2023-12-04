import { useState } from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom'
import { Auth } from "./pages/Auth/Auth";
import { HomePage } from "./pages/Home/Home";
import { ProductPage } from "./pages/ProductDetail/ProductPage";
import { ShopProduct } from "./pages/ShopProduct/ShopProduct";
import { Shops } from "./pages/Shops/Shops";
import { Offer } from "./pages/Offer/Offer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import SignInSignUp from "./pages/SignInSignUp/SignInSignUp";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<SignInSignUp />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/shop-product' element={<ShopProduct />} />
        <Route path='/shops' element={<Shops/>} />
        <Route path='/offer' element={<Offer/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Navbar />
    </div>
  );
}
