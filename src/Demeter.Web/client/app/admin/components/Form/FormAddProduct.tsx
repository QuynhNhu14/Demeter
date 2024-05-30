import { useEffect, useState } from "react";
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
} from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { useForm } from "@mantine/form";
import * as stylex from "@stylexjs/stylex";
import { useNavigate } from "react-router-dom";
import { useUserSession } from "../../../hooks/useUserSession";

interface FormValues {
  mainImage: File | null;
  subImages: File[];
}

const FormAddProduct: React.FC = () => {
  const [featuredFileList, setFeaturedFileList] = useState<any[]>([]);
  const [galleryFileList, setGalleryFileList] = useState<any[]>([]);

  const { loggedIn } = useUserSession();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loggedIn) {
      navigate("/home");
    }
  }, [loggedIn]);

  const form = useForm<FormValues>({
    initialValues: { mainImage: null, subImages: [] },
  });

  const selectedMainImage = form.values.mainImage ? (
    <Text key={form.values.mainImage.name}>
      <b>{form.values.mainImage.name}</b> ({(form.values.mainImage.size / 1024).toFixed(2)} kb)
      <CloseButton
        size="xs"
        onClick={() =>
          form.setFieldValue(
            'mainImage',
            null
          )
        }
      />
    </Text>) : null

  const selectedSubImages = form.values.subImages.map((file, index) => (
    <Text key={file.name}>
      <b>{file.name}</b> ({(file.size / 1024).toFixed(2)} kb)
      <CloseButton
        size="xs"
        onClick={() =>
          form.setFieldValue(
            'subImages',
            form.values.subImages.filter((_, i) => i !== index)
          )
        }
      />
    </Text>
  ));

  const handleOnSubmit = (values: any) => {
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

  // tslint:disable-unused-variable
  const featuredUploaderProps = {
    fileList: featuredFileList,
    beforeUpload: () => false,
    onChange: handleFeaturedFileChange,
  };
  // tslint:disable-unused-variable
  const galleryUploaderProps = {
    fileList: galleryFileList,
    beforeUpload: () => false,
    onChange: handleGalleryFileChange,
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
                  Hình ảnh nổi bật
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
                  maxFileSize={2048}
                  accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.svg]}
                  onDrop={(file) => form.setFieldValue('mainImage', file[0])}
                  onReject={() => form.setFieldError('subImages', 'Select images only')}
                  {...stylex.props(styles.dropzone)}
                >
                  <Center h={120}>
                    <Dropzone.Idle><IconUpload />Tải lên hình ảnh hoặc kéo và thả PNG, JPG</Dropzone.Idle>
                    <Dropzone.Accept><IconUpload />Tải lên hình ảnh hoặc kéo và thả PNG, JPG</Dropzone.Accept>
                    <Dropzone.Reject>Files are invalid</Dropzone.Reject>
                  </Center>
                </Dropzone>
                  {form.errors.files && (
                    <Text c="red" mt={5}>
                      {form.errors.files}
                    </Text>
                  )}

                  {form.values.mainImage && (
                    <>
                      {selectedMainImage}
                    </>
                  )}  
              </div>
            </Flex>
            <Divider dashed />
          
            <Flex justify="space-between" align="flex-start">
              <div {...stylex.props(styles.importImageTitle)}>
                <Text fw={700} size="xl">
                  Các ảnh khác
                </Text>
                <div>
                  <Text>
                    Tải lên hình ảnh đặc trưng sản phẩm của bạn ở đây. Kích thước
                    hình ảnh không được vượt quá{" "}
                    <Text fw={700}>
                      2048 MB
                    </Text>
                  </Text>
                </div>
              </div>
              <div {...stylex.props(styles.importImageContainer)}>
                <Dropzone
                  h={120}
                  p={0}
                  multiple
                  maxFileSize={2048}
                  accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.svg]}
                  onDrop={(file) => form.setFieldValue('subImages', file)}
                  onReject={() => form.setFieldError('subImages', 'Select images only')}
                  {...stylex.props(styles.dropzone)}
                >
                  <Center h={120}>
                    <Dropzone.Idle><IconUpload />Tải lên hình ảnh hoặc kéo và thả PNG, JPG</Dropzone.Idle>
                    <Dropzone.Accept><IconUpload />Tải lên hình ảnh hoặc kéo và thả PNG, JPG</Dropzone.Accept>
                    <Dropzone.Reject>Files are invalid</Dropzone.Reject>
                  </Center>
                </Dropzone>
                  {form.errors.files && (
                    <Text c="red" mt={5}>
                      {form.errors.files}
                    </Text>
                  )}

                  {selectedSubImages.length > 0 && (
                    <>
                      {selectedSubImages}
                    </>
                  )}  
              </div>
            </Flex>
            <Divider dashed />
          
            <TextInput
              label="Tên sản phẩm"
              name="productName"
              required
              placeholder= "Enter product name"
            />
            <Divider dashed />

            <MultiSelect
              label="Loại"
              placeholder="Select categories"
              data={['Category 1', 'Category 2']}
            />
            
            <Divider dashed />

            <Textarea
              placeholder="Edit your product description..."
              label="Description"
              minRows={4}
            />
            <Divider dashed />

            <TextInput label="Status" name="status" placeholder="Status" />

            <TextInput
              label="Price"
              name="price"
              required
              placeholder= "Please enter price"
            />

            <TextInput label="Sale Price" name="salePrice" placeholder="Sale Price" />

            <TextInput
              label="Quantity"
              name="quantity"
              required
              placeholder= "Please enter quantity"
            />

            <TextInput
              label="Inventory"
              name="inventory"
              required
              placeholder= "Please enter inventory"
            />

            <TextInput label="Width" name="width" placeholder="Width" />

            <TextInput label="Height" name="height" placeholder="Height" />

            <TextInput label="Length" name="length" placeholder="Length" />
          </Flex>

          <Button size="sm" color="#009f7f" type="submit" m={16}>
            Gửi
          </Button>
        </form> 
    </div>
  );
};

export default FormAddProduct;

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