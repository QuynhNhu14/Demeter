import { useState, useEffect } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { Button, Flex, Text } from "@mantine/core";
// import {
//   IconLogout,
//   IconSearch,
//   IconShoppingBag,
//   IconShoppingBag,
// } from '@tabler/icons-react'; 
import headerLogo from "../../../assets/header_logo.jpg";
import { IconLogout, IconSearch, IconShoppingBag, IconHome } from "@tabler/icons-react";
import { FuzzySearch } from "../../components/Search";

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
      <Flex {...stylex.props(styles.headerSection1)} >
        <img
          src={headerLogo}
          alt="header logo"
        />
      </Flex>
      <Flex {...stylex.props(styles.headerSection2)}>
        <Flex
          align="center"
          {...stylex.props(styles.header__search)}
        >
          <FuzzySearch/>
        </Flex>
        <Flex
          {...stylex.props(styles.header__link)}
          justify="center"
          align="center"
        >
          <Button  variant="outline" color="#009f7f" 
          {...stylex.props(styles.VisitSiteButton)}
          >
            <NavLink to="/home" {...stylex.props(styles.VisitSiteLink)}>
              <IconHome size={20}/> Truy cập sàn
            </NavLink>
          </Button>
        </Flex>
        <Flex
           {...stylex.props(styles.header__link)}
          justify="center"
          align="center"
          gap="sm"
        >
          <Flex
             {...stylex.props(styles.shopLogo)}
            justify="center"
            align="center"
          >
            <IconHome />
          </Flex>
          <Flex direction="column">
            <Text fw={500} size="sm">
              Demeter
            </Text>
            <Text fw={500} size="xs" c="dimmed">Cửa hàng</Text>
          </Flex>
        </Flex>
        <Flex  {...stylex.props(styles.header__logout)} justify="center" align="center">
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
  },
  headerSection1:{
    width: "260px",
    padding: "10px",
    height: "100%",
    margin: "0 30px",
  },
  headerSection2:{
    flex: "8", 
    height: "100%",
  },
  header__search:{
    flex: "7", 
    borderRight: "1px solid #e7e7e7",
  },
  header__link:{
    flex: "2", 
    borderRight: "1px solid #e7e7e7",
  },
  header__logout:{
    flex: "1", 
    marginRight: "5px",
  },
  VisitSiteButton: {
    borderRadius: '20px',
    fontWeight: '500',
  },
  shopLogo:{
    width: "40px",
    height: "40px",
    borderRadius: "100px",
    border: "1px solid #e7e7e7",
  },
  VisitSiteLink: {
    color: "#009f7f",
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
});