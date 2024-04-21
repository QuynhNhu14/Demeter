import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, ActionIcon, Grid } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Login() {
    const [opened, { open, close }] = useDisclosure(false);
    const navigate = useNavigate();

    const [auth, setAuth] = useState(false);
    const closeSetAuth = () => {
        close();
        setAuth(true);
    }

  return (
    <>
      <Modal opened={opened} onClose={close} centered>
          {/* <Text > Xin chào, </Text> */}
        Đăng nhập hoặc Tạo tài khoản
        <Grid>
          <Grid.Col span={6}>
            <Button fullWidth onClick={closeSetAuth}>
              Login
            </Button>
          </Grid.Col>
          <Grid.Col span={6}>
            <Button fullWidth variant="outline" onClick={close}>
              Register
            </Button>
          </Grid.Col>
        </Grid>
      </Modal>

      <ActionIcon
        onClick={() => auth ? navigate("/profile") : open()}
        size="lg"
        variant="transparent"
        c={auth ? "green" : "gray"}
      >
        <IconUser />
      </ActionIcon>
    </>
  );
}
