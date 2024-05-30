import {  Flex } from "@mantine/core";
import NavbarAdmin from "../../components/NavbarShop/NavbarAdmin";
import ShopOverviewCard from "../../components/Summary_Card/ShopOverviewCard";
import OrderStatusCard from "../../components/Summary_Card/OrderStatusCard";
import TableAllProduct from "../../components/Table/TableAllProduct";
import { useUserSession } from "../../../hooks/useUserSession";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
  const { loggedIn } = useUserSession();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loggedIn) {
      navigate("/home");
    }
  }, [loggedIn]);
  // Code của thành phần Navbar ở đây
  return (
    <>
      <Flex style={{ backgroundColor: "#f3f4f6" }}>
        <div style={{ flex: "2", width: "100%" }}>
          <NavbarAdmin />
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
