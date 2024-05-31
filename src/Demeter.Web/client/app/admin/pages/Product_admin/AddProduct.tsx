
import { Flex } from "@mantine/core";
import FormAddProduct from "../../components/Form/FormAddProduct";
import Header from "../../components/Header";
import Navbar_Shop from "../../components/Navbar/NavbarShop";

import * as stylex from "@stylexjs/stylex";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserSession } from "../../../hooks/useUserSession";

const AddProduct: React.FC = () => {
  const { loggedIn } = useUserSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/home");
    }
  }, [loggedIn]);
  return (
    <Flex {...stylex.props(styles.addProductPage)}>
      <div  {...stylex.props(styles.navbar)}>
        <Navbar_Shop />
      </div>
      <div {...stylex.props(styles.container)}>
        <Header />
        <div  {...stylex.props(styles.order)}>
          <FormAddProduct/>
        </div>
      </div>
    </Flex>
  );
};

export default AddProduct;
const styles = stylex.create({
  addProductPage: {
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
  order: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    padding: "10px 5%",
    backgroundColor: "#FFFFFF",
    margin: "20px 60px 60px 60px",
    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
    borderRadius: "5px",
    border: "2px solid #e7e7e7",
  }
});