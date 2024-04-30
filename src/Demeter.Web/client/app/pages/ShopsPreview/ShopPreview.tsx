import React from "react";
import {
  Card,
  Avatar,
  Descriptions,
  Text,
  Button,
  Divider,
  Flex,
} from "@mantine/core";
import { IconEdit, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import {
  IconArrowDown,
  IconArrowUp,
  IconCurrencyDollar,
  IconInbox,
  IconShoppingCart,
  IconCircle,
  IconShoppingBag,
  IconUser,
} from "@tabler/icons-react";

import "./ShopPreview.css";
import ShopHeader from "../ShopPage/ShopHeader";
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
    <>
      <Flex style={{ backgroundColor: "#f3f4f6" }}>
        <div style={{ flex: "2", width: "100%" }}>
          <Navbar_Shops />
        </div>
        <div style={{ flex: "10", width: "100%" }}>
          <ShopHeader />
          <div className="profile-container">
            <div className="profile-image">
              <img
                src={UserData.image}
                alt="Cover Image"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
              <div className="profile-style">
                <img src={UserData.avatar} className="profile-avatar" />
                <div className="profile-info">
                  <div className="profile-name"> {UserData.name}</div>

                  <div className="profile-details">
                    <div className="profile-text">
                      <IconMail /> {UserData.email}
                    </div>

                    <div className="profile-text">
                      <IconMapPin /> {UserData.location}
                    </div>

                    <div className="profile-text">
                      <IconPhone /> {UserData.phoneNumber}
                    </div>

                    <Button
                      type="primary"
                      icon={<IconEdit />}
                      className="edit-button"
                    >
                      Sửa thông tin
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <Card
                style={{ width: "100%", maxWidth: 300, margin: "20px 20px" }}
              >
                <Text type="secondary">Đã đăng ký kể từ</Text>
                <div style={{ fontWeight: "bold", color: "#454545" }}>
                  {" "}
                  {UserData.Registered}
                </div>
                <Divider />
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#454545",
                    fontSize: "24px",
                  }}
                >
                  Tiểu sử
                </div>
                <Text type="secondary">{UserData.Bio}</Text>
              </Card>

              <Card style={{ width: "100%", margin: "20px 20px" }}>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <Card
                    style={{
                      flex: "1",
                      margin: "20px 10px",
                      minHeight: 100,
                      minWidth: 250,
                      borderColor: "#ff0000",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "#454545",
                        fontSize: "24px",
                      }}
                    >
                      {data.totalproducts}
                    </div>
                    <Text type="secondary">Tổng số sản phẩm</Text>
                    <IconInbox
                      style={{ fontSize: "24px", padding: "0 18px" }}
                    />
                  </Card>

                  <Card
                    style={{
                      flex: "1",
                      margin: "20px 10px",
                      minHeight: 100,
                      minWidth: 250,
                      borderColor: "#00ff00",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "#454545",
                        fontSize: "24px",
                      }}
                    >
                      {data.totaloder}
                    </div>
                    <Text type="secondary">Tổng số đơn đặt hàng</Text>
                    <IconCircle
                      style={{ fontSize: "24px", padding: "0 18px" }}
                    />
                  </Card>

                  <Card
                    style={{
                      flex: "1",
                      margin: "20px 10px",
                      minHeight: 100,
                      minWidth: 250,
                      borderColor: "#0000ff",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "#454545",
                        fontSize: "24px",
                      }}
                    >
                      {data.ACR}
                    </div>
                    <Text type="secondary">Tỷ lệ hoa hồng quản trị</Text>
                    <IconShoppingBag
                      style={{ fontSize: "24px", padding: "0 18px" }}
                    />
                  </Card>

                  <Card
                    style={{
                      flex: "1",
                      margin: "20px 10px",
                      minHeight: 100,
                      Width: 250,
                      borderColor: "#ffff00",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "#454545",
                        fontSize: "24px",
                      }}
                    >
                      {data.GS}
                    </div>
                    <Text type="secondary">Tổng doanh thu</Text>
                    <IconCurrencyDollar
                      style={{ fontSize: "24px", padding: "0 18px" }}
                    />
                  </Card>

                  <Card
                    style={{
                      flex: "1",
                      margin: "20px 10px",
                      minHeight: 100,
                      minWidth: 250,
                      borderColor: "#ff00ff",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "#454545",
                        fontSize: "24px",
                      }}
                    >
                      {data.CB}
                    </div>
                    <Text type="secondary">Số dư hiện tại</Text>
                    <IconCurrencyDollar
                      style={{ fontSize: "24px", padding: "0 18px" }}
                    />
                  </Card>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Flex>
    </>
  );
};

export default ShopProfile;
