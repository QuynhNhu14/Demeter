import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Flex } from "@mantine/core";
import Navbar_Shop from "../../components/Navbar/NavbarShop";
import Header from "../../components/Header";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  background: {
    backgroundColor: "#f3f4f6"
  },
  navbarShop: {
    flex: "2", 
    width: "100%"
  },
  Header: {
    flex: "9",
    width: "100%"
  }
});

export default function App_Shop() {
  const navigate = useNavigate();
  const location = useLocation();
  const [firstRender, setFirstRender] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true); // State để kiểm soát hiển thị navbar
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
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
      <Flex {...stylex.props(styles.background)}>
        <div {...stylex.props(styles.navbarShop)}>
          <Navbar_Shop />
        </div>
        <div {...stylex.props(styles.Header)}>
          <Header />
        </div>
      </Flex>
    </>
  );
}

// quản lý đơn hàng, trang sửa thông tin shop)
// Admin (3 Trang quản lý user, shop với đơn hàng)
