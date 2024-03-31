import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconSend,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { Button, Flex, Input, Text, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

const data = [
  {
    title: 'About',
    links: [
      { label: 'Features', link: '#' },
      { label: 'Pricing', link: '#' },
      { label: 'Support', link: '#' },
      { label: 'Forums', link: '#' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Contribute', link: '#' },
      { label: 'Media assets', link: '#' },
      { label: 'Changelog', link: '#' },
      { label: 'Releases', link: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Discord', link: '#' },
      { label: 'Follow on Twitter', link: '#' },
      { label: 'Email newsletter', link: '#' },
      { label: 'GitHub discussions', link: '#' },
    ],
  },
];

export const Footer = () => {
  return (
    <Flex justify="space-between">
      <Flex direction="column" justify="center" align="center">
        <img
          src={logo}
          alt="logo"
          style={{ width: "120px", height: "120px" }}
        />
        <span className="footer--link" style={{ fontWeight: "bolder" }}>
          Trường Đại học Bách Khoa ĐHQG - HCM
        </span>
        <Flex vertical gap="small" align="center">
          <span className="footer--link">demeter_ec@gmail.com</span>
          <span className="footer--link">+84 1234 56789</span>
        </Flex>
        <Flex gap="small" style={{ color: "#009f7f" }}>
          <span>
            <IconBrandFacebook style={{ fontSize: "20px" }} />
          </span>
          <span>
            <IconBrandTwitter style={{ fontSize: "20px" }} />
          </span>
          <span>
            <IconBrandInstagram style={{ fontSize: "20px" }} />
          </span>
        </Flex>
      </Flex>
      <Flex direction="column" wrap>
        <Title order={4}>Khám phá</Title>
        <NavLink to="/shops" className="footer--link">
          Cửa hàng
        </NavLink>
        <NavLink to="/shops" className="footer--link">
          Phiếu giảm giá
        </NavLink>
        <NavLink to="/shops" className="footer--link">
          Flash sale
        </NavLink>
        <NavLink to="/shops" className="footer--link">
          Tác giả
        </NavLink>
      </Flex>
      <Flex direction="column" wrap>
        <Title order={4}>Dịch vụ khách hàng</Title>
        <span className="footer--link">Câu hỏi thường gặp & Trợ giúp</span>
        <span className="footer--link">Chính sách hoàn tiền</span>
        <span className="footer--link">Quy trình giải quyết khiếu nại</span>
        <span className="footer--link">Chính sách vận chuyển</span>
      </Flex>
      <Flex direction="column">
        <Title order={4}>Thông tin của chúng tôi</Title>
        <span className="footer--link">Chính sách bảo mật</span>
        <span className="footer--link">Điều khoản và điều kiện</span>
        <span className="footer--link">Liên hệ chúng tôi</span>
      </Flex>
      <Flex direction="column">
        <Title order={4}>Đăng ký ngay</Title>
        <span>
          Đăng ký email của bạn để nhận ngay tin tức nổi bật dựa trên sở thích
          cá nhân
        </span>
        <Flex>
          <Input placeholder="Nhập email của bạn" />
          <Button>
            <IconSend />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
