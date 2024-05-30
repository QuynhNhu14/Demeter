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

const generateData = (count: number) => {
const data = [];
for (let i = 1; i <= count; i++) {
    data.push({
    key: i,
    id: i,
    code: `VOUCHER0${i < 10 ? "0" + i : i}`,
    description: `This voucher is only for new customers`,
    discount: `${(Math.random() * 50).toFixed(0)}%`,
    startDate: `2024-03-15`,
    endDate: `2024-03-30`,
    active: Math.random() < 0.5 ? "Khả dụng" : "Không thể dùng",
    usageLimit: `${(Math.random() * 100).toFixed(0)}`,
    })
}
return data;
};

const data = generateData(100);

const FilterTable = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };
  const handleStatusFilterChange = (value) => {
    setStatusFilter(value)
  };
  const filteredData = data.filter(
    (item) =>
        (statusFilter ? item.active === statusFilter : true) &&
        (searchText
            ? item.code.toLowerCase().includes(searchText.toLowerCase()) ||
            item.id.toString().includes(searchText)
            : true)
  ).slice(startIndex, endIndex);

  const MAX_LENGTH = 20; 

  const rows = filteredData.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td><Center>{item.id}</Center></Table.Td>
      <Table.Td>{item.code}</Table.Td>
      <Table.Td>
        <Center>
            {!item.description ? 'NONE' : 
                item.description.length > MAX_LENGTH 
                ? item.description.slice(0, MAX_LENGTH) + "..." 
                : item.description
            }
        </Center>
      </Table.Td>
      <Table.Td><Center>{item.discount}</Center></Table.Td>
      <Table.Td><Center>{item.startDate}</Center></Table.Td>
      <Table.Td><Center>{item.endDate}</Center></Table.Td>
      <Table.Td><Center>{item.usageLimit}</Center></Table.Td>
      <Table.Td>
        <Center>
            {(() => {
                let color = "";
                switch (item.active) {
                case "Khả dụng":
                    color = "green";
                    break;
                case "Không thể dùng":
                    color = "red";
                    break;
                default:
                    break;
                }
                return <Badge variant="outline" color={color}>{item.active}</Badge>;
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
        <Flex align="center">
          <Text fw={700} size="xl">
          Tất cả voucher
          </Text>
        </Flex>
        <Flex align="flex-end" gap={4}>
          <Input 
            placeholder="Nhập id hoặc mã voucher" 
            leftSection={<IconSearch size={16} />}
            onChange={(event) => setSearchText(event.currentTarget.value)}
          />
          <Select
            label="Lọc theo trạng thái"
            placeholder="Chọn trạng thái sản phẩm"
            data={['Khả dụng', 'Không thể dùng']}
            clearable
            onChange={handleStatusFilterChange}
            width={100}
          />
        </Flex>
      </div>
      <div {...stylex.props(styles.voucherTable)} >
        <Table>
          <Table.Thead>
              <Table.Tr>
              <Table.Th><Center>ID</Center></Table.Th>
              <Table.Th>Mã voucher</Table.Th>
              <Table.Th><Center>Mô tả</Center></Table.Th>
              <Table.Th><Center>Giảm</Center></Table.Th>
              <Table.Th><Center>Ngày bắt đầu</Center></Table.Th>
              <Table.Th><Center>Ngày kết thúc</Center></Table.Th>
              <Table.Th><Center>Giới hạn sử dụng</Center></Table.Th>
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
  voucherTable: {          
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