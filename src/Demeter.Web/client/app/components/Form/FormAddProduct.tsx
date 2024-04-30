import React, { useState } from "react";
import {
  Input,
  Button,
  Select,
  Divider,
  Text,
  Image,
  TextInput,
} from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import { Dropzone } from "@mantine/dropzone";
import { useForm } from "@mantine/form";

const { Option } = Select;

const ProductForm: React.FC = () => {
  const form = useForm({
    initialValues: { name: "", email: "", age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      age: (value) =>
        value < 18 ? "You must be at least 18 to register" : null,
    },
  });
  const [featuredFileList, setFeaturedFileList] = useState<any[]>([]);
  const [galleryFileList, setGalleryFileList] = useState<any[]>([]);

  const onFinish = (values: any) => {
    // Xử lý logic khi submit form
    console.log("Submitted values:", values);
  };

  const handleFeaturedFileChange = (info: any) => {
    let fileList = [...info.fileList];

    // Limit to only one uploaded file
    fileList = fileList.slice(-1);

    setFeaturedFileList(fileList);
  };

  const handleGalleryFileChange = (info: any) => {
    let fileList = [...info.fileList];

    // Limit the number of uploaded files to a maximum of 10
    fileList = fileList.slice(0, 10);

    setGalleryFileList(fileList);
  };

  const featuredUploaderProps = {
    fileList: featuredFileList,
    beforeUpload: () => false,
    onChange: handleFeaturedFileChange,
  };

  const galleryUploaderProps = {
    fileList: galleryFileList,
    beforeUpload: () => false,
    onChange: handleGalleryFileChange,
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <div style={{ marginBottom: "16px" }}>
        <Text strong style={{ fontSize: "20px", fontWeight: "bold" }}>
          Thêm Sản Phẩm
        </Text>
      </div>
      <Divider dashed />
      {/* form ảnh  */}
      <TextInput>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "330px", marginRight: "20px" }}>
            <Text strong style={{ fontSize: "20px", fontWeight: "bold" }}>
              Hình ảnh nổi bật
            </Text>
            <div>
              <Text style={{ fontSize: "16px" }}>
                Tải lên hình ảnh đặc trưng sản phẩm của bạn ở đây. Kích thước
                hình ảnh không được vượt quá{" "}
                <Text strong style={{ fontSize: "16px" }}>
                  2048 MB
                </Text>
              </Text>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "8px",
              border: "2px solid #E5E7EB",
              boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Dropzone
              {...featuredUploaderProps}
              maxFileSize={2048}
              accept={{ "image/*": [] }}
              style={{ padding: "0 30px" }}
            >
              <p className="ant-upload-drag-icon">
                <IconUpload />
              </p>
              <p className="ant-upload-text">
                Tải lên hình ảnh hoặc kéo và thả PNG, JPG
              </p>
            </Dropzone>
          </div>
        </div>
      </TextInput>
      <Divider dashed />
      {/* form ảnh  */}
      <TextInput>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "330px", marginRight: "20px" }}>
            <Text strong style={{ fontSize: "20px", fontWeight: "bold" }}>
              Các ảnh khác
            </Text>
            <div>
              <Text style={{ fontSize: "16px" }}>
                Tải lên hình ảnh đặc trưng sản phẩm của bạn ở đây. Kích thước
                hình ảnh không được vượt quá{" "}
                <Text strong style={{ fontSize: "16px" }}>
                  2048 MB
                </Text>
              </Text>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "8px",
              border: "2px solid #E5E7EB",
              boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Dropzone
              {...galleryUploaderProps}
              maxFileSize={2048}
              accept={{ "image/*": [] }}
              style={{ padding: "0 30px" }}
            >
              <p className="ant-upload-drag-icon">
                <IconUpload />
              </p>
              <p className="ant-upload-text">
                Tải lên hình ảnh hoặc kéo và thả PNG, JPG
              </p>
            </Dropzone>
          </div>
        </div>
      </TextInput>
      <Divider dashed />
      {/* form ảnh  */}
      <form onSubmit={handleOnSubmit}>
        <TextInput
          label="Tên sản phẩm"
          name="productName"
          rules={[{ required: true, message: "Please enter product name" }]}
        >
          <Input placeholder="Enter product name" />
        </TextInput>
        <Divider dashed />

        <TextInput label="Loại" name="categories" layout="vertical">
          <Select mode="multiple" placeholder="Select categories">
            <Option value="Category 1">Category 1</Option>
            <Option value="Category 2">Category 2</Option>
            {/* Thêm danh sách các danh mục khác tại đây */}
          </Select>
        </TextInput>
        <Divider dashed />

        <TextInput label="Description" name="description">
          <Input.TextArea
            rows={4}
            placeholder="Edit your product description..."
          />
        </TextInput>
        <Divider dashed />

        <TextInput label="Status" name="status">
          <Input placeholder="Status" />
        </TextInput>

        <TextInput
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please enter price" }]}
        >
          <Input placeholder="Price" />
        </TextInput>

        <TextInput label="Sale Price" name="salePrice">
          <Input placeholder="Sale Price" />
        </TextInput>

        <TextInput
          label="Quantity"
          name="quantity"
          rules={[{ required: true, message: "Please enter quantity" }]}
        >
          <Input placeholder="Quantity" />
        </TextInput>

        <TextInput
          label="Inventory"
          name="inventory"
          rules={[{ required: true, message: "Please enter inventory" }]}
        >
          <Input placeholder="IInventory" />
        </TextInput>

        <TextInput label="Width" name="width">
          <Input placeholder="Width" />
        </TextInput>

        <TextInput label="Height" name="height">
          <Input placeholder="Height" />
        </TextInput>

        <TextInput label="Length" name="length">
          <Input placeholder="Length" />
        </TextInput>

        <TextInput>
          <Button type="primary" htmlType="submit">
            Gửi
          </Button>
        </TextInput>
      </form>
    </div>
  );
};

export default ProductForm;
