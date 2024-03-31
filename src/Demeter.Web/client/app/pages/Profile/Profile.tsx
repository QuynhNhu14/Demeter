import { Flex } from "@mantine/core";
import "./Profile.css";
import { CustomerInfo } from "./CustomerInfo";
import UserNavbar from "../../components/CustomerNavbar/UserNavbar";

export const Profile: React.FC<{ shopId?: string }> = () => {
  return (
    <div className="ProfilePage">
      <Flex>
        <Flex style={{ flex: "3" }}>
          <UserNavbar />
        </Flex>
        <Flex
          className="Profile"
          vertical
          gap="large"
          style={{ flex: "11", padding: "24px 24px 0 0" }}
        >
          <CustomerInfo />
        </Flex>
      </Flex>
    </div>
  );
};
