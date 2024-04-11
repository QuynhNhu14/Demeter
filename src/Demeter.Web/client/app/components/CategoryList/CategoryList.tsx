// import { useEffect, useState } from "react";
// import "./CategoryList.css";
// import { MenuProps } from "@mantine/core";
// import { Menu } from "@mantine/core";

// import { getCategory } from "../../services/products";
// type MenuItem = Required<MenuProps>["items"][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
//   type?: "group"
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   } as MenuItem;
// }

// // submenu keys of first level
// const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
// type CategoryDataType = {
//   name: string;
//   description: string;
//   baseCategory: CategoryDataType;
//   id: number;
// };

// export const CategoryList = () => {
//   const [openKeys, setOpenKeys] = useState(["sub1"]);
//   const [category, setCategory] = useState<CategoryDataType[]>([]);
//   const [items, setItems] = useState<MenuItem[]>([]);

//   const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
//     const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
//     if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
//       setOpenKeys(keys);
//     } else {
//       setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
//     }
//   };

//   useEffect(() => {
//     let isMounted = true; // Biến cờ để kiểm tra xem component đã được mount hay chưa
//     async function fetchData() {
//       const category = await getCategory();
//       if (category && isMounted) {
//         setCategory(category);
//       }
//     }

//     fetchData();

//     return () => {
//       isMounted = false; // Khi component bị unmount, cập nhật biến cờ thành false
//     };
//   }, []);

//   useEffect(() => {
//     category.map((item) => {
//       if (item.baseCategory === null) {
//         const childItems = category.filter(
//           (childItem) =>
//             childItem.baseCategory && childItem.baseCategory.id === item.id
//         );
//         console.log(childItems);
//         if (childItems.length > 0) {
//           setItems((prevItems) => [
//             ...prevItems,
//             {
//               label: item.name,
//               key: item.id,
//               children: childItems.map((childItem) => ({
//                 label: childItem.name,
//                 key: childItem.id,
//               })),
//             },
//           ]);
//         } else {
//           setItems((prevItems) => [
//             ...prevItems,
//             {
//               label: item.name,
//               key: item.id,
//             },
//           ]);
//         }
//       }
//     });
//   }, [category]);
//   return (
//     <div className="CategoryList">
//       <>
//         <Menu
//           mode="inline"
//           openKeys={openKeys}
//           onOpenChange={onOpenChange}
//           style={{ width: 256 }}
//           items={items}
//         />
//       </>
//     </div>
//   );
// };

import { useState } from 'react';
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, rem, Container} from '@mantine/core';
import { 
  IconCalendarStats, 
  IconChevronRight, 
  IconNotes,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconApple,
  IconFish,
  IconCoffee,
  IconSalad, } from '@tabler/icons-react';
import { JSX } from 'react/jsx-runtime';
interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links }: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Text<'a'>
      style={{display: 'block'}}
      component="a"
      href={link.link}
      key={link.label}
      onClick={(event: { preventDefault: () => any; }) => event.preventDefault()}
      pl={75}
      mb={5}
    >
      {link.label}
    </Text>
  ));

  return (
    <div style={{display: 'block', width: '250px', marginLeft: '10px', marginBottom: '10px'}}>
      <UnstyledButton onClick={() => setOpened((o) => !o)} style={{ display: 'block'}}>
        <Group justify="space-between" gap={10}>
          <Box style={{ display: 'flex', alignItems: 'center', margin:'auto'}}>
              <Icon style={{ width: rem(40), height: rem(40), color: 'green'}} />
            <Box ml="sm">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              stroke={1.5}
              style={{
                transition: 'transform 150ms ease',
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(-90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </div>
  );
}

const mockdata = [
  {
    label: 'Trái cây & Rau củ',
    icon: IconSalad,
    initiallyOpened: true,
    links: [
      { label: 'Trái cây', link: '/' },
      { label: 'Rau củ', link: '/' },
    ],
  },
  {
    label: 'Thịt cá',
    icon: IconFish,
    links: [
      { label: 'Hải sản', link: '/' },
      { label: 'Thịt', link: '/' },
    ],
  },
  {
    label: 'Ngũ cốc',
    icon: IconCoffee,
    links: [
      { label: 'Nuts &biscuits', link: '/' },
      { label: 'Chocolates', link: '/' },
      { label: 'Crisps', link: '/' },
      { label: 'Noodles & Pasta', link: '/' },
      { label: 'Sauces', link: '/' },
      { label: 'Soup', link: '/' },
    ],
  },
];

export function CategoryList() {
  const links = mockdata.map((item: JSX.IntrinsicAttributes & LinksGroupProps) => <LinksGroup {...item} key={item.label} />);

  return (
    <div>
      <Container style={{marginTop: '20px', height: '100%', width: '250px'}}>
        <div>{links}</div>
      </Container>
    </div>

  );
}