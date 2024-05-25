import { Flex } from "@mantine/core";
import Navbar_Shop from "../admin/components/NavbarShop/NavbarShop";
import InventoryTable from "../admin/components/Table/TableInventory";
import AdminHeader from "../admin/pages/AdminPage/AdminHeader";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
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
  background:{
    backgroundColor: "#f3f4f6"
  },

});

export const Inventory: React.FC = () => {
  // Code của thành phần Navbar ở đây
  return (
    <>
      <Flex {...stylex.props(styles.background)}>
        <div style={{ flex: "2", width: "100%" }}>
          <Navbar_Shop />
        </div>
        <div style={{ flex: "9", width: "100%" }}>
          <AdminHeader />
          <div {...stylex.props(styles.inventory)}>
            <InventoryTable />
          </div>
        </div>
      </Flex>
    </>
  );
};

