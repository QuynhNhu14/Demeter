import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation, NavLink } from 'react-router-dom';
import './App_admin.css';
import Navbar_Admins from "../../components/Navbar_Shop/Navbar_admin";
import Dashboard from "../Dashboard/Dashboard";
import { ConfigProvider, Input, Button, Flex} from "antd";
import AllProduct from "../Product_admin/AllProduct";
import AddProduct from "../pages/Product_admin/AddProduct";
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined, ShopFilled, UserOutlined } from '@ant-design/icons'; // Import các biểu tượng từ Ant Design
import Inventory from "../pages/Inventory/Inventory";
import Orders from "../Orders/Order";
import ShopProfile from "../pages/ShopsPreview/ShopPreview";
import Dashboardadmin from "../Dashboard/Dashboard_admin";
import AllShopTable from "../../components/Table/TableAllShop";
import AllShop from "../ShopsPreview/Allshop";
import headerLogo from "../../../assets/header_logo.jpg";

export default function AdminHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [firstRender, setFirstRender] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true); // State để kiểm soát hiển thị navbar
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value) => {
    console.log("Đã tìm kiếm:", value);
  };

  const onSearchClick = () => {
    handleSearch(searchTerm); // Gọi hàm xử lý tìm kiếm khi người dùng nhấn nút tìm kiếm
  };
  useEffect(() => {
    if (firstRender) {
      if (location.pathname === '/') {
        navigate('/dashboard');
      }
      setFirstRender(false);
    }
  }, [firstRender, navigate, location.pathname]);

  useEffect(() => {
    // Chỉ điều hướng đến '/dashboard' nếu không phải là lần render đầu tiên
    if (!firstRender && location.pathname !== '/dashboard') {
      // Nếu đường dẫn không phải là '/dashboard' thì không thực hiện điều hướng
      navigate(location.pathname);
    }
  }, [location.pathname, firstRender, navigate]);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar); 
  };


  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#009F7F' } }}>
        <Flex className='adminHeader' style={{ backgroundColor: '#fff', height: '64px', display: 'flex', alignItems: 'center', borderBottom:'1px solid #E5E7EB' }}>
            <Flex  style={{width: '255px', padding: '10px', borderRight: '1px solid #e7e7e7', height: '100%'}} >
              <img src={headerLogo} alt='header logo'  style={{width: '100%', height: '100%'}}/>
            </Flex>
            <Flex style={{flex: '9', height: '100%'}} >
              <Flex  align="center" style={{flex: '8', borderRight: '1px solid #e7e7e7'}}>
                <Input.Search
                    placeholder="Nhập từ khóa tìm kiếm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: '600px', height: '35px', marginLeft: '85px' }}
                    enterButton={<Button onClick={onSearchClick} icon={<SearchOutlined />} />} // Sử dụng Button trong Input.Search
                  />
              </Flex>
              <Flex style={{flex: '2', borderRight: '1px solid #e7e7e7'}} justify="center" align="center">
                <Button className='VisitSiteButton'>
                  <NavLink to='/home'><ShopFilled />  Truy cập sàn</NavLink>
                </Button>
              </Flex>
              <Flex style={{flex: '2', borderRight:'1px solid #e7e7e7'}} justify="center" align="center" gap='small'>
                <Flex 
                  style={{width:'40px', height:'40px', borderRadius: '100px', border:'1px solid #e7e7e7'}}
                  justify="center" align="center"
                ><UserOutlined style={{fontSize: '20px'}}/></Flex>
                <Flex vertical>
                  <span style={{fontWeight:'500', fontSize: '16px'}}>Ms.Demeter</span>
                  <span style={{opacity: '0.7', fontSize: '12px'}}>Super Admin</span>
                </Flex>
              </Flex>
              <Flex style={{flex: '1'}} justify="center" align="center" >
                <NavLink to="/login">
                  <LogoutOutlined style={{fontSize: '20px', color: 'red', paddingRight: '10px'}}/>
                </NavLink>
              </Flex>
            </Flex>
        </Flex>
    </ConfigProvider>
  );
}
// quản lý đơn hàng, trang sửa thông tin shop)
// Admin (3 Trang quản lý user, shop với đơn hàng)