import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import { Routes, Route, useLocation} from "react-router-dom";
import { useEffect} from "react";
import { AppShell, MantineProvider } from "@mantine/core";
import HomePage from "./pages/Home";
import { HeaderMegaMenu } from "./customer/components";
import { defaultTheme } from "../themes";
import { Footer} from "./components/Footer";
import { IntroPage } from "./pages/IntroPage";
import { Profile } from "./customer/pages/Profile/Profile";
import { ChangePassword } from "./customer/pages/Profile/ChangePassword";
import { Shops } from "./pages/Shops";
import { ProductPage} from "./pages/ProductPage";
import Cart from "./customer/pages/Cart/Cart";
import { Notification } from "./pages/Notification";
import ShopOrders from "./admin/pages/Orders/ShopOrders";
import { ProductSearch } from "./pages/ProductSearch";
import ShopAllProduct from "./admin/pages/Product_admin/ShopAllProduct";
import AddProduct from "./admin/pages/Product_admin/AddProduct";
import ShopProfile from "./admin/pages/ShopsPreview/ShopPreview";
import {PaymentStatus} from "./pages/PaymentStatus";
import Dashboard from "./admin/pages/Dashboard/Dashboard";
import { ShopProduct } from "./pages/ShopProduct";
import { VoucherPage } from "./pages/VoucherPage";
import AppSettingPage from "./pages/testapi/appsetting";
import { FAQ } from "./pages/faq";
import { Contact } from "./pages/contact";
import { Orders } from "./customer/pages/Profile/Orders";
import { Inventory } from "./admin/pages/Inventory/Inventory";
import { Login } from "./components/LogIn";
import Dashboardadmin from "./admin/pages/Dashboard/Dashboard_admin";
import AdminAllProduct from "./admin/pages/Product_admin/AdminAllProduct";
import AdminOrders from "./admin/pages/Orders/AdminOrders";
import AllShop from "./admin/pages/ManageAccount/Allshop";
import AllCustomer from "./admin/pages/ManageAccount/AllCustomer";
import AdminCategory from "./admin/pages/Category";
import { AdminInventory } from "./admin/pages/Inventory/AdminInventory";
import AdminVouchers from "./admin/pages/Voucher/AdminVoucher";

export default function App() {
  const location = useLocation();
  
  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <MantineProvider theme={defaultTheme} >
      <AppShell
        header={{height: 60, collapsed: false, offset: true }}
        withBorder={false}
        //appshell have position:fixed style - they are not scroll with the page.
      >
        <AppShell.Header>
          <HeaderMegaMenu />
        </AppShell.Header>
        <AppShell.Main>
          <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/voucher" element={<VoucherPage />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/search" element={<ProductSearch  />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vendors" element={<Shops />} />

          <Route path="/shop-product" element={<ShopProduct/>} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment-success" element={<PaymentStatus success={true}/>} />
          <Route path="/payment-cancel" element={<PaymentStatus />} />
          <Route path="/setting" element={<AppSettingPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change_password" element={<ChangePassword />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/shop" element={<Dashboard />} />
          <Route path="/shop_orders" element={<ShopOrders />} />
          <Route path="/shop_products" element={<ShopAllProduct />} />
          <Route path="/shop_addproduct" element={<AddProduct />} />
          <Route path="/shop_profile" element={<ShopProfile />} /> 
          <Route path="/shop_inventory" element={<Inventory />} />

          <Route path="/admin" element={<Dashboardadmin />} />
          <Route path="/admin_products" element={<AdminAllProduct />} />
          <Route path="/admin_orders" element={<AdminOrders />} />
          <Route path="/admin_categories" element={<AdminCategory />} />
          <Route path="/admin_voucher" element={<AdminVouchers />} />
          <Route path="/admin_inventory" element={<AdminInventory />} />
          <Route path="/admin_shopaccount" element={<AllShop />} />
          <Route path="/admin_customeraccount" element={<AllCustomer />} />
          
          {/*
          <Route path="/appsetting" element={<AppSettingPage />} />
          <Route path="/404" element={<ErrorPage variant="404"/>} />
          <Route path="/503" element={<ErrorPage variant="503"/>} />*/}
          </Routes>
        </AppShell.Main>
      </AppShell>
      <Footer/>
    </MantineProvider>
  );
}