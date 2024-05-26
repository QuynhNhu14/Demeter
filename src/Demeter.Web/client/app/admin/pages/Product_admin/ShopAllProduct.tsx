import {  Flex } from "@mantine/core";
import Navbar_Shop from "../../components/NavbarShop/NavbarShop";
import AllProductTable from "../../components/Table/TableAllProduct";
import ShopHeader from "../../../pages/ShopPage/ShopHeader";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  shopProductPage: {
    backgroundColor: "#f3f4f6"
  },
  navbar:{
    flex: "2", 
    width: "100%",
  },
  container: {
    flex: "9", 
    width: "100%",
  },
  product: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    padding: "10px 5%",
    backgroundColor: "#f3f4f5",
  }
});

const ShopAllProduct: React.FC = () => (
  /* Code của thành phần Navbar ở đây*/ <>
    <Flex {...stylex.props(styles.shopProductPage)}>
      <div {...stylex.props(styles.navbar)}>
        <Navbar_Shop />
      </div>
      <div  {...stylex.props(styles.container)}>
        <ShopHeader />
        <div {...stylex.props(styles.product)}>
          <AllProductTable />
        </div>
      </div>
    </Flex>
  </>
);

export default ShopAllProduct;
