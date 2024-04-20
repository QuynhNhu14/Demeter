import styles from "./Order.module.css";
import OrdersTable from "../../components/Table/TableOrders";
import { Flex } from "@mantine/core";
import ShopHeader from "../../../pages/ShopPage/ShopHeader";
import Navbar_Shops from "../../components/Navbar_Shop/Navbar_shop";

const ShopOrders: React.FC = () => {
  // Code của thành phần Navbar ở đây
  return (
    <Flex style={{ backgroundColor: "#f3f4f6" }}>
      <div style={{ flex: "2", width: "100%" }}>
        <Navbar_Shops />
      </div>
      <div style={{ flex: "9", width: "100%" }}>
        <ShopHeader />
        <div className={styles.order}>
          <OrdersTable />
        </div>
      </div>
    </Flex>
  );
};

export default ShopOrders;
