import "./OrderForm.css";
import "../../App.css";
import { Button, Col, Flex, Form, Input, Radio, Row, Table, TableProps, Tabs, Typography } from "antd";
import { useState } from "react";
import { Vouchers } from "../../models/orders";
import { CreditCardOutlined, DollarOutlined, EyeOutlined, WalletOutlined } from "@ant-design/icons";
import TabPane from "antd/es/tabs/TabPane";
import TextArea from "antd/es/input/TextArea";
import { Product } from "../ProductCart";

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
const {Text} = Typography;

interface DataType {
    item: {name: string, price:number, img: string};
    quantity: number;
    total: number;
  }

export const OrderForm: React.FC<OrderFormProps> = ({totaldata, selectedProducts}) => {
  const [selectedProduct, setSelectedProduct] = useState<number>(0);
  const [value, setValue] = useState<number>(1);
  const [form] = Form.useForm();

  
  const OrderInfo = {
    id: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
    account: {id: 1, phone: '0123456789', address: 'Ký Túc Xá ĐHQG Khu A, khu phố 6, phường Linh Trung, tp Thủ Đức, Hồ Chí Minh'},
  }

  const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Sản phẩm',
        dataIndex: 'item',
        key: 'item',
        render:  ({ name, price, img }) => (
             <Flex align='center' gap='small'>
                <img src={img} alt='product image' style={{width: '50px', height: '50px'}}/>
                <Flex vertical>
                    <span style={{opacity: '0.7'}}>{name}</span>
                    <span style={{color: '#009f7f', fontWeight: '500'}}>{price} VNĐ</span>
                </Flex>
             </Flex>
            ),
    },
    {
        title: 'Số lượng',
        dataIndex: 'quantity',
        key: 'quantity',
        align: 'center',
    },
    {
        title: 'Giá',
        dataIndex: 'total',
        key: 'total',
        align: 'center',
        render: (total) => <Flex justify="center" style={{margin: 'auto'}}>{total} VNĐ</Flex>
    },
    ];
    
    const data: DataType[] = selectedProducts.map((item) => ({
        item: {name: item.name, price: item.newPrice, img: item.image},
        quantity: item.quantity,
        total: item.newPrice*item.quantity,
    }))
  const handleFormSubmit = (values: any) => {
      console.log('Submitted values:', values);
    };

  const renderTabContent = (key: string | number) => {
      switch (key) {
        case '1':
          return <p>Thanh toán bằng tiền mặt khi nhận hàng</p>;
        case '2':
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
              <Button style={{wight:'100%', backgroundColor:'#009F7F'}} htmlType="submit">
                  <Text strong  style={{ color: '#FFFFFF' }}>Xác nhận</Text>
                </Button>
              </Form.Item>
            </Form>
          );
        case '3':
          return (
            <Form form={form} onFinish={handleFormSubmit}>
              <Form.Item label="Số ví điện tử" name="eWalletNumber">
                <Input />
              </Form.Item>
              <Form.Item label="Mật khẩu" name="password">
                <Input.Password />
              </Form.Item>
              <Form.Item>
              <Button style={{wight:'100%', backgroundColor:'#009F7F'}} htmlType="submit">
                <Text strong  style={{ color: '#FFFFFF' }}>Xác nhận</Text>
                </Button>
              </Form.Item>
            </Form>
          );
        default:
          return null;
      }
    };

    // Lấy ngày hôm nay
    const today = new Date();

    // Thêm 1 ngày
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 1);

    return (
        <Flex className='OrderForm' gap="large" vertical>
            <Flex className='OrderForm--OrderId' justify="space-between">
                <span style={{fontWeight: 'bold', fontSize: '18px'}}>Chi tiết đơn đặt hàng - {OrderInfo.id}</span>
                <span style={{color: '#009f7f'}}><EyeOutlined /> Chi tiết</span>
            </Flex>
            <Flex className='OrderForm--Detail' style={{borderBottom: '1px solid #e7e7e7'}}>
                <Flex style={{flex: '5', borderRight: '1px solid #e7e7e7', padding: '0 20px 20px 0'}} vertical gap="small" justify="center">
                    <span style={{fontWeight: 'bolder'}}>Số điện thoại nhận hàng</span>
                    <span style={{opacity: 0.7}}>{OrderInfo.account.phone}</span>
                    <span style={{fontWeight: 'bolder'}}>Địa chỉ giao hàng</span>
                    <span style={{opacity: 0.7}}>{OrderInfo.account.address}</span>
                </Flex>
                <Flex  style={{flex: '4', padding: '0 0 20px 20px'}} vertical gap="small" justify="center">
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
            <Flex className='OrderForm--OrderId' justify="space-between">
                <span style={{fontWeight: '500', fontSize: '16px'}}>Dự kiến giao - &nbsp;
                  <span style={{color:'#009F7F'}}>{futureDate.toLocaleDateString('en-GB')}</span>
                </span>
            </Flex>
            <Table className="OrderForm--ListItems"  columns={columns} dataSource={data} />
            <div>
                <Text strong> Vui lòng chọn phương thức thanh toán </Text>
                <div className='box' style={{padding: '10px 13px', margin: '10px 0 10px 0'}}>
                <Tabs activeKey={value.toString()} onChange={(key) => setValue(parseInt(key))}>
                    <TabPane tab={<span style={{fontWeight: '500', fontSize:'13px'}}><DollarOutlined /> COD</span>} key="1">
                    {renderTabContent('1')}
                    </TabPane>
                    <TabPane tab={<span style={{fontWeight: '500', fontSize:'13px'}}><CreditCardOutlined /> Thẻ tín dụng</span>} key="2">
                    {renderTabContent('2')}
                    </TabPane>
                    <TabPane tab={<span style={{fontWeight: '500', fontSize:'13px'}}><WalletOutlined /> Ví điện tử</span>} key="3">
                    {renderTabContent('3')}
                    </TabPane>
                </Tabs>
                </div>
            </div>
            <div>
                <Text strong> Ghi chú </Text>
                <TextArea rows={3} style={{padding: '10px 13px', margin: '10px 0 10px 0'}}></TextArea>
            </div>
            <Flex justify='flex-end'>
                <Button size="large" style={{ backgroundColor:'#009F7F'}}>
                <Text strong  style={{ color: '#FFFFFF' }}>ĐẶT HÀNG</Text>
                </Button>
            </Flex>
        </Flex>
    );
}