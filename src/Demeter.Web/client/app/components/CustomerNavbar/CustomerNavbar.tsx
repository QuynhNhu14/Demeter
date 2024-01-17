import { useState } from 'react';
import "./CustomerNavbar.css";
import { ConfigProvider, MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
    getItem('Hồ sơ', 'sub1'),
    getItem('Đổi mật khẩu', 'sub2'),
    getItem('Đơn hàng của tôi', 'sub3'),
    getItem('Danh sách yêu thích', 'sub4'),
    getItem('Yêu cầu hoàn tiền', 'sub5'),
    getItem('Báo cáo', 'sub6'),
    getItem('Phương thức thanh toán', 'sub7'),
    getItem('Trợ giúp', 'sub8'),
    getItem('Đăng xuất', 'sub9'),
  ];
// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3','sub4', 'sub5', 'sub6','sub7', 'sub8', 'sub9'];

export const CustomerNavbar: React.FC = () => {
    const [openKeys, setOpenKeys] = useState(['sub1']);

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    };
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
              mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              defaultSelectedKeys={['1']}
              style={{ width: 256, fontWeight: '500', backgroundColor: 'white', border: '0' }}
              items={items}
              />
            </ConfigProvider>
        </div>
    )
}

