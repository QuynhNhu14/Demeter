import { useState } from "react";
import {
  IconUserShare,
  IconRefresh,
  IconFileCheck,
  IconFileSpreadsheet,
} from "@tabler/icons-react";
import { Card, Grid, Button } from "@mantine/core";

interface CardData {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const Summary_CardTwo: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Weekly");

  const cardData: { [key: string]: CardData[] } = {
    Weekly: [
      {
        title: "Đơn hàng đang chờ",
        value: "5",
        icon: <IconUserShare style={{ fontSize: "24px", padding: "8px" }} />,
        color: "rgb(0, 148, 255)",
      },
      {
        title: "Đơn hàng đang xử lý",
        value: "7",
        icon: <IconRefresh style={{ fontSize: "24px", padding: "8px" }} />,
        color: "rgb(40, 183, 255)",
      },
      {
        title: "Đơn hàng hoàn thành",
        value: "15",
        icon: <IconFileCheck style={{ fontSize: "24px", padding: "8px" }} />,
        color: "rgb(255, 141, 41)",
      },
      {
        title: "Đơn hàng bị hủy",
        value: "0",
        icon: (
          <IconFileSpreadsheet style={{ fontSize: "24px", padding: "8px" }} />
        ),
        color: "rgb(215, 230, 121)",
      },
    ],
    Monthly: [
      {
        title: "Đơn hàng đang chờ",
        value: "7",
        icon: <IconUserShare style={{ fontSize: "24px", padding: "8px" }} />,
        color: "rgb(0, 148, 255)",
      },
      {
        title: "Đơn hàng đang xử lý",
        value: "9",
        icon: <IconRefresh style={{ fontSize: "24px", padding: "8px" }} />,
        color: "rgb(40, 183, 255)",
      },
      {
        title: "Đơn hàng hoàn thành",
        value: "56",
        icon: <IconFileCheck style={{ fontSize: "24px", padding: "8px" }} />,
        color: "rgb(255, 141, 41)",
      },
      {
        title: "Đơn hàng bị hủy",
        value: "3",
        icon: (
          <IconFileSpreadsheet style={{ fontSize: "24px", padding: "8px" }} />
        ),
        color: "rgb(215, 230, 121)",
      },
    ],
    Yearly: [
      {
        title: "Đơn hàng đang chờ",
        value: "7",
        icon: <IconUserShare style={{ fontSize: "24px", padding: "8px" }} />,
        color: "rgb(0, 148, 255)",
      },
      {
        title: "Đơn hàng đang xử lý",
        value: "9",
        icon: <IconRefresh style={{ fontSize: "24px", padding: "8px" }} />,
        color: "rgb(40, 183, 255)",
      },
      {
        title: "Đơn hàng hoàn thành",
        value: "325",
        icon: <IconFileCheck style={{ fontSize: "24px", padding: "8px" }} />,
        color: "rgb(255, 141, 41)",
      },
      {
        title: "Đơn hàng bị hủy",
        value: "26",
        icon: (
          <IconFileSpreadsheet style={{ fontSize: "24px", padding: "8px" }} />
        ),
        color: "rgb(215, 230, 121)",
      },
    ],
  };

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <Card
      title={
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          Trạng thái đơn hàng
        </span>
      }
      bordered={false}
      extra={
        <Grid gutter={[8, 8]} justify="end">
          {Object.keys(cardData).map((key) => (
            <Grid.Col key={key}>
              <Button
                type={activeTab === key ? "primary" : "default"}
                onClick={() => handleTabChange(key)}
              >
                {key}
              </Button>
            </Grid.Col>
          ))}
        </Grid>
      }
    >
      <Grid gutter={[16, 16]} style={{ display: "flex", flexWrap: "wrap" }}>
        {cardData[activeTab].map((data, index) => (
          <Grid.Col key={index} xs={24} sm={12} md={12} lg={6}>
            <div
              style={{
                border: `1px solid #E5E7EB`,
                boxShadow: `0px 5px 0px 0px ${data.color}`,
                padding: "10px 20px",
                borderRadius: "5px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    marginRight: "8px",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#F3F4F5",
                    display: "block",
                    borderRadius: "5px",
                  }}
                >
                  {data.icon}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                    display: "flex",
                    justifyContent: "flex-end",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      fontSize: "15px",
                      textAlign: "right",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    {data.title}{" "}
                  </div>
                  <div
                    style={{
                      fontSize: "24px",
                      fontFamily: "sans-serif",
                      textAlign: "right",
                    }}
                  >
                    {" "}
                    {data.value}{" "}
                  </div>
                </div>
              </div>
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </Card>
  );
};

export default Summary_CardTwo;
