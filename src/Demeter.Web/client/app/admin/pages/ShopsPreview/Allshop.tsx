import {  Flex } from "@mantine/core";
import Navbar_Admins from "../../components/Navbar_Shop/Navbar_admin";
import AllShopTable from "../../components/Table/TableAllShop";
import AdminHeader from "../AdminPage/AdminHeader";
import styles from "./AllShop.module.css";
const AllShop: React.FC = () => {
  // Code của thành phần Navbar ở đây
  return (
    <>
      <Flex style={{ backgroundColor: "#f3f4f6" }}>
        <div style={{ flex: "2", width: "100%" }}>
          <Navbar_Admins />
        </div>
        <div style={{ flex: "9", width: "100%" }}>
          <AdminHeader />
          <div className={styles.Allshop}>
            <AllShopTable />
          </div>
        </div>
      </Flex>
    </>
  );
};

export default AllShop;
