import {  Flex } from "@mantine/core";
import NavbarAdmin from "../../components/NavbarShop/NavbarAdmin";
import AllProductTable from "../../components/Table/TableAllProduct";
import AdminHeader from "../AdminPage/AdminHeader";
import styles from "./AllProduct.module.css";
const AllProduct: React.FC = () => {
  // Code của thành phần Navbar ở đây
  return (
    <>
      <Flex style={{ backgroundColor: "#f3f4f6" }}>
        <div style={{ flex: "2", width: "100%" }}>
          <NavbarAdmin />
        </div>
        <div style={{ flex: "9", width: "100%" }}>
          <AdminHeader />
          <div className={styles.AllProduct}>
            <AllProductTable />
          </div>
        </div>
      </Flex>
    </>
  );
};

export default AllProduct;
