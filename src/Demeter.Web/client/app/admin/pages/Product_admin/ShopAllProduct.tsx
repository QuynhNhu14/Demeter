import {  Flex } from "@mantine/core";
import Navbar_Shop from "../../components/Navbar/NavbarShop";
import AllProductTable from "../../components/Table/TableAllProduct";
import Header from "../../components/Header";
import * as stylex from "@stylexjs/stylex";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserSession } from "../../../hooks/useUserSession";

const styles = stylex.create({
  ShopAllProductPage: {
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

const ShopAllProduct: React.FC = () => {
  const { loggedIn } = useUserSession();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loggedIn) {
      navigate("/home");
    }
  }, [loggedIn]);
  /* Code của thành phần Navbar ở đây*/ 
  return ( <>
    <Flex {...stylex.props(styles.ShopAllProductPage)}>
      <div {...stylex.props(styles.navbar)}>
        <Navbar_Shop />
      </div>
      <div  {...stylex.props(styles.container)}>
        <Header />
        <div {...stylex.props(styles.product)}>
          <AllProductTable />
        </div>
      </div>
    </Flex>
  </>
  );
};

export default ShopAllProduct;
