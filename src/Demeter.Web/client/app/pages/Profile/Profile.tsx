import { Flex, Grid } from "@mantine/core";
import Navbar from "../../components/Navbar/Navbar";
import { CustomerNavbar } from "../../components/CustomerNavbar/CustomerNavbar";
import "./Profile.css";
import shopBanner from "../../../assets/shopBanner.png";
import { ProductList } from "../../components/ProductList/ProductList";
import { Route, Routes } from "react-router-dom";
import { CustomerInfo } from "./CustomerInfo";
import UserNavbar from "../../components/CustomerNavbar/UserNavbar";

export const Profile: React.FC<{ shopId?: string }> = () => {
  return (
    <div className="ProfilePage">
      <Flex>
        <Flex style={{ flex: "3" }}>
          <UserNavbar />
        </Flex>
        <Flex
          className="Profile"
          vertical
          gap="large"
          style={{ flex: "11", padding: "24px 24px 0 0" }}
        >
          <CustomerInfo />
        </Flex>
      </Flex>
    </div>
  );
};
