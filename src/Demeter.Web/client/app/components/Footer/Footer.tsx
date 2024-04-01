import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconSend,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Input,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

const data = [
  {
    title: "Khám phá",
    links: [
      { label: "Cửa hàng", link: "/shops" },
      { label: "Phiếu giảm giá", link: "/shops" },
      { label: "Flash sale", link: "/shops" },
      { label: "Tác giả", link: "/shops" },
    ],
  },
  {
    title: "Dịch vụ khách hàng",
    links: [
      { label: "Câu hỏi thường gặp & Trợ giúp", link: "#" },
      { label: "Chính sách hoàn tiền", link: "#" },
      { label: "Quy trình giải quyết khiếu nại", link: "#" },
      { label: "Chính sách vận chuyển", link: "#" },
    ],
  },
  {
    title: "Thông tin của chúng tôi",
    links: [
      { label: "Chính sách bảo mật", link: "#" },
      { label: "Điều khoản và điều kiện", link: "#" },
      { label: "Liên hệ chúng tôi", link: "#" },
    ],
  },
];

export const Footer = () => {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text key={index} component="a" href={link.link}>
        {link.label}
      </Text>
    ));

    return (
      <Stack key={group.title}>
        <Title order={4}>{group.title}</Title>
        {links}
      </Stack>
    );
  });
  return (
    <Container>
      <Group justify="space-between">
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
        {/* <Flex direction="column" wrap>
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
      </Flex> */}
        <Flex justify="center" gap={"md"}>
          {groups}
        </Flex>
      </Group>
      <Group justify="space-between">
        <Text c="dimmed" size="sm">
          © 2024 demeter.com. All rights reserved.
        </Text>

        <Group gap={0} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Group>
    </Container>
  );
};
