import {  Flex } from "@mantine/core";
import NavbarAdmin from "../../components/Navbar/NavbarAdmin";
import AllCustomerTable from "../../components/Table/TableAllCustomer";
import Header from "../../components/Header";
import * as stylex from "@stylexjs/stylex";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserSession } from "../../../hooks/useUserSession";

const styles = stylex.create({
  adminManageCustomerPage: {
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
  customer: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    padding: "10px 5%",
    backgroundColor: "#f3f4f5",
  }
});

const AllCustomer: React.FC = () => {
  const { loggedIn } = useUserSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/home");
    }
  }, [loggedIn]);
  return (
    <Flex {...stylex.props(styles.adminManageCustomerPage)}>
      <div {...stylex.props(styles.navbar)}>
        <NavbarAdmin />
      </div>
      <div {...stylex.props(styles.container)}>
        <Header />
        <div  {...stylex.props(styles.customer)}>
          <AllCustomerTable />
        </div>
      </div>
    </Flex>
  );
};

export default AllCustomer;
