import React from 'react';
import { Modal } from 'antd';
import ProductForm from './FormCoverProduct';
const ModalEditProduct = ({ visible, onCancel }) => {
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={800}
    >
      <ProductForm />
    </Modal>
  );
};

export default ModalEditProduct;
