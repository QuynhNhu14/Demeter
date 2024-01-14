
import styles from './Order.module.css'
import OrdersTable from '../../components/Table/TableOrders';

const Orders: React.FC = () => {
    // Code của thành phần Navbar ở đây
    return (
        <div className={styles.order}>
        <OrdersTable/>
        </div>
        
    );
  }
  
  export default Orders;