import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App_Shop.css';
import Navbar_Admin from "./components/Navbar_Shop/Navbar_Shop";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ConfigProvider, Input, Button} from "antd";
import AllProduct from "./pages/Product_admin/AllProduct";
import AddProduct from "./pages/Product_admin/AddProduct";
import { MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined } from '@ant-design/icons'; // Import các biểu tượng từ Ant Design
import Inventory from "./pages/Inventory/Inventory";
import Orders from "./pages/Orders/Order";
import ShopProfile from "./pages/ShopsPreview/ShopPreview";


export default function App_admin() {
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
      <div className="AppAdmin">
        {showNavbar && <Navbar_Admin />} {/* Hiển thị navbar nếu showNavbar là true */}
        <div style={{ width: '100%' }}>
          <div style={{ backgroundColor: '#fff', height: '64px', display: 'flex', alignItems: 'center', borderBottom:'1px solid #E5E7EB' }}>
            {showNavbar ? (
              <MenuFoldOutlined onClick={toggleNavbar} style={{ color: '#009f7f',paddingLeft: '10px', fontSize: '24px', cursor: 'pointer' }} />
            ) : (
              <MenuUnfoldOutlined onClick={toggleNavbar} style={{ color: '#009f7f',paddingLeft: '10px', fontSize: '24px', cursor: 'pointer' }} />
            )}
             <Input.Search
                placeholder="Nhập từ khóa tìm kiếm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '300px', height: '35px', marginLeft: '100px' }}
                enterButton={<Button onClick={onSearchClick} icon={<SearchOutlined />} />} // Sử dụng Button trong Input.Search
              />
          </div>
          <div className={showNavbar ? 'content-with-navbar' : 'content-without-navbar'}>
            <Routes>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/allproduct' element={<AllProduct />} />
              <Route path='/addproduct' element={<AddProduct />} />
              <Route path='/inventory' element={<Inventory/>} />
              <Route path='/orders' element={<Orders/>} />
              <Route path='/ShopProfile' element={<ShopProfile/>} />
            </Routes>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
// quản lý đơn hàng, trang sửa thông tin shop)
// Admin (3 Trang quản lý user, shop với đơn hàng)