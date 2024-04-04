import { Flex } from "@mantine/core";
// import "./Shops.css";
import shopLogo from "../../../assets/logo.png";
// import { CiLocationOn } from "react-icons/ci";
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
    <div className="ShopsPage">
      <Flex {...stylex.props(styles.container)} direction="column" gap="lg">
        <span style={{ fontWeight: "700", fontSize: "24px", opacity: 0.9 }}>
          Tất cả cửa hàng
        </span>
        <Flex
          className="ShopsPage--ListContainer"
          wrap="wrap"
          gap="md"
          justify="space-between"
        >
          {shopList.map((shop) => (
            <div {...stylex.props(styles.item)} onClick={handleClick}>
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
                  {/* <CiLocationOn
                    size={20}
                    style={{ opacity: 0.8, marginRight: "3px" }}
                  /> */}
                  <span style={{ opacity: 0.8, fontSize: "14px" }}>
                    {shop.address}
                  </span>
                </Flex>
              </Flex>
            </div>
          ))}
        </Flex>
      </Flex> 
    </div>
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
    padding: "100px 140px",
  },
});