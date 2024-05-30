import VouchersTable from "../../components/Table/TableVoucher";
import { Flex } from "@mantine/core";
import Header from "../../components/Header";
import Navbar_Admin from "../../components/Navbar/NavbarAdmin";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  adminVoucherPage: {
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
  voucher: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    padding: "10px 5%",
    backgroundColor: "#f3f4f5",
  }
});


const AdminVouchers: React.FC = () => {
  
  return (
    <Flex {...stylex.props(styles.adminVoucherPage)}>
      <div {...stylex.props(styles.navbar)}>
        <Navbar_Admin />
      </div>
      <div {...stylex.props(styles.container)}>
        <Header />
        <div  {...stylex.props(styles.voucher)}>
          <VouchersTable />
        </div>
      </div>
    </Flex>
  );
};

export default AdminVouchers;
