import { useState } from "react";
import {
  Table,
  Space,
  Badge,
  Button,
  Input,
  Image,
  Text,
  Avatar,
} from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";

const { Search } = Input;

const generateData = (count: number) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      key: i,
      ID: i,
      ShopImage: `https://pickbazar-react-admin.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2Fconversions%2FApples-thumbnail.jpg&w=1920&q=75`,
      ShopName: `Shop ${i}`,
      Product: `${Math.floor(Math.random() * 10)}`,
      Orders: `${Math.floor(Math.random() * 10)}`,
      OwnerName: `Owner ${i}`,
      OwnerPic:
        "https://pickbazar-react-admin.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F881%2Fconversions%2Faatik-tasneem-7omHUGhhmZ0-unsplash%25402x-thumbnail.jpg&w=1920&q=75",
      Status: ["Hoạt động", "Ngừng hoạt động"][Math.floor(Math.random() * 2)],
    });
  }
  return data;
};

const AllShopTable = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [searchText, setSearchText] = useState("");
  const [editModalVisible, setEditModalVisible] = useState(false);

  const handleStatusFilterChange = (value) => {
    setStatusFilter(value);
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const customFilter = (item) => {
    const searchTextLower = searchText.toLowerCase();
    return (
      item.ID.toString().includes(searchTextLower) ||
      item.ShopName.toLowerCase().includes(searchTextLower) ||
      item.Product.toString().includes(searchTextLower)
    );
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "ID",
      align: "center",
    },
    {
      title: "Cửa hàng",
      dataIndex: "ShopName",
      align: "left",
      sorter: (a, b) => a.ShopName.localeCompare(b.ShopName),
      render: (text, record) => (
        <Space>
          <Image src={record.ShopImage} width={50} />
          <Text>{text}</Text>
        </Space>
      ),
    },
    {
      title: "Số Sản phẩm",
      dataIndex: "Product",
      align: "center",
    },
    {
      title: "Số Đơn hàng",
      dataIndex: "Orders",
      align: "center",
    },
    {
      title: "Chủ cửa hàng",
      dataIndex: "OwnerName",
      align: "center",
      render: (text, record) => (
        <Space>
          <Avatar src={record.OwnerPic} size={40} shape="circle" />
          <Text>{text}</Text>
        </Space>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "Status",
      align: "center",
      filters: [
        { text: "Hoạt động", value: "Hoạt động" },
        { text: "Ngừng hoạt động", value: "Ngừng hoạt động" },
      ],
      onFilter: (value, record) => record.Status.indexOf(value) === 0,
      render: (status) => {
        let color = "";
        switch (status) {
          case "Hoạt động":
            color = "green";
            break;
          case "Ngừng hoạt động":
            color = "red";
            break;
          default:
            break;
        }
        return <Badge color={color}>{status}</Badge>;
      },
    },
    {
      title: "Hành động",
      dataIndex: "actions",
      align: "center",
      render: () => (
        <Button
          icon={<IconEdit />}
          type="primary"
          onClick={() => setEditModalVisible(true)}
        >
          Sửa
        </Button>
      ),
    },
  ];

  const dataSource = generateData(900);

  const filteredData = dataSource.filter(
    (item) =>
      (statusFilter ? item.Status === statusFilter : true) &&
      (searchText ? customFilter(item) : true)
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
          Tất cả cửa hàng
        </Text>
        <div>
          <Search
            placeholder="Nhập tên cửa hàng, ID hoặc sản phẩm"
            style={{ width: 300, marginRight: 10 }}
            onSearch={handleSearch}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          margin: "10px 0px 60px 0px",
          border: "2px solid #E5E7EB",
          boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
          borderRadius: "8px",
        }}
      >
        <Table
          dataSource={filteredData}
          columns={columns}
          pagination={{
            pageSize: 15,
            total: filteredData.length,
            showSizeChanger: false,
          }}
        />
      </div>
    </div>
  );
};

export default AllShopTable;
