import Summary_Card from "../../components/Summary_Card/Summary_Card";
import Summary_CardTwo from "../../components/Summary_Card/Summary_CardTwo";
import SaleHistoryChart from "../../components/Table/TableChart";
import RecentOrdersTable from "../../components/Table/TableRecentOrders";
import styles from "./Dashboard.module.css";
const Dashboard: React.FC = () => {
    // Code của thành phần Navbar ở đây
    return (
        <div className={styles.Dashboard}>
            <div className={styles.item}><Summary_Card/></div>
            <div className={styles.item}><Summary_CardTwo/></div>
            <div className={styles.item}><RecentOrdersTable/></div>
        </div>
        
    );
  }
  
  export default Dashboard;