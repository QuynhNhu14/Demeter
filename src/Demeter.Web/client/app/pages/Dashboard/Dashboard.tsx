import { ConfigProvider, Flex } from "antd";
import Navbar_Shop from "../../components/Navbar_Shop/Navbar_Shop";
import Summary_Card from "../../components/Summary_Card/Summary_Card";
import Summary_CardTwo from "../../components/Summary_Card/Summary_CardTwo";
import SaleHistoryChart from "../../components/Table/TableChart";
import RecentOrdersTable from "../../components/Table/TableRecentOrders";
import ShopHeader from "../ShopPage/ShopHeader";
import styles from "./Dashboard.module.css";
const Dashboard: React.FC = () => {
    // Code của thành phần Navbar ở đây
    return (
    <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#009F7F',
          },
        }}
      >
        <Flex style={{backgroundColor: '#f3f4f6'}}>
            <div style={{flex: '2', width: '100%' }}>
                <Navbar_Shop />
            </div>
            <div style={{flex: '9', width: '100%' }}>
                <ShopHeader />
                <div className={styles.Dashboard}>
                    <div className={styles.item}><Summary_Card/></div>
                    <div className={styles.item}><Summary_CardTwo/></div>
                    <div className={styles.item}><RecentOrdersTable/></div>
                </div>
            </div>
        </Flex>
        </ConfigProvider>
        
    );
  }
  
  export default Dashboard;