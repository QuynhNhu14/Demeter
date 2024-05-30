import { useState } from "react";
import { NavLink } from '@mantine/core';
import { IconUserCircle, IconPasswordUser, IconFileInvoice, IconHeart,IconReceiptRefund, IconReport, IconCreditCardPay,IconHelp, IconLogout } from '@tabler/icons-react';

import * as stylex from "@stylexjs/stylex";
import { useHttp } from "../../../hooks";

const data = [
  { label: 'Hồ sơ', link: 'profile', icon: IconUserCircle},
  { label: 'Đổi mật khẩu', link: 'change_password', icon: IconPasswordUser},
  { label: 'Đơn hàng của tôi', link: 'orders' , icon: IconFileInvoice},
  { label: 'Danh sách yêu thích', link: 'profile' , icon: IconHeart},
  { label: 'Yêu cầu hoàn tiền', link: 'profile' , icon: IconReceiptRefund},
  { label: 'Báo cáo', link: 'profile' , icon: IconReport},
  { label: 'Phương thức thanh toán', link: 'profile' , icon: IconCreditCardPay},
  { label: 'Trợ giúp', link: 'profile' , icon: IconHelp},
  { label: 'Đăng xuất', link: 'home' , icon: IconLogout},
];

const UserNavbar: React.FC = () => {
  const [active, setActive] = useState<string>(
    localStorage.getItem("selectedMenuKey") || "0"
  );
  const { token, setAuthToken } = useHttp();
  
  const onClick = (index: number) => {
    const clickedKey = index.toString();
    localStorage.setItem("selectedMenuKey", clickedKey);
    setActive(clickedKey);
    if (index === data.length - 1) {
      setAuthToken("");
    }
  };

  return (
    <div {...stylex.props(styles.navbar)}>
      {
      data.map((item, index) => 
      <NavLink
        href={item.link}
        key={item.label}
        active={index === parseInt(active) }
        label={item.label}
        leftSection={<item.icon size="1rem" stroke={1.5} />}
        onClick={() => onClick(index)}
      />)
    }
    </div>
  );
};

const styles = stylex.create({
  navbar: {
    backgroundColor: "#fff",
    padding: "5px",
    position: "sticky",
    left: "24px",
    top: "88px",
    borderRadius: "5px",
    border: "2px solid #e7e7e7",
    width: "80%",
  },
});
export default UserNavbar;
