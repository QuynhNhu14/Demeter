// import "./App.css";
import "@mantine/core/styles.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
// import { ProductPage } from "./pages/ProductDetail/ProductPage";
// import { ShopProduct } from "./pages/ShopProduct/ShopProduct";
// import { Shops } from "./pages/Shops/Shops";
// import { Offer } from "./pages/Offer/Offer";
// import Cart from "./pages/Cart/Cart";
// import SignInSignUp from "./pages/SignInSignUp/SignInSignUp";
// import AppSettingPage from "./pages/testapi/appsetting";
// import { Profile } from "./pages/Profile/Profile";
// import { ChangePassword } from "./pages/Profile/ChangePassword";
// import { Orders } from "./pages/Profile/Orders";
// import Dashboardadmin from "./pages/Dashboard/Dashboard_admin";
// import AllProduct from "./pages/Product_admin/AllProduct";
// import AllShop from "./pages/ShopsPreview/Allshop";
// import AdminOrders from "./pages/Orders/Order";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import AddProduct from "./pages/Product_admin/AddProduct";
// import Inventory from "./pages/Inventory/Inventory";
// import ShopProfile from "./pages/ShopsPreview/ShopPreview";
// import ShopAllProduct from "./pages/Product_admin/ShopAllProduct";
// import ShopOrders from "./pages/Orders/ShopOrders";
import { useEffect, useState } from "react";
import * as stylex from "@stylexjs/stylex";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports

const styles = stylex.create({
  app: {
    fontSize: "16px",
    fontFamily: "sans-serif",
  },
});

import { AppShell, MantineProvider, rem } from "@mantine/core";
import HomePage from "./pages/Home";
import { HeaderMegaMenu } from "./components/Navbar";
import { defaultTheme } from "../themes";
import { useHeadroom } from "@mantine/hooks";
import ErrorPage from "./pages/Error/error";
import { Footer } from "./components/Footer/Footer";
import { IntroPage } from "./pages/IntroPage";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [firstRender, setFirstRender] = useState(true);
  const pinned = useHeadroom({ fixedAt: 120 });

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (firstRender) {
      if (location.pathname === "/") {
        navigate("/");
      }
      setFirstRender(false);
    }
  }, [firstRender, navigate, location.pathname]);

  useEffect(() => {
    // Chỉ điều hướng đến '/home' nếu không phải là lần render đầu tiên
    if (!firstRender && location.pathname !== "/home") {
      // Nếu đường dẫn không phải là '/home' thì không thực hiện điều hướng
      navigate(location.pathname);
    }
  }, [location.pathname, firstRender, navigate]);

  return (
    <MantineProvider theme={defaultTheme} defaultColorScheme="light">
      <AppShell
        header={{ height: 56, collapsed: !pinned, offset: true }}
        padding="md"
        withBorder={false}
      >
        <AppShell.Header>
          <HeaderMegaMenu />
        </AppShell.Header>
        <AppShell.Main>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            {/* <Route path="/login" element={<SignInSignUp />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/shop-product" element={<ShopProduct />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change_password" element={<ChangePassword />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/appsetting" element={<AppSettingPage />} />
          <Route path="/admin" element={<Dashboardadmin />} />
          <Route path="/shop" element={<Dashboard />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/shop_allproduct" element={<ShopAllProduct />} />
          <Route path="/manage_orders" element={<AdminOrders />} />
          <Route path="/shop_orders" element={<ShopOrders />} />
          <Route path="/allshop" element={<AllShop />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/ShopProfile" element={<ShopProfile />} /> 
          <Route path="/404" element={<ErrorPage variant="404"/>} />
          <Route path="/503" element={<ErrorPage variant="503"/>} />*/}
          <Route path="/" element={<IntroPage/>} />
          </Routes>
        </AppShell.Main>
        <AppShell.Footer>
          <Footer />
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}
