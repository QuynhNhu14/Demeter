import { Button, Flex, Input, Grid, Badge } from "@mantine/core";
import Navbar from "../../components/Navbar/Navbar";
import { CustomerNavbar } from "../../components/CustomerNavbar/CustomerNavbar";
import "./Profile.css";
import shopBanner from "../../../assets/shopBanner.png";
import { ProductList } from "../../components/ProductList/ProductList";
import { Route, Routes } from "react-router-dom";
import { CustomerInfo } from "./CustomerInfo";
import UserNavbar from "../../components/CustomerNavbar/UserNavbar";
import { OrderDetail } from "../../components/OrderDetail/OrderDetail";

const orderList = [
  {
    id: "544",
    dateCreate: "02/12/2022",
    orderPrice: 50000,
    totalPrice: 75000,
    status: "pending",
  },
  {
    id: "10",
    dateCreate: "05/08/2022",
    orderPrice: 955000,
    totalPrice: 1021000,
    status: "done",
  },
  {
    id: "8",
    dateCreate: "01/01/2023",
    orderPrice: 130000,
    totalPrice: 145000,
    status: "done",
  },
  {
    id: "2",
    dateCreate: "15/09/2022",
    orderPrice: 25000,
    totalPrice: 50000,
    status: "cancelled",
  },
];
export const Orders = () => {
  return (
    <div className="OrdersPage">
      <Flex>
        <Flex style={{ flex: "3" }}>
          <UserNavbar />
        </Flex>
        <Flex gap="large" style={{ flex: "11", padding: "24px 24px 0 0" }}>
          <Flex
            className="myOrders"
            style={{ flex: "3", backgroundColor: "#fff" }}
            vertical
            gap="large"
          >
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
              Đơn hàng của tôi
            </span>
            {orderList.map((order) => {
              return (
                <Flex className="orderOverview" vertical gap="middle">
                  <Flex
                    justify="space-between"
                    style={{
                      borderBottom: "1px solid #e7e7e7",
                      paddingBottom: "10px",
                    }}
                  >
                    <span style={{ fontWeight: "500" }}>
                      Đơn hàng #{order.id}
                    </span>
                    {order.status === "pending" ? (
                      <Badge
                        color="rgba(201, 161, 22, 0.15)"
                        style={{ color: "#C9A116", marginRight: 0 }}
                      >
                        Đang chờ xử lý
                      </Badge>
                    ) : order.status === "done" ? (
                      <Badge
                        color="rgba(0, 161, 127, 0.15)"
                        style={{ color: "#00A17F", marginRight: 0 }}
                      >
                        Đơn hàng đã hoàn thành
                      </Badge>
                    ) : (
                      <Badge
                        color="rgba(191, 19, 19, 0.15)"
                        style={{ color: "#bf1313", marginRight: 0 }}
                      >
                        Đã hủy
                      </Badge>
                    )}
                  </Flex>
                  <Flex justify="space-between">
                    <span>Ngày đặt hàng:</span>
                    <span>{order.dateCreate}</span>
                  </Flex>
                  <Flex justify="space-between">
                    <span>Đơn vị vận chuyển:</span>
                    <span>Chuyển phát nhanh</span>
                  </Flex>
                  <Flex justify="space-between">
                    <span style={{ fontWeight: "500" }}>Giá đơn hàng:</span>
                    <span style={{ fontWeight: "500" }}>
                      {order.orderPrice} VNĐ
                    </span>
                  </Flex>
                  <Flex justify="space-between">
                    <span style={{ fontWeight: "500" }}>Thành tiền:</span>
                    <span style={{ fontWeight: "500" }}>
                      {order.totalPrice} VNĐ
                    </span>
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
          <Flex
            className="OrderDetail"
            vertical
            style={{ flex: "6", backgroundColor: "#fff" }}
          >
            <OrderDetail orderId={1} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};
