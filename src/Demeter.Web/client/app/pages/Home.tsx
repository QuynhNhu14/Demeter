import { useState } from "react";
import { Flex } from "@mantine/core";

// import "../../App.css";
// import { CategoryList } from "../components/CategoryList/CategoryList";
// import { ProductList } from "../components/ProductList/ProductList";
// import logo from "../../../assets/logo.png";

import { Footer } from "../components/Footer/Footer";
import { FuzzySearch } from "../components";

export default function HomePage() {
  return (
    <div>
      <div>
        <Flex
          gap="md"
          justify="center"
          align="center"
          direction="column"
          // wrap="wrap"
        >
          {/* <img
            src={logo}
            alt="logo"
            style={{ width: "180px", height: "180px" }}
          /> */}
          <span
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              margin: "0 0 10px 0",
            }}
          >
            ĐẶT HÀNG NGAY TẠI DEMETER
          </span>
          <span style={{ fontSize: "25px", margin: "10px 0" }}>
            Hãy dùng rau củ quả sạch mỗi ngày - Hàng tươi mới mỗi ngày!
          </span>
          <FuzzySearch />
        </Flex>
        <Flex justify="space-evenly">
          {/* <img src={Offer1} alt="Express Delivery" />
          <img src={Offer2} alt="Cash On Delivery" />
          <img src={Offer3} alt="Gift Voucher" />
          <img src={Offer4} alt="Free Delivery" /> */}
        </Flex>
        {/* <Flex >
          <CategoryList />
          <ProductList categoryId="1" />
        </Flex> */}
      </div>
    </div>
  );
}
