import { Flex } from "@mantine/core";
import Navbar_Shop from "../../components/NavbarShop/NavbarShop";
import Summary_Card from "../../components/Summary_Card/Summary_Card";
import Summary_CardTwo from "../../components/Summary_Card/Summary_CardTwo";
import SaleHistoryChart from "../../components/Table/TableChart";
import RecentOrdersTable from "../../components/Table/TableRecentOrders";
import ShopHeader from "../../../pages/ShopPage/ShopHeader";
import * as stylex from "@stylexjs/stylex";
import ShopOverviewCard from "../../components/Summary_Card/ShopOverviewCard";
import OrderStatusCard from "../../components/Summary_Card/OrderStatusCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserSession } from "../../../hooks/useUserSession";

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

const Dashboard: React.FC = () => {
  const { loggedIn } = useUserSession();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loggedIn) {
      navigate("/home");
    }
  }, [loggedIn]);
  // Code của thành phần Navbar ở đây
  return (
    <Flex {...stylex.props(styles.dashboardPage)}>
      <div {...stylex.props(styles.navbar)}>
        <Navbar_Shop />
      </div>
      <div {...stylex.props(styles.container)}>
        <ShopHeader />
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

export default Dashboard;
