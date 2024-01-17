import React,{useState, useEffect}from 'react';
import { AppstoreOutlined, InboxOutlined, SettingOutlined, ProfileOutlined, RollbackOutlined, ShopOutlined, GiftOutlined, StarOutlined } from '@ant-design/icons';
import { MenuProps, Menu, Typography, ConfigProvider } from 'antd';
import { NavLink } from 'react-router-dom';

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
    getItem('Chính', 'grp', null, [getItem('Tổng quan', '1', <AppstoreOutlined />, undefined, undefined, 'shop_dashboard')], 'group'),
  
    getItem('Quản lý sản phẩm', 'grp', null, [
  
      getItem('Sản phẩm', 'sub1', <InboxOutlined />, [
        getItem('Tất cả sản phẩm', '2', undefined, undefined, undefined, 'shop_allproduct'),
        getItem('Thêm Sản phẩm', '3', undefined, undefined, undefined, 'Add Product'),
      ]),
  
      getItem('Kho', '4', <AppstoreOutlined />, undefined, undefined, 'Inventory'),
    ], 'group'),

    getItem('Quản lý đơn hàng', 'grp',null, [

      getItem('Đơn hàng', '5', <ProfileOutlined />, undefined, undefined, 'shop_orders'),
      getItem('Hoàn tiền', '6', <RollbackOutlined />, undefined, undefined, 'shop_orders'),
    ], 'group'),

    getItem('Quản lý cửa hàng', 'grp',null, [

      getItem('Thông tin', '7', <ShopOutlined />, undefined, undefined, 'ShopProfile'),
      getItem('Voucher', '8', <GiftOutlined />, undefined, undefined, 'ShopProfile'),
      getItem('Review', '9', <StarOutlined />, undefined, undefined, 'ShopProfile'),
    ], 'group'),
  
    // getItem('Navigation Three', 'sub2', <SettingOutlined />, [
    //   getItem('Option 9', '9', undefined, undefined, undefined, 'Option 9'),
    //   getItem('Option 10', '10', undefined, undefined, undefined, 'Option 10'),
    //   getItem('Option 11', '11', undefined, undefined, undefined, 'Option 11'),
    //   getItem('Option 12', '12', undefined, undefined, undefined, 'Option 12'),
    // ]),
  
    // getItem('Group', 'grp', null, [getItem('Option 13', '13', undefined, undefined, undefined, 'Option 13'), getItem('Option 14', '14', undefined, undefined, undefined, 'Option 14')], 'group'),
  ];

const Navbar_Admin: React.FC = () => {
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
      <div  className='AdminNavbar'> 
        <Menu
        onClick={onClick}
        style={{ width: 256, fontWeight: '500' }}
        defaultSelectedKeys={[localStorage.getItem('selectedMenuKey') || '1']}
        defaultOpenKeys={['grp']}
        mode="inline"
        items={items}
      />
      </div>
    </ConfigProvider>
  );
};

export default Navbar_Admin;