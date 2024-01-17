import React from 'react';
import { Flex, Form } from 'antd';
import FormAddProduct from '../../components/Form/FormAddProduct';
import styles from './AddProduct.module.css'
import ShopHeader from '../ShopPage/ShopHeader';
import Navbar_Shop from '../../components/Navbar_Shop/Navbar_Shop';

const AddProduct: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    // Xử lý logic khi submit form, có thể gửi thông tin lên server, lưu vào cơ sở dữ liệu, ...
    console.log('Submitted values:', values);
  };

  return (
    <Flex style={{backgroundColor: '#f3f4f6'}}>
      <div style={{flex: '2', width: '100%' }}>
          <Navbar_Shop />
      </div>
      <div style={{flex: '9', width: '100%' }}>
          <ShopHeader />
          <div className={styles.AddProduct}>
            <FormAddProduct form={form} onSubmit={handleSubmit} />
          </div>
      </div>
    </Flex>
  );
};

export default AddProduct;
