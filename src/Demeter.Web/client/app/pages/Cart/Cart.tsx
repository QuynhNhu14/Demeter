import React,{useEffect, useState} from 'react';
import { Layout, Divider,Typography,Input,Tabs,Radio, Form,Button,Col, Row, Table, Modal, Select, ConfigProvider, Flex } from 'antd';
import { GiftOutlined,CreditCardOutlined,DollarOutlined,WalletOutlined } from '@ant-design/icons';
import './Cart.css';
import "../../App.css";
import Navbar from '../../components/Navbar/Navbar';
import ProductCart, {Product} from '../../components/ProductCart/ProductCart'
import logo from '../../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { getVoucher } from '../../services/orders';
import { Vouchers } from "../../models/orders";
import { ProductDetail } from '../ProductDetail/ProductDetail';
import { OrderForm } from '../../components/OrderForm/OrderForm';

const { Option } = Select;

const {Text} = Typography;
// Định nghĩa lại 
interface cartinfoData {
  name: string;
  address: string;
  email: string;
  phone: string;
  link: string;
}

interface seleccartData {
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

// const VoucherSample: VoucherType[] = [
//   {
//     id: '1',
//     code: 'VOUCHER001',
//     description: 'This voucher is only for new customers. Đơn tối thiểu 20k, dùng 2 lần /ngày',
//     discount: 20,
//     startDate: '15/03',
//     endDate: '30/03',
//     active: true,
//     usageLimit: 50,
//   },
//   {
//     id: '2',
//     code: 'VOUCHER002',
//     description: 'This voucher is only for new customers',
//     discount: 30,
//     startDate: '15/03',
//     endDate: '30/03',
//     active: true,
//     usageLimit: 100,
//   },
//   {
//     id: '3',
//     code: 'VOUCHER003',
//     description: 'This voucher is only for new customers',
//     discount: 15,
//     startDate: '15/03',
//     endDate: '30/03',
//     active: true,
//     usageLimit: 20,
//   },
//   {
//     id: '4',
//     code: 'VOUCHER004',
//     description: 'This voucher is only for new customers',
//     discount: 15,
//     startDate: '15/03',
//     endDate: '30/03',
//     active: true,
//     usageLimit: 20,
//   },
//   {
//     id: '5',
//     code: 'VOUCHER005',
//     description: 'This voucher is only for new customers',
//     discount: 15,
//     startDate: '15/03',
//     endDate: '30/03',
//     active: true,
//     usageLimit: 20,
//   },
// ]
// Đối tượng  chứa thông tin về user
const infoData: cartinfoData = {
  name: "Gojo Sulaiman",
  address: "Ký Túc Xá ĐHQG Khu A, khu phố 6, phường Linh Trung, tp Thủ Đức, Hồ Chí Minh",
  email: "gojo_demeter@gmail.com",
  phone: "+84 1234 56789",
  link: logo,
};

const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Sản phẩm 1',
    image:'https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg',
    newPrice: 16000,
    oldPrice: 20000,
    quantity: 1,
    shop: 'Cửa hàng A',
    selected: false,
  },
  {
    id: 2,
    name: 'Sản phẩm 2',
    image:'https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg',
    newPrice: 16000,
    oldPrice: 20000,
    quantity: 2,
    shop: 'Cửa hàng b',
    selected: false,
  },
  {
    id: 3,
    name: 'Sản phẩm 3',
    image:'https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg',
    newPrice: 16000,
    oldPrice: 20000,
    quantity: 3,
    shop: 'Cửa hàng c',
    selected: false,
  },
  {
    id: 4,
    name: 'Sản phẩm 3',
    image:'https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg',
    newPrice: 16000,
    oldPrice: 20000,
    quantity: 3,
    shop: 'Cửa hàng c',
    selected: false,
  },
  {
    id: 5,
    name: 'Sản phẩm 3',
    image:'https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg',
    newPrice: 16000,
    oldPrice: 20000,
    quantity: 3,
    shop: 'Cửa hàng c',
    selected: false,
  },
  {
    id: 6,
    name: 'Sản phẩm 3',
    image:'https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg',
    newPrice: 16000,
    oldPrice: 20000,
    quantity: 3,
    shop: 'Cửa hàng c',
    selected: false,
  },
  // ... Add more products as needed
];

const totaldata: seleccartData = {
  TOTAL: 0,
  amount: 0,
  totalamount: 0,
  totalship: 0,
  voucherDiscount: 0,
};

const { TabPane } = Tabs;

const Cart: React.FC = (Props) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>(initialProducts);

  const [selectedVoucher, setSelectedVoucher] = useState<string | null>(null);
  const [selectedVoucherData, setSelectedVoucherData] = useState<VoucherType>();
  const [vouchers, setVouchers] = useState<VoucherType[]>([]); // Danh sách các voucher

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [value, setValue] = useState<number>(1);

  const [form] = Form.useForm();

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleFormSubmit = (values: any) => {
    console.log('Submitted values:', values);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
      setIsModalOpen(false);
      console.log('ok');
  };

  const handleCancelOrder = () => {
      setIsModalOpen(false);
      console.log('cancel');
  };

  // Function to update selected products
  const updateSelectedProducts = (updatedProducts: Product[]) => {
    setSelectedProducts(updatedProducts);
  };

  // Tính lại totaldata.amount và totaldata.totalamount dựa trên selectedProducts
  const totalSelectedQuantity = selectedProducts.reduce((total, product) => total + (product.selected ? product.quantity : 0), 0);
  const totalSelectedValue = selectedProducts.reduce((total, product) => total + (product.selected ? product.quantity * product.newPrice : 0), 0);
  const totalShipValue = totalSelectedValue === 0 ? 0 : 25000;
  const voucherDiscountValue = selectedVoucherData ? (selectedVoucherData.discount*totalSelectedValue/100) : 0;

  const totaldata: seleccartData = {
    TOTAL: 20, // Giá trị TOTAL ban đầu của bạn
    amount: totalSelectedQuantity, // Số lượng sản phẩm được chọn
    totalamount: totalSelectedValue, // Tổng giá trị sản phẩm được chọn
    totalship: totalShipValue, // Giá trị totalship ban đầu của bạn
    voucherDiscount: selectedVoucherData ? (voucherDiscountValue <= selectedVoucherData.usageLimit*1000 ? voucherDiscountValue : selectedVoucherData.usageLimit*1000) : 0, // Giá trị voucherDiscount ban đầu của bạn
  };
   // Hàm để tính giá trị mới của TOTAL
   const calculateTotal = (): number => {
    return totaldata.totalamount + totaldata.totalship - totaldata.voucherDiscount;
  };

  const newTotal = calculateTotal(); // Tính giá trị mới của TOTAL
  totaldata.TOTAL = newTotal;


  useEffect(() => {
    async function fetchData() {
      const voucherList = await getVoucher();
      if (voucherList ) {
        setVouchers(voucherList);
      }
    }

    fetchData();
  }, []);

  // Mỗi khi component được khởi chạy, ta sẽ set danh sách voucher từ mẫu dữ liệu
  // useState(() => {
  //   setVouchers(VoucherSample);
  // });

  const handleApplyVoucher = () => {
    // Xử lý khi áp dụng voucher, có thể làm gì đó với selectedVoucher ở đây
    console.log('Voucher được áp dụng:', selectedVoucher);
    setIsModalVisible(false);
    setSelectedVoucherData(vouchers.find(voucher => voucher.id === selectedVoucher));
  };

  const handleCancel = () => {
    setSelectedVoucher(null);
    setIsModalVisible(false);
  };

  const handleVoucherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedVoucher(e.target.value);
  };

  return(
  <Layout direction="vertical" style={{position: 'absolute', width: '100%', minHeight:'100%'}}>
    <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#009F7F',
              },
            }}
          >
      <Layout style={{ background: 'c' }}>
        <div className="horizontalSections">
          <div className="section1">
            <img src={infoData.link} alt="Your Image" className="centeredImage" />
            <NavLink to='/shop-product' style={{color: '#009F7F', fontWeight: 'bolder', fontSize:'16px', textAlign:'center', padding: '10px 0'}}> {infoData.name}</NavLink>
            <Divider style={{ margin: '8px'}}/>
            <Text strong>Địa chỉ</Text>
            <Text type="secondary"> {infoData.address}</Text>
            <Divider style={{ margin: '8px'}}/>
            <Text strong>Email</Text>
            <Text type="secondary"> {infoData.email}</Text>
            <Divider style={{ margin: '8px'}}/>
            <Text strong>SĐT</Text>
            <Text type="secondary"> {infoData.phone}</Text>

          </div>
          <div className="section2">
          <ProductCart initialProducts={initialProducts} updateSelectedProducts={updateSelectedProducts} />
          </div>
          <div className="section3">
            <div className="box">
              <div className="leftColumn">
                <Text strong type="secondary">Giá đơn hàng:</Text>
                <Text strong type="secondary">Số lượng:</Text>
                <Text strong type="secondary">Phí giao hàng:</Text>
                <Text strong type="secondary">Giảm giá:</Text>
              </div>
              <div className="rightColumn">
                <Text strong>{totaldata.totalamount.toLocaleString("en-US")} VNĐ</Text>
                <Text strong> {totaldata.amount.toLocaleString("en-US")}</Text>
                <Text strong> {totaldata.totalship.toLocaleString("en-US")} VNĐ</Text>
                <Text strong> - {totaldata.voucherDiscount.toLocaleString("en-US")} VNĐ</Text>
              </div>
            </div>

            <div className="box" style={{padding: '10px 30px'}}>
              <div className="leftColumn">
                <Text strong >TỔNG CỘNG:</Text>
              </div>
              <div className="rightColumn">
                <Text strong> {totaldata.TOTAL.toLocaleString("en-US")} VNĐ</Text>
              </div>
            </div>

            <Text strong > Áp dụng voucher </Text>
              <Button size="large" style={{ margin: '10px 0 10px 0'}} onClick={() => setIsModalVisible(true) } >
                <Text strong style={{ color:'#009F7F', backgroundColor: '#fff' }}> Áp dụng voucher </Text>
              </Button>
                <Modal
                  title="Danh sách voucher của bạn"
                  visible={isModalVisible}
                  onCancel={handleCancel}
                  footer={[
                    <Button key="cancel" onClick={handleCancel}>
                      Hủy
                    </Button>,
                    <Button key="apply" type="primary" onClick={handleApplyVoucher}>
                      Áp dụng
                    </Button>,
                  ]}
                  className="customModal"
                >
                  <Radio.Group style={{ width: '98%'}} onChange={handleVoucherChange} value={selectedVoucher}>
                    {vouchers.map((voucher) => (
                      <Flex vertical className='box' onClick={console.log}>
                        <Flex justify='space-between'>
                          <Flex vertical>
                            <Radio key={voucher.id} value={voucher.id}>
                            <Text style={{fontWeight: '500'}}>{voucher.code}</Text>
                            </Radio>
                          </Flex>
                          <Flex vertical align='flex-end'>
                            <Text style={{fontWeight: '500'}}>Giảm {voucher.discount}%
                              <Text style={{fontWeight: '400', fontSize: '13px'}}> - Tối đa đ{voucher.usageLimit}k </Text>
                            </Text>
                          </Flex>
                        </Flex>
                        <Flex vertical>
                          <Text style={{paddingLeft: '25px', opacity: '0.8', fontSize: '13px'}}>{voucher.description}</Text>
                          <Text style={{paddingLeft: '25px', opacity: '0.8', fontSize: '13px', color: 'red'}}>
                            Hạn: {new Date(voucher.startDate).toLocaleDateString('en-GB')} - {new Date(voucher.endDate).toLocaleDateString('en-GB')}
                          </Text> 

                        </Flex>
                      </Flex>
                      
                    ))}
                  </Radio.Group>
                </Modal>
                {selectedVoucher && (
                  <div>
                    <div className='box' style={{padding: '10px 13px', margin: '0px 0 10px 0'}}>
                      <Text strong> Voucher được áp dụng: {selectedVoucherData?.code}</Text>
                    </div>
                  </div>
                )}
            <Button size="large" style={{ backgroundColor:'#009F7F'}} onClick={showModal}>
              <Text strong  style={{ color: '#FFFFFF' }}>ĐẶT HÀNG  {totaldata.TOTAL.toLocaleString("en-US")} VNĐ</Text>
            </Button>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancelOrder} footer={null} width="65%" >
                <OrderForm totaldata={totaldata} selectedProducts={selectedProducts.filter((item) => item.selected)}/>
            </Modal>
          </div>
        </div>
      </Layout>
    </ConfigProvider>
  </Layout>
  );

};

export default Cart;
