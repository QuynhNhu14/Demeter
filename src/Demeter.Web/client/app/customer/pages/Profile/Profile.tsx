import { Flex } from "@mantine/core";
import { CustomerInfo } from "./CustomerInfo";
import UserNavbar from "../../components/CustomerNavbar/UserNavbar";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  ProfilePage: {
    backgroundColor: "#f3f4f6",
    width: "100%",
    paddingBottom: "30px",
  },
  userNavbar: {
    flex: "3",
  },
  customerInfo: {
    flex: "11", 
    padding: "24px 24px 0 0",
  }
});

export const Profile: React.FC<{ shopId?: string }> = () => {
  return (
    <div {...stylex.props(styles.ProfilePage)}>
      <Flex>
        <div {...stylex.props(styles.userNavbar)}>
          <UserNavbar />
        </div>
        <Flex
          direction="column"
          gap="lg"
          {...stylex.props(styles.customerInfo)}
        >
          <CustomerInfo />
        </Flex>
      </Flex>
    </div>
  );
};
