import { Flex } from "@mantine/core";
import Navbar_Shop from "../../components/Navbar_Shop/Navbar_Shop";
import InventoryTable from "../../components/Table/TableInventory";
import AdminHeader from "../AdminPage/AdminHeader";
import styles from "./Inventory.module.css";

const Inventory: React.FC = () => {
  // Code của thành phần Navbar ở đây
  return (
    <>
      <Flex style={{ backgroundColor: "#f3f4f6" }}>
        <div style={{ flex: "2", width: "100%" }}>
          <Navbar_Shop />
        </div>
        <div style={{ flex: "9", width: "100%" }}>
          <AdminHeader />
          <div className={styles.Inventory}>
            <InventoryTable />
          </div>
        </div>
      </Flex>
    </>
  );
};

export default Inventory;
