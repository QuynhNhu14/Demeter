import { IconShoppingCart, IconUser } from "@tabler/icons-react";
import { Box, Group, Image, ActionIcon, Tabs } from "@mantine/core";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import headerLogo from "../../assets/header_logo.jpg";
import { FuzzySearch } from "./Search";

export function HeaderMegaMenu() {
  const navigate = useNavigate();
  const { tabValue } = useParams();

  const hiddenRoutes = [
    "/admin",
    "/shop",
    "/dashboard",
    "/allproduct",
    "/shop_allproduct",
    "/allshop",
    "/shop_orders",
    "/manage_orders",
    "/shop_dashboard",
    "/addproduct",
    "/inventory",
    "/shopprofile",
  ];

  const hideNavbar = hiddenRoutes.includes(location.pathname);

  if (hideNavbar) {
    return null;
  }

  return (
    <Box px="lg" pt="lg" pb="0">
      <Group component="nav" justify="space-between" h="100%">
        <Group gap={4} align="center">
          <NavLink to="/home">
            <Image src={headerLogo} h={20} />
          </NavLink>
          <FuzzySearch />
        </Group>

        <Group gap={4} align="center">
          <Tabs
            value={tabValue}
            onChange={(value) => navigate(`/${value}`)}
          >
            <Tabs.List>
              <Tabs.Tab value="shops">Cửa hàng</Tabs.Tab>
              <Tabs.Tab value="voucher">Mã giảm giá</Tabs.Tab>
              <Tabs.Tab value="faq">FAQ</Tabs.Tab>
              <Tabs.Tab value="contact">Liên hệ</Tabs.Tab>
            </Tabs.List>
          </Tabs>
          <Group gap={2} align="center">
            <ActionIcon
              component="NavLink"
              to="/cart"
              size="lg"
              variant="transparent"
            >
              <IconShoppingCart />
            </ActionIcon>
            <ActionIcon
              component="NavLink"
              to="/profile"
              size="lg"
              variant="transparent"
            >
              <IconUser />
            </ActionIcon>
          </Group>
        </Group>
      </Group>
    </Box>
  );
}
