import React from 'react';
import { Column } from '@ant-design/charts';
import { Typography } from 'antd';
const { Text } = Typography;

const SaleHistoryChart: React.FC = () => {
  // Tạo dữ liệu giả định cho 12 tháng
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  // Tạo dữ liệu số ngẫu nhiên từ 0 đến 20 cho mỗi tháng
  const data = months.map(month => ({
    month,
    number: Math.floor(Math.random() * 21), // Số ngẫu nhiên từ 0 đến 20
  }));

  // Cấu hình cho biểu đồ Column (biểu đồ cột)
 

  const config = {
    data,
    xField: 'month',
    yField: 'number', 
  };

  return (
    <div style={{ padding: '16px', backgroundColor:'#fff', borderRadius: '8px'}}>
      <div style={{ marginBottom: '16px' }}>
        <Text strong style={{ fontSize: '20px', fontWeight: 'bold' }}>Sale History</Text>
      </div>
      <div style={{ clear: 'both' }}>
        <Column {...config} />
      </div>
    </div>
  );
};

export default SaleHistoryChart;
