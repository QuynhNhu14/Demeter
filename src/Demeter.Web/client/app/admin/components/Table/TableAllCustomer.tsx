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
  Modal,
  Avatar
} from "@mantine/core";
import { IconEdit, IconEye, IconSearch } from "@tabler/icons-react";
import * as stylex from "@stylexjs/stylex";

const { Search } = Input;

const generateData = (count: number) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      key: i,
      id: i,
      customerImage: `https://livewiredemos.com/images/avatar.png`,
      customerName: `Customer ${i}`,
      email: `customer${i}@example.com`,
      gender: ["Nam", "Nữ"][Math.floor(Math.random() * 2)],
      address: `KTX khu A ĐHQG, Khu phố 6, Đông Hòa, Dĩ An, Bình Dương`,
      status: ["Hoạt động", "Ngừng hoạt động"][Math.floor(Math.random() * 2)],
    });
  }
  return data;
};
const dataSource = generateData(100);

const AllCustomerTable = () => {
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
    setStatusFilter(value);
  };

  const filteredData = dataSource.filter(
    (item) =>
    (statusFilter ? item.status === statusFilter : true) &&
    (searchText
      ? item.customerName.toLowerCase().includes(searchText.toLowerCase()) ||
      item.id.toString().includes(searchText)
      : true)
  ).slice(startIndex, endIndex);

  const MAX_LENGTH = 40; 

  const rows = filteredData.map((item) => (
    <Table.Tr key={item.key}>
        <Table.Td><Center>{item.id}</Center></Table.Td>
        <Table.Td>
            <Flex align="center" gap={12}>
                <Image src={item.customerImage} h={50}  {...stylex.props(styles.customerAva)}/>
                <Text >{item.customerName}</Text>
            </Flex>
        </Table.Td>
        <Table.Td><Center>{item.email}</Center></Table.Td>
        <Table.Td><Center>{item.gender}</Center></Table.Td>
        <Table.Td>
            <Center>
                {!item.address ? 'NONE' : 
                    item.address.length > MAX_LENGTH 
                    ? item.address.slice(0, MAX_LENGTH) + "..." 
                    : item.address
                }
            </Center>
        </Table.Td>
        <Table.Td>
        <Center>
            {(() => {
                let color = "";
                switch (item.status) {
                case "Ngừng hoạt động":
                    color = "red";
                    break;
                case "Hoạt động":
                    color = "green";
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
            <IconEye color="green" />
            </Center>
        </Table.Td>
    </Table.Tr>
  ));



  return (
    <div>
      <div {...stylex.props(styles.searchHeader)}>
        <Flex align="center">
          <Text fw={700} size="xl">
          Tất cả khách hàng
          </Text>
        </Flex>
        <Flex align="flex-end" gap={4}>
          <Input 
            placeholder="Nhập ID hoặc tên khách hàng" 
            leftSection={<IconSearch size={16} />}
            onChange={(event) => setSearchText(event.currentTarget.value)}
          />
          <Select
            label="Lọc theo trạng thái"
            placeholder="Chọn trạng thái khách hàng"
            data={['Hoạt động', 'Ngừng hoạt động']}
            clearable
            onChange={handleStatusFilterChange}
            width={100}
          />
        </Flex>
      </div>
      <div {...stylex.props(styles.customerTable)} >
        <Table>
          <Table.Thead>
              <Table.Tr>
              <Table.Th><Center>ID</Center></Table.Th>
              <Table.Th>Tên</Table.Th>
              <Table.Th><Center>Email</Center></Table.Th>
              <Table.Th><Center>Giới tính</Center></Table.Th>
              <Table.Th><Center>Địa chỉ</Center></Table.Th>
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

export default AllCustomerTable;

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
  customerAva: {
    borderRadius: "90px",
  },
  customerTable: {          
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