import React, { useState } from 'react';
import { Form, Input, Upload, Button, Select, Divider, Typography, Image } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Text } = Typography;
const { Dragger } = Upload;

const ProductForm: React.FC = () => {
    const [form] = Form.useForm();
    const [featuredFileList, setFeaturedFileList] = useState<any[]>([]);
    const [galleryFileList, setGalleryFileList] = useState<any[]>([]);
  
    const onFinish = (values: any) => {
      // Xử lý logic khi submit form
      console.log('Submitted values:', values);
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
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
        <div style={{ marginBottom: '16px' }}>
            <Text strong style={{ fontSize: '20px', fontWeight: 'bold' }}>Sửa Sản Phẩm</Text>
        </div>
        <Divider dashed />
        {/* form ảnh  */}
        <Form.Item >
            <div style={{ display: 'flex', alignItems: 'flex-start',justifyContent: 'space-between' }}>
                <div style={{ width: '330px', marginRight: '20px' }}>
                    <Text strong style={{ fontSize: '20px', fontWeight: 'bold' }}>Hình ảnh nổi bật</Text>
                    <div>
                    <Text style={{ fontSize: '16px' }}>
                    Tải lên hình ảnh đặc trưng sản phẩm của bạn ở đây. Kích thước hình ảnh không được vượt quá <Text strong style={{ fontSize: '16px' }}>2048 MB</Text>
                    </Text>
                    </div>
                </div>
                <div style={{ backgroundColor:'#fff', padding:'30px', borderRadius:'8px', border: '2px solid #E5E7EB', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'}}>
                    <Dragger {...featuredUploaderProps} maxFileSize={2048} accept="image/*" style={{ padding:'0 30px'}}>
                    <p className="ant-upload-drag-icon">
                        <UploadOutlined />
                    </p>
                    <p className="ant-upload-text">Tải lên hình ảnh hoặc kéo và thả PNG, JPG</p>
                    </Dragger>
                </div>
            </div>
            </Form.Item>
        <Divider dashed />
        {/* form ảnh  */}
        <Form.Item >
            <div style={{ display: 'flex', alignItems: 'flex-start',justifyContent: 'space-between' }}>
                <div style={{ width: '330px', marginRight: '20px' }}>
                    <Text strong style={{ fontSize: '20px', fontWeight: 'bold' }}>Các ảnh khác</Text>
                    <div>
                    <Text style={{ fontSize: '16px' }}>
                    Tải lên hình ảnh đặc trưng sản phẩm của bạn ở đây. Kích thước hình ảnh không được vượt quá <Text strong style={{ fontSize: '16px' }}>2048 MB</Text>
                    </Text>
                    </div>
                </div>
                <div style={{ backgroundColor:'#fff', padding:'30px', borderRadius:'8px', border: '2px solid #E5E7EB', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'}}>
                    <Dragger {...galleryUploaderProps} maxFileSize={2048} accept="image/*" style={{ padding:'0 30px'}}>
                    <p className="ant-upload-drag-icon">
                        <UploadOutlined />
                    </p>
                    <p className="ant-upload-text">Tải lên hình ảnh hoặc kéo và thả PNG, JPG</p>
                    </Dragger>
                </div>
            </div>
            </Form.Item>
        <Divider dashed />
        {/* form ảnh  */}
        <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item label="Tên sản phẩm" name="productName" rules={[{ required: true, message: 'Please enter product name' }]}>
            <Input placeholder="Enter product name" />
        </Form.Item>
        <Divider dashed />

        <Form.Item label="Loại" name="categories" layout="vertical">
            <Select mode="multiple" placeholder="Select categories">
            <Option value="Category 1">Category 1</Option>
            <Option value="Category 2">Category 2</Option>
            {/* Thêm danh sách các danh mục khác tại đây */}
            </Select>
        </Form.Item>
        <Divider dashed />

        <Form.Item label="Description" name="description">
            <Input.TextArea rows={4} placeholder="Edit your product description..." />
        </Form.Item>
        <Divider dashed />

        <Form.Item label="Status" name="status">
            <Input placeholder="Status" />
        </Form.Item>

        <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please enter price' }]}>
            <Input placeholder="Price" />
        </Form.Item>

        <Form.Item label="Sale Price" name="salePrice">
            <Input placeholder="Sale Price" />
        </Form.Item>

        <Form.Item label="Quantity" name="quantity" rules={[{ required: true, message: 'Please enter quantity' }]}>
            <Input placeholder="Quantity" />
        </Form.Item>

        <Form.Item label="Inventory" name="inventory" rules={[{ required: true, message: 'Please enter inventory' }]}>
            <Input placeholder="IInventory" />
        </Form.Item>

        <Form.Item label="Width" name="width">
            <Input placeholder="Width" />
        </Form.Item>

        <Form.Item label="Height" name="height">
            <Input placeholder="Height" />
        </Form.Item>

        <Form.Item label="Length" name="length">
            <Input placeholder="Length" />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">
            Gửi
            </Button>
        </Form.Item>
        </Form>
    </div>
  );
};

export default ProductForm;