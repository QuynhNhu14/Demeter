import { CheckOutlined, EyeOutlined } from '@ant-design/icons';
import { Flex, Progress, Table, TableProps, Tag } from 'antd';
import useItems from 'antd/es/menu/hooks/useItems';
import './OrderDetail.css';
import productImage from '../../assets/chili.png';

const OrderInfo = {
    id: 544,
    status: 'pending',
    paymentStatus: 'pending',
    step: 1,
    account: {id: 1, phone: '0123456789', address: 'Ký Túc Xá ĐHQG Khu A, khu phố 6, phường Linh Trung, tp Thủ Đức, Hồ Chí Minh'},
    items: [
        {
            id: 1, 
            quantity: 1, 
            price: 50000, 
            product: {id: 1, name: 'Ớt trái cây', baseUnitPrice: 50000, img: 'https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2FMiniPeppers.jpg&w=1920&q=75'}
        }],
    totalPrice: 75000,
}
interface DataType {
    item: {name: string, price:number, img: string};
    quantity: number;
    total: number;
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

const data: DataType[] = OrderInfo.items.map((item) => ({
    item: {name: item.product.name, price: item.product.baseUnitPrice, img: OrderInfo.items[0].product.img},
    quantity: item.quantity,
    total: item.price,
}))

export const OrderDetail: React.FC<{orderId: number}> = ({orderId}) => {

    const itemsPrice = OrderInfo.items.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);

    return(
        <Flex className='OrderDetail' gap="large" vertical>
            <Flex className='OrderDetail--OrderId' justify="space-between">
                <span style={{fontWeight: 'bold', fontSize: '18px'}}>Chi tiết đơn đặt hàng - {OrderInfo.id}</span>
                <span style={{color: '#009f7f'}}><EyeOutlined /> Chi tiết</span>
            </Flex>
            <Flex className='OrderDetail--Status' justify="space-between">
                <span style={{fontWeight: 'bolder'}}>Tình trạng đặt hàng: &nbsp;
                {
                    OrderInfo.status === "pending" ?
                    <Tag color="rgba(201, 161, 22, 0.15)" style={{color: '#C9A116', marginRight: 0, borderRadius: '15px'}}>Đang chờ xử lý</Tag>
                    : OrderInfo.status === "done" ? 
                    <Tag color="rgba(0, 161, 127, 0.15)" style={{color: '#00A17F', marginRight: 0, borderRadius: '15px'}}>Đơn hàng đã hoàn thành</Tag>
                    : <Tag color="rgba(191, 19, 19, 0.15)" style={{color: '#bf1313', marginRight: 0, borderRadius: '15px'}}>Đã hủy</Tag>
                }
                </span>
                <span style={{fontWeight: 'bolder'}}>Tình trạng thanh toán: &nbsp;
                {
                    OrderInfo.paymentStatus === "pending" ?
                    <Tag color="rgba(201, 161, 22, 0.15)" style={{color: '#C9A116', marginRight: 0, borderRadius: '15px'}}>Đang chờ thanh toán</Tag>
                    : OrderInfo.paymentStatus === "done" ? 
                    <Tag color="rgba(0, 161, 127, 0.15)" style={{color: '#00A17F', marginRight: 0, borderRadius: '15px'}}>Đơn hàng đã thanh toán</Tag>
                    : <Tag color="rgba(191, 19, 19, 0.15)" style={{color: '#bf1313', marginRight: 0, borderRadius: '15px'}}>Đã hủy</Tag>
                }
                </span>
            </Flex>
            <Flex className='OrderDetail--Detail' style={{borderBottom: '1px solid #e7e7e7'}}>
                <Flex style={{flex: '5', borderRight: '1px solid #e7e7e7', padding: '0 20px 20px 0'}} vertical gap="small" justify="center">
                    <span style={{fontWeight: 'bolder'}}>Số điện thoại nhận hàng</span>
                    <span style={{opacity: 0.7}}>{OrderInfo.account.phone}</span>
                    <span style={{fontWeight: 'bolder'}}>Địa chỉ giao hàng</span>
                    <span style={{opacity: 0.7}}>{OrderInfo.account.address}</span>
                </Flex>
                <Flex  style={{flex: '4', padding: '0 0 20px 20px'}} vertical gap="small" justify="center">
                    <Flex justify='space-between'>
                        <span style={{opacity: 0.7}}>Giá đơn hàng</span>
                        <span style={{opacity: 0.7}}>{itemsPrice} VNĐ</span>
                    </Flex>
                    <Flex justify='space-between'>
                        <span style={{opacity: 0.7}}>Giảm giá</span>
                        <span style={{opacity: 0.7}}>0 VNĐ</span>
                    </Flex>
                    <Flex justify='space-between'>
                        <span style={{opacity: 0.7}}>Phí giao hàng</span>
                        <span style={{opacity: 0.7}}>{OrderInfo.totalPrice - itemsPrice} VNĐ</span>
                    </Flex>
                    <Flex justify='space-between'>
                        <span style={{fontWeight: 'bolder'}}>Tổng cộng</span>
                        <span style={{fontWeight: 'bolder'}}>{OrderInfo.totalPrice} VNĐ</span>
                    </Flex>
                </Flex>
            </Flex>
            <Flex className="OrderDetail--Progress" style={{width: '100%'}} align='center' vertical>
                <Flex justify="space-between" style={{width: '100%', padding: '0 50px'}}>
                    {
                        Array.from(Array(5).keys()).map((index) => (
                            <Flex align="center" style={{width: index < 4 && '100%'}}>
                                <Flex className={`OrderDetail--Progress__${OrderInfo.step >= index + 1 ? "done" : "pending"}`} align="center"  justify="center">
                                    { 
                                        OrderInfo.step >= index + 1 ? 
                                        <Flex justify="center" align="center">
                                            <CheckOutlined/>
                                        </Flex>  
                                        : <Flex style={{fontWeight: 'bolder'}} justify="center" align="center">{index + 1}</Flex>
                                    }
                                </Flex>
                                {
                                    index < 4 ?
                                    <Progress percent={OrderInfo.step > index + 1 ? 100 : OrderInfo.step === index + 1 ? 50 : 0} size="small" showInfo={false} strokeColor="#009f7f" />
                                    : <></>
                                }
                            </Flex>
                        ))
                    }
                </Flex>
                <Flex justify="space-between" style={{width: '100%', padding: '20px 10px 0 20px', position: 'relative'}}>
                    <span style={{fontWeight: 'bolder'}}>Chưa giải quyết</span>
                    <span style={{fontWeight: 'bolder'}}>Đang xử lý</span>
                    <span style={{fontWeight: 'bolder'}}>Đã đến bưu cục</span>
                    <span style={{fontWeight: 'bolder'}}>Đang giao hàng</span>
                    <span style={{fontWeight: 'bolder'}}>Đã giao</span>
                </Flex>
                <Flex></Flex>
            </Flex>
            <Table className="OrderDetail--ListItems"  columns={columns} dataSource={data} />
        </Flex>
    )
}