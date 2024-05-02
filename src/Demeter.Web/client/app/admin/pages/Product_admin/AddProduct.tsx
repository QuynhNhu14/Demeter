import React from "react";
import { Flex } from "@mantine/core";
import FormAddProduct from "../../components/Form/FormAddProduct";
import ShopHeader from "../../../pages/ShopPage/ShopHeader";
import Navbar_Shop from "../../components/Navbar_Shop/Navbar_Shop";
import { useForm } from "@mantine/form";
import * as stylex from "@stylexjs/stylex";

const AddProduct: React.FC = () => {
  const form = useForm({
    initialValues: { name: "", email: "", age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      age: (value) =>
        value < 18 ? "You must be at least 18 to register" : null,
    },
  });

  const handleSubmit = (values: any) => {
    // Xử lý logic khi submit form, có thể gửi thông tin lên server, lưu vào cơ sở dữ liệu, ...
    console.log("Submitted values:", values);
  };

  return (
    <Flex {...stylex.props(styles.addProductPage)}>
      <div  {...stylex.props(styles.navbar)}>
        <Navbar_Shop />
      </div>
      <div {...stylex.props(styles.container)}>
        <ShopHeader />
        <div  {...stylex.props(styles.order)}>
          <FormAddProduct form={form} onSubmit={handleSubmit} />
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