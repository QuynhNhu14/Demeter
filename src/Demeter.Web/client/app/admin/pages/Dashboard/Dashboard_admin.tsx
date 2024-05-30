import { Flex } from "@mantine/core";
import Navbar_Admin from "../../components/Navbar/NavbarAdmin";
import RecentOrdersTable from "../../components/Table/TableRecentOrders";
import Header from "../../components/Header";
import * as stylex from "@stylexjs/stylex";
import ShopOverviewCard from "../../components/Summary_Card/ShopOverviewCard";
import OrderStatusCard from "../../components/Summary_Card/OrderStatusCard";
import TableAllProduct from "../../components/Table/TableAllProduct";

const styles = stylex.create({
  dashboardPage: {
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
  dashboard: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    padding: "10px 5%",
    backgroundColor: "#f3f4f5",
  },
  item: {
    margin: "10px 0",
    border: "2px solid #e5e7eb",
    borderRadius: "8px",
    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
  }
});

const AdminDashboard: React.FC = () => {
  // Code của thành phần Navbar ở đây
  return (
    <Flex {...stylex.props(styles.dashboardPage)}>
      <div {...stylex.props(styles.navbar)}>
        <Navbar_Admin />
      </div>
      <div {...stylex.props(styles.container)}>
        <Header />
        <div {...stylex.props(styles.dashboard)}>
          <div  {...stylex.props(styles.item)}>
              <ShopOverviewCard />
          </div>
          <div  {...stylex.props(styles.item)}>
            <OrderStatusCard/>
          </div>
          <div  {...stylex.props(styles.item)}>
            <RecentOrdersTable />
          </div>
        </div>
      </div>
    </Flex>
  );
};

export default AdminDashboard;
