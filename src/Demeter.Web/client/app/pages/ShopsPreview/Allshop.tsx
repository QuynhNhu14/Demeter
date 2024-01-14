import AllShopTable from "../../components/Table/TableAllShop";
import styles from "./AllShop.module.css";
const AllShop: React.FC = () => {
    // Code của thành phần Navbar ở đây
    return (
        <div className={styles.Allshop}>
           <AllShopTable />
        </div>
        
    );
  }
  
  export default AllShop;