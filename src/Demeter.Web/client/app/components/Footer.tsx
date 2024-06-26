import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconSend,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Flex,
  Group,

  Paper,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";

import logo from "../../assets/logo.png";
import * as stylex from "@stylexjs/stylex";
import { useNavigate } from "react-router-dom";

const styles = stylex.create({
  footer: {
    position: "sticky",
    bottom: '0',
  },
  image:{
    width: "120px", 
    height: "120px"
  },
  bold: {
    fontWeight: "bolder"
  },
  icon: {
    width: 'rem(18)', 
    height: 'rem(18)'
  }
});

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
  const navigate = useNavigate();
  const hideNavbar = window.location.pathname.startsWith("/shop") || 
                      window.location.pathname.startsWith("/admin");
  if (hideNavbar) {
    return null;    
  }
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
    <footer>
      <Paper shadow="xs" withBorder >
          <Group justify="space-between" ml={50} mr={50} mt={30}>
            <Flex direction="column" justify="center" align="center" gap="md">
              <img
                src={logo}
                alt="logo"
                {...stylex.props(styles.image)}
              />
              <span {...stylex.props(styles.bold)}>
                Trường Đại học Bách Khoa ĐHQG - HCM
              </span>
              <Flex vertical="true" gap="small" align="center">
                <Text component="a">demeter_ec@gmail.com</Text>
                <Text component="a">+84 1234 56789</Text>
              </Flex>
            </Flex>
            <Flex justify="center" gap={"xl"}>
              {groups}
            </Flex>
          </Group>
          <Group justify="space-between" ml={50} mr={50} mt={30}>
            <Text c="dimmed" size="sm">
              © 2024 demeter.com. All rights reserved.
            </Text>

            <Group gap={0} justify="flex-end" wrap="nowrap">
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandTwitter
                  {...stylex.props(styles.icon)}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandYoutube
                  {...stylex.props(styles.icon)}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandInstagram
                  {...stylex.props(styles.icon)}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconBrandFacebook
                  {...stylex.props(styles.icon)}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconSend
                  {...stylex.props(styles.icon)}
                  stroke={1.5}
                />
              </ActionIcon>
            </Group>
          </Group>
      </Paper>
    </footer>
  );
};


