import { useState } from "react";
import {
  Button,
  MultiSelect,
  Divider,
  Text,
  TextInput,
  Textarea,
  CloseButton,
  Center,
  Flex,
  Group,
  rem
} from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, MIME_TYPES, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useForm } from "@mantine/form";
import * as stylex from "@stylexjs/stylex";

interface FormValues {
  image: File[];
  name: string;
  categories: string[];
  description: string;
  price: number;
  quantity: number;
}

const AddProductForm: React.FC = () => {
  const form = useForm<FormValues>({
    initialValues: { image: [], name: "", categories: [], description: "", price: 0, quantity: 0},
  });

  const selectedImages = form.values.image.map((file, index) => (
    <Text key={file.name}>
      <b>{file.name}</b> ({(file.size / 1024).toFixed(2)} kb)
      <CloseButton
        size="xs"
        onClick={() =>
          form.setFieldValue(
            'image',
            form.values.image.filter((_, i) => i !== index)
          )
        }
      />
    </Text>
  ));

  const handleOnSubmit = (values: any) => {
    // Xử lý logic khi submit form
    console.log("Submitted values:", values);
    console.log("Submitted form:", form);
  };



  return (
    <div {...stylex.props(styles.productForm)}>
      <div {...stylex.props(styles.title)}>
        <Text fw={700} size="xl">
          Thêm Sản Phẩm
        </Text>
      </div>
      <Divider dashed />
        <form onSubmit={handleOnSubmit}>
          <Flex gap={16} p={16} direction="column">
            <Flex align="flex-start" justify="space-between">
              <div {...stylex.props(styles.importImageTitle)}>
                <Text fw={700} size="xl">
                  Hình ảnh sản phẩm
                </Text>
                <div>
                  <Text>
                    Tải lên hình ảnh đặc trưng sản phẩm của bạn ở đây. Kích thước
                    hình ảnh không được vượt quá{" "}
                    <Text strong>
                      2048 MB
                    </Text>
                  </Text>
                </div>
              </div>
              <div {...stylex.props(styles.importImageContainer)}>
                <Dropzone
                    h={120}
                    p={0}
                    onDrop={(files) => form.setFieldValue('image', files)}
                    onReject={(files) => console.log('rejected files', files)}
                    maxSize={5 * 1024 ** 2}
                    accept={IMAGE_MIME_TYPE}
                    >
                    <Group justify="center" gap="xl" h={120} style={{ pointerEvents: 'none' }}>
                        <Dropzone.Accept>
                        <IconUpload
                            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                            stroke={1.5}
                        />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                        <IconX
                            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                            stroke={1.5}
                        />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                        <IconPhoto
                            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                            stroke={1.5}
                        />
                        </Dropzone.Idle>

                        <div>
                        <Text size="xl" inline>
                            Drag images here or click to select files
                        </Text>
                        <Text size="sm" c="dimmed" inline mt={7}>
                            Attach as many files as you like, each file should not exceed 5mb
                        </Text>
                        </div>
                    </Group>
                    </Dropzone>
                  {form.errors.files && (
                    <Text c="red" mt={5}>
                      {form.errors.files}
                    </Text>
                  )}

                  {form.values.image && (
                    <>
                      {selectedImages}
                    </>
                  )}  
              </div>
            </Flex>
        
            <Divider dashed />
          
            <TextInput
              label="Tên sản phẩm"
              name="productName"
              required
              placeholder= "Nhập tên sản phẩm"
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
            />
            <Divider dashed />

            <MultiSelect
              label="Loại"
              placeholder="Chọn danh mục sản phẩm"
              data={[{value: '1', label: "Rau củ & Trái cây"}, {value: '2', label: "Thịt cá"}, {value: '3', label: "Ngũ cốc"}]}
              onChange={(event) => form.setFieldValue('categories', event)}
            />
            
            <Divider dashed />

            <Textarea
              placeholder="Nhập mô tả cho sản phẩm của bạn tại đây"
              label="Mô tả"
              minRows={4}
              onChange={(event) => form.setFieldValue('description', event.currentTarget.value)}
            />
            <Divider dashed />

            <TextInput
              label="Giá"
              name="price"
              required
              placeholder= "Nhập giá trên 1 đơn vị sản phẩm"
              onChange={(event) => form.setFieldValue('price', event.currentTarget.value)}
            />

            <TextInput
              label="Số lượng"
              name="quantity"
              required
              placeholder= "Nhập số lượng sản phẩm đang có"
              onChange={(event) => form.setFieldValue('quantity', event.currentTarget.value)}
            />
          </Flex>

          <Button size="sm" color="#009f7f" type="submit" m={16}>
            Gửi
          </Button>
        </form> 
    </div>
  );
};

export default AddProductForm;

const styles = stylex.create({
  productForm: {
    padding: 20, 
    fontFamily: "sans-serif",
  },
  title: {
    marginBottom: "16px",
  },
  importImageTitle: {
    width: "330px", 
    marginRight: "20px"
  },
  importImageContainer:{
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    border: "2px solid #E5E7EB",
    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
  },
  dropzone: {
    padding: "0 30px",
  }
});