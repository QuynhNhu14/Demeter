import { useToggle, upperFirst, useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Group,
  PaperProps,
  Button,
  Checkbox,
  Anchor,
  Stack,
  Modal,
  ActionIcon,
} from '@mantine/core';
import { IconUser } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { GoogleButton } from './GoogleButton';
// import { TwitterButton } from './TwitterButton';

export function Login(props: PaperProps) {
    const [opened, { open, close }] = useDisclosure(false);
    const navigate = useNavigate();

    const [auth, setAuth] = useState(false);
    const closeSetAuth = () => {
        close();
        setAuth(true);
    }
  const [type, toggle] = useToggle(['Đăng nhập', 'Đăng ký']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Email không hợp lệ'),
      password: (val) => (val.length <= 6 ? 'Mật khẩu phải có ít nhất 6 ký tự!' : null),
    },
  });

  return (
    <>
      <Modal opened={opened} onClose={close} centered size="lg" title="Xin chào" radius="lg">
        {/* <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
          <TwitterButton radius="xl">Twitter</TwitterButton>
        </Group> */}

        {/* <Divider label="Or continue with email" labelPosition="center" my="lg" /> */}

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            {type === 'Đăng ký' && (
              <TextInput
                label="Họ tên"
                placeholder="Nhập tên của bạn"
                value={form.values.name}
                onChange={(event: any) => form.setFieldValue('name', event.currentTarget.value)}
                radius="md"
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="Nhập email"
              value={form.values.email}
              onChange={(event: any) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'email không hợp lệ'}
              radius="md"
            />

            <PasswordInput
              required
              label="Mật khẩu"
              placeholder="Nhập mật khẩu"
              value={form.values.password}
              onChange={(event: any) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Mật khẩu phải có ít nhất 6 ký tự!'}
              radius="md"
            />

            {type === 'Đăng ký' && (
              <Checkbox
                label="Tôi đồng ý với các điều khoản và quy định"
                checked={form.values.terms}
                onChange={(event: any) => form.setFieldValue('terms', event.currentTarget.checked)}
              />
            )}
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
              {type === 'Đăng ký'
                ? 'Đã có tài khoản? Đăng nhập'
                : "Chưa có tài khoản? Đăng ký"}
            </Anchor>
            <Button type="submit" radius="xl">
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
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