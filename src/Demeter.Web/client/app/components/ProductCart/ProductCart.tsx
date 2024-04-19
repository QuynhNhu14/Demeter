import React, { useState} from 'react';
import { Table, Space, InputNumber, Button, Checkbox, Typography} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';


interface Props {
  initialProducts: Product[];
  updateSelectedProducts: (updatedProducts: Product[]) => void;
}


export interface Product {
  id: number;
  name: string;
  image: string;
  oldPrice: number;
  newPrice: number;
  quantity: number;
  shop: string;
  selected: boolean;
}

const {Text} = Typography;

const ProductCart: React.FC<Props> = ({ initialProducts, updateSelectedProducts }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleProductCheckboxChange = (productId: number, shop: string, checked: boolean) => {
    console.log({productId})
    const updatedProducts = products.map((product) => {
      if(product.selected && product.shop !== shop) {
        return { ...product, selected: false } };

      if (product.id === productId) {
        return { ...product, selected: checked };
      }
      return product;
    });
    setProducts(updatedProducts);
    updateSelectedProducts(updatedProducts); // Gọi hàm callback để cập nhật danh sách sản phẩm được chọn
  };
  const handleShopCheckboxChange = (shopName: string, checked: boolean) => {
    const updatedProducts = products.map((product) => {
      if (product.shop === shopName) {
        return { ...product, selected: checked };
      }
      return product;
    });
    setProducts(updatedProducts);
    updateSelectedProducts(updatedProducts);
  };

  const columns = [
    {
      title: '',
      dataIndex: 'check',
      key: 'check',
      render: (_: any, record: Product) => (
        <Checkbox checked={record.selected} onChange={(e) => handleProductCheckboxChange(record.id, e.target.checked)} />
      ),
    },
    {
      title: 'Sản phẩm',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: Product) => (
        <Space>
          <img src={record.image} alt={record.name} style={{ width: '50px', height: '50px' }} />
          <span>{record.name}</span>
        </Space>
      ),
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      render: (text: string, record: Product) => (
        <Space align="baseline">
          <Text delete italic>{record.oldPrice} đ</Text>
          <Text strong>{record.newPrice} đ</Text>
        </Space>
      ),
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
      render: (text: string, record: Product) => (
        <Space>
          <Button onClick={() => decreaseQuantity(record.id)}>-</Button>
          <InputNumber min={1} value={record.quantity} onChange={(value) => handleQuantityChange(value, record.id)} />
          <Button onClick={() => increaseQuantity(record.id)}>+</Button>
        </Space>
      ),
    },
    {
      title: 'Tổng cộng',
      dataIndex: 'total',
      key: 'total',
      render: (text: string, record: Product) => <span>{record.quantity * record.newPrice} VNĐ</span>,
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      align: 'center',
      render: (text: string, record: Product) => (
        <Button icon={<DeleteOutlined />} onClick={() => deleteProduct(record.id)} />
      ),
    },
  ];

  const handleQuantityChange = (value: number | undefined, productId: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId && value !== undefined && typeof value !== 'string') {
        return { ...product, quantity: value };
      }
      return product;
    });
    setProducts(updatedProducts);
    
    updateSelectedProducts(updatedProducts);
  };

  const increaseQuantity = (productId: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
    
    updateSelectedProducts(updatedProducts);
  };

  const decreaseQuantity = (productId: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
    
    updateSelectedProducts(updatedProducts);
  };

  const deleteProduct = (productId: number) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    
    updateSelectedProducts(updatedProducts);
  };

  const groupedProducts = products.reduce((acc: { [key: string]: Product[] }, product: Product) => {
    if (!acc[product.shop]) {
      acc[product.shop] = [];
    }
    acc[product.shop].push(product);
    return acc;
  }, {});

  const tables = Object.keys(groupedProducts).map((shopName) => {
    const shopProducts = groupedProducts[shopName];
    const isShopSelected = shopProducts.every((product) => product.selected);

    const rows = shopProducts.map((element) => (
      <Table.Tr key={element.name}>
        <Table.Td>
          <Checkbox 
            color="#009f7f" 
            checked={element.selected} 
            onChange={(e) => handleProductCheckboxChange(element.id,element.shop, e.target.checked)} />
        </Table.Td>
        <Table.Td>
          <Flex align="center" gap={4}>
            <img src={element.image} alt={element.name} style={{ width: '50px', height: '50px' }} />
            {element.name}
          </Flex>
        </Table.Td>
        <Table.Td>
          <Flex gap={8}>
            <Text td="line-through" fs="italic">{element.oldPrice} đ</Text>
            <Text fw={700}>{element.newPrice} đ</Text>
          </Flex>
        </Table.Td>
        <Table.Td>
          <Flex gap={8}>
            <Button
              variant="default"
              style={{padding: 12}}
              onClick={() => decreaseQuantity(element.id)}><FaMinus size={10} /></Button>
            <NumberInput 
              style={{width: '100px'}}
              min={1} 
              value={element.quantity} 
              hideControls 
              onChange={(value) => handleQuantityChange(value, element.id)} />
            <Button
              variant="default"
              style={{padding: "0 12px"}}
              onClick={() => increaseQuantity(element.id)}><FaPlus size={10} /></Button>
          </Flex>
        </Table.Td>
        <Table.Td>{element.quantity * element.newPrice} VNĐ</Table.Td>
        <Table.Td>
          <Button 
            variant="default"
            style={{padding: "0 10px"}}
            onClick={() => deleteProduct(element.id)} >
              <AiOutlineDelete size={18}/>
          </Button>
        </Table.Td>
      </Table.Tr>
    ));

    return (
      <Flex key={shopName} direction="column" gap={8} >
        <Flex style={{marginTop: '0'}}>
          <Checkbox
            color="#009f7f"
            checked={isShopSelected}
            onChange={(e) => handleShopCheckboxChange(shopName, e.target.checked)}
          />
          <Text strong style={{margin: '0 0 0 10px'}}>{shopName} </Text>
        </h2>
        <Table columns={columns} dataSource={shopProducts} pagination={false} showHeader={true} style = {{ border: '1px solid #E5E7EB', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'}}/>
      </div>
    );
  });

  return <div>
    {/* <div className="box">
      <div className="table-header">
            <Text strong>Check</Text>
            <Text strong>Product</Text>
            <Text strong>Price</Text>
            <Text strong>Quantity</Text>
            <Text strong>Total</Text>
            <Text strong>Action</Text>
        </div> 
      </div>
      <Table columns={columns}> </Table> */}
      
      {tables}
    </div>;
};

export default ProductCart;


