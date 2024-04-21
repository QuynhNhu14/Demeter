import React, { useState } from "react";
import {
  Table,
  Avatar,
  Badge,
  Pagination,
  Input,
  Text,
  Flex,
  Center,
} from "@mantine/core";
import { IconUser, IconEye, IconSearch } from "@tabler/icons-react";
import * as stylex from "@stylexjs/stylex";



interface Order {
  key: string;
  trackingNumber: number;
  customer: {
    name: string;
    email: string;
    avatar: string;
  };
  products: number;
  orderDate: string;
  total: number;
  status: string;
}

const data: Order[] = [];

for (let i = 1; i <= 30; i++) {
  const order: Order = {
    key: `${i}`,
    trackingNumber: 100000 + i,
    customer: {
      name: `Customer ${i}`,
      email: `customer${i}@example.com`,
      avatar: `https://example.com/avatar${i}.jpg`,
    },
    products: Math.floor(Math.random() * 5) + 1,
    orderDate: `2023-12-${i < 10 ? "0" + i : i}`,
    total: Math.floor(Math.random() * 200) + 50,
    status: i % 2 === 0 ? "Đang xử lý" : "Hoàn Thành",
  };

  data.push(order);
}

const OrdersTable: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  const currentData = data.slice(startIndex, endIndex);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const filteredData = data.filter((item) => 
    item.trackingNumber.toString().includes(searchText)
  );
  console.log({filteredData});

  const rows = filteredData.map((item) => (
    <Table.Tr key={item.key}>
      <Table.Td><Center>{item.trackingNumber}</Center></Table.Td>
      <Table.Td>
        <Flex align="center" gap={8}>
          <Avatar src={item.customer.avatar} icon={<IconUser />} />
          <div>
            <div>{item.customer.name}</div>
            <div>{item.customer.email}</div>
          </div>
        </Flex>
      </Table.Td> 
      <Table.Td><Center>{item.products}</Center></Table.Td>
      <Table.Td><Center>{item.orderDate}</Center></Table.Td>
      <Table.Td><Center>{item.total}</Center></Table.Td>
      <Table.Td>
        <Center>
          <Badge variant="outline"  color={item.status === "Đang xử lý" ? "orange" : "green"}>
          {item.status}
          </Badge> 
        </Center>
      </Table.Td>
      <Table.Td>
        <IconEye color="green" />
      </Table.Td>
    </Table.Tr>
));
  return (
    <div>
      <div {...stylex.props(styles.searchHeader)}>
        <Text fw={500} size="lg">
          Đơn Hàng
        </Text>
        <Input 
          placeholder="Nhập mã đơn hàng" 
          leftSection={<IconSearch size={16} />}
          onChange={(event) => setSearchText(event.currentTarget.value)}
          />
      </div>

      <div {...stylex.props(styles.orderTable)} >
        <Table>
          <Table.Thead>
              <Table.Tr>
              <Table.Th><Center>Mã đơn hàng</Center></Table.Th>
              <Table.Th>Khách hàng</Table.Th>
              <Table.Th><Center>Số lượng</Center></Table.Th>
              <Table.Th><Center>Thời gian</Center></Table.Th>
              <Table.Th><Center>Tổng tiền</Center></Table.Th>
              <Table.Th><Center>Trạng thái</Center></Table.Th>
              <Table.Th/>
              </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        <Flex justify="center">
          <Pagination
            type="primary"
            current={currentPage}
            total={data.length}
            pageSize={pageSize}
            onChange={handleChangePage}
            showSizeChanger={false}
            style={{ margin: "16px", textAlign: "right" }}
          />
        </Flex>
      </div>
    </div>
  );
};

export default OrdersTable;

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
  orderTable: {          
    overflowX: "auto",
    backgroundColor: "#FFFFFF",
    margin: "10px 0px 60px 0px",
    border: "2px solid #E5E7EB",
    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    fontFamily: "sans-serif",
  }
});