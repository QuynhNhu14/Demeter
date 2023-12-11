import React,{useState, useEffect}from 'react';
import { AppstoreOutlined, InboxOutlined, SettingOutlined } from '@ant-design/icons';
import { MenuProps, Menu, Typography } from 'antd';
import { NavLink } from 'react-router-dom';
const {Text}=Typography;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    const to = `/${label}`.toLowerCase().replace(/\s/g, ''); // Tạo đường dẫn từ label
  
    const menuItem: MenuItem = {
      key,
      icon,
      children,
      label,
      type,
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
    getItem('Main', 'grp', null, [getItem('Dash board', '1', <AppstoreOutlined />)], 'group'),

    getItem('Product Management', 'grp', null, [

        getItem('Product', 'sub1', <InboxOutlined />, [
            getItem('All Product', '2'),
            getItem('Add Product', '3'),
        ]),

        getItem('Inventory', '6', <AppstoreOutlined />),
    ], 'group'),

  getItem('Navigation Three', 'sub2', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),

  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
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
    <div>
      <div style={{display:'flex', backgroundColor:'#fff',height:'64px', borderBottom:'1px solid #E5E7EB',borderRight:'1px solid #E5E7EB'}}>
            <h1> logo </h1>
      </div>    
      <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={[localStorage.getItem('selectedMenuKey') || '1']}
      defaultOpenKeys={['grp']}
      mode="inline"
      items={items}
    />
    </div>
    
  );
};

export default Navbar_Admin;