import { IconBell, IconShoppingCart, IconUser } from "@tabler/icons-react";
import { Group, Image, ActionIcon, Tabs, Paper } from "@mantine/core";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import headerLogo2 from "../../assets/header_logo2.jpg";
import { FuzzySearch } from "./Search";
import { useState } from "react";

export function HeaderMegaMenu() {
  const navigate = useNavigate();
  const { tabValue } = useParams();

  const [auth, setAuth] = useState(false);
  const closeSetAuth = () => {
      close();
      setAuth(true);
  }
  const hideNavbar = window.location.pathname.startsWith("/shop") ||
                      window.location.pathname.startsWith("/admin");
  console.log({hideNavbar})  
  console.log(window.location.pathname)  
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
              <Tabs.Tab value="shops" h={60}>Cửa hàng</Tabs.Tab>
              <Tabs.Tab value="voucher" >Mã giảm giá</Tabs.Tab>
              <Tabs.Tab value="faq">FAQ</Tabs.Tab>
              <Tabs.Tab value="contact">Liên hệ</Tabs.Tab>
            </Tabs.List>
          </Tabs>
          <Group gap={2} align="center">
            <ActionIcon
              onClick={() => navigate("/cart")}
              size="lg"
              variant="transparent"
            >
              <IconShoppingCart />
            </ActionIcon>
            <ActionIcon
              onClick={() => navigate("/notification")}
              size="lg"
              variant="transparent"
            >
              <IconBell/>
            </ActionIcon>
            <ActionIcon
              onClick={() => auth ? navigate("/profile") : navigate("/login")}
              size="lg"
              variant="transparent"
              c={auth ? "green" : "gray"}
            >
              <IconUser />
            </ActionIcon>
          </Group>
        </Group>
      </Group>
    </Paper>
  );
}
