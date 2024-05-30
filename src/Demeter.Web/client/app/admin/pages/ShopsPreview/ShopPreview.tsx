import { Card, Text,  Button,  Divider,  Flex,} from "@mantine/core";
import { IconEdit, IconMail, IconMapPin, IconPhone, 
  IconPremiumRights, IconInbox, IconReceipt, IconShoppingBag} from "@tabler/icons-react";

import Header from "../../components/Header";
import Navbar_Shops from "../../components/Navbar/NavbarShop";

import * as stylex from "@stylexjs/stylex";
import {styles} from './ShopPreview.stylex';

const ShopProfile: React.FC = () => {
  // Dữ liệu giả mạo
  const UserData = {
    avatar:
      "https://pickbazar-react-admin.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F891%2FGroup-36321.png&w=1920&q=75",
    image:
      "https://pickbazar-react-admin.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F892%2FUntitled-2.jpg&w=1920&q=75",
    name: "John Doe",
    username: "john_doe",
    email: "john.doe@example.com",
    phoneNumber: "0969849388",
    location: "Ho Chi Minh City, VN",
    Registered: "Ngày 19 Tháng 1 Năm 2023",
    Bio: "Cửa hàng tạp hóa là cửa hàng tốt nhất quanh thành phố. Điều này đang được điều hành dưới sự điều hành của chủ cửa hàng và mục tiêu của chúng tôi là cung cấp sản phẩm mới, chất lượng và dịch vụ khách hàng không rắc rối.",
  };

  const data = {
    totalproducts: "23",
    totaloder: "8",
    ACR: "15%",
    GS: "0",
    CB: "0",
  };

  return (
      <Flex {...stylex.props(styles.shopPreviewPage)}>
        <div  {...stylex.props(styles.navbar)}>
          <Navbar_Shops />
        </div>
        <div {...stylex.props(styles.container)}>
          <Header />
          <div {...stylex.props(styles.profileContainer)}>
            <div {...stylex.props(styles.profileImage)}>
              <img
                src={UserData.image}
                alt="Cover Image"
                {...stylex.props(styles.coverImage)}
              />
              <Flex>
                <img src={UserData.avatar} {...stylex.props(styles.profileAvatar)} />
                <div {...stylex.props(styles.profileInfo)}>
                  <div {...stylex.props(styles.profileName)}> {UserData.name}</div>

                  <div {...stylex.props(styles.profileDetails)}>
                    <div {...stylex.props(styles.profileText)}>
                      <IconMail /> {UserData.email}
                    </div>

                    <div {...stylex.props(styles.profileText)}>
                      <IconMapPin /> {UserData.location}
                    </div>

                    <div {...stylex.props(styles.profileText)}>
                      <IconPhone /> {UserData.phoneNumber}
                    </div>

                    <Button
                      type="primary"
                      leftSection={<IconEdit />}
                      {...stylex.props(styles.editButton)}
                    >
                      Sửa thông tin
                    </Button>
                  </div>
                </div>
              </Flex>
            </div>
            <Flex>
              <Card {...stylex.props(styles.storyCard)}>
                <div>
                  <Text type="secondary">Đã đăng ký kể từ</Text>
                  <Text fw={700} c="#454545">
                    {" "}
                    {UserData.Registered}
                  </Text>
                </div>
                <Divider />
                <Text fw={700} c="#454545" size="lg">
                  Tiểu sử
                </Text>
                <Text type="secondary">{UserData.Bio}</Text>
              </Card>

              <Card {...stylex.props(styles.cardContainer)}>
                <Flex wrap="wrap">
                  <Card {...stylex.props(styles.card, styles.redBorder)} >
                    <Text fw={700} c="#454545" size="xl" >
                      {data.totalproducts}
                    </Text>
                    <Flex gap={8}>
                      <Text type="secondary">Tổng số sản phẩm</Text>
                      <IconInbox/>
                    </Flex>
                  </Card>

                  <Card {...stylex.props(styles.card, styles.greenBorder)}>
                    <Text fw={700} c="#454545" size="xl">
                      {data.totaloder}
                    </Text>
                    <Flex gap={8}>
                      <Text type="secondary">Tổng số đơn đặt hàng</Text>
                      <IconReceipt/>
                    </Flex>
                  </Card>

                  <Card {...stylex.props(styles.card, styles.blueBorder)}  >
                    <Text fw={700} c="#454545" size="xl">
                      {data.ACR}
                    </Text>
                    <Flex gap={8}>
                      <Text type="secondary">Tỷ lệ hoa hồng quản trị</Text>
                      <IconShoppingBag />
                    </Flex>
                  </Card>

                  <Card {...stylex.props(styles.card, styles.yellowBorder)}>
                    <Text fw={700} c="#454545" size="xl">
                      {data.GS}
                    </Text>
                    <Flex gap={8}>
                      <Text type="secondary">Tổng doanh thu</Text>
                      <IconPremiumRights/>
                    </Flex>
                  </Card>

                  <Card {...stylex.props(styles.card, styles.pinkBorder)}>
                    <Text fw={700} c="#454545" size="xl">
                      {data.CB}
                    </Text>
                    <Flex gap={8}>
                      <Text type="secondary">Số dư hiện tại</Text>
                      <IconPremiumRights />
                    </Flex>
                  </Card>
                </Flex>
              </Card>
            </Flex>
          </div>
        </div>
      </Flex>
  );
};

export default ShopProfile;

