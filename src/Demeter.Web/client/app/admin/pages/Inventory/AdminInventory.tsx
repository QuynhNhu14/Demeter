import { Flex } from "@mantine/core";
import Navbar_Admin from "../../components/Navbar/NavbarAdmin";
import InventoryTable from "../../components/Table/TableInventory";
import * as stylex from "@stylexjs/stylex";
import Header from "../../components/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserSession } from "../../../hooks/useUserSession";

const styles = stylex.create({
  adminInventoryPage:{
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
  inventory: {
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'column',
    padding: '10px 5%',
    backgroundColor: '#f3f4f5'
  },
  item: {
    margin: '30px 0',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
  },

});

export const AdminInventory: React.FC = () => {
  const { loggedIn } = useUserSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/home");
    }
  }, [loggedIn]);
  // Code của thành phần Navbar ở đây
  return (
    <Flex {...stylex.props(styles.adminInventoryPage)}>
      <div {...stylex.props(styles.navbar)}>
        <Navbar_Admin />
      </div>
      <div {...stylex.props(styles.container)}>
        <Header />
        <div  {...stylex.props(styles.inventory)}>
          <InventoryTable />
        </div>
      </div>
    </Flex>
  );
};

