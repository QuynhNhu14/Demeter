import { Flex } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import "./Shops.css";
import shopLogo from "../../../assets/shoplogo.png";
import { CiLocationOn } from "react-icons/ci";
const shopList = [
    {
        id: '1',
        name: 'Cửa Hàng Nông Sản',
        logo: shopLogo,
        address: '12/24, khu phố 6, phường Linh Trung, tp. Thủ Đức',
    },
    {
        id: '2',
        name: 'Cửa Hàng Nông Sản',
        logo: shopLogo,
        address: '12/24, khu phố 6, phường Linh Trung, tp. Thủ Đức',
    },
    {
        id: '3',
        name: 'Cửa Hàng Nông Sản',
        logo: shopLogo,
        address: '12/24, khu phố 6, phường Linh Trung, tp. Thủ Đức',
    },
    {
        id: '4',
        name: 'Cửa Hàng Nông Sản',
        logo: shopLogo,
        address: '12/24, khu phố 6, phường Linh Trung, tp. Thủ Đức',
    },
    {
        id: '5',
        name: 'Cửa Hàng Nông Sản',
        logo: shopLogo,
        address: '12/24, khu phố 6, phường Linh Trung, tp. Thủ Đức',
    },
    {
        id: '6',
        name: 'Cửa Hàng Nông Sản',
        logo: shopLogo,
        address: '12/24, khu phố 6, phường Linh Trung, tp. Thủ Đức',
    },
    {
        id: '7',
        name: 'Cửa Hàng Nông Sản',
        logo: shopLogo,
        address: '12/24, khu phố 6, phường Linh Trung, tp. Thủ Đức',
    },
    {
        id: '8',
        name: 'Cửa Hàng Nông Sản',
        logo: shopLogo,
        address: '12/24, khu phố 6, phường Linh Trung, tp. Thủ Đức',
    },
    {
        id: '9',
        name: 'Cửa Hàng Nông Sản',
        logo: shopLogo,
        address: '12/24, khu phố 6, phường Linh Trung, tp. Thủ Đức',
    },
]
export const Shops = () => {
    const handleClick = () => {
        window.location.href = "../shop-product";
    }
    return(
        <div className="ShopsPage">
            <Navbar/>
            <Flex className="ShopsPage--container" vertical gap="large">
                <span style={{fontWeight: "700", fontSize: '24px', opacity: 0.9}}>Tất cả cửa hàng</span>
                    <Flex className="ShopsPage--ListContainer" wrap="wrap" gap="middle" justify="space-between">
                {shopList.map(shop => 
                    <div className="ShopsPage--ShopItem" onClick={handleClick}>
                        <img src={shop.logo} alt="shop logo" style={{borderRadius: '100px', marginRight:'10px'}} />
                        <Flex vertical justify='space-evenly'>
                            <span style={{fontWeight: "600", fontSize: '18px'}}>{shop.name}</span>
                            <Flex align='flex-start'>
                                <CiLocationOn size={20} style={{opacity: 0.8, marginRight:'3px'}}/>
                                <span style={{opacity: 0.8, fontSize: '14px'}}>{shop.address}</span>
                            </Flex>
                        </Flex>
                    </div>
                )}
                </Flex>
            </Flex>
        </div>
    )
}