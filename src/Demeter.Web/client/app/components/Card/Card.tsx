import { useState } from "react";
import { Flex, Badge, Button } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import "./Card.css";
import * as React from "react";

const ItemDetail = {
  productId: "1",
  productName: "Bí ngòi",
  unit: "1kg",
  description:
    "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.",
  price: "40.000",
  salePrice: "30.000",
  discountPercent: "25%",
  available: "18 sản phẩm",
  categories: ["Trái cây & Rau củ", "Rau củ"],
  seller: "Cửa hàng nông sản",
  rate: { rating: 4.27, ratingStar: [4, 6, 1, 0, 0], ratingNumber: 11 },
  image: [
    "https://dalatfarm.net/wp-content/uploads/2022/03/bi-ngoi-xanh.jpg",
    "https://product.hstatic.net/200000552753/product/bi_ngoi_xanh_da_lat_500g_22000_1kg_40000_d455b455b46e4e53b111d66599a6f14e.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/carrots-royalty-free-image-1684505309.jpg?crop=0.68723xw:1xh;center,top&resize=640:*",
    "https://static-images.vnncdn.net/files/publish/2022/10/31/mua-ca-rot-nen-chon-cu-sam-mau-hay-nhat-mau-nguoi-trong-nhac-nho-5-meo-04fd1ee0880744f98a3b3677dffba535.jpg",
  ],
};
type CardProps = {
  productId: string;
};
export const Card: React.FC<Partial<CardProps>> = () => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleAddProduct = () => {
    setQuantity(quantity + 1);
  };

  const handleSubProduct = () => {
    setQuantity(quantity - 1);
  };

  return (
    <Flex className="ProductCard" vertical>
      <div className="ProductCard--Image">
        {ItemDetail.discountPercent && (
          <Badge color="#009f7f">{ItemDetail.discountPercent}</Badge>
        )}
        <img src={ItemDetail.image[0]} alt="product image" />
      </div>
      <Flex vertical gap="small" align="flex-start" style={{ padding: "20px" }}>
        {ItemDetail.salePrice ? (
          <Flex gap="sm" align="center">
            <span style={{ fontWeight: "600", fontSize: "18px" }}>
              {ItemDetail.salePrice} đ
            </span>
            <span
              style={{
                textDecoration: "line-through",
                opacity: "0.5",
                fontSize: "14px",
              }}
            >
              {" "}
              {ItemDetail.price} đ
            </span>
          </Flex>
        ) : (
          <span style={{ fontWeight: "600", fontSize: "20px" }}>
            {ItemDetail.price} đ
          </span>
        )}
        <span style={{ opacity: "0.8", fontSize: "16px" }}>
          {ItemDetail.productName}
        </span>
        {quantity === 0 ? (
          <Button
            rightSection={<IconPlus size={14} />}
            onClick={handleAddProduct}
          >
            Thêm
          </Button>
        ) : (
          <Button
            className="ProductCard--button"
            leftSection={<IconMinus size={14} onClick={handleSubProduct} />}
            rightSection={<IconPlus size={14} onClick={handleAddProduct} />}
          >
            <span className="ProductCard--button__quantity">{quantity}</span>
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
