import styles from "./Order.module.css";
import OrdersTable from "../../components/Table/TableOrders";
import { Flex } from "@mantine/core";
import AdminHeader from "../AdminPage/AdminHeader";
import NavbarAdmin from "../../components/NavbarShop/NavbarAdmin";

const AdminOrders: React.FC = () => {
  // Code của thành phần Navbar ở đây
  return (
    <Flex style={{ backgroundColor: "#f3f4f6" }}>
      <div style={{ flex: "2", width: "100%" }}>
        <NavbarAdmin />
      </div>
      <div style={{ flex: "9", width: "100%" }}>
        <AdminHeader />
        <div className={styles.order}>
          <OrdersTable />
        </div>
      </div>
    </Flex>
  );
};

export default AdminOrders;
