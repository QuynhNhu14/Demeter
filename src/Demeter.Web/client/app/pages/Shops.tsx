import { Container, Flex, Title } from "@mantine/core";

import shopLogo from "../../assets/logo.png";

import * as stylex from "@stylexjs/stylex";

const shopList = [
  {
    id: "1",
    name: "Nông sản Demeter",
    logo: shopLogo,
    address: "Đại học Bách Khoa ĐHQG-HCM, Dĩ An, Bình Dương",
  },
  {
    id: "2",
    name: "Nông sản Demeter",
    logo: shopLogo,
    address: "Đại học Bách Khoa ĐHQG-HCM, Dĩ An, Bình Dương",
  },
  {
    id: "3",
    name: "Nông sản Demeter",
    logo: shopLogo,
    address: "Đại học Bách Khoa ĐHQG-HCM, Dĩ An, Bình Dương",
  },
  {
    id: "4",
    name: "Nông sản Demeter",
    logo: shopLogo,
    address: "Đại học Bách Khoa ĐHQG-HCM, Dĩ An, Bình Dương",
  },
  {
    id: "5",
    name: "Nông sản Demeter",
    logo: shopLogo,
    address: "Đại học Bách Khoa ĐHQG-HCM, Dĩ An, Bình Dương",
  },
  {
    id: "6",
    name: "Nông sản Demeter",
    logo: shopLogo,
    address: "Đại học Bách Khoa ĐHQG-HCM, Dĩ An, Bình Dương",
  },
  {
    id: "7",
    name: "Nông sản Demeter",
    logo: shopLogo,
    address: "Đại học Bách Khoa ĐHQG-HCM, Dĩ An, Bình Dương",
  },
  {
    id: "8",
    name: "Nông sản Demeter",
    logo: shopLogo,
    address: "Đại học Bách Khoa ĐHQG-HCM, Dĩ An, Bình Dương",
  },
  {
    id: "9",
    name: "Nông sản Demeter",
    logo: shopLogo,
    address: "Đại học Bách Khoa ĐHQG-HCM, Dĩ An, Bình Dương",
  },
];

export const Shops = () => {
  const handleClick = () => {
    window.location.href = "../shop-product";
  };

  return (
    <Flex {...stylex.props(styles.container)} direction="column" gap="lg">
      <Container>
        <Title> Tất cả cửa hàng</Title>
      </Container>
      <Flex
        wrap="wrap"
        gap="md"
        justify="space-between"
      >
        {shopList.map((shop, key) => (
          <div {...stylex.props(styles.item)} onClick={handleClick} key={key}>
            <img
              src={shop.logo}
              alt="shop logo"
              style={{ borderRadius: "100px", marginRight: "10px" }}
            />
            <Flex direction="column" justify="space-evenly">
              <span style={{ fontWeight: "600", fontSize: "18px" }}>
                {shop.name}
              </span>
              <Flex align="flex-start">
                <span style={{ opacity: 0.8, fontSize: "14px" }}>
                  {shop.address}
                </span>
              </Flex>
            </Flex>
          </div>
        ))}
      </Flex>
    </Flex> 
  );
};

const styles = stylex.create({
  item: {
    display: "flex",
    padding: "10px",
    border: "1px solid #e7e7e7",
    width: "400px",
    height: "100px",
    backgroundColor: "#fff",
    ':hover': {
      cursor: "pointer",
    },
  },
  container: {
    padding: "50px 140px",
  }
});