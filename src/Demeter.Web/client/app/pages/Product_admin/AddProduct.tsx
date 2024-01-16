import React from 'react';
import { Form } from 'antd';
import FormAddProduct from '../../components/Form/FormAddProduct';
import styles from './AddProduct.module.css'

const AddProduct: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    // Xử lý logic khi submit form, có thể gửi thông tin lên server, lưu vào cơ sở dữ liệu, ...
    console.log('Submitted values:', values);
  };

  return (
    <div className={styles.AddProduct}>
      <FormAddProduct form={form} onSubmit={handleSubmit} />
    </div>
  );
};

export default AddProduct;
