import { Flex } from "@mantine/core";
import { CategoryList } from "../components/CategoryList/CategoryList";
import { ProductList } from "../components/ProductList/ProductList";

// import "../../App.css";
// import { CategoryList } from "../components/CategoryList/CategoryList";
// import { ProductList } from "../components/ProductList/ProductList";
// import logo from "../../../assets/logo.png";



export default function HomePage() {
  return (
    <Flex >
      <CategoryList />
      <ProductList categoryId="1" />
    </Flex> 
  );
}
