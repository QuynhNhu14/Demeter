import {useState, useEffect}from 'react';
import { AppstoreOutlined, InboxOutlined, SettingOutlined } from '@ant-design/icons';
import { MenuProps, Menu, Typography, ConfigProvider } from 'antd';
import { NavLink } from 'react-router-dom';
const {Text}=Typography;
type MenuItem = Required<MenuProps>['items'][number];
import "./CustomerNavbar.css";

function getItem(
    label: React.ReactNode,
    key: React.Key,
    link: React.ReactNode,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    const to = `/${link}`.toLowerCase().replace(/\s/g, ''); // Tạo đường dẫn từ label
  
    const menuItem: MenuItem = {
      key,
      icon,
      link,
      children,
      label,
      type,
    };
  
    // Kiểm tra key của mục có phải là các key cụ thể cần tạo NavLink hay không
    const keysToNavLink = ['1','2','3','4','5','6','7','8','9'];
    if (keysToNavLink.includes(String(key))) {
      menuItem.label = (
        <NavLink to={to} activeClassName="active" style={{color: label === 'Đăng xuất' ? '#dc0f0f' : undefined}}>
          {label}
        </NavLink>
      );
    }
    if (key === 'grp' ) {
      menuItem.link = <Text strong type="secondary">{link}</Text>;
    }
  
    return menuItem;
  }
  

const items: MenuProps['items'] = [
    getItem('Hồ sơ', '1', 'profile'),
    getItem('Đổi mật khẩu', '2', 'change_password'),
    getItem('Đơn hàng của tôi', '3', 'orders'),
    getItem('Danh sách yêu thích', '4', 'profile'),
    getItem('Yêu cầu hoàn tiền', '5', 'profile'),
    getItem('Báo cáo', '6', 'profile'),
    getItem('Phương thức thanh toán', '7', 'profile'),
    getItem('Trợ giúp', '8', 'profile'),
    getItem('Đăng xuất', '9', 'login'),
    // getItem('Danh sách yêu thích', '4', 'wishlist'),
    // getItem('Yêu cầu hoàn tiền', '5', 'refund'),
    // getItem('Báo cáo', '6', 'report'),
    // getItem('Phương thức thanh toán', '7', 'payment'),
    // getItem('Trợ giúp', '8', 'help'),
    // getItem('Đăng xuất', '9', 'login'),

];

const UserNavbar: React.FC = () => {
  const [selectedMenuKey, setSelectedMenuKey] = useState<string>(
    localStorage.getItem('selectedMenuKey') || '1'
  );

  const onClick: MenuProps['onClick'] = (e) => {
    const clickedKey = e.key.toString();
    localStorage.setItem('selectedMenuKey', clickedKey);
    setSelectedMenuKey(clickedKey);
  };

  useEffect(() => {
    const menu = document.getElementsByClassName('ant-menu')[0];
    if (menu) {
      menu.setAttribute('data-selectedkeys', selectedMenuKey);
    }
  }, [selectedMenuKey]);

  return (

    <div className="CustomerNavbar">
    <ConfigProvider
      theme={{
          components: {
            Menu: {
              itemSelectedColor: '#009F7F',
              itemHoverColor: '#009F7F',
            },
          },
        }}
      >
        <Menu
        onClick={onClick}
        defaultSelectedKeys={[localStorage.getItem('selectedMenuKey') || '1']}
        defaultOpenKeys={['grp']}
        mode="inline"
        items={items}
        style={{ width: 256, fontWeight: '500', backgroundColor: 'white', border: '0' }}
    />
      </ConfigProvider>
  </div>
  );
};

export default UserNavbar;