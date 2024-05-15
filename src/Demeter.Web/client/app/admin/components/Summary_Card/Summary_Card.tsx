import React from "react";
import {
  IconArrowDown,
  IconArrowUp,
  IconCurrencyDollar,
  IconShoppingCart,
  IconShoppingBag,
  IconUser,
} from "@tabler/icons-react";
import { Card, Grid, Statistic } from "@mantine/core";

interface CardData {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const Summary_Card: React.FC = () => {
  const cardData: CardData[] = [
    {
      title: "Tổng doanh thu",
      value: "235.559.500 VNĐ",
      icon: <IconCurrencyDollar/>,
      color: "rgb(30, 174, 152)",
    },
    {
      title: "Tổng số đơn hàng",
      value: "520",
      icon: <IconShoppingCart/>,
      color: "rgb(134, 93, 255)",
    },
    // {
    //   title: "Tổng số cửa hàng",
    //   value: "52",
    //   icon: <IconShoppingBag/>,
    //   color: "rgb(215, 78, 255)",
    // },
    {
      title: "Tổng số khách hàng",
      value: "1.180",
      icon: <IconUser/>,
      color: "rgb(225, 87, 160)",
    },
  ];

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
          Bảng tổng quan
        </span>
      }
      bordered={false}
    >
      <Grid gutter={[16, 16]} style={{ display: "flex", flexWrap: "wrap" }}>
        {cardData.map((data, index) => (
          <Grid.Col key={index} xs={24} sm={12} md={12} lg={6}>
            <div
              style={{
                border: `1px solid #E5E7EB`,
                boxShadow: `0px 5px 0px 0px ${data.color}`,
                padding: "10px 20px",
                borderRadius: "5px",
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
                  <div style={{ textAlign: "right", fontWeight: "bold" }}>
                    {" "}
                    {data.title}{" "}
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
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

export default Summary_Card;
