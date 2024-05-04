import {  Flex } from "@mantine/core";
import Navbar_Admins from "../../components/Navbar_Shop/Navbar_admin";
import ShopOverviewCard from "../../components/Summary_Card/ShopOverviewCard";
import Summary_Card from "../../components/Summary_Card/Summary_Card";
import Summary_CardTwo from "../../components/Summary_Card/Summary_CardTwo";
import SaleHistoryChart from "../../components/Table/TableChart";
import RecentOrdersTable from "../../components/Table/TableRecentOrders";
import AdminHeader from "../AdminPage/AdminHeader";
import styles from "./Dashboard.module.css";
const Dashboardadmin: React.FC = () => {
  // Code của thành phần Navbar ở đây
  return (
    <>
      <Flex style={{ backgroundColor: "#f3f4f6" }}>
        <div style={{ flex: "2", width: "100%" }}>
          <Navbar_Admins />
        </div>
        <div style={{ flex: "9", width: "100%" }}>
          <AdminHeader />
          <div className={styles.Dashboard}>
            <div className={styles.item}>
              <Summary_Card />
            </div>
            <div className={styles.item}>
              <Summary_CardTwo />
            </div>
            <div className={styles.item}>
              <RecentOrdersTable />
            </div>
          </div>
        </div>
      </Flex>
    </>
  );
};

export default Dashboardadmin;
