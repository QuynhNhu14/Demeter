import "./ShopInfo.css";
import shopLogo from "../../../assets/shoplogo.png";
import { Flex } from "antd";
import { FacebookFilled, FacebookOutlined, InstagramOutlined, TwitterOutlined } from "@ant-design/icons";

const ShopDetails = {
    shopId: "1",
    logo: shopLogo,
    name: " Cửa Hàng Nông Sản",
    description: "Tại đây, bạn sẽ tìm thấy một đa dạng các loại rau, trái cây, thực phẩm chế biến và các sản phẩm nông nghiệp khác, đảm bảo mang đến sự hài lòng cho vị giác và sức khỏe của bạn.",
    adress: "12/24, khu phố 6, phường Linh Trung, tp. Thủ Đức",
    phone: "5619327220",
    website: "https://redq.io",
}

export const ShopInfo: React.FC<{shopId: string}> = ({shopId}) => {
    return (
        <Flex className="ShopInfo" vertical>
            <Flex className="ShopInfo--description" vertical gap="middle" align="center">
                <img src={ShopDetails.logo} alt="logo" style={{width: '65%', borderRadius: '10px'}}/>
                <span style={{fontWeight: 'bolder', fontSize: '20px'}}>{ShopDetails.name}</span>
                <span style={{textAlign:'center', opacity: '0.8'}}>{ShopDetails.description}</span>
                <Flex justify="center" gap="small" style={{opacity: '0.8'}}>
                    <FacebookFilled />
                    <InstagramOutlined />
                    <TwitterOutlined />
                </Flex>
            </Flex>
            <Flex className="ShopInfo--details" vertical justify="center" gap="large">
                <Flex vertical gap="small">
                    <span style={{fontWeight: 'bold'}}>Địa chỉ</span>
                    <span style={{opacity: '0.8'}}>{ShopDetails.adress}</span>
                </Flex>
                <Flex vertical gap="small">
                    <span style={{fontWeight: 'bold'}}>SĐT</span>
                    <span style={{opacity: '0.8'}}>{ShopDetails.phone}</span>
                </Flex>
                <Flex vertical gap="small">
                    <span style={{fontWeight: 'bold'}}>Trang Web</span>
                    <Flex justify="space-between">
                        <span style={{opacity: '0.8'}}>{ShopDetails.website}</span>
                        <a href={ShopDetails.website} style={{fontWeight: 'bolder', color:'#009f7f'}}>Truy cập trang web</a>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}