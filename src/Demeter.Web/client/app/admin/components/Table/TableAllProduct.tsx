import React, { useState } from "react";
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
import ProductForm from "../Form/FormAddProduct";

import * as stylex from "@stylexjs/stylex";

const generateData = (count: number) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      key: i,
      ID: i,
      productImage: `https://pickbazar-react-admin.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2Fconversions%2FApples-thumbnail.jpg&w=1920&q=75`,
      productName: `Product ${i}`,
      productType: `Loại ${i % 5}`,
      pricePerUnit: `$${(Math.random() * 100).toFixed(2)}`,
      quantity: Math.floor(Math.random() * 100),
      status: ["Hết hàng", "Đang bán", "Bị ẩn", "Ngừng bán"][
        Math.floor(Math.random() * 4)
      ],
    });
  }
  return data;
};

const dataSource = generateData(30);

const FilterTable = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [searchText, setSearchText] = useState("");
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  const uniqueProductTypes = Array.from(new Set(dataSource.map((item) => item.productType)));
  const typeOptions = ['Tất cả'].concat(uniqueProductTypes);

  const handleStatusFilterChange = (value) => {
    setStatusFilter(value);
  };

  const handleTypeFilterChange = (value) => {
    setTypeFilter(value);
  };

  const handleEditClick = () => {
    setEditModalVisible(true);
  };

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };
  
  const filteredData = dataSource.filter(
    (item) =>
      (statusFilter ? item.status === statusFilter : true) &&
      (typeFilter ? item.productType === typeFilter : true) &&
      (searchText
        ? item.productName.toLowerCase().includes(searchText.toLowerCase()) ||
          item.productType.toLowerCase().includes(searchText.toLowerCase())
        : true)
  ).slice(startIndex, endIndex);


  const rows = filteredData.map((item) => (
    <Table.Tr key={item.key}>
      <Table.Td><Center>{item.ID}</Center></Table.Td>
      <Table.Td>
          <Flex align="center">
            <Image src={item.productImage} h={50} />
            <Text>{item.productName}</Text>
          </Flex>
      </Table.Td>
      <Table.Td><Center>{item.productType}</Center></Table.Td>
      <Table.Td><Center>{item.pricePerUnit}</Center></Table.Td>
      <Table.Td><Center>{item.quantity}</Center></Table.Td>
      <Table.Td>
        <Center>
          {(() => {
            let color = "";
            switch (item.status) {
              case "Hết hàng":
                color = "red";
                break;
              case "Đang bán":
                color = "green";
                break;
              case "Bị ẩn":
                color = "orange";
                break;
              case "Ngừng bán":
                color = "gray";
                break;
              default:
                break;
            }
            return <Badge variant="outline" color={color}>{item.status}</Badge>;
          })()}
        </Center>
      </Table.Td>
      <Table.Td>
        <Center>
          <Button 
            leftSection={<IconEdit width={20}/>} 
            color="#009f7f" size="xs" 
            onClick={handleEditClick}>
            Sửa
          </Button>
        </Center>
      </Table.Td>

    </Table.Tr>
  ));
  return (
    <div>
      <div {...stylex.props(styles.searchHeader)}>
        <Flex align="center">
          <Text fw={700} size="xl">
            Tất cả sản phẩm
          </Text>
        </Flex>
        <Flex align="flex-end" gap={4}>
          <Input 
            placeholder="Nhập mã sản phẩm" 
            leftSection={<IconSearch size={16} />}
            onChange={(event) => setSearchText(event.currentTarget.value)}
          />
          <Select
            label="Lọc theo trạng thái"
            placeholder="Chọn trạng thái sản phẩm"
            data={['Tất cả', 'Hết hàng', 'Đang bán', 'Bị ẩn', 'Ngừng bán']}
            defaultValue="Tất cả"
            clearable
            onChange={handleStatusFilterChange}
            width={100}
          />
          <Select
            label="Lọc theo loại"
            placeholder="Chọn loại sản phẩm"
            data={typeOptions}
            defaultValue="Tất cả"
            clearable
            onChange={handleTypeFilterChange}
          />
        </Flex>
      </div>
      <div {...stylex.props(styles.orderTable)} >
        <Table>
          <Table.Thead>
              <Table.Tr>
              <Table.Th><Center>ID</Center></Table.Th>
              <Table.Th>Sản phẩm</Table.Th>
              <Table.Th><Center>Loại sản phẩm</Center></Table.Th>
              <Table.Th><Center>Giá/Đơn vị</Center></Table.Th>
              <Table.Th><Center>Số lượng</Center></Table.Th>
              <Table.Th><Center>Trạng thái</Center></Table.Th>
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
            total={dataSource.length}
            pageSize={pageSize}
            onChange={handleChangePage}
            showSizeChanger={false}
            {...stylex.props(styles.pagination)}
          />
            <Modal 
              centered size="xl"
              opened={editModalVisible}  
              onClose={() => setEditModalVisible(false)} 
              zIndex={1001}
              >
                <ProductForm />
            </Modal>
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