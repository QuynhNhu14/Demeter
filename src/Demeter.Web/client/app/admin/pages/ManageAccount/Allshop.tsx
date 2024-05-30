import {  Flex } from "@mantine/core";
import NavbarAdmin from "../../components/Navbar/NavbarAdmin";
import AllShopTable from "../../components/Table/TableAllShop";
import Header from "../../components/Header";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  adminManageShopPage: {
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
  shop: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    padding: "10px 5%",
    backgroundColor: "#f3f4f5",
  }
});

const AllShop: React.FC = () => {
  return (
    <Flex {...stylex.props(styles.adminManageShopPage)}>
      <div {...stylex.props(styles.navbar)}>
        <NavbarAdmin />
      </div>
      <div {...stylex.props(styles.container)}>
        <Header />
        <div  {...stylex.props(styles.shop)}>
          <AllShopTable />
        </div>
      </div>
    </Flex>
  );
};

export default AllShop;
