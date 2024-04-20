import { useState } from "react";

import { Button, Flex, Table, Textarea, Text  } from "@mantine/core";

import { Product } from "../customer/components/ProductCart";
import { IconEye } from "@tabler/icons-react";

type OrderFormProps = {
    totaldata: {
        TOTAL: number;
        amount: number;
        totalamount: number;
        totalship: number;
        voucherDiscount: number;
    },
    selectedProducts: Product[],

}

interface DataType {
    item: {name: string, price:number, img: string};
    quantity: number;
    total: number;
  }

export const OrderForm: React.FC<OrderFormProps> = ({totaldata, selectedProducts}) => {
  const [selectedProduct, setSelectedProduct] = useState<number>(0);
  const [value, setValue] = useState<number>(1);
  // const [form] = Form.useForm();

  
  const OrderInfo = {
    id: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
    account: {id: 1, phone: '0123456789', address: 'Ký Túc Xá ĐHQG Khu A, khu phố 6, phường Linh Trung, tp Thủ Đức, Hồ Chí Minh'},
  }

    const rows = selectedProducts.map((item) => (
        <Table.Tr key={item.name}>
          <Table.Td>
                <Flex alignItems='center' gap={1}>
                    <img src={item.image} alt='product image' style={{width: '50px', height: '50px'}}/>
                    <Flex direction="column">
                        <span style={{opacity: '0.7'}}>{item.name}</span>
                        <span style={{color: '#009f7f', fontWeight: '500'}}>{item.newPrice} VNĐ</span>
                    </Flex>
                </Flex>
          </Table.Td>
          <Table.Td>{item.quantity}</Table.Td>
          <Table.Td>
            <Flex justifyContent="center" sx={{margin: 'auto'}}>{item.newPrice*item.quantity} VNĐ</Flex>
          </Table.Td>
        </Table.Tr>
      ));
  const handleFormSubmit = (values: any) => {
      console.log('Submitted values:', values);
    };

  // const renderTabContent = (key: string | number) => {
  //     switch (key) {
  //       case '1':
  //         return <p>Thanh toán bằng tiền mặt khi nhận hàng</p>;
  //       case '2':
  //         return (
  //           <Form form={form} onFinish={handleFormSubmit} layout="direction="column"">
  //             <Row gutter={16}>
  //               <Col span={12}>
  //                 <Form.Item label="Số thẻ" name="cardNumber">
  //                   <Input />
  //                 </Form.Item>
  //               </Col>
  //               <Col span={12}>
  //                 <Form.Item label="Ngày hết hiệu lực" name="expiration">
  //                   <Input />
  //                 </Form.Item>
  //               </Col>
  //             </Row>
  //             <Row gutter={16}>
  //               <Col span={12}>
  //                 <Form.Item label="Tên trên thẻ" name="cardName">
  //                   <Input />
  //                 </Form.Item>
  //               </Col>
  //               <Col span={12}>
  //                 <Form.Item label="CVV" name="cvvCode">
  //                   <Input />
  //                 </Form.Item>
  //               </Col>
  //             </Row>
  //             <Form.Item>
  //             <Button style={{wight:'100%', backgroundColor:'#009F7F'}} htmlType="submit">
  //                 <Text fw={700}  style={{ color: '#FFFFFF' }}>Xác nhận</Text>
  //               </Button>
  //             </Form.Item>
  //           </Form>
  //         );
  //       case '3':
  //         return (
  //           <Form form={form} onFinish={handleFormSubmit}>
  //             <Form.Item label="Số ví điện tử" name="eWalletNumber">
  //               <Input />
  //             </Form.Item>
  //             <Form.Item label="Mật khẩu" name="password">
  //               <Input.Password />
  //             </Form.Item>
  //             <Form.Item>
  //             <Button style={{wight:'100%', backgroundColor:'#009F7F'}} htmlType="submit">
  //               <Text fw={700}  style={{ color: '#FFFFFF' }}>Xác nhận</Text>
  //               </Button>
  //             </Form.Item>
  //           </Form>
  //         );
  //       default:
  //         return null;
  //     }
  //   };

    // Lấy ngày hôm nay
    const today = new Date();

    // Thêm 1 ngày
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 1);

    return (
        <Flex gap="large" direction="column" style={{pading: 20}}>
            <Flex justify="space-between">
                <span style={{fontWeight: 'bold', fontSize: '18px'}}>Chi tiết đơn đặt hàng - {OrderInfo.id}</span>
                <span style={{color: '#009f7f'}}><IconEye  /> Chi tiết</span>
             </Flex>
            <Flex style={{borderBottom: '1px solid #e7e7e7'}}>
                <Flex style={{flex: '5', borderRight: '1px solid #e7e7e7', padding: '0 20px 20px 0'}} direction="column" gap="small" justify="center">
                    <span style={{fontWeight: 'bolder'}}>Số điện thoại nhận hàng</span>
                    <span style={{opacity: 0.7}}>{OrderInfo.account.phone}</span>
                    <span style={{fontWeight: 'bolder'}}>Địa chỉ giao hàng</span>
                    <span style={{opacity: 0.7}}>{OrderInfo.account.address}</span>
                </Flex>
                <Flex  style={{flex: '4', padding: '0 0 20px 20px'}} direction="column" gap="small" justify="center">
                    <Flex justify='space-between'>
                        <span style={{opacity: 0.7}}>Giá đơn hàng</span>
                        <span style={{opacity: 0.7}}>{totaldata.totalamount} VNĐ</span>
                    </Flex>
                    <Flex justify='space-between'>
                        <span style={{opacity: 0.7}}>Giảm giá</span>
                        <span style={{opacity: 0.7}}>- {totaldata.voucherDiscount} VNĐ</span>
                    </Flex>
                    <Flex justify='space-between'>
                        <span style={{opacity: 0.7}}>Phí giao hàng</span>
                        <span style={{opacity: 0.7}}>{totaldata.totalship} VNĐ</span>
                    </Flex>
                    <Flex justify='space-between'>
                        <span style={{fontWeight: 'bolder'}}>Tổng cộng</span>
                        <span style={{fontWeight: 'bolder'}}>{totaldata.TOTAL} VNĐ</span>
                    </Flex>
                </Flex>
            </Flex>
            <Flex justify="space-between">
                <span style={{fontWeight: '500', fontSize: '16px'}}>Dự kiến giao - &nbsp;
                  <span style={{color:'#009F7F'}}>{futureDate.toLocaleDateString('en-GB')}</span>
                </span>
            </Flex>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                    <Table.Th>Sản phẩm</Table.Th>
                    <Table.Th>Số lượng</Table.Th>
                    <Table.Th>Giá</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
            {/*<div>
                <Text fw={700}> Vui lòng chọn phương thức thanh toán </Text>
                <div className='box' style={{padding: '10px 13px', margin: '10px 0 10px 0'}}>
                <Tabs activeKey={value.toString()} onChange={(key) => setValue(parseInt(key))}>
                    <Tabs.Panel tab={<span style={{fontWeight: '500', fontSize:'13px'}}><DollarOutlined /> COD</span>} key="1">
                    {renderTabContent('1')}
                    </Tabs.Panel>
                    <Tabs.Panel tab={<span style={{fontWeight: '500', fontSize:'13px'}}><CreditCardOutlined /> Thẻ tín dụng</span>} key="2">
                    {renderTabContent('2')}
                    </Tabs.Panel>
                    <Tabs.Panel tab={<span style={{fontWeight: '500', fontSize:'13px'}}><WalletOutlined /> Ví điện tử</span>} key="3">
                    {renderTabContent('3')}
                    </Tabs.Panel>
                </Tabs>
                </div>
            </div>*/}
            <div>
                <Text fw={700}> Ghi chú </Text>
                <Textarea rows={3} style={{padding: '10px 13px', margin: '10px 0 10px 0'}}></Textarea>
            </div>
            <Flex justify='flex-end'>
                <Button size="large" style={{ backgroundColor:'#009F7F'}}>
                <Text fw={700}  style={{ color: '#FFFFFF' }}>ĐẶT HÀNG</Text>
                </Button>
            </Flex> 
        </Flex>
    );
}
