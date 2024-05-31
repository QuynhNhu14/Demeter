import { useState } from "react";
import {
  Table,
  Badge,
  Pagination,
  Input,
  Text,
  Flex,
  Center,
  Image,
  Button
} from "@mantine/core";
import { IconUser, IconEye, IconSearch, IconEdit } from "@tabler/icons-react";
import * as stylex from "@stylexjs/stylex";

const generateData = (count: number) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      key: i,
      id: i,
      productImage: `https://pickbazar-react-admin.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2Fconversions%2FApples-thumbnail.jpg&w=1920&q=75`,
      productName: `Product ${i}`,
      inventory: `SKU-${i % 10}`,
      quantity: Math.floor(Math.random() * 100),
      soldQuantity: Math.floor(Math.random() * 50),
    });
  }
  return data;
};

const dataSource = generateData(100);

const InventoryTable = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const filteredData = dataSource.filter((item) => 
    item.productName.toLowerCase().includes(searchText.toLowerCase()) ||
    item.inventory.toLowerCase().includes(searchText.toLowerCase())
  ).slice(startIndex, endIndex);

  const rows = filteredData.map((item) => (
    <Table.Tr key={item.key}>
      <Table.Td><Center>{item.id}</Center></Table.Td>
      <Table.Td>
          <Flex align="center">
            <Image src={item.productImage} h={50} />
            <Text>{item.productName}</Text>
          </Flex>
      </Table.Td>
      <Table.Td><Center>{item.inventory}</Center></Table.Td>
      <Table.Td><Center>{item.quantity}</Center></Table.Td>
      <Table.Td><Center>{item.soldQuantity}</Center></Table.Td>
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
        <Text fw={700} size="lg">
          Kho
        </Text>
        <Input 
          placeholder="Nhập mã đơn hàng" 
          leftSection={<IconSearch size={16} />}
          onChange={(event: any) => setSearchText(event.currentTarget.value)}
          />
      </div>

      <div {...stylex.props(styles.orderTable)} >
        <Table>
          <Table.Thead>
              <Table.Tr>
              <Table.Th><Center>ID</Center></Table.Th>
              <Table.Th>Sản phẩm</Table.Th>
              <Table.Th><Center>Kho</Center></Table.Th>
              <Table.Th><Center>Số lượng</Center></Table.Th>
              <Table.Th><Center>Số lượng bán</Center></Table.Th>
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
            total={dataSource.length/pageSize}
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

export default InventoryTable;
const styles = stylex.create({
  searchHeader: {
    padding: "20px",
    margin: "10px 0px 30px 0px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "2px solid #E5E7EB",
    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
  },
  orderTable: {          
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