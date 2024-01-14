import React from 'react';
import { Card, Avatar, Descriptions, Typography, Button, Divider } from 'antd';
import { EditOutlined, MailOutlined, EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons';
import { ArrowDownOutlined, ArrowUpOutlined, DollarOutlined,InboxOutlined, ShoppingCartOutlined,ProfileOutlined, ShopOutlined, UserOutlined} from '@ant-design/icons';
const { Text, Link } = Typography;

import './ShopPreview.css';
const ShopProfile: React.FC = () => {
  // Dữ liệu giả mạo
  const UserData = {
    avatar: 'https://pickbazar-react-admin.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F891%2FGroup-36321.png&w=1920&q=75',
    image: 'https://pickbazar-react-admin.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F892%2FUntitled-2.jpg&w=1920&q=75',
    name: 'John Doe',
    username: 'john_doe',
    email: 'john.doe@example.com',
    phoneNumber: '0969849388',
    location: 'Ho Chi Minh City, VN',
    Registered:'Ngày 19 Tháng 1 Năm 2023',
    Bio: 'Cửa hàng tạp hóa là cửa hàng tốt nhất quanh thành phố. Điều này đang được điều hành dưới sự điều hành của chủ cửa hàng và mục tiêu của chúng tôi là cung cấp sản phẩm mới, chất lượng và dịch vụ khách hàng không rắc rối.',
  };

  const data={
    totalproducts:'23',
    totaloder:'8',
    ACR:'15%',
    GS:'0',
    CB:'0',
  };

  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src={UserData.image} alt="Cover Image" style={{ width: '100%', height: 'auto', maxHeight: '500px',objectFit: 'cover' }} />
        <div className="profile-style">
          <img src={UserData.avatar} className="profile-avatar"/>
          <div className="profile-info">
            <div className="profile-name"> {UserData.name}</div>

            <div className="profile-details">
              <div className="profile-text">
                <MailOutlined /> {UserData.email}
              </div>

              <div className="profile-text">
                <EnvironmentOutlined /> {UserData.location}
              </div>

              <div className="profile-text">
                <PhoneOutlined /> {UserData.phoneNumber}
              </div>

              <Button type="primary" icon={<EditOutlined />} className="edit-button">
                Sửa thông tin
              </Button>
            </div>

          </div>
        </div>
      </div>
      <div style={{display:'flex'}}>
        <Card style={{ width: '100%', maxWidth: 300, margin:'20px 20px'}}>
        <Text type="secondary">Đã đăng ký kể từ</Text>
        <div style={{fontWeight:'bold', color:'#454545'}}> {UserData.Registered}</div>
        <Divider />
        <div style={{fontWeight:'bold', color:'#454545', fontSize:'24px'}}>Tiểu sử</div>
        <Text type="secondary">{UserData.Bio}</Text>
        </Card>

        <Card style={{ width: '100%', margin: '20px 20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Card style={{ flex: '1', margin: '20px 10px',minHeight: 100, minWidth: 250, borderColor: '#ff0000' }}>
              <div style={{ fontWeight: 'bold', color: '#454545', fontSize: '24px' }}>{data.totalproducts}</div>
              <Text type="secondary">Tổng số sản phẩm</Text>
              <InboxOutlined style={{fontSize: '24px', padding: '0 18px' }}/>
            </Card>

            <Card style={{ flex: '1', margin: '20px 10px',minHeight: 100, minWidth: 250, borderColor: '#00ff00' , display:'flex'}}>
              <div style={{ fontWeight: 'bold', color: '#454545', fontSize: '24px' }}>{data.totaloder}</div>
              <Text type="secondary">Tổng số đơn đặt hàng</Text>
              <ProfileOutlined style={{fontSize: '24px', padding: '0 18px' }}/>
            </Card>

            <Card style={{ flex: '1', margin: '20px 10px',minHeight: 100, minWidth: 250, borderColor: '#0000ff' }}>
              <div style={{ fontWeight: 'bold', color: '#454545', fontSize: '24px' }}>{data.ACR}</div>
              <Text type="secondary">Tỷ lệ hoa hồng quản trị</Text>
              <ShopOutlined style={{fontSize: '24px', padding: '0 18px' }}/>
            </Card>

            <Card style={{ flex: '1', margin: '20px 10px',minHeight: 100, Width: 250, borderColor: '#ffff00' }}>
              <div style={{ fontWeight: 'bold', color: '#454545', fontSize: '24px' }}>{data.GS}</div>
              <Text type="secondary">Tổng doanh thu</Text>
              <DollarOutlined style={{fontSize: '24px', padding: '0 18px' }}/>
            </Card>

            <Card style={{ flex: '1', margin: '20px 10px',minHeight: 100, minWidth: 250, borderColor: '#ff00ff' }}>
              <div style={{ fontWeight: 'bold', color: '#454545', fontSize: '24px' }}>{data.CB}</div>
              <Text type="secondary">Số dư hiện tại</Text>
              <DollarOutlined style={{fontSize: '24px', padding: '0 18px' }}/>
            </Card>

          </div>
        </Card>
      </div>
      
    </div>
  );
};

export default ShopProfile;