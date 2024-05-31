import { useState } from "react";
import {
  Table,
  Badge,
  Button,
  Input,
  Select,
  Image,
  Text,
  Pagination,
  Center,
  Flex,
  Modal
} from "@mantine/core";
import { IconEdit, IconSearch } from "@tabler/icons-react";

import * as stylex from "@stylexjs/stylex";

const data = [
    {
        id: 1,
        category: 'Trái cây & Rau củ',
        description: 'Trái cây & Rau củ quả tươi',
        baseCategoryId: null,
    },
    {
        id: 2,
        category: 'Thịt cá',
        description: 'Thịt cá tươi',
        baseCategoryId: null,
    },
    {
        id: 3,
        category: 'Ngũ cốc',
        description: 'Ngũ cốc sạch',
        baseCategoryId: null,
    },
    {
        id: 4,
        category: 'Trái cây',
        description: 'Trái cây tươi',
        baseCategoryId: 1,
    },
    {
        id: 5,
        category: 'Rau củ',
        description: 'Rau củ tươi',
        baseCategoryId: 1,
    },
    {
        id: 6,
        category: 'Hải sản',
        description: 'Hải sản tươi',
        baseCategoryId: 2,
    },
    {
        id: 7,
        category: 'Thịt',
        description: 'Thịt tươi',
        baseCategoryId: 2,
    },
    {
        id: 8,
        category: 'Nuts &biscuits',
        description: 'Nuts &biscuits',
        baseCategoryId: 3,
    },
    {
        id: 9,
        category: 'Chocolates',
        description: 'Chocolates',
        baseCategoryId: 3,
    },
    {
        id: 10,
        category: 'Noodles & Pasta',
        description: 'Noodles & Pasta',
        baseCategoryId: 3,
    },
  ];

const FilterTable = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };
  
  const filteredData = data.filter(
    (item) =>
      (searchText
        ? item.category.toLowerCase().includes(searchText.toLowerCase()) ||
          item.id.toString().includes(searchText)
        : true)
  ).slice(startIndex, endIndex);

  const MAX_LENGTH = 40; 

  const rows = filteredData.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td><Center>{item.id}</Center></Table.Td>
      <Table.Td>{item.category}</Table.Td>
      <Table.Td>
        <Center>
            {!item.description ? 'NONE' : 
                item.description.length > MAX_LENGTH 
                ? item.description.slice(0, MAX_LENGTH) + "..." 
                : item.description
            }
        </Center>
      </Table.Td>
      <Table.Td>
        <Center>
            {(() => {
                let color = "";
                switch (item.baseCategoryId) {
                case null:
                    color = "gray";
                    break;
                case 1:
                    color = "green";
                    break;
                case 2:
                    color = "red";
                    break;
                case 3:
                    color = "orange";
                    break;
                default:
                    color = "green";
                    break;
                }
                return <Badge variant="outline" color={color}>{!item.baseCategoryId ? 'Không có' : 
                data.find(category => category.id ===  item.baseCategoryId)?.category
                }</Badge>;
            })()}
        </Center>
    </Table.Td>
    <Table.Td>
        <Center>
          <Button 
            leftSection={<IconEdit width={20}/>} 
            color="#009f7f" size="xs">
            Sửa
          </Button>
        </Center>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <div>
      <div {...stylex.props(styles.searchHeader)}>
        <Text fw={500} size="lg">
          Tất cả danh mục
        </Text>
        <Input 
          placeholder="Nhập id hoặc danh mục" 
          leftSection={<IconSearch size={16} />}
          onChange={(event: any) => setSearchText(event.currentTarget.value)}
          />
      </div>
      <div {...stylex.props(styles.categoryTable)} >
        <Table>
          <Table.Thead>
              <Table.Tr>
              <Table.Th><Center>ID</Center></Table.Th>
              <Table.Th>Tên danh mục</Table.Th>
              <Table.Th><Center>Mô tả</Center></Table.Th>
              <Table.Th><Center>Danh mục cha</Center></Table.Th>
              <Table.Th><Center>Hành động</Center></Table.Th>
              <Table.Th/>
              </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        <Flex justify="center">
          <Pagination
            type="primary"
            current={currentPage}
            total={data.length/pageSize}
            pageSize={pageSize}
            onChange={handleChangePage}
            showSizeChanger={false}
            {...stylex.props(styles.pagination)}
          />
        </Flex>
      </div>
    </div>
  );
};

export default FilterTable;

const styles = stylex.create({
  searchHeader: {
    padding: "20px",
    margin: "10px 0px 30px 0px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    border: "2px solid #E5E7EB",
    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
  },
  categoryTable: {          
    overflowX: "auto",
    backgroundColor: "#FFFFFF",
    margin: "10px 0px 60px 0px",
    border: "2px solid #E5E7EB",
    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    fontFamily: "sans-serif",
  },
  pagination: {
    margin: "16px", 
    textAlign: "right",
  }
});