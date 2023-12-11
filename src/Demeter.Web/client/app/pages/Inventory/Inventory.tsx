import InventoryTable from '../../components/Table/TableInventory';
import styles from './Inventory.module.css'

const Inventory: React.FC = () => {
    // Code của thành phần Navbar ở đây
    return (
        <div className={styles.Inventory}>
           <InventoryTable/>
        </div>
        
    );
  }
  
  export default Inventory;