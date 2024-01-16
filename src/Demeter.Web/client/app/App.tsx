import "./App.css";
import { Routes, Route } from 'react-router-dom'
import { HomePage } from "./pages/Home/Home";
import { ProductPage } from "./pages/ProductDetail/ProductPage";
import { ShopProduct } from "./pages/ShopProduct/ShopProduct";
import { Shops } from "./pages/Shops/Shops";
import { Offer } from "./pages/Offer/Offer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import SignInSignUp from "./pages/SignInSignUp/SignInSignUp";
import AppSettingPage from "./pages/testapi/appsetting";
import { Profile } from "./pages/Profile/Profile";
import { ChangePassword } from "./pages/Profile/ChangePassword";
import { Orders } from "./pages/Profile/Orders";
import { Footer } from "./components/Footer/Footer";

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
        <Route path='/profile' element={<Profile/>} />
        <Route path='/change_password' element={<ChangePassword/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/appsetting' element={<AppSettingPage />} />
      </Routes>
      <Navbar />
    </div>
  );
}
