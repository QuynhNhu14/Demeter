import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import { Routes, Route, useLocation} from "react-router-dom";
import { useEffect} from "react";
import { AppShell, MantineProvider } from "@mantine/core";
import HomePage from "./pages/Home";
import { HeaderMegaMenu } from "./customer/components";
import { defaultTheme } from "../themes";
import { Footer } from "./components/Footer";
import { IntroPage } from "./pages/IntroPage";
import { Profile } from "./customer/pages/Profile/Profile";
import { ChangePassword } from "./customer/pages/Profile/ChangePassword";
import { Shops } from "./customer/pages/Shops";
import { ProductPage} from "./pages/ProductPage";
import Cart from "./customer/pages/Cart/Cart";
import { Notification } from "./pages/Notification";
import ShopOrders from "./admin/pages/Orders/ShopOrders";
import { ProductSearch } from "./pages/ProductSearch";

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
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change_password" element={<ChangePassword />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/products/" element={<ProductPage productId="cd9b5b5a-3506-45a2-b37a-0d27e9ee6c47"/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/shop_orders" element={<ShopOrders />} />
          <Route path="/search" element={<ProductSearch  />} />
          {/*<Route path="/login" element={<SignInSignUp />} />
          
          <Route path="/shop-product" element={<ShopProduct />} />
          
          <Route path="/offer" element={<Offer />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/appsetting" element={<AppSettingPage />} />
          <Route path="/admin" element={<Dashboardadmin />} />
          <Route path="/shop" element={<Dashboard />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/shop_allproduct" element={<ShopAllProduct />} />
          <Route path="/manage_orders" element={<AdminOrders />} />
          <Route path="/allshop" element={<AllShop />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/ShopProfile" element={<ShopProfile />} /> 
          <Route path="/404" element={<ErrorPage variant="404"/>} />
          <Route path="/503" element={<ErrorPage variant="503"/>} />*/}
            <Route path="/" element={<IntroPage />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
      <Footer/>
    </MantineProvider>
  );
}