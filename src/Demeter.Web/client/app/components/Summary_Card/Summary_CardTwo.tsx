import React, { useState } from 'react';
import { SolutionOutlined,FileSyncOutlined, FileDoneOutlined, FileExcelOutlined } from '@ant-design/icons';
import { Card, Row, Col, Button } from 'antd';

interface CardData {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}


const Summary_CardTwo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Weekly');

  const cardData: { [key: string]: CardData[] } = {
    Weekly: [
      {
        title: 'Pending Order',
        value: 1,
        icon: <SolutionOutlined  style={{ fontSize: '24px', padding: '8px'  }}/>,
        color: 'rgb(0, 148, 255)',
      },
      {
        title: 'Processing Order',
        value: 2,
        icon: <FileSyncOutlined style={{ fontSize: '24px', padding: '8px'  }}/>,
        color: 'rgb(40, 183, 255)',
      },
      {
        title: 'Completed Order',
        value: 1,
        icon: <FileDoneOutlined style={{ fontSize: '24px', padding: '8px'  }}/>,
        color: 'rgb(255, 141, 41)',
      },
      {
        title: 'Cancelled Order',
        value: 5,
        icon: <FileExcelOutlined style={{ fontSize: '24px', padding: '8px'  }}/>,
        color: 'rgb(215, 230, 121)',
      },
    ],
    Monthly: [
        {
            title: 'Pending Order',
            value: 3,
            icon: <SolutionOutlined style={{ fontSize: '24px', padding: '8px'  }}/>,
            color: 'rgb(0, 148, 255)',
          },
          {
            title: 'Processing Order',
            value: 4,
            icon: <FileSyncOutlined style={{ fontSize: '24px', padding: '8px'  }}/>,
            color: 'rgb(40, 183, 255)',
          },
          {
            title: 'Completed Order',
            value: 3,
            icon: <FileDoneOutlined style={{ fontSize: '24px', padding: '8px'  }}/>,
            color: 'rgb(255, 141, 41)',
          },
          {
            title: 'Cancelled Order',
            value: 8,
            icon: <FileExcelOutlined style={{ fontSize: '24px', padding: '8px'  }}/>,
            color: 'rgb(215, 230, 121)',
          },
    ],
    Yearly: [
        {
            title: 'Pending Order',
            value: 12,
            icon: <SolutionOutlined style={{ fontSize: '24px', padding: '8px'  }}/>,
            color: 'rgb(0, 148, 255)',
          },
          {
            title: 'Processing Order',
            value: 14,
            icon: <FileSyncOutlined style={{ fontSize: '24px', padding: '8px'  }}/>,
            color: 'rgb(40, 183, 255)',
          },
          {
            title: 'Completed Order',
            value: 10,
            icon: <FileDoneOutlined style={{ fontSize: '24px', padding: '8px'  }}/>,
            color: 'rgb(255, 141, 41)',
          },
          {
            title: 'Cancelled Order',
            value: 10,
            icon: <FileExcelOutlined style={{ fontSize: '24px', padding: '8px' }}/>,
            color: 'rgb(215, 230, 121)',
          },
    ],
  };

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <Card
      title={<span style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Order Status</span>}
      bordered={false}
      extra={
        <Row gutter={[8, 8]} justify="end">
          {Object.keys(cardData).map((key) => (
            <Col key={key}>
              <Button
                type={activeTab === key ? 'primary' : 'default'}
                onClick={() => handleTabChange(key)}
              >
                {key}
              </Button>
            </Col>
          ))}
        </Row>
      }
    >
      <Row gutter={[16, 16]} style={{ display: 'flex', flexWrap: 'wrap'}}>
        {cardData[activeTab].map((data, index) => (
          <Col key={index} xs={24} sm={12} md={12} lg={6}>
            <div style={{ border: `1px solid #E5E7EB`,  boxShadow: `0px 5px 0px 0px ${data.color}`, padding: '10px 20px', borderRadius: '5px', marginBottom: '16px'}}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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

export default Summary_CardTwo;