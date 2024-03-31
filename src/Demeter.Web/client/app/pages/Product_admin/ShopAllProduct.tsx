import {  Flex } from "@mantine/core";
import Navbar_Shop from "../../components/Navbar_Shop/Navbar_Shop";
import AllProductTable from "../../components/Table/TableAllProduct";
import ShopHeader from "../ShopPage/ShopHeader";
import styles from "./AllProduct.module.css";
const ShopAllProduct: React.FC = () => (
  /* Code của thành phần Navbar ở đây*/ <>
    <Flex style={{ backgroundColor: "#f3f4f6" }}>
      <div style={{ flex: "2", width: "100%" }}>
        <Navbar_Shop />
      </div>
      <div style={{ flex: "9", width: "100%" }}>
        <ShopHeader />
        <div className={styles.AllProduct}>
          <AllProductTable />
        </div>
      </div>
    </Flex>
  </>
);

export default ShopAllProduct;
