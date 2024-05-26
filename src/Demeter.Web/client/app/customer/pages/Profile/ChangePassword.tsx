import { Button, Flex, Input } from "@mantine/core";
import UserNavbar from "../../components/CustomerNavbar/UserNavbar";
import * as stylex from "@stylexjs/stylex";
import { useDisclosure } from '@mantine/hooks';
import { PasswordInput, Stack } from '@mantine/core';  

export const ChangePassword: React.FC<{ shopId?: string }> = () => {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <div {...stylex.props(styles.ChangePasswordPage)}>
      <Flex>
        <Flex {...stylex.props(styles.navbar)}>
          <UserNavbar />
        </Flex>
          <Flex
          direction="column"
          gap="lg"
          {...stylex.props(styles.formContainer)}
        >
          <Flex
            direction="column"
            gap="sm"
            {...stylex.props(styles.inputGroup)}
            align="flex-end"
          >
             <Flex
              direction="column"
              gap="sm"
              align="flex-start"
              {...stylex.props(styles.maxwidth)}
            >
              <PasswordInput
                label="Mật khẩu cũ"
                visible={visible}
                onVisibilityChange={toggle}
                {...stylex.props(styles.maxwidth)}
              />
            </Flex>
            <Flex
              direction="column"
              gap="sm"
              align="flex-start"
              {...stylex.props(styles.maxwidth)}
            >
              <PasswordInput
                label="Mật khẩu mới"
                visible={visible}
                onVisibilityChange={toggle}
                {...stylex.props(styles.maxwidth)}
              />
            </Flex>
            <Flex
              direction="column"
              gap="sm"
              align="flex-start"
              {...stylex.props(styles.maxwidth)}
            >
              <PasswordInput
                label="Xác nhận mật khẩu"
                visible={visible}
                onVisibilityChange={toggle}
                {...stylex.props(styles.maxwidth)}
              />
            </Flex>
            <Button size="sm" color="#009f7f" >
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
    paddingTop: "30px",
  },
  navbar: {
    flex: '3',
  },
  formContainer:{
    flex: "11", 
    padding: "0 24px 0 0",
  },
  inputGroup: {
    flex: "3", 
    backgroundColor: "#fff", 
    padding: "30px 50px 30px 50px",
  },
  maxwidth: {
    width: "100%",
  }
});