import { Container, Flex, Text, Image, Title, Box } from "@mantine/core";
import { CategoryList } from "../components/CategoryList";
import { ProductList } from "../components/ProductList";
import Offer1 from "../../assets/offer-1.png";
import Offer2 from "../../assets/offer-2.png";
import Offer3 from "../../assets/offer-3.png";
import Offer4 from "../../assets/offer-4.png";
import logo from "../../assets/logo.png";
import { Shortcut } from "../components/Shortcut";


export default function HomePage() {
  return (
    <Box py="xl">
        <Container align="center" >
        <Image src={logo} alt="logo" h={180} w="auto" fit="contain" mb={10}/>
        <Title>ĐẶT HÀNG NGAY TẠI DEMETER </Title> 
        <Text mt={10} size="xl" c="dimmed">Hãy dùng rau củ quả sạch mỗi ngày - Hàng tươi mới mỗi ngày!</Text>
        </Container>

      <Flex justify="space-evenly" align="center" gap={5} ml={10} mr={10}>
        <Image src={Offer1} alt="Express Delivery" h={180} w="350" fit="contain"/>
        <Image src={Offer2} alt="Cash On Delivery" h={180} w="350" fit="contain"/>
        <Image src={Offer3} alt="Gift Voucher" h={180} w="350" fit="contain"/>
        <Image src={Offer4} alt="Free Delivery"h={180} w="350" fit="contain"/>
      </Flex>
      <Shortcut/>   

      <Flex mt={10}>
        <CategoryList/>
        <ProductList/>
      </Flex>
    </Box>
     
  );
}
