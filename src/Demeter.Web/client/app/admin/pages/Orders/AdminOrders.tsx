import OrdersTable from "../../components/Table/TableOrders";
import { Flex } from "@mantine/core";
import Header from "../../components/Header";
import Navbar_Admin from "../../components/Navbar/NavbarAdmin";
import * as stylex from "@stylexjs/stylex";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserSession } from "../../../hooks/useUserSession";

const styles = stylex.create({
  adminOrderPage: {
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
  order: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    padding: "10px 5%",
    backgroundColor: "#f3f4f5",
  }
});


const AdminOrders: React.FC = () => {
  const { loggedIn } = useUserSession();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loggedIn) {
      navigate("/home");
    }
  }, [loggedIn]);
  return (
    <Flex {...stylex.props(styles.adminOrderPage)}>
      <div {...stylex.props(styles.navbar)}>
        <Navbar_Admin />
      </div>
      <div {...stylex.props(styles.container)}>
        <Header />
        <div  {...stylex.props(styles.order)}>
          <OrdersTable />
        </div>
      </div>
    </Flex>
  );
};

export default AdminOrders;
