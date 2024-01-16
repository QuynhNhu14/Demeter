import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined, DollarOutlined, ShoppingCartOutlined, ShopOutlined, UserOutlined} from '@ant-design/icons';
import { Card, Row, Col, Statistic } from 'antd';

interface CardData {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

const Summary_Card: React.FC = () => {
  const cardData: CardData[] = [
    {
      title: 'Tổng doanh thu',
      value: 15,
      icon: <DollarOutlined style={{fontSize: '24px', padding: '8px' }}/>,
      color: 'rgb(30, 174, 152)',
    },
    {
      title: 'Tổng số đơn hàng',
      value: 20,
      icon: <ShoppingCartOutlined style={{fontSize: '24px', padding: '8px' }}/>,
      color: 'rgb(134, 93, 255)',
    },
    {
      title: 'Tổng số cửa hàng',
      value: 10,
      icon: <ShopOutlined style={{fontSize: '24px', padding: '8px' }}/>,
      color: 'rgb(215, 78, 255)',
    },
    {
      title: 'Người bán',
      value: 50,
      icon: <UserOutlined style={{fontSize: '24px', padding: '8px' }}/>,
      color: 'rgb(225, 87, 160)',
    },
  ];

  
  return (
    <Card title={<span style={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Bảng tổng quan</span>} bordered={false}>
      <Row gutter={[16, 16]} style={{ display: 'flex', flexWrap: 'wrap'}}>
        {cardData.map((data, index) => (
          <Col key={index} xs={24} sm={12} md={12} lg={6}>
            <div style={{ border: `1px solid #E5E7EB`,  boxShadow: `0px 5px 0px 0px ${data.color}`, padding: '10px 20px', borderRadius: '5px'}}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{ marginRight: '8px',width:'40px', height:'40px', backgroundColor:'#F3F4F5',display: 'block', borderRadius: '5px' }}>{data.icon}</div>
                <div style={{ fontSize: '16px', fontFamily: 'sans-serif', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
                  <div style={{ textAlign: 'right', fontWeight: 'bold' }}> {data.title} </div>
                  <div style={{ fontSize: '24px', fontFamily: 'sans-serif', textAlign: 'right' }}> {data.value} </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default Summary_Card;
