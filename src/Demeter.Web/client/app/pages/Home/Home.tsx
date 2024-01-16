import { Flex } from 'antd';
import Offer1 from "../../../assets/offer-1.png";
import Offer2 from "../../../assets/offer-2.png";
import Offer3 from "../../../assets/offer-3.png";
import Offer4 from "../../../assets/offer-4.png";

import "./Home.css";
import "../../App.css";
import { CategoryList } from '../../components/CategoryList/CategoryList';
import { ProductList } from '../../components/ProductList/ProductList';
import Navbar from '../../components/Navbar/Navbar';
import { useState } from 'react';
import logo from '../../../assets/logo.png';

import { Input, InputProps } from 'antd';
import { Footer } from '../../components/Footer/Footer';

interface SearchProps extends InputProps {
  inputPrefixCls?: string;
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>,
    info?: {
      source?: 'clear' | 'input';
    },
  ) => void;
  enterButton?: React.ReactNode;
  loading?: boolean;
}
const { Search } = Input;

export const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showNoDataModal, setShowNoDataModal] = useState(false);

  const handleSearch: SearchProps['onSearch'] = (value, _event, info) => {
    console.log(info?.source, value);
    if (value.trim() !== '') {
      performSearch(value);
    } else {
      setShowModal(true);
    }
  };

  const performSearch = (value: string) => {
    if (value.trim() !== '') {
      // Xử lý tìm kiếm ở đây và set lại state showNoDataModal nếu không có dữ liệu
      const searchResult = []; // Giả sử không có dữ liệu tìm kiếm phù hợp
      if (searchResult.length === 0) {
        setShowNoDataModal(true); // Hiển thị hội thoại khi không có dữ liệu
      } else {
        setShowNoDataModal(false);
        // Xử lý dữ liệu tìm kiếm ở đây nếu có dữ liệu phù hợp
        // gọi API tìm kiếm hoặc xử lý dữ liệu tìm kiếm
      }
    } else {
      setShowNoDataModal(false);
      console.log('Displaying default search results or message');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleLoading = () => {
    console.log('Loading');
  }
  return (
    <div className="Homepage">
        <div className="Homepage--container">
            <Flex className="Homepage--banner" vertical align="center" justify="center">
              <img src={logo} alt="logo" style={{width: '150px', height: '150px'}}/>
              <span style={{fontSize: '50px', fontWeight: 'bold', margin: '0 0 10px 0'}}>ĐẶT HÀNG NGAY TẠI DEMETER</span>
              <span style={{fontSize: '25px', margin: '10px 0'}}>Hãy dùng rau củ quả sạch mỗi ngày - Hàng tươi mới mỗi ngày!</span>
              <Search
                className="Homepage--banner__searchbutton"
                placeholder="Tìm kiếm sản phẩm của bạn ở đây"
                enterButton="Tìm kiếm"
                onSearch={handleSearch}
                onChange={handleChange}
                value={searchValue}
                style={{ width: 600 }}
                loading={false}
              />
            </Flex>
            <Flex className="Homepage--flashcard" justify="space-evenly">
              <img src={Offer1} alt="Express Delivery"/>
              <img src={Offer2} alt="Cash On Delivery"/>
              <img src={Offer3} alt="Gift Voucher"/>
              <img src={Offer4} alt="Free Delivery"/>
            </Flex>
            <Flex  className="Homepage--product">
              <CategoryList/>
              <ProductList categoryId='1' />
            </Flex>
        </div>
        <Footer />
    </div>
  );
}
