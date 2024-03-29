import { useState } from 'react';
import styles from './Navbar.module.css';
import '../../App.css';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Input, ConfigProvider, InputProps, Modal } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import headerLogo from '../../../assets/header_logo.jpg';
interface SearchProps extends InputProps {
  inputPrefixCls?: string;
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>,
    info?: {
      source?: 'clear' | 'input';
    },
  ) => void;
  enterButton?: React.ReactNode;
  loading?: boolean;
}

const { Search } = Input;

const Navbar: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showNoDataModal, setShowNoDataModal] = useState(false);
  const location = useLocation();
  
  const hiddenRoutes = ['/admin', '/shop', '/dashboard', '/allproduct', '/shop_allproduct', '/allshop', '/shop_orders', '/manage_orders', '/shop_dashboard', '/addproduct', '/inventory', '/shopprofile'];

  const hideNavbar = hiddenRoutes.includes(location.pathname);

  if (hideNavbar) {return null;}
  const handleSearch: SearchProps['onSearch'] = (value, _event, info) => {
    console.log(info?.source, value);
    if (value.trim() !== '') {
      performSearch(value);
    } else {
      setShowModal(true);
    }
  };

  const performSearch = (value: string) => {
    if (value.trim() !== '') {
      // Xử lý tìm kiếm ở đây và set lại state showNoDataModal nếu không có dữ liệu
      const searchResult = []; // Giả sử không có dữ liệu tìm kiếm phù hợp
      if (searchResult.length === 0) {
        setShowNoDataModal(true); // Hiển thị Modal nếu không có dữ liệu
      } else {
        setShowNoDataModal(false);
        // Xử lý dữ liệu tìm kiếm ở đây nếu có dữ liệu phù hợp
      }
    } else {
      setShowNoDataModal(false);
      console.log('Displaying default search results or message');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowNoDataModal(false);
  };

  return (
    <nav className={styles['navbar']}>
      <NavLink to="/home" className={styles['navbar--logo']}><img src={headerLogo} style={{width: '100px', height: '20px', padding: '0 10px'}}/></NavLink>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#009F7F',
          },
        }}
      >
        <Search
          placeholder="Tìm kiếm sản phẩm của bạn ở đây"
          enterButton="Tìm kiếm"
          onSearch={handleSearch}
          onChange={handleChange}
          value={searchValue}
          style={{ width: 600 }}
          loading={false}
        />
        <Modal
          title="Warning"
          visible={showModal}
          onOk={closeModal}
          onCancel={closeModal}
          okText="OK"
          cancelText="Cancel"
        >
          <p>Tìm kiếm sản phẩm của bạn ở đây</p>
        </Modal>
        <Modal
          title="No Data Found"
          visible={showNoDataModal}
          onOk={closeModal}
          onCancel={closeModal}
          okText="OK"
          cancelText="Cancel"
        >
          <p>Không tìm thấy sản phẩm</p>
        </Modal>
      </ConfigProvider>
      <div className={styles['horizontal-list']}>
        <NavLink to="/shops" className={styles['navbar--link']}>Cửa hàng</NavLink>
        <NavLink to="/shops" className={styles['navbar--link']}>Mã giảm giá</NavLink>
        <NavLink to="/shops" className={styles['navbar--link']}>Câu hỏi thường gặp</NavLink>
        <NavLink to="/shops" className={styles['navbar--link']}>Liên hệ</NavLink>
      </div>
      <div className={styles['itemlist']}>
          <NavLink to="/cart" className={styles['navbar--link']}>
            <ShoppingCartOutlined style={{ fontSize: '18px', color: '#144832' }} />
          </NavLink>
          <NavLink to="/profile" className={styles['navbar--link']}>
            <UserOutlined style={{ fontSize: '18px', color: '#144832' }} />
          </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;