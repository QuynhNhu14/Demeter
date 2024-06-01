import {useEffect, useState} from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Divider,ScrollArea,Radio, Button, Modal, Flex, Text, CloseButton } from '@mantine/core';

import logo from '../../../../assets/logo.png';

import { getVoucher } from '../../../services/orders';
import ProductCart, {Product} from '../../components/ProductCart/ProductCart'
import { OrderForm } from '../../components/OrderForm';
import {styles} from './Cart.stylex';
import * as stylex from '@stylexjs/stylex';
import { Vouchers } from '../../../models/orders';
import { useUserSession } from '../../../hooks/useUserSession';


interface cartInfoData {
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

// const VoucherSample: VoucherType[] = [
//   {
//     id: '1',
//     code: 'VOUCHER001',
//     description: 'This voucher is only for new customers. Đơn tối thiểu 20k, dùng 2 lần /ngày',
//     discount: 20,
//     startDate:  '2024-03-15',
//     endDate: '2024-03-30',
//     active: true,
//     usageLimit: 50,
//   },
//   {
//     id: '2',
//     code: 'VOUCHER002',
//     description: 'This voucher is only for new customers',
//     discount: 30,
//     startDate: '2024-03-15',
//     endDate: '2024-03-30',
//     active: true,
//     usageLimit: 100,
//   },
//   {
//     id: '3',
//     code: 'VOUCHER003',
//     description: 'This voucher is only for new customers',
//     discount: 15,
//     startDate: '2024-03-15',
//     endDate: '2024-03-30',
//     active: true,
//     usageLimit: 20,
//   },
//   {
//     id: '4',
//     code: 'VOUCHER004',
//     description: 'This voucher is only for new customers',
//     discount: 15,
//     startDate: '2024-03-15',
//     endDate: '2024-03-30',
//     active: true,
//     usageLimit: 20,
//   },
//   {
//     id: '5',
//     code: 'VOUCHER005',
//     description: 'This voucher is only for new customers',
//     discount: 15,
//     startDate: '2024-03-15',
//     endDate: '2024-03-30',
//     active: true,
//     usageLimit: 20,
//   },
// ]
// Đối tượng  chứa thông tin về user
const infoData: cartInfoData = {
  name: "Gojo Sulaiman",
  address: "Ký Túc Xá ĐHQG Khu A, khu phố 6, phường Linh Trung, tp Thủ Đức, Hồ Chí Minh",
  email: "gojo_demeter@gmail.com",
  phone: "+84 1234 56789",
  link: logo,
};

// const initialProducts: Product[] = [
//   {
//     id: 1,
//     name: 'Sản phẩm 1',
//     image:'https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg',
//     newPrice: 16000,
//     oldPrice: 20000,
//     quantity: 1,
//     shop: 'Cửa hàng A',
//     selected: false,
//   },
//   {
//     id: 2,
//     name: 'Sản phẩm 2',
//     image:'https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg',
//     newPrice: 16000,
//     oldPrice: 20000,
//     quantity: 2,
//     shop: 'Cửa hàng b',
//     selected: false,
//   },
//   {
//     id: 3,
//     name: 'Sản phẩm 3',
//     image:'https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg',
//     newPrice: 16000,
//     oldPrice: 20000,
//     quantity: 3,
//     shop: 'Cửa hàng c',
//     selected: false,
//   },
//   {
//     id: 4,
//     name: 'Sản phẩm 3',
//     image:'https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg',
//     newPrice: 16000,
//     oldPrice: 20000,
//     quantity: 3,
//     shop: 'Cửa hàng c',
//     selected: false,
//   },
//   {
//     id: 5,
//     name: 'Sản phẩm 3',
//     image:'https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg',
//     newPrice: 16000,
//     oldPrice: 20000,
//     quantity: 3,
//     shop: 'Cửa hàng c',
//     selected: false,
//   },
//   {
//     id: 6,
//     name: 'Sản phẩm 3',
//     image:'https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg',
//     newPrice: 16000,
//     oldPrice: 20000,
//     quantity: 3,
//     shop: 'Cửa hàng c',
//     selected: false,
//   },
//   // ... Add more products as needed
// ];

const Cart: React.FC = () => {
  const initialProducts = JSON.parse(localStorage.getItem('cart'));

  const [selectedProducts, setSelectedProducts] = useState(initialProducts);

  const [selectedVoucher, setSelectedVoucher] = useState<string>();
  const [selectedVoucherData, setSelectedVoucherData] = useState<VoucherType>();
  const [vouchers, setVouchers] = useState<VoucherType[]>([]); // Danh sách các voucher

  const [opened, { open, close }] = useDisclosure(false);
  const { loggedIn } = useUserSession();
  const navigate = useNavigate();

  if(!localStorage.getItem('cart')){
    localStorage.setItem('cart', '[]');
  }
  
  useEffect(() => {
    if (!loggedIn) {
      navigate("/home");
    }
  }, [loggedIn]);

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

  const totaldata: selectCartData = {
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
      console.log({voucherList});
      if (voucherList ) {
        setVouchers(voucherList);
      }
    }
    fetchData();
  }, []);


  // useState(() => {
  //   setVouchers(VoucherSample);
  // });

  const handleApplyVoucher = () => {
    close();
    setSelectedVoucherData(vouchers.find(voucher => voucher.id === selectedVoucher));
  };
  const handleCancel = () => {
    setSelectedVoucher(undefined);
    close();
  };

  const handleVoucherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedVoucher(e.target.value);
  };

  return(
  <Flex direction="column" {...stylex.props(styles.cartPage)}>
      <Flex>
        <div {...stylex.props(styles.horizontalSections)}>
          <div {...stylex.props(styles.section1)}>
            <img src={infoData.link} alt="Your Image" {...stylex.props(styles.centeredImage)} />
            <NavLink to='/shop-product' {...stylex.props(styles.shopName)}> {infoData.name}</NavLink>
            <Divider m={8}/>
            <Text fw={700}>Địa chỉ</Text>
            <Text c="dimmed"> {infoData.address}</Text>
            <Divider m={8}/>
            <Text fw={700}>Email</Text>
            <Text c="dimmed"> {infoData.email}</Text>
            <Divider m={8}/>
            <Text fw={700}>SĐT</Text>
            <Text c="dimmed"> {infoData.phone}</Text>
          </div>
           <div {...stylex.props(styles.section2)}>
            <ProductCart initialProducts={initialProducts} updateSelectedProducts={updateSelectedProducts} />
          </div>
          <div {...stylex.props(styles.section3)}>
            <div {...stylex.props(styles.box)}>
              <div {...stylex.props(styles.leftColumn)}>
                <Text fw={500} c="dimmed">Giá đơn hàng:</Text>
                <Text fw={500} c="dimmed">Số lượng:</Text>
                <Text fw={500} c="dimmed">Phí giao hàng:</Text>
                <Text fw={500} c="dimmed">Giảm giá:</Text>
              </div>
              <div {...stylex.props(styles.rightColumn)}>
                <Text fw={500}>{totaldata.totalamount.toLocaleString("en-US")} VNĐ</Text>
                <Text fw={500}> {totaldata.amount.toLocaleString("en-US")}</Text>
                <Text fw={500}> {totaldata.totalship.toLocaleString("en-US")} VNĐ</Text>
                <Text fw={500}> - {totaldata.voucherDiscount.toLocaleString("en-US")} VNĐ</Text>
              </div>
            </div>

            <div {...stylex.props(styles.box, styles.totalBox)}>
              <div {...stylex.props(styles.leftColumn)}>
                <Text fw={700} >TỔNG CỘNG:</Text>
              </div>
              <div {...stylex.props(styles.rightColumn)}>
                <Text fw={700}> {totaldata.TOTAL.toLocaleString("en-US")} VNĐ</Text>
              </div>
            </div>

            <Text fw={500} > Áp dụng voucher </Text>
              <Button size="large" variant="outline" color="#009f7f" m="10px 0" onClick={open} >
                <Text fw={500} color='#009F7F'> Áp dụng voucher </Text>
              </Button>
              <Modal 
                opened={opened} onClose={close} 
                size="lg" 
                scrollAreaComponent={ScrollArea.Autosize}
                title="Danh sách voucher của bạn" 
                {...stylex.props(styles.customModal)}>
                <Radio.Group value={selectedVoucher}>
                   {vouchers.map((voucher) => (
                    <Flex direction="column"  {...stylex.props(styles.box)} onClick={() => setSelectedVoucher(voucher.id)}>
                      <Flex justify='space-between'>
                          <Radio       
                            key={voucher.id}
                            onChange={handleVoucherChange}
                            iconColor="#fff"
                            color="#009f7f" 
                            value={voucher.id} 
                            label={voucher.code}/>
                        <Flex align="center" gap={4}>
                            <Text fw={500}>Giảm {voucher.discount}%</Text>
                            <Text size="sm" c="dimmed"> - Tối đa đ{voucher.usageLimit}k </Text>
                        </Flex>
                      </Flex>
                      <Flex direction="column">
                        <Text c="dimmed" size="sm">{voucher.description}</Text>
                        <Text c="red" size="sm">
                          Hạn: {new Date(voucher.startDate).toLocaleDateString('en-GB')} - {new Date(voucher.endDate).toLocaleDateString('en-GB')}
                        </Text>
                      </Flex>
                    </Flex>
                    
                  ))}
                </Radio.Group> 
                <Flex gap={8} justify="flex-end">
                  <Button key="cancel" onClick={handleCancel} variant="default">
                    Hủy
                  </Button>
                  <Button key="apply" variant="filled" color="#009F7F" onClick={handleApplyVoucher}>
                    Áp dụng
                  </Button>
                </Flex>
              </Modal>

              {selectedVoucher && (
                  <div {...stylex.props(styles.box, styles.voucherApplyBox)}>
                    <Text fw={500} size="sm"> 
                      Voucher được áp dụng: {selectedVoucherData?.code}
                      {selectedVoucherData ?       
                      <CloseButton
                        size="xs"
                        onClick={() => {
                          setSelectedVoucherData(undefined);
                          setSelectedVoucher(undefined);}
                        }
                      /> : <></>}
                    </Text>
                  </div>
                )}
            <Button size="lg" color="#009F7F" onClick={showModal}>
              <Text fw={500}>ĐẶT HÀNG  {totaldata.TOTAL.toLocaleString("en-US")} VNĐ</Text>
            </Button>
            <Modal opened={isModalOpen} onOk={handleOk} onClose={handleCancelOrder} footer={null} size="65%" scrollAreaComponent={ScrollArea.Autosize}>
                <OrderForm totaldata={totaldata} selectedProducts={selectedProducts.filter((item) => item.selected)}/>
            </Modal>
          </div>
        </div>
      </Flex>
  </Flex>
  );

};

export default Cart;
