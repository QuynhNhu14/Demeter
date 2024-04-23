import { Badge, Flex, Card, Button, Image, Skeleton} from "@mantine/core";
import { useEffect, useState } from "react";
import { Product } from "../models/products";
import { getAllProducts, getProductByName } from "../services/products";

import {IconMinus, IconPlus, IconStarFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState<number>(0);

  const handleAddProduct = () => {
    setQuantity(quantity + 1);
  };

  const handleSubProduct = () => {
    setQuantity(quantity - 1);
  };

  const navigate = useNavigate();

  return (
    <Card withBorder shadow="sm">
      {product.vouchers && product.vouchers.length > 0 && <Badge pos={"absolute"} style={{ top: "10px", right: "10px" }}> - {product.vouchers[0].discount} %</Badge>}
      <div>
        <Image fallbackSrc="https://placehold.co/600x400?text=Placeholder" src={product.imageUrl} alt="product image" width={"150"} height={"120"} onClick={()=> navigate("/products")}/>
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
        {quantity === 0 ? (
          <Button variant="filled" fullWidth leftSection={<IconMinus size={14}/>} rightSection={<IconPlus size={14} />} onClick={handleAddProduct}>
            <span >Thêm vào giỏ</span>
          </Button>
        ) : (
          <Button>
            <span
              onClick={handleSubProduct}
            >
            <IconMinus />
            </span>
            <span>{quantity}</span>
            <span
              onClick={handleAddProduct}
            >
              <IconPlus/>
            </span>
          </Button>
        )}
      </Flex>
    </Card>
  );
}

type ProductListProps = {
  categoryId?: string;
  shopId?: string;
  search?: string;
};

export const ProductList: React.FC<ProductListProps> = ({search}: ProductListProps) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Product[]>([]);
  const fetchData = async () => {
    if (search) {
      const data = await getProductByName(search);
      if (!data) {
        return;
      }
      setLoading(false);
      setData(data);
    }
    else {
      const data = await getAllProducts();
      if (!data) {
        return;
      }
      setLoading(false);
      setData(data);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <Skeleton visible={loading}>
      <Flex
        gap="large"
        align="center"
        justify="space-between"
      >
        <Flex m={30} wrap="wrap" gap={30} justify={"flex-start"}>
          { data.map((product) => (
            <ProductCard product={product}/>
          ))}
        </Flex>
      </Flex>
    </Skeleton>
  );
};

