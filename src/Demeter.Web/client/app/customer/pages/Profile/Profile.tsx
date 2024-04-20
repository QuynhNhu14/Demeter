import { Flex } from "@mantine/core";
import "./Profile.css";
import { CustomerInfo } from "./CustomerInfo";
import UserNavbar from "../../components/CustomerNavbar/UserNavbar";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  ProfilePage: {
    backgroundColor: "#f3f4f6",
    width: "100%",
    paddingBottom: "30px",
  },
});

export const Profile: React.FC<{ shopId?: string }> = () => {
  return (
    <div {...stylex.props(styles.ProfilePage)}>
      <Flex>
        <Flex style={{ flex: "3" }}>
          <UserNavbar />
        </Flex>
        <Flex
          className="Profile"
          direction="column"
          gap="large"
          style={{ flex: "11", padding: "24px 24px 0 0" }}
        >
          <CustomerInfo />
        </Flex>
      </Flex>
    </div>
  );
};
