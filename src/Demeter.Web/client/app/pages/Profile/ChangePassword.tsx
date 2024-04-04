import { Button, Flex, Input } from "@mantine/core";
import "./Profile.css";
import UserNavbar from "../../components/CustomerNavbar/UserNavbar";
import * as stylex from "@stylexjs/stylex";
import { useDisclosure } from '@mantine/hooks';
import { PasswordInput, Stack } from '@mantine/core';  

export const ChangePassword: React.FC<{ shopId?: string }> = () => {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <div {...stylex.props(styles.ChangePasswordPage)}>
      <Flex>
        <Flex style={{ flex: "3" }}>
          <UserNavbar />
        </Flex>
          <Flex
          direction="column"
          gap="lg"
          style={{ flex: "11", padding: "24px 24px 0 0" }}
        >
          <Flex
            direction="column"
            gap="sm"
            style={{ flex: "3", backgroundColor: "#fff", padding: "30px 50px 30px 50px",}}
            align="flex-end"
          >
             <Flex
              direction="column"
              gap="sm"
              align="flex-start"
              style={{ width: "100%" }}
            >
              <PasswordInput
                label="Mật khẩu cũ"
                visible={visible}
                onVisibilityChange={toggle}
                style={{ width: "100%" }}
              />
            </Flex>
            <Flex
              direction="column"
              gap="sm"
              align="flex-start"
              style={{ width: "100%" }}
            >
              <PasswordInput
                label="Mật khẩu mới"
                visible={visible}
                onVisibilityChange={toggle}
                style={{ width: "100%" }}
              />
            </Flex>
            <Flex
              direction="column"
              gap="sm"
              align="flex-start"
              style={{ width: "100%" }}
            >
              <PasswordInput
                label="Xác nhận mật khẩu"
                visible={visible}
                onVisibilityChange={toggle}
                style={{ width: "100%" }}
              />
            </Flex>
            <Button
              style={{
                width: "120px",
                backgroundColor: "#009f7f",
                color: "#fff",
              }}
            >
              Xác nhận
            </Button>
          </Flex>
        </Flex> 
      </Flex>
    </div>
  );
};

const styles = stylex.create({
  ChangePasswordPage: {
    backgroundColor: "#f3f4f6",
    width: "100%",
    height: "100vh",
    paddingBottom: "30px",
  },
});