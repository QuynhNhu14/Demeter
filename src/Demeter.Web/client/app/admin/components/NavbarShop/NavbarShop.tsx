import { useState } from "react";
import {
  IconLayoutDashboard,
  IconBox,
  IconTablePlus,
  IconBuildingWarehouse,
  IconReceipt,
  IconReceiptRefund,
  IconInfoCircle,
  IconGiftCard,
  IconStar,
} from "@tabler/icons-react";
import { NavLink, Text } from '@mantine/core';
import * as stylex from "@stylexjs/stylex";

const data = [
  { group: 'Chính', label: 'Tổng quan ', icon: IconLayoutDashboard, link: 'shop'},
  { group: 'Quản lý sản phẩm', label: 'Tất cả sản phẩm', icon: IconBox, link: 'shop_allproduct'},
  { group: 'Quản lý sản phẩm', label: 'Thêm Sản phẩm', icon: IconTablePlus, link: 'addproduct' },
  { group: 'Quản lý sản phẩm', label: 'Kho', icon: IconBuildingWarehouse, link: 'inventory' },
  { group: 'Quản lý đơn hàng', label: 'Đơn hàng', icon: IconReceipt, link: 'shop_orders' },
  { group: 'Quản lý đơn hàng', label: 'Hoàn tiền', icon: IconReceiptRefund, link: 'shop_orders' },
  { group: 'Quản lý cửa hàng', label: 'Thông tin', icon: IconInfoCircle, link: 'shopprofile' },
  { group: 'Quản lý cửa hàng', label: 'Voucher', icon: IconGiftCard, link: 'shopprofile' },
  { group: 'Quản lý cửa hàng', label: 'Review', icon: IconStar, link: 'shopprofile' },
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