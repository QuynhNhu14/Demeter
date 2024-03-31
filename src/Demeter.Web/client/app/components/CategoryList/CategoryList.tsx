import { useEffect, useState } from "react";
import "./CategoryList.css";
import { MenuProps } from "@mantine/core";
import { Menu } from "@mantine/core";

import { getCategory } from "../../services/products";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
type CategoryDataType = {
  name: string;
  description: string;
  baseCategory: CategoryDataType;
  id: number;
};

export const CategoryList = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const [category, setCategory] = useState<CategoryDataType[]>([]);
  const [items, setItems] = useState<MenuItem[]>([]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    let isMounted = true; // Biến cờ để kiểm tra xem component đã được mount hay chưa
    async function fetchData() {
      const category = await getCategory();
      if (category && isMounted) {
        setCategory(category);
      }
    }

    fetchData();

    return () => {
      isMounted = false; // Khi component bị unmount, cập nhật biến cờ thành false
    };
  }, []);

  useEffect(() => {
    category.map((item) => {
      if (item.baseCategory === null) {
        const childItems = category.filter(
          (childItem) =>
            childItem.baseCategory && childItem.baseCategory.id === item.id
        );
        console.log(childItems);
        if (childItems.length > 0) {
          setItems((prevItems) => [
            ...prevItems,
            {
              label: item.name,
              key: item.id,
              children: childItems.map((childItem) => ({
                label: childItem.name,
                key: childItem.id,
              })),
            },
          ]);
        } else {
          setItems((prevItems) => [
            ...prevItems,
            {
              label: item.name,
              key: item.id,
            },
          ]);
        }
      }
    });
  }, [category]);
  return (
    <div className="CategoryList">
      <>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ width: 256 }}
          items={items}
        />
      </>
    </div>
  );
};
