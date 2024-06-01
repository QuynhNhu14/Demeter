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
  },
  productImage: {
    width: "100%",
    aspectRatio: "1/1",
  },
  card: {
    width: "20%",
    display: "flex",
    gap: "10px",
  }
});

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState<number>(0);
  const navigate = useNavigate();
  const handleAddProduct = () => {
    setQuantity(quantity + 1);
    if(localStorage.getItem('cart')){
      let cart = JSON.parse(localStorage.getItem('cart'));
      const index = cart.findIndex(ele => ele.id === product.id);
      if(index !== -1){
        cart[index].quantity++;
      }
      else{
        const cartItem = {
          id: product.id,
          name: product.name,
          image: product.imageUrl, 
          oldPrice: product.baseUnitPrice,
          newPrice: product.discountedPrice,
          shop: product.vendor,
          selected: false,
          quantity: 1,
        }
        cart.push(cartItem);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const handleSubProduct = () => {
    setQuantity(quantity - 1);
    if(localStorage.getItem('cart')){
      let cart = JSON.parse(localStorage.getItem('cart'));
      const index = cart.findIndex(ele => ele.id === product.id);
      if(index !== -1){
        if(cart[index].quantity === 1) {
          cart = cart.filter(item => item.id !== product.id)
        }
        else{
          cart[index].quantity--;
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <Card withBorder shadow="sm" {...stylex.props(styles.card)}>
      {product.discountedPrice && <Badge variant="gradient" size="lg" pos={"absolute"} {...stylex.props(styles.voucher)}> - {product.vouchers[0]?.discount} %</Badge>}
      <Image fallbackSrc="https://placehold.co/600x400?text=Placeholder" src={product.imageUrl} alt="product image" {...stylex.props(styles.productImage)} onClick={()=> navigate(`/products/${product.id}`)}/>
      <Flex
        gap={8}
        align="center"
        direction="column"
      >
        <Flex gap="xs" justify="space-around" align="center">
          <Flex align="center" gap={2}>
            <Text fw="500" size="xl">
              {product.discountedPrice ? product.discountedPrice + "đ" : product.baseUnitPrice + "đ"} 
            </Text>
            {
              product.discountedPrice && 
              <Text size="sm" c="dimmed" td="line-through">
                {" "}
                {product.baseUnitPrice + "đ"}
              </Text>
            }
          </Flex>
          <Badge color="#F9C127" size="lg">
            <Flex align="center" gap={1}>
              {product.rate ?? 0} <IconStarFilled size={12}/>
            </Flex>
          </Badge>
        </Flex>
        <Text {...stylex.props(styles.productName)}>{product.name}</Text>
        {quantity === 0 ? (
          <Button 
          fullWidth
          justify="center"
          variant="gradient"
          size="compact-lg"
          radius="md" 
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

  if(!localStorage.getItem('cart')){
    localStorage.setItem('cart', '[]');
  }

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

  console.log({data})
  return (
    <Skeleton visible={loading}>
      <Flex gap="lg" m={30} wrap="wrap" justify="space-around" >
        { data.map((product) => (
          <ProductCard product={product}/>
        ))}
      </Flex>
    </Skeleton>
  );
};

