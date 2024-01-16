import AllProductTable from "../../components/Table/TableAllProduct";
import styles from "./AllProduct.module.css";
const AllProduct: React.FC = () => {
    // Code của thành phần Navbar ở đây
    return (
        <div className={styles.AllProduct}>
           <AllProductTable />
        </div>
        
    );
  }
  
  export default AllProduct;