import { IconCheck, IconEye } from "@tabler/icons-react";
import { Flex, Progress, Table, TableProps, Badge, Text } from "@mantine/core";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  textColor: {
      color: '#009f7f',
  },
  OrderStatus:{
    backgroundColor: "#f3f4f6",
    padding: "20px 10px",
  },
  OrderDetail: {
    borderBottom: "1px solid #e7e7e7",
  },
  OrderDetail_left: {
    flex: "5",
    borderRight: "1px solid #e7e7e7",
    padding: "0 20px 20px 0",
  },
  OrderDetail_right: {
    flex: "4", 
    padding: "0 0 20px 20px"
  },
  OrderProgress:{
    margin: 0,
    borderRadius: 0,
    width: "100%",
  },
  OrderProgress_dot:{
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  OrderProgress_done:{
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#009f7f',
    color: '#fff',
    position: 'absolute',
    zIndex: 1002,
  },
  OrderProgress_pending:{
    width: 30,
    height: 30,
    borderRadius: 30,
    border: '1px dashed #009f7f',
    color: '#009f7f',
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 1002,
  },
  productImg: {
    width: '50px', 
    height: '50px',
  }
});
const OrderInfo = {
  id: 544,
  status: "pending",
  paymentStatus: "pending",
  step: 1,
  account: {
    id: 1,
    phone: "0123456789",
    address:
      "Ký Túc Xá ĐHQG Khu A, khu phố 6, phường Linh Trung, tp Thủ Đức, Hồ Chí Minh",
  },
  items: [
    {
      id: 1,
      quantity: 1,
      price: 50000,
      product: {
        id: 1,
        name: "Ớt trái cây",
        baseUnitPrice: 50000,
        img: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2FMiniPeppers.jpg&w=1920&q=75",
      },
    },
  ],
  totalPrice: 75000,
};
interface DataType {
  item: { name: string; price: number; img: string };
  quantity: number;
  total: number;
}


const data: DataType[] = OrderInfo.items.map((item) => ({
  item: {
    name: item.product.name,
    price: item.product.baseUnitPrice,
    img: OrderInfo.items[0].product.img,
  },
  quantity: item.quantity,
  total: item.price,
}));

export const OrderDetail: React.FC<{ orderId: number }> = ({ orderId }) => {
  const itemsPrice = OrderInfo.items.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);
  const rows = OrderInfo.items.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>
            <Flex alignItems='center' gap={1}>
                <img src={item.product.img} alt='product image' {...stylex.props(styles.productImg)}/>
                <Flex direction="column">
                    <Text c="dimmed">{item.product.name}</Text>
                    <Text c="#009f7f" fw={500}>{item.price} VNĐ</Text>
                </Flex>
            </Flex>
      </Table.Td>
      <Table.Td>{item.quantity}</Table.Td>
      <Table.Td>
        <Flex justifyContent="center" sx={{margin: 'auto'}}><Text fw={500}>{item.price*item.quantity} VNĐ</Text></Flex>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <Flex p={20} direction="column" gap="lg">
      <Flex justify="space-between">
        <Text  fw={700} size="lg">
          Chi tiết đơn đặt hàng - {OrderInfo.id}
        </Text>
        <Flex align="center" gap={8} {...stylex.props(styles.textColor)}><IconEye /> Chi tiết</Flex>
      </Flex>
      <Flex {...stylex.props(styles.OrderStatus)} justify="space-between">
        <Text fw={500}>
          Tình trạng đặt hàng: &nbsp;
          {OrderInfo.status === "pending" ? (
            <Badge
              color="rgba(201, 161, 22, 0.15)"
              style={{ color: "#C9A116", marginRight: 0, borderRadius: "15px" }}
            >
              Đang chờ xử lý
            </Badge>
          ) : OrderInfo.status === "done" ? (
            <Badge
              color="rgba(0, 161, 127, 0.15)"
              style={{ color: "#00A17F", marginRight: 0, borderRadius: "15px" }}
            >
              Đã hoàn thành
            </Badge>
          ) : (
            <Badge
              color="rgba(191, 19, 19, 0.15)"
              style={{ color: "#bf1313", marginRight: 0, borderRadius: "15px" }}
            >
              Đã hủy
            </Badge>
          )}
        </Text>
        <Text fw={500}>
          Tình trạng thanh toán: &nbsp;
          {OrderInfo.paymentStatus === "pending" ? (
            <Badge
              color="rgba(201, 161, 22, 0.15)"
              style={{ color: "#C9A116", marginRight: 0, borderRadius: "15px" }}
            >
              Đang chờ thanh toán
            </Badge>
          ) : OrderInfo.paymentStatus === "done" ? (
            <Badge
              color="rgba(0, 161, 127, 0.15)"
              style={{ color: "#00A17F", marginRight: 0, borderRadius: "15px" }}
            >
              Đã thanh toán
            </Badge>
          ) : (
            <Badge
              color="rgba(191, 19, 19, 0.15)"
              style={{ color: "#bf1313", marginRight: 0, borderRadius: "15px" }}
            >
              Đã hủy
            </Badge>
          )}
        </Text>
      </Flex>
      <Flex {...stylex.props(styles.OrderDetail)} >
        <Flex
          {...stylex.props(styles.OrderDetail_left)}
          direction="column"
          gap="sm"
          justify="center"
        >
          <Text fw={500}>Số điện thoại nhận hàng</Text>
          <Text c="dimmed">{OrderInfo.account.phone}</Text>
          <Text fw={500}>Địa chỉ giao hàng</Text>
          <Text c="dimmed">{OrderInfo.account.address}</Text>
        </Flex>
        <Flex
          {...stylex.props(styles.OrderDetail_right)}
          direction="column"
          gap="sm"
          justify="center"
        >
          <Flex justify="space-between">
            <Text c="dimmed">Giá đơn hàng</Text>
            <Text c="dimmed">{itemsPrice} VNĐ</Text>
          </Flex>
          <Flex justify="space-between">
            <Text c="dimmed">Giảm giá</Text>
            <Text c="dimmed">0 VNĐ</Text>
          </Flex>
          <Flex justify="space-between">
            <Text c="dimmed">Phí giao hàng</Text>
            <Text c="dimmed">
              {OrderInfo.totalPrice - itemsPrice} VNĐ
            </Text>
          </Flex>
          <Flex justify="space-between">
            <Text fw={500}>Tổng cộng</Text>
            <Text fw={500}>
              {OrderInfo.totalPrice} VNĐ
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        {...stylex.props(styles.OrderProgress)}
        align="center"
        direction="column"
      >
        <Flex
          justify="space-between"
          style={{ width: "100%", padding: "0 50px", zIndex: "1000" }}
          >
          {Array.from(Array(5).keys()).map((index) => (
            <Flex align="center" style={{ width: index < 4 && "100%" }}>
              <Flex
                {...stylex.props(OrderInfo.step >= index + 1 ? styles.OrderProgress_done : styles.OrderProgress_pending)}
                align="center"
                justify="center"
              >
                {OrderInfo.step >= index + 1 ? (
                  <Flex justify="center" align="center">
                    <IconCheck />
                  </Flex>
                ) : (
                  <Flex
                    justify="center"
                    align="center"
                  >
                    <Text fw={500}>{index + 1}</Text>
                  </Flex>
                )}
              </Flex>
              {index < 4 ? (
                <Progress
                  style={{width: '100%', zIndex: '1001'}}
                  value={
                    OrderInfo.step > index + 1
                      ? 100
                      : OrderInfo.step === index + 1
                      ? 50
                      : 0
                  }
                  size="sm"
                  color="#009f7f"
                />
              ) : (
                <></>
              )}
            </Flex>
          ))}
        </Flex>
        <Flex
          justify="space-between"
          style={{
            width: "100%",
            padding: "20px 10px 0 20px",
            position: "relative",
          }}
        >
          <Text fw={500}>Chưa giải quyết</Text>
          <Text fw={500}>Đang xử lý</Text>
          <Text fw={500}>Đã đến bưu cục</Text>
          <Text fw={500}>Đang giao hàng</Text>
          <Text fw={500}>Đã giao</Text>
        </Flex>
      </Flex>
      
      <Table>
        <Table.Thead>
            <Table.Tr>
            <Table.Th>Sản phẩm</Table.Th>
            <Table.Th>Số lượng</Table.Th>
            <Table.Th>Giá</Table.Th>
            </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Flex>
  );
};
