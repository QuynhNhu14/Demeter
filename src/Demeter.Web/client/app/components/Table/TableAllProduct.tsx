import React, { useState } from 'react';
import { Table, Space, Tag, Dropdown, Menu, Button, Input, Select, Image, Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const { Text } = Typography;
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
      productType: `Type ${i % 5}`,
      pricePerUnit: `$${(Math.random() * 100).toFixed(2)}`,
      quantity: Math.floor(Math.random() * 100),
      status: ['Hết hàng', 'Đang bán', 'Bị ẩn', 'Ngừng bán'][Math.floor(Math.random() * 4)],
    });
  }
  return data;
};

const dataSource = generateData(900);

const FilterTable = () => {
    const [filterVisible, setFilterVisible] = useState(false);
    const [statusFilter, setStatusFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [searchText, setSearchText] = useState('');

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
      <Menu.Item key="status">
        <Select style={{ width: 120 }} onChange={handleStatusFilterChange} value={statusFilter}>
          <Option value="">All Status</Option>
          <Option value="Hết hàng">Hết hàng</Option>
          <Option value="Đang bán">Đang bán</Option>
          <Option value="Bị ẩn">Bị ẩn</Option>
          <Option value="Ngừng bán">Ngừng bán</Option>
        </Select>
      </Menu.Item>
      <Menu.Item key="type">
        <Select style={{ width: 120 }} onChange={handleTypeFilterChange} value={typeFilter}>
            <Option value="">All Types</Option>
            {/* Lấy các loại sản phẩm duy nhất từ dataSource */}
            {Array.from(new Set(dataSource.map(item => item.productType))).map(type => (
                <Option key={type} value={type}>{type}</Option>
            ))}
            </Select>
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: 'ID',
      dataIndex: 'ID',
      align: 'center',
    },
    {
      title: 'Product',
      dataIndex: 'productName',
      align: 'left',
      sorter: (a, b) => a.productName.localeCompare(b.productName),
      render: (text, record) => (
        <Space>
          <Image src={record.productImage} width={50} />
          <Text>{text}</Text>
        </Space>
      ),
    },
    {
      title: 'Product Type',
      dataIndex: 'productType',
      align: 'center',
    },
    {
      title: 'Price/Unit',
      dataIndex: 'pricePerUnit',
      align: 'center',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      align: 'center',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'center',
      filters: [
        { text: 'Hết hàng', value: 'Hết hàng' },
        { text: 'Đang bán', value: 'Đang bán' },
        { text: 'Bị ẩn', value: 'Bị ẩn' },
        { text: 'Ngừng bán', value: 'Ngừng bán' },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      render: (status) => {
        let color = '';
        switch (status) {
          case 'Hết hàng':
            color = 'red';
            break;
          case 'Đang bán':
            color = 'green';
            break;
          case 'Bị ẩn':
            color = 'orange';
            break;
          case 'Ngừng bán':
            color = 'gray';
            break;
          default:
            break;
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      align: 'center',
      render: () => <Button icon={<EditOutlined />} type="primary">Edit</Button>,
    },
  ];

  const filteredData = dataSource.filter(
    (item) =>
      (statusFilter ? item.status === statusFilter : true) &&
      (typeFilter ? item.productType === typeFilter : true) &&
      (searchText ?
        (item.productName.toLowerCase().includes(searchText.toLowerCase()) ||
          item.productType.toLowerCase().includes(searchText.toLowerCase()))
        : true)
  );


  return (
    <div>
      <div style={{ padding: '20px', margin: '10px 0px 30px 0px', backgroundColor: '#fff', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', border: '2px solid #E5E7EB', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)' }}>
        <Text strong style={{ fontSize: '20px', fontWeight: 'bold' }}>All Product</Text>
        <div>
          <Search placeholder="Search products" style={{ width: 300, marginRight: 10 }} onSearch={handleSearch} />
          <Button onClick={handleFilterClick} style={{ marginLeft: 'auto' }}>Filter</Button>
          {filterVisible && (
            <Dropdown overlay={menu} placement="bottomCenter" visible={filterVisible}>
              <Button style={{ marginLeft: 8 }}>Filter Options</Button>
            </Dropdown>
          )}
        </div>
      </div>
        <div style={{backgroundColor: '#fff',margin: '10px 0px 60px 0px',border: '2px solid #E5E7EB', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)', borderRadius: '8px',}}>
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

export default FilterTable;

