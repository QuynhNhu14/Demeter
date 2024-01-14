import React, { useState } from 'react';
import { Table, Avatar, Space, Tag, Pagination } from 'antd';
import { ColumnType } from 'antd/lib/table';
import { UserOutlined, EyeOutlined } from '@ant-design/icons';



interface Order {
  key: string;
  trackingNumber: number;
  customer: {
    name: string;
    email: string;
    avatar: string; // Assuming it's a URL to the avatar image
  };
  products: number;
  orderDate: string; // Assuming date is a string
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
    products: Math.floor(Math.random() * 5) + 1, // Random number of products (1-5)
    orderDate: `2023-12-${i < 10 ? '0' + i : i}`, // Order date from 1st to 30th
    total: Math.floor(Math.random() * 200) + 50, // Random total amount ($50-$250)
    status: i % 2 == 0 ? 'Đang xử lý' : 'Hoàn Thành', // Alternate between Đang xử lý and Completed status
  };

  data.push(order);
}

const columns: ColumnType<Order>[] = [
  {
    title: 'Mã đơn hàng',
    dataIndex: 'trackingNumber',
    key: 'trackingNumber',
    width: 150,
    align: 'center', 
  },
  {
    title: 'Khách hàng',
    dataIndex: 'customer',
    key: 'customer',
    render: (customer) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={customer.avatar} icon={<UserOutlined />} />
        <div style={{ marginLeft: '8px' }}>
          <div>{customer.name}</div>
          <div>{customer.email}</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Số lượng',
    dataIndex: 'products',
    key: 'products',
    align: 'center', 
  },
  {
    title: 'Thời gian',
    dataIndex: 'orderDate',
    key: 'orderDate',
    width: 150,  
    align: 'center',  
  },
  {
    title: 'Tổng tiền',
    dataIndex: 'total',
    key: 'total',
    width: 100,  
    align: 'center',  
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <Tag color={status === 'Đang xử lý' ? 'orange' : 'green'}>{status}</Tag>
    ),
    align: 'center',  
  },
  {
    title: 'Hành động',
    key: 'actions',
    render: () => (
      <Space>
        <EyeOutlined style={{ color: 'green' }} />
      </Space>
    ),
    align: 'center',  
  },
];



const RecentOrdersTable: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10; // Số lượng hàng trong mỗi trang
  
    // Tính toán index bắt đầu và index cuối cùng cho trang hiện tại
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;
  
    // Dữ liệu chỉ được hiển thị ở trang hiện tại
    const currentData = data.slice(startIndex, endIndex);
  
    const handleChangePage = (page: number) => {
      setCurrentPage(page);
    };
    return (
      <div style={{ overflowX: 'auto', backgroundColor:'#FFFFFF', borderRadius: '8px' , fontFamily: 'sans-serif' }}>
        <Table<Order>
          columns={columns}
          dataSource={currentData}
          pagination={false} // Loại bỏ phân trang mặc định của Table
        />
        <Pagination
          type="primary"
          current={currentPage}
          total={data.length}
          pageSize={pageSize}
          onChange={handleChangePage}
          showSizeChanger={false} // Tắt chức năng thay đổi kích thước trang
          style={{ margin: '16px', textAlign: 'right' }}
        />
      </div>
    );
  };
  
  export default RecentOrdersTable;