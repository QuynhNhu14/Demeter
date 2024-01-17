import { CalendarOutlined, MailOutlined, PhoneOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Divider, Flex, Form, Input, Select, Typography, Upload } from "antd";
import { useState } from "react";
import "./Profile.css";
const { Dragger } = Upload;
const { Text } = Typography;

type user ={
    id:	string;
    fullName: string;
    gender: string;
    dateOfBirth: string;
    avatarUrl: string;
    address: {country: string, addressLines: string, locality: string, region: string, postcode: string}
}

const userInfo = {
    id:	"1",
    fullName: "Gojo Sulaiman",
    gender: "male",
    dateOfBirth: "17-10-2000",
    avatarUrl: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/216324243_105772968470959_1082507204221870375_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=iuOcB1i3pdsAX-xs5oj&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAKTB5UROiJQ1DLabJqLkYMBaXmcbYU_ZesjV3miN6kKw&oe=65A73259",
    address: {country: "Việt Nam", locality: "Ký Túc Xá ĐHQG Khu A, khu phố 6, phường Linh Trung, tp Thủ Đức, Hồ Chí Minh"},
    email: "gojosulaiman@gmail.com",
    phone: "1234 56789"
}

export const CustomerInfo = () => {
    const [featuredFileList, setFeaturedFileList] = useState<any[]>([]);
    const handleFeaturedFileChange = (info: any) => {
        let fileList = [...info.fileList];
      
        // Limit to only one uploaded file
        fileList = fileList.slice(-1);
      
        setFeaturedFileList(fileList);
      };
    const featuredUploaderProps = {
        fileList: featuredFileList,
        beforeUpload: () => false,
        onChange: handleFeaturedFileChange,
      };
    return(
        <Flex className="CustomerInfo" vertical gap="large">
            <Flex className="PersonalInfo">
                <Flex style={{flex: '2'}} justify="center" align="center">
                    <img src={userInfo.avatarUrl} alt="Avatar" style={{width: '200px', height: '200px', border: "15px solid rgba(38, 156, 133, 0.3)", borderRadius: '100px'}}/>
                </Flex>
                <Flex vertical gap="small" style={{flex: '3'}} align="flex-end">
                    <Flex vertical gap="small" align="flex-start" style={{width: '100%'}}>
                        <span style={{opacity: '0.7'}}>Tên</span>
                        <Input defaultValue={userInfo.fullName} prefix={<UserOutlined />} />
                    </Flex>
                    <Flex vertical gap="small" align="flex-start" style={{width: '100%'}}>
                        <span style={{opacity: '0.7'}}>Ngày sinh</span>
                        <Input defaultValue={userInfo.dateOfBirth} prefix={<CalendarOutlined />} />
                    </Flex>
                    <Flex vertical gap="small" align="flex-start" style={{width: '100%'}}>
                        <Form.Item style={{width: '100%'}}>
                                <div style={{ backgroundColor:'#fff', width: '100%', height:'160px', padding:'15px', borderRadius:'8px', border: '2px solid #E5E7EB', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'}}>
                                    <Dragger {...featuredUploaderProps} accept="image/*" style={{ padding:'0 10px'}}>
                                    <p className="ant-upload-drag-icon">
                                        <UploadOutlined  />
                                    </p>
                                    <p className="ant-upload-text" style={{fontSize: '14px', opacity: '0.7'}}>Tải ảnh lên hoặc kéo thả với PNG, JPG</p>
                                    </Dragger>
                                </div>
                            </Form.Item>
                    </Flex>
                    <Button style={{width: '100px', backgroundColor: "#009f7f", color: '#fff'}}>Lưu</Button>
                </Flex>
            </Flex>
            <Flex className="Contact">
                <Flex vertical gap="small" style={{width: '100%', marginRight: '50px'}}>
                    <Flex vertical gap="small" align="flex-start" style={{width: '100%'}}>
                        <span style={{opacity: '0.7'}}>E-mail</span>
                        <Input defaultValue={userInfo.email} prefix={<MailOutlined />} />
                    </Flex>
                    <Flex vertical gap="small" align="flex-start" style={{width: '100%'}}>
                        <span style={{opacity: '0.7'}}>Số điện thoại</span>
                        <Input defaultValue={`+84 ${userInfo.phone}`} prefix={<PhoneOutlined />} />
                    </Flex>
                </Flex>
                <Flex justify="center" align="flex-end">
                    <Button style={{width: '100px', backgroundColor: "#009f7f", color: '#fff'}}>Cập nhật</Button>
                </Flex>
            </Flex>
            <Flex className="Address" gap="middle" vertical>
                <Flex justify="space-between">
                    <span style={{opacity: '0.7'}}>Địa chỉ</span>
                    <span style={{color: '#009f7f', fontWeight: 'bolder', cursor: 'pointer'}}>+ Thêm</span>
                </Flex>
                <Flex vertical gap="small" style={{backgroundColor: '#c4c4c4', width: '400px', padding: '10px', borderRadius: '10px'}}>
                    <span style={{fontWeight: '500'}}>Địa chỉ giao hàng</span>
                    <span>{userInfo.address.locality}, {userInfo.address.country}</span>
                </Flex>
            </Flex>
        </Flex>
    )
}