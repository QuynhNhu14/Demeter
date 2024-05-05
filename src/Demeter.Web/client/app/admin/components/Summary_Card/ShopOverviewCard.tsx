import React from "react";
import {
  IconCurrencyDollar,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";
import { Divider, Flex, Text } from "@mantine/core";
import * as stylex from "@stylexjs/stylex";

interface CardData {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const ShopOverviewCard: React.FC = () => {
  const cardData: CardData[] = [
    {
      title: "Tổng doanh thu",
      value: "235.559.500 VNĐ",
      icon: <IconCurrencyDollar/>,
    },
    {
      title: "Tổng số đơn hàng",
      value: "520",
      icon: <IconShoppingCart/>,
    },
    {
      title: "Tổng số khách hàng",
      value: "1.180",
      icon: <IconUser/>,
    },
  ];

  return (
    <Flex {...stylex.props(styles.overviewCardContainer)} direction="column">
        <Text fw={700} size="lg" p="lg">Bảng tổng quan</Text>
        <Divider />
        <Flex p="lg" {...stylex.props(styles.cardDataContainer)} justify="space-between">
            {cardData.map((data, index) => (
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

export default ShopOverviewCard;
const styles = stylex.create({
    overviewCardContainer: {
      backgroundColor: "#fff",
      borderRadius: "8px",
    },
    cardDataContainer:{
        width: "100%",
    },
    cardData: {
        width: "32%",
        border: '1px solid #E5E7EB',
        boxShadow: '0px 5px 0px 0px rgb(30, 174, 152)',
        padding: "10px 20px",
        borderRadius: "5px",
    },
    cardIcon: {
        width: "40px",
        height: "40px",
        backgroundColor: "#F3F4F5",
        display: "block",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
  });