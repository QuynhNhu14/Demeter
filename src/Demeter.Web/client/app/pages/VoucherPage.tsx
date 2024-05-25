import { Container, Flex, Text, Title, Skeleton } from "@mantine/core";
import * as stylex from "@stylexjs/stylex";
import { Vouchers } from "../models/orders";
import { useEffect, useState } from "react";
import { getVoucher } from "../services/orders";

export const VoucherPage: React.FC = () => {
  const [data, setData] = useState<Vouchers[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const data = await getVoucher();
    if (!data) {
      return;
    }
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <Skeleton visible={loading}>
    <Flex {...stylex.props(styles.container)} direction="column" gap="lg">
      <Container align="center">
        <Title>Phiếu giảm giá </Title>
      </Container>
      <Flex wrap="wrap" gap="md" justify="space-between">
        {data.map((voucher) => (
          <Flex direction="column" gap={4} {...stylex.props(styles.box)}>
            <Flex justify="space-between">
              <Text fw={700} c="#009f7f">
                {voucher.code}
              </Text>
              <Flex align="center" gap={4}>
                <Text fw={500}>Giảm {voucher.discount}%</Text>
                <Text size="sm"> - Tối đa đ{voucher.usageLimit}k </Text>
              </Flex>
            </Flex>
            <Flex direction="column">
              <Text size="sm">{voucher.description}</Text>
              <Text c="red" size="sm">
                Hạn: {new Date(voucher.startDate).toLocaleDateString("en-GB")} -{" "}
                {new Date(voucher.endDate).toLocaleDateString("en-GB")}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
    </Skeleton>
  );
};

const styles = stylex.create({
  item: {
    display: "flex",
    padding: "10px",
    border: "1px solid #e7e7e7",
    width: "400px",
    height: "100px",
    backgroundColor: "#fff",
    ":hover": {
      cursor: "pointer",
      backgroundColor: "#f3f4f6",
    },
  },
  container: {
    padding: "50px 140px",
  },
  box: {
    backgroundColor: "#ffffff",
    width: "45%",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    padding: "20px 30px",
    borderRadius: "5px",
    marginBottom: "20px",
    border: "1px solid #e5e7eb",
    boxShadow: "0px 3px 0px 0px rgb(30, 174, 152)",
    cursor: "pointer",
  },
});
