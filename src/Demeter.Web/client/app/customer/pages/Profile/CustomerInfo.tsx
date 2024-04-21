import {IconCalendar, IconMail, IconPhone, IconUpload, IconUser, IconPhoto, IconX} from "@tabler/icons-react";
import {Button, Flex, Text, Group, rem, TextInput} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

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

export const CustomerInfo = () => {

  return (
    <Flex direction="column" gap="lg">
      <Flex {...stylex.props(styles.PersonalInfo)}>
        <Flex {...stylex.props(styles.avatarSection)} justify="center" align="center">
          <img
            src={userInfo.avatarUrl}
            alt="Avatar"
            {...stylex.props(styles.avatar)}
          />
        </Flex>
        <Flex direction="column" gap="sm" align="flex-end" {...stylex.props(styles.infoSection)}>
          <Flex
            direction="column"
            gap="sm"
            align="flex-start"
            {...stylex.props(styles.maxwidth)}
          >
            <TextInput
              leftSection={<IconUser />}
              label="Tên"
              defaultValue={userInfo.fullName}
              {...stylex.props(styles.maxwidth)}
            />
          </Flex>
          <Flex
            direction="column"
            gap="sm"
            align="flex-start"
            {...stylex.props(styles.maxwidth)}
          >
            <TextInput
              leftSection={<IconCalendar />}
              label="Ngày sinh"
              defaultValue={userInfo.dateOfBirth}
              {...stylex.props(styles.maxwidth)}
            />
          </Flex>
          <Flex
            direction="column"
            gap="sm"
            align="flex-start"
            {...stylex.props(styles.maxwidth)}
          >
            <span>Tải lên ảnh đại diện</span>
          <Dropzone
            onDrop={(files) => setAvatar(files)}
            onReject={(files) => console.log('rejected files', files)}
            maxSize={5 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            {...stylex.props(styles.maxwidth)}
          >
            <Group justify="center" gap="xl" mih={220} {...stylex.props(styles.nonePointerEvent)}>
              <Dropzone.Accept>
                <IconUpload stroke={1.5} />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX stroke={1.5} />
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
          <Button size="sm" color="#009f7f" >
            Lưu
          </Button>
        </Flex>
      </Flex>
      <Flex {...stylex.props(styles.contact)}>
        <Flex
          direction="column"
          gap="sm"
          {...stylex.props(styles.contactInputContainer)}
        >
          <Flex
            direction="column"
            gap="sm"
            align="flex-start"
            {...stylex.props(styles.maxwidth)}
          >
            <TextInput
              leftSection={<IconMail />}
              label="E-mail"
              defaultValue={userInfo.email}
              {...stylex.props(styles.maxwidth)}
              />
          </Flex>
          <Flex
            direction="column"
            gap="sm"
            align="flex-start"
            {...stylex.props(styles.maxwidth)}
          >
            <TextInput
              leftSection={<IconPhone />}
              label="Số điện thoại"
              defaultValue={`+84 ${userInfo.phone}`}
              {...stylex.props(styles.maxwidth)}
              />
          </Flex>
        </Flex>
        <Flex justify="center" align="flex-end">
          <Button size="sm" color="#009f7f" >
            Cập nhật
          </Button>
        </Flex>
      </Flex>
      <Flex {...stylex.props(styles.contact)} gap="md" direction="column">
        <Flex justify="space-between">
          <span>Địa chỉ</span>
          <Button size="sm" color="#009f7f" >
            + Thêm
          </Button>
        </Flex>
        <Flex
          direction="column"
          gap="sm"
          {...stylex.props(styles.addressCard)}
        >
          <Text fw={500}>Địa chỉ giao hàng</Text>
          <span>
            {userInfo.address.locality}, {userInfo.address.country}
          </span>
        </Flex>
      </Flex>
    </Flex>
  );
};


const styles = stylex.create({
  PersonalInfo: {
    backgroundColor: "#fff",
    padding: "30px 50px 30px 0",
  },
  avatarSection: {
    flex: "2",
  },
  avatar:{
    width: "200px",
    height: "200px",
    border: "15px solid rgba(38, 156, 133, 0.3)",
    borderRadius: "100px",
  },
  infoSection: {
    flex: "3",
  },
  maxwidth: {
    width: "100%",
  },
  nonePointerEvent: {
    pointerEvents: 'none',
  },
  photoIcon: {
    width: "rem(52)", 
    height: "rem(52)", 
    color: 'var(--mantine-color-dimmed)',
  },
  contact: {
    backgroundColor: '#fff',
    padding: '30px 50px 30px 50px',
  },
  contactInputContainer: {
    width: "100%", 
    marginRight: "50px",
  },
  addressCard: {
    backgroundColor: "#c4c4c4",
    width: "400px",
    padding: "10px",
    borderRadius: "10px",
  }
});
