
import { Group, Image, Tabs, Paper } from "@mantine/core";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import headerLogo2 from "../../assets/header_logo2.jpg";
import { FuzzySearch } from "./Search";
import { Login } from "./LogIn";

export function HeaderMegaMenu() {
  const navigate = useNavigate();
  const { tabValue } = useParams();
  
  const hideNavbar = window.location.pathname.startsWith("/shop") ||
  window.location.pathname.startsWith("/admin");

  if (hideNavbar) {
    return null;    
  }
  return (
    <Paper shadow="sm" variant="gradient">
      <Group
        component="nav"
        justify="space-between"
        h="100%"
        px="sm"
        pt={10}
      >
        <Group gap={4}>
          <NavLink to="/home" >
            <Image src={headerLogo2} h={50} align="top"/>
          </NavLink>
          <FuzzySearch/>
        </Group>

        <Group gap={4} align="center" >
          <Tabs value={tabValue} onChange={(value) => navigate(`/${value}`)}>
            <Tabs.List>
              <Tabs.Tab value="vendors" h={60}>Cửa hàng</Tabs.Tab>
              <Tabs.Tab value="voucher" >Mã giảm giá</Tabs.Tab>
              <Tabs.Tab value="faq">FAQ</Tabs.Tab>
              <Tabs.Tab value="contact">Liên hệ</Tabs.Tab>
            </Tabs.List>
          </Tabs>
          <Group gap={2} align="center">
            <Login />
          </Group>
        </Group>
      </Group>
    </Paper>
  );
}
