import { Badge, Flex, Card, Button, Image, Skeleton, Text} from "@mantine/core";
import { useEffect, useState } from "react";
import { Product } from "../models/products";
import { getAllProducts, getProductByName } from "../services/products";
import * as stylex from "@stylexjs/stylex";
import {IconMinus, IconPlus, IconStarFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

type ProductCardProps = {
  product: Product;
};

const styles = stylex.create({
  voucher: {
    top: "10px", 
    right: "10px"
  },
  salePrice: {
    fontWeight: "500", 
    fontSize: "18px"
  },
  unitPrice: {
    textDecoration: "line-through",
    opacity: "0.5",
    fontSize: "14px",
  },
  card: {
    padding: "20px", 
    width: "100%"
  },
  productName: {
    opacity: "0.8", 
    fontSize: "20px",
    fontWeight: "500"
  },
  elementLeftButton: {
    padding: "0 45px 0 0",
  },
  elementRightButton: {
    padding: "0 0 0 45px",
  }
});

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState<number>(0);
  const navigate = useNavigate();
  const handleAddProduct = () => {
    setQuantity(quantity + 1);
  };

  const handleSubProduct = () => {
    setQuantity(quantity - 1);
  };

  return (
    <Card withBorder shadow="sm">
      {product.vouchers && product.vouchers.length > 0 && <Badge variant="gradient" size="lg" pos={"absolute"} {...stylex.props(styles.voucher)}> - {product.vouchers[0].discount} %</Badge>}
      <div>
        <Image fallbackSrc="https://placehold.co/600x400?text=Placeholder" src={product.imageUrl} alt="product image" width={"150"} height={"120"} onClick={()=> navigate("/products")}/>
      </div>
      <Flex
        gap="sm"
        justify="flex-start"
        align="center"
        direction="column"
        wrap="wrap"
        {...stylex.props(styles.card)}
      >
          <div>
            <Flex gap="xs">
              <span {...stylex.props(styles.salePrice)}>
                {product.vouchers && product.vouchers.length > 0 ? product.baseUnitPrice - product.baseUnitPrice * product.vouchers[0].discount / 100 + "đ" : product.baseUnitPrice + "đ"} 
              </span>
              <span
                {...stylex.props(styles.unitPrice)}
              >
                {" "}
                {product.baseUnitPrice + "đ"}
              </span>
              <span > 
                <Badge color="#F9C127" pos="absolute" size="lg">
                {product.rate ?? 0} <IconStarFilled size={16}/>
                </Badge>
              </span>
            </Flex>
          </div>
        <Text {...stylex.props(styles.productName)}>{product.name}</Text>
        {quantity === 0 ? (
          <Button 
          justify="center"
          variant="gradient"
          size="compact-lg"
          radius="md" 
          leftSection={<IconMinus size={14}/>} 
          rightSection={<IconPlus size={14} />} 
          onClick={handleAddProduct}>
            <Text size="lg"> Thêm vào giỏ</Text>
          </Button>
        ) : (
          <Button 
          justify="center"
          variant="gradient"
          size="compact-lg"
          radius="md" 
          fullWidth >
            <span
              {...stylex.props(styles.elementLeftButton)}
              onClick={handleSubProduct}
            >
            <IconMinus />
            </span>
            <span>{quantity}</span>
            <span
            {...stylex.props(styles.elementRightButton)}
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

