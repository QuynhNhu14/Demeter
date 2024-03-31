import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App_Shop.css";
import Navbar_Admin from "./components/Navbar_Shop/Navbar_Shop";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Input, Button, Flex } from "@mantine/core";
import AllProduct from "./pages/Product_admin/AllProduct";
import AddProduct from "./pages/Product_admin/AddProduct";
import { IconMenuFold, IconMenuUnfold, IconSearch } from "@tabler/icons-react"; // Import các biểu tượng từ Ant Design
import Inventory from "./pages/Inventory/Inventory";
import Orders from "./pages/Orders/Order";
import ShopProfile from "./pages/ShopsPreview/ShopPreview";
import Navbar_Shop from "../../components/Navbar_Shop/Navbar_Shop";
import ShopHeader from "../ShopPage/ShopHeader";

export default function App_Shop() {
  const navigate = useNavigate();
  const location = useLocation();
  const [firstRender, setFirstRender] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true); // State để kiểm soát hiển thị navbar
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    console.log("Đã tìm kiếm:", value);
  };

  const onSearchClick = () => {
    handleSearch(searchTerm); // Gọi hàm xử lý tìm kiếm khi người dùng nhấn nút tìm kiếm
  };
  useEffect(() => {
    if (firstRender) {
      if (location.pathname === "/") {
        navigate("/dashboard");
      }
      setFirstRender(false);
    }
  }, [firstRender, navigate, location.pathname]);

  useEffect(() => {
    // Chỉ điều hướng đến '/dashboard' nếu không phải là lần render đầu tiên
    if (!firstRender && location.pathname !== "/shop_dashboard") {
      // Nếu đường dẫn không phải là '/dashboard' thì không thực hiện điều hướng
      navigate(location.pathname);
    }
  }, [location.pathname, firstRender, navigate]);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <Flex style={{ backgroundColor: "#f3f4f6" }}>
        <div style={{ flex: "2", width: "100%" }}>
          <Navbar_Shop />
        </div>
        <div style={{ flex: "9", width: "100%" }}>
          <ShopHeader />
        </div>
      </Flex>
    </>
  );
}
// quản lý đơn hàng, trang sửa thông tin shop)
// Admin (3 Trang quản lý user, shop với đơn hàng)
