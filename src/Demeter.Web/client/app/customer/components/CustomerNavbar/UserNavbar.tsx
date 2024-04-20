import { useState, useEffect } from "react";
import { Menu, Button, rem, Text, MenuProps, Box, NavLink } from '@mantine/core';
import { IconGauge, IconFingerprint, IconActivity, IconChevronRight } from '@tabler/icons-react';

import * as stylex from "@stylexjs/stylex";

const data = [
  { label: 'Hồ sơ', link: 'profile'},
  { label: 'Đổi mật khẩu', link: 'change_password'},
  { label: 'Đơn hàng của tôi', link: 'orders' },
  { label: 'Danh sách yêu thích', link: 'profile' },
  { label: 'Yêu cầu hoàn tiền', link: 'profile' },
  { label: 'Báo cáo', link: 'profile' },
  { label: 'Phương thức thanh toán', link: 'profile' },
  { label: 'Trợ giúp', link: 'profile' },
  { label: 'Đăng xuất', link: 'login' },
];


const UserNavbar: React.FC = () => {
  const [active, setActive] = useState<string>(
    localStorage.getItem("selectedMenuKey") || "0"
  );

  const onClick = (index: number) => {
    const clickedKey = index.toString();
    localStorage.setItem("selectedMenuKey", clickedKey);
    setActive(clickedKey);
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
    position: "fixed",
    left: "24px",
    top: "88px",
    borderRadius: "5px",
    border: "2px solid #e7e7e7",
    width: "18%",
  },
});
export default UserNavbar;
