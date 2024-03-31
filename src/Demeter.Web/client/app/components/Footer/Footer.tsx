import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconSend,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { Button, Flex, Input, Space } from "@mantine/core";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <Flex className="footer" justify="space-around">
      <Flex
        style={{ flex: "4" }}
        vertical
        justify="center"
        align="center"
        gap="middle"
      >
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
      <Flex style={{ flex: "2" }} vertical gap="middle">
        <span className="footer--title">Khám phá</span>
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
      <Flex style={{ flex: "3" }} vertical gap="middle">
        <span className="footer--title">Dịch vụ khách hàng</span>
        <span className="footer--link">Câu hỏi thường gặp & Trợ giúp</span>
        <span className="footer--link">Chính sách hoàn tiền</span>
        <span className="footer--link">Quy trình giải quyết khiếu nại</span>
        <span className="footer--link">Chính sách vận chuyển</span>
      </Flex>
      <Flex style={{ flex: "3" }} vertical gap="middle">
        <span className="footer--title">Thông tin của chúng tôi</span>
        <span className="footer--link">Chính sách bảo mật</span>
        <span className="footer--link">Điều khoản và điều kiện</span>
        <span className="footer--link">Liên hệ chúng tôi</span>
      </Flex>
      <Flex style={{ flex: "3" }} vertical gap="middle">
        <span className="footer--title">Đăng ký ngay</span>
        <span>
          Đăng ký email của bạn để nhận ngay tin tức nổi bật dựa trên sở thích
          cá nhân
        </span>
        <Space.Compact style={{ width: "100%" }}>
          <Input placeholder="Nhập email của bạn" />
          <Button>
            <IconSend />
          </Button>
        </Space.Compact>
      </Flex>
    </Flex>
  );
};
