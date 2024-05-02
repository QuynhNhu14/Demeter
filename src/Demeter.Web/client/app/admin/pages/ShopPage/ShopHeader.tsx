import { useState, useEffect } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { Input, Button, Flex } from "@mantine/core";
// import {
//   IconLogout,
//   IconSearch,
//   IconShoppingBag,
//   IconShoppingBag,
// } from '@tabler/icons-react'; 
import headerLogo from "../../../assets/header_logo.jpg";
import { IconLogout, IconSearch, IconShoppingBag, IconHome } from "@tabler/icons-react";
import { FuzzySearch } from "../../customer/components/Search";

export default function ShopHeader() {
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
    if (!firstRender && location.pathname !== "/dashboard") {
      // Nếu đường dẫn không phải là '/dashboard' thì không thực hiện điều hướng
      navigate(location.pathname);
    }
  }, [location.pathname, firstRender, navigate]);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <Flex {...stylex.props(styles.ShopHeader)}>
      <Flex
        style={{
          width: "260px",
          padding: "10px",
          height: "100%",
          margin: "0 30px"
        }}
      >
        <img
          src={headerLogo}
          alt="header logo"
          style={{ width: "100%", height: "100%" }}
        />
      </Flex>
      <Flex style={{ flex: "8", height: "100%" }}>
        <Flex
          align="center"
          style={{ flex: "7", borderRight: "1px solid #e7e7e7" }}
        >
          <FuzzySearch/>
        </Flex>
        <Flex
          style={{ flex: "2", borderRight: "1px solid #e7e7e7" }}
          justify="center"
          align="center"
        >
          <Button  variant="outline" color="#009f7f" 
          {...stylex.props(styles.VisitSiteButton)}
          >
            <NavLink to="/home" {...stylex.props(styles.VisitSiteLink)}>
              <IconHome size={20} style={{marginRight: '5px'}}/> Truy cập sàn
            </NavLink>
          </Button>
        </Flex>
        <Flex
          style={{ flex: "2", borderRight: "1px solid #e7e7e7" }}
          justify="center"
          align="center"
          gap="sm"
        >
          <Flex
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100px",
              border: "1px solid #e7e7e7",
            }}
            justify="center"
            align="center"
          >
            <IconHome />
          </Flex>
          <Flex direction="column">
            <span style={{ fontWeight: "500", fontSize: "16px" }}>
              Demeter
            </span>
            <span style={{ opacity: "0.7", fontSize: "12px" }}>Cửa hàng</span>
          </Flex>
        </Flex>
        <Flex style={{ flex: "1" }} justify="center" align="center">
          <NavLink to="/login">
            <IconLogout size={24} color="red" />
          </NavLink>
        </Flex>
      </Flex>
    </Flex>
  );
}


const styles = stylex.create({
  ShopHeader: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    zIndex: '1000',
    backgroundColor: "#fff",
    height: "64px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #E5E7EB",
    zIndex: "1000",
  },
  VisitSiteButton: {
    borderRadius: '20px',
    fontWeight: '500',
  },
  VisitSiteLink: {
    color: "#009f7f",
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
});