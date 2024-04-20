import {
  IconCalendar,
  IconMail,
  IconPhone,
  IconUpload,
  IconUser,
  IconPhoto,
  IconX,
} from "@tabler/icons-react";
import {
  Button,
  Divider,
  FileInput,
  Flex,
  Input,
  Select,
  Text,
  Group,
  rem,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import "./Profile.css";
import * as stylex from "@stylexjs/stylex";

type user = {
  id: string;
  fullName: string;
  gender: string;
  dateOfBirth: string;
  avatarUrl: string;
  address: {
    country: string;
    addressLines: string;
    locality: string;
    region: string;
    postcode: string;
  };
};

const userInfo = {
  id: "1",
  fullName: "Gojo Sulaiman",
  gender: "male",
  dateOfBirth: "17-10-2000",
  avatarUrl:
    "https://livewiredemos.com/images/avatar.png",
  address: {
    country: "Việt Nam",
    locality:
      "Ký Túc Xá ĐHQG Khu A, khu phố 6, phường Linh Trung, tp Thủ Đức, Hồ Chí Minh",
  },
  email: "gojosulaiman@gmail.com",
  phone: "1234 56789",
};

const styles = stylex.create({
  PersonalInfo: {
    backgroundColor: "#fff",
    padding: "30px 50px 30px 0",
  },
});

export const CustomerInfo = () => {
  const [avatar, setAvatar] = useState<any>();
  // console.log(avatar);
  return (
    <Flex className="CustomerInfo" direction="column" gap="lg">
      <Flex {...stylex.props(styles.PersonalInfo)}>
        <Flex style={{ flex: "2" }} justify="center" align="center">
          <img
            src={userInfo.avatarUrl}
            alt="Avatar"
            style={{
              width: "200px",
              height: "200px",
              border: "15px solid rgba(38, 156, 133, 0.3)",
              borderRadius: "100px",
            }}
          />
        </Flex>
        <Flex direction="column" gap="sm" style={{ flex: "3" }} align="flex-end">
          <Flex
            direction="column"
            gap="sm"
            align="flex-start"
            style={{ width: "100%" }}
          >
            <TextInput
              leftSection={<IconUser />}
              label="Tên"
              defaultValue={userInfo.fullName}
              style={{ width: "100%" }}
            />
          </Flex>
          <Flex
            direction="column"
            gap="sm"
            align="flex-start"
            style={{ width: "100%" }}
          >
            <TextInput
              leftSection={<IconCalendar />}
              label="Ngày sinh"
              defaultValue={userInfo.dateOfBirth}
              style={{ width: "100%" }}
            />
          </Flex>
          <Flex
            direction="column"
            gap="sm"
            align="flex-start"
            style={{ width: "100%" }}
          >
            <span>Tải lên ảnh đại diện</span>
          <Dropzone
            onDrop={(files) => setAvatar(files)}
            onReject={(files) => console.log('rejected files', files)}
            maxSize={5 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            style={{ width: "100%" }}
          >
            <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
              <Dropzone.Accept>
                <IconUpload
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                  stroke={1.5}
                />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconPhoto
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                  stroke={1.5}
                />
              </Dropzone.Idle>

              <div>
                <Text size="xl" inline>
                  Drag images here or click to select files
                </Text>
                <Text size="sm" c="dimmed" inline mt={7}>
                  Attach as many files as you like, each file should not exceed 5mb
                </Text>
              </div>
            </Group>
          </Dropzone>

          </Flex>
          <Button
            style={{
              width: "120px", 
              backgroundColor: "#009f7f",
              color: "#fff",
            }}
          >
            Lưu
          </Button>
        </Flex>
      </Flex>
      <Flex className="Contact">
        <Flex
          direction="column"
          gap="sm"
          style={{ width: "100%", marginRight: "50px" }}
        >
          <Flex
            direction="column"
            gap="sm"
            align="flex-start"
            style={{ width: "100%" }}
          >
            <TextInput
              leftSection={<IconMail />}
              label="E-mail"
              defaultValue={userInfo.email}
              style={{ width: "100%" }}
            />
          </Flex>
          <Flex
            direction="column"
            gap="sm"
            align="flex-start"
            style={{ width: "100%" }}
          >
            <TextInput
              leftSection={<IconPhone />}
              label="Số điện thoại"
              defaultValue={`+84 ${userInfo.phone}`}
              style={{ width: "100%" }}
            />
          </Flex>
        </Flex>
        <Flex justify="center" align="flex-end">
          <Button
            style={{
              width: "120px",
              backgroundColor: "#009f7f",
              color: "#fff",
            }}
          >
            Cập nhật
          </Button>
        </Flex>
      </Flex>
      <Flex className="Address" gap="md" direction="column">
        <Flex justify="space-between">
          <span>Địa chỉ</span>
          <Button
            style={{
              width: "120px",
              backgroundColor: "#009f7f",
              color: "#fff",
            }}
          >
            + Thêm
          </Button>
        </Flex>
        <Flex
          direction="column"
          gap="sm"
          style={{
            backgroundColor: "#c4c4c4",
            width: "400px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <span style={{ fontWeight: "500" }}>Địa chỉ giao hàng</span>
          <span>
            {userInfo.address.locality}, {userInfo.address.country}
          </span>
        </Flex>
      </Flex>
    </Flex>
  );
};
