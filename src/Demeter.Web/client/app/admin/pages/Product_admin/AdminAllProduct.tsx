import {  Flex } from "@mantine/core";
import Navbar_Admin from "../../components/Navbar/NavbarAdmin";
import AllProductTable from "../../components/Table/TableAllProduct";
import Header from "../../components/Header";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  AdminAllProductPage: {
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
  product: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    padding: "10px 5%",
    backgroundColor: "#f3f4f5",
  }
});

const AdminAllProduct: React.FC = () => (
  /* Code của thành phần Navbar ở đây*/ <>
    <Flex {...stylex.props(styles.AdminAllProductPage)}>
      <div {...stylex.props(styles.navbar)}>
        <Navbar_Admin />
      </div>
      <div  {...stylex.props(styles.container)}>
        <Header />
        <div {...stylex.props(styles.product)}>
          <AllProductTable />
        </div>
      </div>
    </Flex>
  </>
);

export default AdminAllProduct;
