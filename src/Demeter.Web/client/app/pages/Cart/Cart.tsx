import React, { useState } from "react";
import {
  Layout,
  Divider,
  Typography,
  Input,
  Tabs,
  Radio,
  Form,
  Button,
  Col,
  Row,
  Table,
  Modal,
  Select,
  ConfigProvider,
} from "antd";
import {
  GiftOutlined,
  CreditCardOutlined,
  DollarOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import "./Cart.css";
import "../../App.css";
import Navbar from "../../components/Navbar/Navbar";
import ProductCart, { Product } from "../../components/ProductCart/ProductCart";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";

const { Option } = Select;

const { Text } = Typography;
// Định nghĩa lại
interface cartinfoData {
  name: string;
  address: string;
  email: string;
  phone: string;
  link: string;
}

interface selectCartData {
  TOTAL: number;
  amount: number;
  totalamount: number;
  totalship: number;
  voucherDiscount: number;
}

interface VoucherType {
  id: string;
  code: string;
  description: string;
  discount: number;
  startDate: string;
  endDate: string;
  active: boolean;
  usageLimit: number;
}

const VoucherSample: VoucherType[] = [
  {
    id: "1",
    code: "VOUCHER001",
    description:
      "This voucher is only for new customers. Đơn tối thiểu 20k, dùng 2 lần /ngày",
    discount: 20,
    startDate: "2024-03-15",
    endDate: "2024-03-30",
    active: true,
    usageLimit: 50,
  },
  {
    id: "2",
    code: "VOUCHER002",
    description: "This voucher is only for new customers",
    discount: 30,
    startDate: "2024-03-15",
    endDate: "2024-03-30",
    active: true,
    usageLimit: 100,
  },
  {
    id: "3",
    code: "VOUCHER003",
    description: "This voucher is only for new customers",
    discount: 15,
    startDate: "2024-03-15",
    endDate: "2024-03-30",
    active: true,
    usageLimit: 20,
  },
  {
    id: "4",
    code: "VOUCHER004",
    description: "This voucher is only for new customers",
    discount: 15,
    startDate: "2024-03-15",
    endDate: "2024-03-30",
    active: true,
    usageLimit: 20,
  },
  {
    id: "5",
    code: "VOUCHER005",
    description: "This voucher is only for new customers",
    discount: 15,
    startDate: "2024-03-15",
    endDate: "2024-03-30",
    active: true,
    usageLimit: 20,
  },
];
// Đối tượng  chứa thông tin về user
const infoData: cartInfoData = {
  name: "Gojo Sulaiman",
  address:
    "Ký Túc Xá ĐHQG Khu A, khu phố 6, phường Linh Trung, tp Thủ Đức, Hồ Chí Minh",
  email: "gojo_demeter@gmail.com",
  phone: "+84 1234 56789",
  link: logo,
};

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Sản phẩm 1",
    image:
      "https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg",
    newPrice: 16000,
    oldPrice: 20000,
    quantity: 1,
    shop: "Cửa hàng A",
    selected: false,
  },
  {
    id: 2,
    name: "Sản phẩm 2",
    image:
      "https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg",
    newPrice: 16000,
    oldPrice: 20000,
    quantity: 2,
    shop: "Cửa hàng b",
    selected: false,
  },
  {
    id: 3,
    name: "Sản phẩm 3",
    image:
      "https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg",
    newPrice: 16000,
    oldPrice: 20000,
    quantity: 3,
    shop: "Cửa hàng c",
    selected: false,
  },
  {
    id: 4,
    name: "Sản phẩm 3",
    image:
      "https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg",
    newPrice: 16000,
    oldPrice: 20000,
    quantity: 3,
    shop: "Cửa hàng c",
    selected: false,
  },
  {
    id: 4,
    name: "Sản phẩm 3",
    image:
      "https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg",
    newPrice: 16000,
    oldPrice: 20000,
    quantity: 3,
    shop: "Cửa hàng c",
    selected: false,
  },
  {
    id: 5,
    name: "Sản phẩm 3",
    image:
      "https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg",
    newPrice: 16000,
    oldPrice: 20000,
    quantity: 3,
    shop: "Cửa hàng c",
    selected: false,
  },
  // ... Add more products as needed
];

const totaldata: seleccartData = {
  TOTAL: 10,
  amount: 10,
  totalamount: 10,
  totalship: 10,
};

const { TabPane } = Tabs;

const Cart: React.FC = (Props) => {
  const [selectedProducts, setSelectedProducts] =
    useState<Product[]>(initialProducts);

  // Function to update selected products
  const updateSelectedProducts = (updatedProducts: Product[]) => {
    setSelectedProducts(updatedProducts);
  };

  // Tính lại totaldata.amount và totaldata.totalamount dựa trên selectedProducts
  const totalSelectedQuantity = selectedProducts.reduce(
    (total, product) => total + (product.selected ? product.quantity : 0),
    0
  );
  const totalSelectedValue = selectedProducts.reduce(
    (total, product) =>
      total + (product.selected ? product.quantity * product.newPrice : 0),
    0
  );

  const totaldata: selectCartData = {
    TOTAL: 20, // Giá trị TOTAL ban đầu của bạn
    amount: totalSelectedQuantity, // Số lượng sản phẩm được chọn
    totalamount: totalSelectedValue, // Tổng giá trị sản phẩm được chọn
    totalship: totalShipValue, // Giá trị totalship ban đầu của bạn
    voucherDiscount: selectedVoucherData
      ? voucherDiscountValue <= selectedVoucherData.usageLimit * 1000
        ? voucherDiscountValue
        : selectedVoucherData.usageLimit * 1000
      : 0, // Giá trị voucherDiscount ban đầu của bạn
  };
  // Hàm để tính giá trị mới của TOTAL
  const calculateTotal = (): number => {
    return totaldata.totalamount + totaldata.totalship;
  };

  const newTotal = calculateTotal(); // Tính giá trị mới của TOTAL
  totaldata.TOTAL = newTotal;

  const [value, setValue] = useState<number>(1);
  const [form] = Form.useForm();

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleFormSubmit = (values: any) => {
    console.log("Submitted values:", values);
  };

  //vocher
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState<string | null>(null);
  const [vouchers, setVouchers] = useState<Voucher[]>([]); // Danh sách các voucher

  // Mẫu dữ liệu voucher
  // Tạo 15 đối tượng Voucher với các giá trị khác nhau
  const sampleVouchers: Voucher[] = Array.from({ length: 15 }, (_, index) => ({
    ID: `ABC${index + 1}`,
    name: `Voucher ${String.fromCharCode(65 + index)}`,
    CouponDetail: `Giảm ${Math.floor(Math.random() * 100)}%`,
    Coupon: Math.random() * 0.9 + 0.1, // Giá trị ngẫu nhiên từ 0.1 đến 1.0
  }));

  // Mỗi khi component được khởi chạy, ta sẽ set danh sách voucher từ mẫu dữ liệu

  useState(() => {
    setVouchers(VoucherSample);
  });

  const handleApplyVoucher = () => {
    // Xử lý khi áp dụng voucher, có thể làm gì đó với selectedVoucher ở đây
    console.log("Voucher được áp dụng:", selectedVoucher);
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setSelectedVoucher(undefined);
    close();
  };

  const handleVoucherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedVoucher(e.target.value);
  };

  const renderTabContent = (key: string | number) => {
    switch (key) {
      case "1":
        return <p>Thanh toán bằng tiền mặt khi nhận hàng</p>;
      case "2":
        return (
          <Form form={form} onFinish={handleFormSubmit} layout="vertical">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Số thẻ" name="cardNumber">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Ngày hết hiệu lực" name="expiration">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Tên trên thẻ" name="cardName">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="CVV" name="cvvCode">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Button
                style={{ wight: "100%", backgroundColor: "#009F7F" }}
                htmlType="submit"
              >
                <Text strong style={{ color: "#FFFFFF" }}>
                  Xác nhận
                </Text>
              </Button>
            </Form.Item>
          </Form>
        );
      case "3":
        return (
          <Form form={form} onFinish={handleFormSubmit}>
            <Form.Item label="Số ví điện tử" name="eWalletNumber">
              <Input />
            </Form.Item>
            <Form.Item label="Mật khẩu" name="password">
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                style={{ wight: "100%", backgroundColor: "#009F7F" }}
                htmlType="submit"
              >
                <Text strong style={{ color: "#FFFFFF" }}>
                  Xác nhận
                </Text>
              </Button>
            </Form.Item>
          </Form>
        );
      default:
        return null;
    }
  };

  return (
    <Layout
      direction="vertical"
      style={{ position: "absolute", width: "100%", minHeight: "100%" }}
    >
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#009F7F",
          },
        }}
      >
        <Layout style={{ background: "c" }}>
          <div className="horizontalSections">
            <div className="section1">
              <img
                src={infoData.link}
                alt="Your Image"
                className="centeredImage"
              />
              <NavLink
                to="/shop-product"
                style={{
                  color: "#009F7F",
                  fontWeight: "bolder",
                  fontSize: "16px",
                  textAlign: "center",
                  padding: "10px 0",
                }}
              >
                {" "}
                {infoData.name}
              </NavLink>
              <Divider style={{ margin: "8px" }} />
              <Text strong>Địa chỉ</Text>
              <Text type="secondary"> {infoData.address}</Text>
              <Divider style={{ margin: "8px" }} />
              <Text strong>Email</Text>
              <Text type="secondary"> {infoData.email}</Text>
              <Divider style={{ margin: "8px" }} />
              <Text strong>SĐT</Text>
              <Text type="secondary"> {infoData.phone}</Text>
            </div>
            <div className="section2">
              <ProductCart
                initialProducts={initialProducts}
                updateSelectedProducts={updateSelectedProducts}
              />
            </div>
            <div className="section3">
              <div className="box">
                <div className="leftColumn">
                  <Text strong type="secondary">
                    Giá đơn hàng:
                  </Text>
                  <Text strong type="secondary">
                    Số lượng:
                  </Text>
                  <Text strong type="secondary">
                    Phí giao hàng:
                  </Text>
                </div>
                <div {...stylex.props(styles.rightColumn)}>
                  <Text fw={700}>
                    {totaldata.totalamount.toLocaleString("en-US")} VNĐ
                  </Text>
                  <Text fw={700}>
                    {" "}
                    {totaldata.amount.toLocaleString("en-US")}
                  </Text>
                  <Text fw={700}>
                    {" "}
                    {totaldata.totalship.toLocaleString("en-US")} VNĐ
                  </Text>
                  <Text fw={700}>
                    {" "}
                    - {totaldata.voucherDiscount.toLocaleString("en-US")} VNĐ
                  </Text>
                </div>
              </div>

              <div className="box" style={{ padding: "10px 30px" }}>
                <div className="leftColumn">
                  <Text strong>TỔNG CỘNG:</Text>
                </div>
                <div {...stylex.props(styles.rightColumn)}>
                  <Text fw={700}>
                    {" "}
                    {totaldata.TOTAL.toLocaleString("en-US")} VNĐ
                  </Text>
                </div>
              </div>

              <Text strong> Áp dụng voucher </Text>
              <Button
                size="large"
                style={{ margin: "10px 0 10px 0" }}
                onClick={() => setIsModalVisible(true)}
              >
                <Text
                  strong
                  style={{ color: "#009F7F", backgroundColor: "#fff" }}
                >
                  {" "}
                  Áp dụng voucher{" "}
                </Text>
              </Button>
              <Modal
                title="Danh sách voucher của bạn"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={[
                  <Button key="cancel" onClick={handleCancel}>
                    Hủy
                  </Button>,
                  <Button
                    key="apply"
                    type="primary"
                    onClick={handleApplyVoucher}
                  >
                    Áp dụng
                  </Button>,
                ]}
                className="customModal"
              >
                {/* <Select
                    style={{ width: '100%' }}
                    placeholder="Chọn voucher"
                    onChange={handleVoucherChange}
                    value={selectedVoucher}
                  >
                    {vouchers.map((voucher) => (
                      <Option key={voucher.ID} value={voucher.name}>
                        {voucher.name}
                      </Option>
                    ))}
                  </Select> */}
                <Radio.Group
                  style={{ width: "98%" }}
                  onChange={handleVoucherChange}
                  value={selectedVoucher}
                >
                  {vouchers.map((voucher) => (
                    <div className="box">
                      <div className="leftColumn">
                        <Radio key={voucher.ID} value={voucher.name}>
                          {voucher.name}
                        </Radio>
                      </div>
                      <div className="rightColumn">
                        <Text>{voucher.CouponDetail} </Text>
                      </div>
                    </div>
                  ))}
                </Radio.Group>
              </Modal>
              {selectedVoucher && (
                <div>
                  <div
                    className="box"
                    style={{ padding: "10px 13px", margin: "0px 0 10px 0" }}
                  >
                    <Text strong> Voucher được áp dụng: {selectedVoucher}</Text>
                  </div>
                </div>
              )}
              <Text strong> Vui lòng chọn phương thức thanh toán </Text>
              <div
                className="box"
                style={{ padding: "10px 13px", margin: "10px 0 10px 0" }}
              >
                <Tabs
                  activeKey={value.toString()}
                  onChange={(key) => setValue(parseInt(key))}
                >
                  <TabPane
                    tab={
                      <Radio disabled={value !== 1} value={1}>
                        <DollarOutlined />
                      </Radio>
                    }
                    key="1"
                  >
                    {renderTabContent("1")}
                  </TabPane>
                  <TabPane
                    tab={
                      <Radio disabled={value !== 2} value={2}>
                        <CreditCardOutlined />
                      </Radio>
                    }
                    key="2"
                  >
                    {renderTabContent("2")}
                  </TabPane>
                  <TabPane
                    tab={
                      <Radio disabled={value !== 3} value={3}>
                        <WalletOutlined />
                      </Radio>
                    }
                    key="3"
                  >
                    {renderTabContent("3")}
                  </TabPane>
                </Tabs>
              </div>
              <Button size="large" style={{ backgroundColor: "#009F7F" }}>
                <Text strong style={{ color: "#FFFFFF" }}>
                  TỔNG CỘNG: {totaldata.TOTAL}đ
                </Text>
              </Button>
              <Modal
                opened={isModalOpen}
                onOk={handleOk}
                onClose={handleCancelOrder}
                footer={null}
                size="65%"
              >
                <OrderForm
                  totaldata={totaldata}
                  selectedProducts={selectedProducts.filter(
                    (item) => item.selected
                  )}
                />
              </Modal>
            </div>
          </div>
        </Layout>
      </ConfigProvider>
    </Layout>
  );
};

export default Cart;
