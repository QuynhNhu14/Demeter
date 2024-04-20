import React, { useState } from "react";
import {
  Table,
  Avatar,
  Space,
  Badge,
  Pagination,
  Input,
  Text,
} from "@mantine/core";
import { IconUser, IconEye } from "@tabler/icons-react";

const { Search } = Input;

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

const columns = [
  {
    title: "Mã đơn hàng",
    dataIndex: "trackingNumber",
    key: "trackingNumber",
    width: 150,
    align: "center",
  },
  {
    title: "Khách hàng",
    dataIndex: "customer",
    key: "customer",
    render: (customer) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar src={customer.avatar} icon={<IconUser />} />
        <div style={{ marginLeft: "8px" }}>
          <div>{customer.name}</div>
          <div>{customer.email}</div>
        </div>
      </div>
    ),
  },
  {
    title: "Số lượng",
    dataIndex: "products",
    key: "products",
    align: "center",
  },
  {
    title: "Thời gian",
    dataIndex: "orderDate",
    key: "orderDate",
    width: 150,
    align: "center",
  },
  {
    title: "Tổng tiền",
    dataIndex: "total",
    key: "total",
    width: 100,
    align: "center",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Badge color={status === "Đang xử lý" ? "orange" : "green"}>
        {status}
      </Badge>
    ),
    align: "center",
  },
  {
    title: "Hành động",
    key: "actions",
    render: () => (
      <Space>
        <IconEye style={{ color: "green" }} />
      </Space>
    ),
    align: "center",
  },
];

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

  return (
    <div>
      <div
        style={{
          padding: "20px",
          margin: "10px 0px 30px 0px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          border: "2px solid #E5E7EB",
          boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Text strong style={{ fontSize: "20px", fontWeight: "bold" }}>
          Đơn Hàng
        </Text>
        <div>
          <Search
            placeholder="Search tracking number"
            style={{ width: 300, marginRight: 10 }}
            onSearch={handleSearch}
          />
        </div>
      </div>

      <div
        style={{
          overflowX: "auto",
          backgroundColor: "#FFFFFF",
          margin: "10px 0px 60px 0px",
          border: "2px solid #E5E7EB",
          boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
          borderRadius: "8px",
          fontFamily: "sans-serif",
        }}
      >
        <Table columns={columns} dataSource={filteredData} pagination={false} />
        <Pagination
          type="primary"
          current={currentPage}
          total={data.length}
          pageSize={pageSize}
          onChange={handleChangePage}
          showSizeChanger={false}
          style={{ margin: "16px", textAlign: "right" }}
        />
      </div>
    </div>
  );
};

export default OrdersTable;
