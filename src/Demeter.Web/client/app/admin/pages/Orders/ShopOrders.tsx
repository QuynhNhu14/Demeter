import OrdersTable from "../../components/Table/TableOrders";
import { Flex } from "@mantine/core";
import Header from "../../components/Header";
import Navbar_Shop from "../../components/Navbar/NavbarShop";
import * as stylex from "@stylexjs/stylex";

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
  
  return (
    <Flex {...stylex.props(styles.shopOrderPage)}>
      <div {...stylex.props(styles.navbar)}>
        <Navbar_Shop />
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

export default ShopOrders;
