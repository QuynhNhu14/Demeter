import { Flex, Badge, Text } from "@mantine/core";
import UserNavbar from "../../components/CustomerNavbar/UserNavbar";
import { OrderDetail } from "../../components/OrderDetail/OrderDetail";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  OrderPage: {
    backgroundColor: "#f3f4f6",
    width: "100%",
    height: "100vh",
    paddingBottom: "30px",
  },
  userNavbar: {
    flex: "3",
  },
  customerInfo: {
    flex: "11", 
    padding: "24px 24px 0 0",
  },
  orderList:{
    flex: "3", 
    backgroundColor: "#fff",
    top: 88,
    bottom: 20,
    height: '85vh',
    overflow: 'hidden',
    borderRadius: 5,
    border: `2px solid #e7e7e7`,
    padding: 20,
    ':hover': {
      overflow: 'scroll',
      paddingRight: 12,
    },
    '::-webkit-scrollbar': {
      width: 8,
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#888888',
      borderRadius: 10,
      ':hover': {
        backgroundColor: '#555555',
      },
    },
  },
  orderOverview:{
    padding: 10,
    backgroundColor: '#f3f4f6',
    border: '2px solid #009f7f',
    borderRadius: 5,
    cursor: 'pointer',
  },
  OrderDetailContainer: {
    flex: "6", 
    backgroundColor: "#fff",
  }
});
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
    <div  {...stylex.props(styles.OrderPage)}>
      <Flex>
        <div {...stylex.props(styles.userNavbar)}>
          <UserNavbar />
        </div>
        <Flex
          gap="lg"
          {...stylex.props(styles.customerInfo)}
        >
          <Flex {...stylex.props(styles.orderList)} direction="column" gap="lg">
            <Text fw={500} size="lg">
              Đơn hàng của tôi
            </Text>
            {orderList.map((order) => {
              return (
                <Flex {...stylex.props(styles.orderOverview)} direction="column" gap="lg">
                  <Flex
                    justify="space-between"
                    style={{
                      borderBottom: "1px solid #e7e7e7",
                      paddingBottom: "10px",
                    }}
                  >
                    <Text>
                      Đơn hàng #{order.id}
                    </Text>
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
                        Đã hoàn thành
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
                    <Text size="sm">Ngày đặt hàng:</Text>
                    <Text size="sm">{order.dateCreate}</Text>
                  </Flex>
                  <Flex justify="space-between">
                    <Text size="sm">Đơn vị vận chuyển:</Text>
                    <Text size="sm">Chuyển phát nhanh</Text>
                  </Flex>
                  <Flex justify="space-between">
                    <Text size="sm" >Giá đơn hàng:</Text>
                    <Text size="sm" >
                      {order.orderPrice} VNĐ
                    </Text>
                  </Flex>
                  <Flex justify="space-between">
                    <Text size="sm" >Thành tiền:</Text>
                    <Text size="sm" >
                      {order.totalPrice} VNĐ
                    </Text>
                  </Flex>
                </Flex>
              );
            })}
          </Flex> 
          <Flex
            direction="column"
            {...stylex.props(styles.OrderDetailContainer)}
          >
            <OrderDetail orderId={1} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};
