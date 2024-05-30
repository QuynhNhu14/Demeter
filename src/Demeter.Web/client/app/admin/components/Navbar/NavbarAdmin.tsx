import { useState } from "react";
import {
  IconLayoutDashboard,
  IconBox,
  IconCategory2,
  IconBuildingWarehouse,
  IconReceipt,
  IconBuildingStore,
  IconGiftCard,
  IconUser,
  IconUsersGroup,

} from "@tabler/icons-react";
import { NavLink, Text } from '@mantine/core';
import * as stylex from "@stylexjs/stylex";

const data = [
  { group: 'Chính', label: 'Tổng quan ', icon: IconLayoutDashboard, link: 'admin'},
  { group: 'Quản lý sản phẩm', label: 'Sản phẩm', icon: IconBox, link: 'admin_products'},
  { group: 'Quản lý sản phẩm', label: 'Danh mục', icon: IconCategory2, link: 'admin_categories'},
  { group: 'Quản lý sản phẩm', label: 'Voucher', icon: IconGiftCard, link: 'admin_voucher' },
  { group: 'Quản lý sản phẩm', label: 'Kho', icon: IconBuildingWarehouse, link: 'admin_inventory' },
  { group: 'Quản lý đơn hàng', label: 'Đơn hàng', icon: IconReceipt, link: 'admin_orders' },
  { group: 'Quản lý tài khoản', label: 'Cửa hàng', icon: IconBuildingStore, link: 'admin_shopaccount' },
  { group: 'Quản lý tài khoản', label: 'Khách hàng', icon: IconUser, link: 'admin_customeraccount' },
  { group: 'Quản lý tài khoản', label: 'Nhân viên', icon: IconUsersGroup, link: 'admin_customeraccount' },
];

const Navbar_Admin: React.FC = () => {
  const [active, setActive] = useState<string>(
    localStorage.getItem("selectedMenuKey") || "0"
  );

  const onClick = (index: number) => {
    const clickedKey = index.toString();
    localStorage.setItem("selectedMenuKey", clickedKey);
    setActive(clickedKey);
  };

  return (
    <div {...stylex.props(styles.AdminNavbar)}>
      {
        data.map((item, index) =>{ 
          return(
            <>
              { !(index > 0 && item.group === data[index - 1].group) && 
                <Text c="dimmed" size="sm" m={5}>{item.group}</Text>}
              <NavLink
                href={item.link}
                key={item.label}
                active={index === parseInt(active) }
                label={item.label}
                leftSection={<item.icon size="1rem" stroke={1.5} />}
                onClick={() => onClick(index)}
              />
            </>
          )
          }
        )
      }
    </div>
  );
};

export default Navbar_Admin;

const styles = stylex.create({
  AdminNavbar: {
    backgroundColor: "#fff",
    padding: "5px",
    position: "sticky",
    left: "24px",
    top: "88px",
    borderRadius: "5px",
    border: "2px solid #e7e7e7",
    width: "250px",
  },
});