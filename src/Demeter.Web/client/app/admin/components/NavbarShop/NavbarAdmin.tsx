import { useState, useEffect } from "react";
import {
  IconLayoutGrid,
  IconInbox,
  IconShoppingBag,
  IconCircle,
  IconList,
  IconTags,
  IconStar,
  IconUser,
  IconUserPlus,
  IconGift,
  IconArrowBackUp,
} from "@tabler/icons-react";
import { MenuProps, Menu, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";
import "./Navbar_Shop.css";


function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
  name?: string
): MenuItem {
  const to = `/${name}`.toLowerCase().replace(/\s/g, ""); // Tạo đường dẫn từ label

  const menuItem: MenuItem = {
    key,
    icon,
    children,
    label,
    type,
    name,
  };

  // Kiểm tra key của mục có phải là các key cụ thể cần tạo NavLink hay không
  const keysToNavLink = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ];
  if (keysToNavLink.includes(String(key))) {
    menuItem.label = (
      <NavLink to={to} activeClassName="active">
        {label}
      </NavLink>
    );
  }
  if (key === "grp") {
    menuItem.label = (
      <Text strong type="secondary">
        {label}
      </Text>
    );
  }

  return menuItem;
}

const items: MenuProps["items"] = [
  getItem(
    "Chính",
    "grp",
    null,
    [
      getItem(
        "Tổng quan",
        "1",
        <IconLayoutGrid />,
        undefined,
        undefined,
        "admin"
      ),
    ],
    "group"
  ),
  getItem(
    "Quản lý sản phẩm",
    "grp",
    null,
    [
      getItem(
        "Sản phẩm",
        "2",
        <IconInbox />,
        undefined,
        undefined,
        "All Product"
      ),
      getItem(
        "Phân loại",
        "3",
        <IconList />,
        undefined,
        undefined,
        "All Product"
      ),
      getItem("Badge", "4", <IconTags />, undefined, undefined, "All Product"),
      getItem("Review", "5", <IconStar />, undefined, undefined, "All Product"),
      getItem(
        "Voucher",
        "6",
        <IconGift />,
        undefined,
        undefined,
        "All Product"
      ),
    ],
    "group"
  ),

  getItem(
    "Quản lý đơn hàng",
    "grp",
    null,
    [
      getItem(
        "Đơn hàng",
        "7",
        <IconCircle />,
        undefined,
        undefined,
        "manage_orders"
      ),
      getItem(
        "Hoàn tiền",
        "8",
        <IconArrowBackUp />,
        undefined,
        undefined,
        "manage_orders"
      ),
    ],
    "group"
  ),

  getItem(
    "Quản lý tài khoản",
    "grp",
    null,
    [
      getItem(
        "Cửa hàng",
        "9",
        <IconShoppingBag />,
        undefined,
        undefined,
        "All Shop"
      ),
      getItem(
        "Khách hàng",
        "10",
        <IconUser />,
        undefined,
        undefined,
        "All Shop"
      ),
      getItem(
        "Nhân viên",
        "11",
        <IconUserPlus />,
        undefined,
        undefined,
        "All Shop"
      ),
    ],
    "group"
  ),

  // getItem('Navigation Three', 'sub2', <IconSetting />, [
  //   getItem('Option 9', '9', undefined, undefined, undefined, 'Option 9'),
  //   getItem('Option 10', '10', undefined, undefined, undefined, 'Option 10'),
  //   getItem('Option 11', '11', undefined, undefined, undefined, 'Option 11'),
  //   getItem('Option 12', '12', undefined, undefined, undefined, 'Option 12'),
  // ]),

  // getItem('Group', 'grp', null, [getItem('Option 13', '13', undefined, undefined, undefined, 'Option 13'), getItem('Option 14', '14', undefined, undefined, undefined, 'Option 14')], 'group'),
];

const NavbarAdmin: React.FC = () => {
  const [selectedMenuKey, setSelectedMenuKey] = useState<string>(
    localStorage.getItem("selectedMenuKey") || "1"
  );

  const onClick: MenuProps["onClick"] = (e) => {
    const clickedKey = e.key.toString();
    localStorage.setItem("selectedMenuKey", clickedKey);
    setSelectedMenuKey(clickedKey);
  };

  useEffect(() => {
    const menu = document.getElementsByClassName("ant-menu")[0];
    if (menu) {
      menu.setAttribute("data-selectedkeys", selectedMenuKey);
    }
  }, [selectedMenuKey]);

  return (
    <>
      <div className="AdminNavbar">
        <Menu
          onClick={onClick}
          style={{ width: 256, fontWeight: "500" }}
          defaultSelectedKeys={[localStorage.getItem("selectedMenuKey") || "1"]}
          defaultOpenKeys={["grp"]}
          mode="inline"
          items={items}
        />
      </div>
    </>
  );
};

export default NavbarAdmin;
