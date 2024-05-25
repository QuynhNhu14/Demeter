import { Container, Title, Accordion } from "@mantine/core";
// import classes from './FaqSimple.module.css';
import * as stylex from "@stylexjs/stylex";
const groceries = [
  {
    emoji: "🍎",
    value: "Làm cách nào để tôi có thể đặt lại mật khẩu của mình?",
    description:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
  },
  {
    emoji: "🍌",
    value: "Tôi có thể tạo nhiều hơn 1 tài khoản chứ?",
    description:
      "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
  },
  {
    emoji: "🥦",
    value: "Làm cách nào tôi có thể đăng ký nhận thông tin khuyến mãi?",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
  {
    emoji: "🍒",
    value: "Bạn có lưu trữ thông tin thẻ tín dụng một cách an toàn không?",
    description:
      "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
  },
  {
    emoji: "🥒",
    value: "Bạn làm việc với hệ thống thanh toán nào?",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
];

export function FAQ() {
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value} {...stylex.props(styles.item)}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Container size="sm" {...stylex.props(styles.wrapper)}>
      <Title ta="center" {...stylex.props(styles.title)}>
        Một số câu hỏi thường gặp
      </Title>

      <Accordion variant="separated">
        {items}
      </Accordion>

    </Container>
  );
}

const styles = stylex.create({
  wrapper: {
    paddingTop: "calc(var(--mantine-spacing-xl) * 2)",
    paddingBottom: "calc(var(--mantine-spacing-xl) * 2)",
    minHeight: "rem(650px)",
  },

  title: {
    marginBottom: "calc(var(--mantine-spacing-xl) * 1.5)",
    color: "green",
  },

  item: {
    borderRadius: "var(--mantine-radius-md)",
    marginBottom: "var(--mantine-spacing-lg)",
    border:
      "rem(1px) solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))",
  },
});
