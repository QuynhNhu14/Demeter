import { useState} from 'react';
import { Table, Button, Checkbox, Text, NumberInput, Flex } from '@mantine/core';
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react';
import * as stylex from "@stylexjs/stylex";

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
      <Table.Tr key={element.id}>
        <Table.Td>
          <Checkbox 
            color="#009f7f" 
            checked={element.selected} 
            onChange={(e:any) => handleProductCheckboxChange(element.id,element.shop, e.target.checked)} />
        </Table.Td>
        <Table.Td>
          <Flex align="center" gap={4}>
            <img src={element.image} alt={element.name} {...stylex.props(styles.productImg)} />
            {element.name}
          </Flex>
        </Table.Td>
        <Table.Td>
          <Flex gap={8}>
            <Text td="line-through" fs="italic">{element.oldPrice} đ</Text>
            <Text fw={500}>{element.newPrice} đ</Text>
          </Flex>
        </Table.Td>
        <Table.Td>
          <Flex gap={8}>
            <Button
              variant="default"
              p={12}
              onClick={() => decreaseQuantity(element.id)}><IconMinus size={10} /></Button>
            <NumberInput 
              {...stylex.props(styles.numberInput)}
              min={1} 
              value={element.quantity} 
              hideControls 
              onChange={(value) => handleQuantityChange(value, element.id)} />
            <Button
              variant="default"
              p="0 12px"
              onClick={() => increaseQuantity(element.id)}><IconPlus size={10} /></Button>
          </Flex>
        </Table.Td>
        <Table.Td>{element.quantity * element.newPrice} VNĐ</Table.Td>
        <Table.Td>
          <Button 
            variant="default"
            p = "0 10px"
            onClick={() => deleteProduct(element.id)} >
              <IconTrash size={18}/>
          </Button>
        </Table.Td>
      </Table.Tr>
    ));

    return (
      <Flex key={shopName} direction="column" gap={8} >
        <Flex>
          <Checkbox
            color="#009f7f"
            checked={isShopSelected}
            onChange={(e:any) => handleShopCheckboxChange(shopName, e.target.checked)}
          />
          <Text fw={600} m = '0 0 0 10px'>{shopName} </Text>
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


const styles = stylex.create({
  ProfilePage: {
    backgroundColor: "#f3f4f6",
    width: "100%",
    paddingBottom: "30px",
  },
  userNavbar: {
    flex: "3",
  },
  customerInfo: {
    flex: "11", 
    padding: "24px 24px 0 0",
  },
  productImg: {
    width: '50px', 
    height: '50px',
  },
  numberInput: {
    width: '100px',
  }
});