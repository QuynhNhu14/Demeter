import { Button, Flex, Modal, Radio, Typography } from "antd";
import { useState } from "react";
import "./Voucher.css";


// const Vouchers = [
//     {
//         productId: "1",
//         productImage: productImage,
//     },
//     {
//         productId: "2",
//         productImage: productImage,
//     },
//     {
//         productId: "3",
//         productImage: productImage,
//     },
// ]

type VouchersProps = {
    categoryId?: string,
    shopId?: string,
}
interface Voucher {
    ID: string;
    name: string;
    CouponDetail: string;
    Coupon: number;
  }
const {Text} = Typography;

export const Voucher: React.FC<VouchersProps> = ({}) => {
    //voucher
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
        setVouchers(sampleVouchers);
    });

    const handleApplyVoucher = () => {
        // Xử lý khi áp dụng voucher, có thể làm gì đó với selectedVoucher ở đây
        console.log('Voucher được áp dụng:', selectedVoucher);
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setSelectedVoucher(null);
        setIsModalVisible(false);
    };
    // với select
    // const handleVoucherChange = (value: string) => {
    //   setSelectedVoucher(value);
    // };
    const handleVoucherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedVoucher(e.target.value);
    };
    return (
        <div className="Vouchers">
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
                <Radio.Group style={{ width: '98%'}} onChange={handleVoucherChange} value={selectedVoucher}>
                    {vouchers.map((voucher) => (
                    <div className='box'>
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
                    <div className='box' style={{padding: '10px 13px', margin: '0px 0 10px 0'}}>
                    <Text strong> Voucher được áp dụng: {selectedVoucher}</Text>
                    </div>
                </div>
                )}
        </div>
    )
}