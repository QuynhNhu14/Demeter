//chưa fix
import shopLogo from "../../assets/logo.png";
import { Flex } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

const ShopDetails = {
  shopId: "1",
  logo: shopLogo,
  name: "Nông sản Demeter",
  description:
    "Tại đây, bạn sẽ tìm thấy đa dạng các loại rau, trái cây, thực phẩm chế biến và các sản phẩm nông nghiệp khác, đảm bảo mang đến sự hài lòng cho vị giác và sức khỏe của bạn.",
  adress: "Đại học Bách Khoa ĐHQG-HCM, Dĩ An, Bình Dương",
  phone: "+84 1234 56789",
  website: "https://hcmut.edu.vn/",
};

export const ShopInfo: React.FC<{ shopId: string }> = ({ shopId }) => {
  return (
    <Flex className="ShopInfo" vertical>
      <Flex
        className="ShopInfo--description"
        vertical
        gap="middle"
        align="center"
      >
        <img
          src={ShopDetails.logo}
          alt="logo"
          style={{ width: "65%", borderRadius: "10px" }}
        />
        <span
          style={{ fontWeight: "bolder", fontSize: "20px", color: "#009f7f" }}
        >
          {ShopDetails.name}
        </span>
        <span style={{ textAlign: "center", opacity: "0.8" }}>
          {ShopDetails.description}
        </span>
        <Flex justify="center" gap="small" style={{ opacity: "0.8" }}>
          <IconBrandFacebook />
          <IconBrandInstagram />
          <IconBrandTwitter />
        </Flex>
      </Flex>
      <Flex className="ShopInfo--details" vertical justify="center" gap="large">
        <Flex vertical gap="small">
          <span style={{ fontWeight: "bold" }}>Địa chỉ</span>
          <span style={{ opacity: "0.8" }}>{ShopDetails.adress}</span>
        </Flex>
        <Flex vertical gap="small">
          <span style={{ fontWeight: "bold" }}>SĐT</span>
          <span style={{ opacity: "0.8" }}>{ShopDetails.phone}</span>
        </Flex>
        <Flex vertical gap="small">
          <span style={{ fontWeight: "bold" }}>Trang web</span>
          <Flex justify="space-between">
            <span style={{ opacity: "0.8" }}>{ShopDetails.website}</span>
            <a
              href={ShopDetails.website}
              style={{ fontWeight: "bolder", color: "#009f7f" }}
            >
              Truy cập web
            </a>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
