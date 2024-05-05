import { useState } from "react";
import {
  IconUserShare,
  IconRefresh,
  IconFileCheck,
  IconFileSpreadsheet,
} from "@tabler/icons-react";
import { Card, Flex, Button, Text, Divider } from "@mantine/core";
import * as stylex from "@stylexjs/stylex";

interface CardData {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const OrderStatusCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Weekly");

  const cardData: { [key: string]: CardData[] } = {
    Weekly: [
      {
        title: "Đơn hàng đang chờ",
        value: "5",
        icon: <IconUserShare />,
      },
      {
        title: "Đơn hàng đang xử lý",
        value: "7",
        icon: <IconRefresh />,
      },
      {
        title: "Đơn hàng hoàn thành",
        value: "15",
        icon: <IconFileCheck />,
      },
      {
        title: "Đơn hàng bị hủy",
        value: "0",
        icon: <IconFileSpreadsheet />,
      },
    ],
    Monthly: [
      {
        title: "Đơn hàng đang chờ",
        value: "7",
        icon: <IconUserShare />,
      },
      {
        title: "Đơn hàng đang xử lý",
        value: "9",
        icon: <IconRefresh />,
      },
      {
        title: "Đơn hàng hoàn thành",
        value: "56",
        icon: <IconFileCheck />,
      },
      {
        title: "Đơn hàng bị hủy",
        value: "3",
        icon: <IconFileSpreadsheet />,
      },
    ],
    Yearly: [
      {
        title: "Đơn hàng đang chờ",
        value: "7",
        icon: <IconUserShare />,
      },
      {
        title: "Đơn hàng đang xử lý",
        value: "9",
        icon: <IconRefresh />,
      },
      {
        title: "Đơn hàng hoàn thành",
        value: "325",
        icon: <IconFileCheck />,
      },
      {
        title: "Đơn hàng bị hủy",
        value: "26",
        icon: (
          <IconFileSpreadsheet />
        ),
      },
    ],
  };

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <Flex {...stylex.props(styles.orderStatusCardContainer)} direction="column">
        <Flex align="center" justify="space-between" p="lg">
            <Text fw={700} size="lg">Trạng thái đơn hàng</Text>
            <Flex gap={8}>
                {Object.keys(cardData).map((key) => (
                    <Button
                        variant={activeTab === key ? "filled" : "default"}
                        color="#009f7f"
                        onClick={() => handleTabChange(key)}
                    >
                        {key}
                    </Button>
                ))}
            </Flex>
        </Flex>
        <Divider />
        <Flex p="lg" {...stylex.props(styles.cardDataContainer)} justify="space-between">
            {cardData[activeTab].map((data, index) => (
                <Flex {...stylex.props(styles.cardData)} align="center" justify="space-between">
                    <div {...stylex.props(styles.cardIcon)}>{data.icon}</div>
                    <Flex direction="column" align="flex-end">
                        <Text fw={500} size="md">{data.title}</Text>
                        <Text size="md">{data.value}</Text>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    </Flex>
  );
};

export default OrderStatusCard;
const styles = stylex.create({
    orderStatusCardContainer: {
      backgroundColor: "#fff",
      borderRadius: "8px",
    },
    cardDataContainer:{
        width: "100%",
    },
    cardData: {
        width: "24%",
        border: '1px solid #E5E7EB',
        boxShadow: '0px 5px 0px 0px rgb(30, 174, 152)',
        padding: "10px 20px",
        borderRadius: "5px",
    },
    cardIcon: {
        width: "40px",
        height: "40px",
        backgroundColor: "#F3F4F5",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
  });