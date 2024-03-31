import React, { useState } from "react";
import {
  Table,
  Space,
  Button,
  Input,
  Image,
  Text,
  Menu,
  Select,
  Combobox,
} from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";

const { Search } = Input;
const { Option } = Select;

const generateData = (count) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      key: i,
      ID: i,
      productImage: `https://pickbazar-react-admin.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2Fconversions%2FApples-thumbnail.jpg&w=1920&q=75`,
      productName: `Product ${i}`,
      Inventory: `SKU-${i % 10}`,
      quantity: Math.floor(Math.random() * 100),
      soldQuantity: Math.floor(Math.random() * 50),
    });
  }
  return data;
};

const dataSource = generateData(900);

const InventoryTable = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleStatusFilterChange = (value) => {
    setStatusFilter(value);
  };

  const handleTypeFilterChange = (value) => {
    setTypeFilter(value);
  };

  const handleFilterClick = () => {
    setFilterVisible(!filterVisible);
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const menu = (
    <Menu>
      <Menu.Item key="Inventory">
        <Select
          style={{ width: 120 }}
          onChange={handleTypeFilterChange}
          value={typeFilter}
        >
          <Option value="">All Inventory</Option>
          {Array.from(new Set(dataSource.map((item) => item.Inventory))).map(
            (type) => (
              <Option key={type} value={type}>
                {type}
              </Option>
            )
          )}
        </Select>
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "ID",
      dataIndex: "ID",
      align: "center",
    },
    {
      title: "Sản phẩm",
      dataIndex: "productName",
      align: "left",
      sorter: (a, b) => a.productName.localeCompare(b.productName),
      render: (text, record) => (
        <Space>
          <Image src={record.productImage} width={50} />
          <Text>{text}</Text>
        </Space>
      ),
    },
    {
      title: "Kho",
      dataIndex: "Inventory",
      align: "center",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      align: "center",
    },
    {
      title: "Số lượng bán",
      dataIndex: "soldQuantity",
      align: "center",
    },
    {
      title: "Hành động",
      dataIndex: "actions",
      align: "center",
      render: () => (
        <Button icon={<IconEdit />} type="primary">
          Sửa
        </Button>
      ),
    },
  ];

  const filteredData = dataSource.filter(
    (item) =>
      (typeFilter ? item.Inventory === typeFilter : true) &&
      (searchText
        ? item.productName.toLowerCase().includes(searchText.toLowerCase()) ||
          item.Inventory.toLowerCase().includes(searchText.toLowerCase())
        : true)
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
          Kho
        </Text>
        <div>
          <Search
            placeholder="Search products"
            style={{ width: 300, marginRight: 10 }}
            onSearch={handleSearch}
          />
          <Button onClick={handleFilterClick} style={{ marginLeft: "auto" }}>
            Bộ lọc
          </Button>
          {filterVisible && (
            <Combobox
              overlay={menu}
              placement="bottomCenter"
              opened={filterVisible}
            >
              <Button style={{ marginLeft: 8 }}>Tùy chọn bộ lọc</Button>
            </Combobox>
          )}
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

export default InventoryTable;
