import React from "react";
import { Modal } from "@mantine/core";
import ProductForm from "./FormCoverProduct";
const ModalEditProduct = ({ visible, onCancel }) => {
  return (
    <Modal opened={visible} onCancel={onCancel} footer={null} width={800}>
      <ProductForm />
    </Modal>
  );
};

export default ModalEditProduct;
