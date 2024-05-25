import shopLogo from "../../assets/logo.png";
import { Container, Flex, Image } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import * as stylex from "@stylexjs/stylex";

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
    <div>
      <Container align="center">
        <Image
          src={ShopDetails.logo}
          alt="logo"
          w={"50%"}
          borderRadius="10px"
        />
        <Container
          fw={700}
          fz={"h2"}
          c={"#009f7f"}
        >
          {ShopDetails.name}
        </Container>
        <Flex ta={"justify"} opacity= "0.8" mb={10}>
          {ShopDetails.description}
        </Flex>
        <Flex justify="center" gap="10" opacity= "0.8" mb={10}>
          <IconBrandFacebook />
          <IconBrandInstagram />
          <IconBrandTwitter />
        </Flex>
      </Container>
      <Container
        vertical="true"
        justify="center"
        gap="large"
      >
        <Flex vertical="true" gap="10">
          <span {...stylex.props(styles.bold)}>Địa chỉ: </span>
          <span {...stylex.props(styles.opacity)}>{ShopDetails.adress}</span>
        </Flex>
        <Flex vertical="true" gap="10">
          <span {...stylex.props(styles.bold)}>SĐT: </span>
          <span {...stylex.props(styles.opacity)}>{ShopDetails.phone}</span>
        </Flex>
        <Flex vertical="true" gap="10">
          <span {...stylex.props(styles.bold)}>Trang web: </span>
          <span>
            <a
              href={ShopDetails.website}
              {...stylex.props(styles.a)}
              target="_blank"
            >
              {ShopDetails.website}
            </a>
          </span>
        </Flex>
      </Container>
    </div>
  );
};

const styles = stylex.create({
  a: {
    fontWeight: 'bolder',
    color: '#009f7f'
  },
  bold: {
    fontWeight: 'bolder',
  },
  opacity: {
    opacity: "0.8"
  }
});
