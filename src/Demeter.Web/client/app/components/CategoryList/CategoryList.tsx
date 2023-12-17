import { useState } from 'react';
import "./CategoryList.css";
import { ConfigProvider, MenuProps } from 'antd';
import { Menu } from 'antd';
import { CiApple } from "react-icons/ci";
import { IoFishOutline } from "react-icons/io5";
import { VscCoffee } from "react-icons/vsc";

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
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
    getItem('Trái cây & Rau củ', 'sub1', <CiApple size={22}/>
    , [
      getItem('Trái cây', '1'),
      getItem('Rau củ', '2'),
    ]),
    getItem('Thịt cá', 'sub2', <IoFishOutline size={20}/>
    , [
      getItem('Cá tươi', '3'),
      getItem('Cá đông lạnh', '4'),
      getItem('Hải sản chế biến', '5'),
    ]),
    getItem('Sản phẩm đồ uống', 'sub3', <VscCoffee size={20}/>, [
      getItem('Nước trái cây', '6'),
      getItem('Nước ép', '7'),
      getItem('Nước giải khát tự nhiên', '8'),
    ]),
  ];
// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

export const CategoryList: React.FC = () => {
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
        <div className="CategoryList">
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
              style={{ width: 256 }}
              items={items}
              />
            </ConfigProvider>
        </div>
    )
}

