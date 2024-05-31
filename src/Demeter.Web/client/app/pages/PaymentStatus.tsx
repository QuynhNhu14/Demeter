import { Text, Title, Button, Container } from "@mantine/core";

import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserSession } from "../hooks/useUserSession";

export function PaymentStatus({ success = false }: { success?: boolean }) {
  const { loggedIn } = useUserSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/home");
    }
  }, [loggedIn]);
  
  return success ? (
    <Container py="xl">
      <Container align="center">
        <IconCircleCheck size={100} color="green" />
        <Title>Thanh toán thành công</Title>
        <Title>100.000đ</Title>
        <Text fw={500} fz="lg" mb={5}>
          Đơn hàng của bạn sẽ được giao đến trong 2h nữa!
        </Text>
        <Text fz="sm" c="dimmed">
          Để không bỏ lỡ các khuyến mãi sắp tới, hãy bật thông báo cũng như nhấn
          yêu thích của những cửa hàng mà bạn thích!
        </Text>
        <Button
          variant="gradient"
          size="xl"
          m="xl"
          onClick={() => navigate("/home")}
        >
          Quay lại trang chủ
        </Button>
      </Container>
    </Container>
  ) : (
    <Container py="xl">
      <Container align="center">
        <IconCircleX size={100} color="red" />
        <Title>Thanh toán thất bại</Title>
        <Text fw={500} fz="lg" mb={5}>
          Đơn hàng của bạn chưa được hoàn tất thanh toán
        </Text>
        <Button
          variant="gradient"
          size="xl"
          m="xl"
          onClick={() => navigate("/payment")}
        >
          Thử thanh toán lại
        </Button>
      </Container>
    </Container>
  );
}
