import { useState } from "react";
import styles from "./Navbar.module.css";
import {
  Input,
  
  InputProps,
  Modal,
  Button,
} from "@mantine/core";
import { NavLink } from "react-router-dom";

interface SearchProps extends InputProps {
  inputPrefixCls?: string;
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>,
    info?: {
      source?: "clear" | "input";
    }
  ) => void;
  enterButton?: React.ReactNode;
  loading?: boolean;
}

const { Search } = Input;

const Navbar: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showNoDataModal, setShowNoDataModal] = useState(false);

  const handleSearch: SearchProps["onSearch"] = (value, _event, info) => {
    console.log(info?.source, value);
    if (value.trim() !== "") {
      performSearch(value);
    } else {
      setShowModal(true);
    }
  };

  const performSearch = (value: string) => {
    if (value.trim() !== "") {
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
      console.log("Displaying default search results or message");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowNoDataModal(false);
  };

  return (
    <nav className={styles["navbar"]}>
      <a> Logo </a>
      <
        theme={{
          token: {
            colorPrimary: "#009F7F",
          },
        }}
      >
        <Search
          placeholder="Tìm kiếm sản phẩm của bạn ở đây"
          enterButton="Tìm kiếm"
          onSearch={handleSearch}
          onChange={handleChange}
          value={searchValue}
          style={{ width: 600 }}
          loading={false}
        />
        <Modal
          title="Warning"
          opened={showModal}
          onOk={closeModal}
          onClose={closeModal}
          okText="OK"
          cancelText="Cancel"
        >
          <p>Tìm kiếm sản phẩm của bạn ở đây</p>
        </Modal>
        <Modal
          title="No Data Found"
          opened={showNoDataModal}
          onOk={closeModal}
          onClose={closeModal}
          okText="OK"
          cancelText="Cancel"
        >
          <p>Không tìm thấy sản phẩm</p>
        </Modal>
      </>
      <div className={styles["horizontal-list"]}>
        <NavLink to="/shops" className="ProductTitle">
          Cửa hàng
        </NavLink>
        <div>Mã giảm giá</div>
        <div>Câu hỏi thường gặp</div>
        <div>Liên hệ</div>
      </div>
      <div className={styles["itemlist"]}>
        <li>
          <Button type="primary">Đăng nhập</Button>
        </li>
        <li>
          <Button type="primary">Đăng ký</Button>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
