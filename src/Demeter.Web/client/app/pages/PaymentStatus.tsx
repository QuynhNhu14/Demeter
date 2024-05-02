import { Text, Title, TextInput, Button, Container } from '@mantine/core';
import * as stylex from '@stylexjs/stylex';
import { IconCircleCheck, IconCircleX } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
const styles =stylex.create({
    
})

export function PaymentStatus() {
  const navigate = useNavigate();
  return (
    <Container py="xl">
        <Container align="center"> 
            <IconCircleCheck size={100} color="green" />
            <Title>Thanh toán thành công</Title>
            <Title>100.000đ</Title>
            <Text fw={500} fz="lg" mb={5}>
                Đơn hàng của bạn sẽ được giao đến trong 2h nữa! 
            </Text>
            <Text fz="sm" c="dimmed">
                Để không bỏ lỡ các khuyến mãi sắp tới, hãy bật thông báo cũng như nhấn yêu thích của những cửa hàng mà bạn thích!
            </Text>
            <Button variant="gradient" size="xl" m="xl" onClick={() => navigate("/home")}>Quay lại trang chủ</Button>
        </Container>

        <Container align="center">
        <IconCircleX size={100} color="red" />
        <Title>Thanh toán thất bại</Title>
        <Text fw={500} fz="lg" mb={5}>
          Đơn hàng của bạn chưa được hoàn tất thanh toán
        </Text>
        <Button variant="gradient" size="xl" m="xl" onClick={() => navigate("/payment")}>Thử thanh toán lại</Button>
      </Container>
      
    </Container>
  );
}