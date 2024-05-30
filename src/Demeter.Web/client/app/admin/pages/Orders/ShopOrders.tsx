import OrdersTable from "../../components/Table/TableOrders";
import { Flex } from "@mantine/core";
import ShopHeader from "../../../pages/ShopPage/ShopHeader";
import Navbar_Shops from "../../components/NavbarShop/NavbarShop";
import * as stylex from "@stylexjs/stylex";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserSession } from "../../../hooks/useUserSession";

const styles = stylex.create({
  shopOrderPage: {
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


const ShopOrders: React.FC = () => {
  const { loggedIn } = useUserSession();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loggedIn) {
      navigate("/home");
    }
  }, [loggedIn]);
  return (
    <Flex {...stylex.props(styles.shopOrderPage)}>
      <div {...stylex.props(styles.navbar)}>
        <Navbar_Shops />
      </div>
      <div {...stylex.props(styles.container)}>
        <ShopHeader />
        <div  {...stylex.props(styles.order)}>
          <OrdersTable />
        </div>
      </div>
    </Flex>
  );
};

export default ShopOrders;
