import { Badge, Card, Flex } from "@mantine/core";
import { useEffect, useState } from "react";
import { Product } from "../models/products";
import { getAllProducts } from "../services/products";

import {IconStarFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card withBorder shadow="sm">
      {product.vouchers && product.vouchers.length > 0 && <Badge pos={"absolute"} style={{ top: "10px", right: "10px" }}> - {product.vouchers[0].discount} %</Badge>}
      <div>
        <img src={product.imageUrl} alt="product image" width={"150"} height={"120"}/>
      </div>
      <Flex
        gap="sm"
        justify="flex-start"
        align="center"
        direction="column"
        wrap="wrap"
        style={{ padding: "20px", width: "100%" }}
      >
          <div>
            <Flex gap="sm" align="center">
              <span style={{ fontWeight: "500", fontSize: "18px" }}>
                {product.vouchers && product.vouchers.length > 0 ? product.baseUnitPrice - product.baseUnitPrice * product.vouchers[0].discount / 100 + "đ" : product.baseUnitPrice + "đ"} 
              </span>
              <span
                style={{
                  textDecoration: "line-through",
                  opacity: "0.5",
                  fontSize: "14px",
                }}
              >
                {" "}
                {product.baseUnitPrice + "đ"}
              </span>
            </Flex>
            <Badge color="#F9C127" pos={"absolute"} alignContent={"center"}>
              {product.rate ?? 0} <IconStarFilled size={16}/>
            </Badge>
          </div>
        <span style={{ opacity: "0.8", fontSize: "16px" }}>{product.name}</span>
        
      </Flex>
      {/* <Modal opened={isModalOpen} onClose={handleCancel} size="75%">
        <ProductDetail productId={productId} />
      </Modal> */}
    </Card>
  );
}

type ProductListProps = {
  categoryId?: string;
  shopId?: string;
};

export const ProductList: React.FC<ProductListProps> = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Product[]>([]);
  const fetchData = async () => {
    const data = await getAllProducts();
    if (!data) {
      return;
    }
    setData(data);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div onClick={()=> {navigate('/')}}>
      <Flex
        gap="large"
        align="center"
      >
        <Flex m={30} wrap="wrap" gap="sm" justify={"space-between"}>
          {data.map((product) => (
            <ProductCard product={product} />
          ))}
        </Flex>
      </Flex>
    </div>
  );
};
