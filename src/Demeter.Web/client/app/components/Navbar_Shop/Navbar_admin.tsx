import React,{useState, useEffect}from 'react';
import { AppstoreOutlined, InboxOutlined, SettingOutlined,ShopOutlined, ProfileOutlined, GoldOutlined, TagsOutlined, StarOutlined, UserOutlined, UsergroupAddOutlined, GiftOutlined, RollbackOutlined } from '@ant-design/icons';
import { MenuProps, Menu, Typography, Flex, ConfigProvider } from 'antd';
import { NavLink } from 'react-router-dom';
import headerLogo from '../../../assets/header_logo.jpg';
import './Navbar_Shop.css'
const {Text}=Typography;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
    name?: string,
  ): MenuItem {
    const to = `/${name}`.toLowerCase().replace(/\s/g, ''); // Tạo đường dẫn từ label
  
    const menuItem: MenuItem = {
      key,
      icon,
      children,
      label,
      type,
      name,
    };
  
    // Kiểm tra key của mục có phải là các key cụ thể cần tạo NavLink hay không
    const keysToNavLink = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
    if (keysToNavLink.includes(String(key))) {
      menuItem.label = (
        <NavLink to={to} activeClassName="active">
          {label}
        </NavLink>
      );
    }
    if (key === 'grp' ) {
      menuItem.label = <Text strong type="secondary">{label}</Text>;
    }
  
    return menuItem;
  }
  

  const items: MenuProps['items'] = [
    getItem('Chính', 'grp', null, [getItem('Tổng quan', '1', <AppstoreOutlined />, undefined, undefined, 'Dashboard')], 'group'),
    getItem('Quản lý sản phẩm', 'grp', null, [
      getItem('Sản phẩm', '2', <InboxOutlined />, undefined, undefined, 'All Product'),
      getItem('Phân loại', '3', <GoldOutlined />, undefined, undefined, 'All Product'),
      getItem('Tag', '4', <TagsOutlined />, undefined, undefined, 'All Product'),
      getItem('Review', '5', <StarOutlined />, undefined, undefined, 'All Product'),
      getItem('Voucher', '6', <GiftOutlined />, undefined, undefined, 'All Product'),
    ], 'group'),

    getItem('Quản lý đơn hàng', 'grp',null, [

      getItem('Đơn hàng', '7', <ProfileOutlined />, undefined, undefined, 'manage_orders'),
      getItem('Hoàn tiền', '8', <RollbackOutlined />, undefined, undefined, 'manage_orders'),
    ], 'group'),

    getItem('Quản lý tài khoản', 'grp',null, [

      getItem('Cửa hàng', '9', <ShopOutlined />, undefined, undefined, 'All Shop'),
      getItem('Khách hàng', '10', <UserOutlined />, undefined, undefined, 'All Shop'),
      getItem('Nhân viên', '11', <UsergroupAddOutlined />, undefined, undefined, 'All Shop'),
    ], 'group'),
  
    // getItem('Navigation Three', 'sub2', <SettingOutlined />, [
    //   getItem('Option 9', '9', undefined, undefined, undefined, 'Option 9'),
    //   getItem('Option 10', '10', undefined, undefined, undefined, 'Option 10'),
    //   getItem('Option 11', '11', undefined, undefined, undefined, 'Option 11'),
    //   getItem('Option 12', '12', undefined, undefined, undefined, 'Option 12'),
    // ]),
  
    // getItem('Group', 'grp', null, [getItem('Option 13', '13', undefined, undefined, undefined, 'Option 13'), getItem('Option 14', '14', undefined, undefined, undefined, 'Option 14')], 'group'),
  ];

const Navbar_Admins: React.FC = () => {
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
      <div className='AdminNavbar'>
        <Menu
        onClick={onClick}
        style={{ width: 256 , fontWeight: '500'}}
        defaultSelectedKeys={[localStorage.getItem('selectedMenuKey') || '1']}
        defaultOpenKeys={['grp']}
        mode="inline"
        items={items}
      />
      </div>
    </ConfigProvider>
  );
};

export default Navbar_Admins;