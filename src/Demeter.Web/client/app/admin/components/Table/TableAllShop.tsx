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
import shopLogo from "../../../../assets/logo.png";

const { Search } = Input;

const generateData = (count: number) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      key: i,
      id: i,
      shopImage: shopLogo,
      shopName: `Shop ${i}`,
      productQuantity: `${Math.floor(Math.random() * 10)}`,
      orderQuantity: `${Math.floor(Math.random() * 10)}`,
      address: `KTX khu A ĐHQG, Khu phố 6, Đông Hòa, Dĩ An, Bình Dương`,
      status: ["Hoạt động", "Ngừng hoạt động"][Math.floor(Math.random() * 2)],
    });
  }
  return data;
};
const dataSource = generateData(100);

const AllShopTable = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };
  const handleStatusFilterChange = (value: any) => {
    setStatusFilter(value);
  };

  const filteredData = dataSource.filter(
    (item) =>
    (statusFilter ? item.status === statusFilter : true) &&
    (searchText
      ? item.shopName.toLowerCase().includes(searchText.toLowerCase()) ||
      item.id.toString().includes(searchText)
      : true)
  ).slice(startIndex, endIndex);

  const MAX_LENGTH = 40; 

  const rows = filteredData.map((item) => (
    <Table.Tr key={item.key}>
      <Table.Td><Center>{item.id}</Center></Table.Td>
      <Table.Td>
          <Flex align="center" gap={12}>
            <Image src={item.shopImage} h={50}  {...stylex.props(styles.shopLogo)}/>
            <Text >{item.shopName}</Text>
          </Flex>
      </Table.Td>
      <Table.Td><Center>{item.productQuantity}</Center></Table.Td>
      <Table.Td><Center>{item.orderQuantity}</Center></Table.Td>
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
          Tất cả cửa hàng
          </Text>
        </Flex>
        <Flex align="flex-end" gap={4}>
          <Input 
            placeholder="Nhập ID hoặc tên cửa hàng" 
            leftSection={<IconSearch size={16} />}
            onChange={(event: any) => setSearchText(event.currentTarget.value)}
          />
          <Select
            label="Lọc theo trạng thái"
            placeholder="Chọn trạng thái cửa hàng"
            data={['Hoạt động', 'Ngừng hoạt động']}
            clearable
            onChange={handleStatusFilterChange}
            width={100}
          />
        </Flex>
      </div>
      <div {...stylex.props(styles.shopTable)} >
        <Table>
          <Table.Thead>
              <Table.Tr>
              <Table.Th><Center>ID</Center></Table.Th>
              <Table.Th>Cửa hàng</Table.Th>
              <Table.Th><Center>Số sản phẩm</Center></Table.Th>
              <Table.Th><Center>Số đơn hàng</Center></Table.Th>
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

export default AllShopTable;

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
  shopLogo: {
    borderRadius: "90px",
  },
  shopTable: {          
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