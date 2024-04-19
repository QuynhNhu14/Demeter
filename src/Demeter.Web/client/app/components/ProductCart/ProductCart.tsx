import React, { useState} from 'react';
import { Table, Space, Button, Checkbox, Text, NumberInput, ActionIcon, Flex } from '@mantine/core';
import { AiOutlineDelete } from "react-icons/ai";
import { FaPlus, FaMinus } from "react-icons/fa6";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  button: {
    width: "fit-content",
  },
});
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

  const handleQuantityChange = (value: number | string, productId: number) => {
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
          <Text fw={600} style={{margin: '0 0 0 10px'}}>{shopName} </Text>
        </Flex>

        <Table style = {{ backgroundColor: "#fff", border: '1px solid #E5E7EB', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)', marginBottom: '20px'}}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th />
              <Table.Th>Sản phẩm</Table.Th>
              <Table.Th>Giá</Table.Th>
              <Table.Th>Số lượng</Table.Th>
              <Table.Th>Tổng cộng</Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        </Flex>
    );
  });

  return <div>
      {tables}
    </div>;
};

export default ProductCart;
