import React from "react";
import { Column } from "@ant-design/charts";
import { Text } from "@mantine/core";

const SaleHistoryChart: React.FC = () => {
  // Tạo dữ liệu giả định cho 12 tháng
  const months = [
    "T1",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "T7",
    "T8",
    "T9",
    "T10",
    "T11",
    "T12",
  ];

  // Tạo dữ liệu số ngẫu nhiên từ 0 đến 20 cho mỗi tháng
  const data = months.map((month) => ({
    month,
    Order: Math.floor(Math.random() * 21), // Số ngẫu nhiên từ 0 đến 20
  }));

  // Cấu hình cho biểu đồ Column (biểu đồ cột)

  const config = {
    data,
    xField: "month",
    yField: "Order",
  };

  return (
    <div
      style={{ padding: "16px", backgroundColor: "#fff", borderRadius: "8px" }}
    >
      <div style={{ marginBottom: "16px" }}>
        <Text strong style={{ fontSize: "20px", fontWeight: "bold" }}>
          Lịch sử bán hàng
        </Text>
      </div>
      <div style={{ clear: "both" }}>
        <Column {...config} />
      </div>
    </div>
  );
};

export default SaleHistoryChart;
