import { IconHeart, IconStarFilled } from "@tabler/icons-react";
import { Flex, Badge, Button, rem } from "@mantine/core";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { Rating } from "../Rating/Rating";
// import "./ProductDescription.css";
import {styles} from './ProductDescription.stylex';
import * as stylex from '@stylexjs/stylex';

type ProductDescriptionProps = {
  productInfo: {
    productId: string;
    productName: string;
    unit: string;
    description: string;
    price: string;
    salePrice?: string;
    available: string;
    categories: string[];
    seller: string;
    rate: { rating: number; ratingStar: number[]; ratingNumber: number };
    image: string[];
  };
};

export const ProductDescription: React.FC<ProductDescriptionProps> = (
  props
) => {
  const {
    productInfo: {
      productId,
      productName,
      unit,
      description,
      price,
      salePrice,
      available,
      categories,
      seller,
      rate,
      image,
    },
  } = props;
  const [imageIdx, setImageIdx] = useState<number>(0);
  const [heart, setHeart] = useState<boolean>(false);

  const handleLike = () => {
    setHeart(!heart);
  };

  const handleAdd = () => {
    console.log("Add");
  };

  const handleClickTitle = () => {
    window.location.href = "../products";
  };
  
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.description)}>
        <Flex {...stylex.props(styles.imageContainer)} direction="column">
          <img
            {...stylex.props(styles.mainImage)}
            src={image[imageIdx]}
            alt="ProductImage"
          />
          <Flex gap="sm" justify="space-between">
            {image.map((item, index) => {
              return (
                <img
                  {...stylex.props(styles.subImage)}
                  src={item}
                  alt="ProductImage"
                  onClick={() => setImageIdx(index)}
                />
              );
            })}
          </Flex>
        </Flex>
        <Flex {...stylex.props(styles.infoContainer)} direction="column" gap="lg">
          <Flex {...stylex.props(styles.info)} direction="column" gap="sm">
            <Flex justify="space-between" align="center">
              <span {...stylex.props(styles.productTitle)} onClick={handleClickTitle}>
                {productName}
              </span>
              <Button {...stylex.props(styles.heart)} onClick={handleLike}> 
                <IconHeart style={{ color: "#009f7f" }} />
              </Button>
            </Flex>
            <Flex justify="space-between">
              <span style={{ fontSize: "14px", opacity: "0.7" }}>{unit}</span>
              <Badge color="#009f7f" style={{ fontSize: "14px", margin: "0" }}>
                {rate.rating} <IconStarFilled style={{ width: rem(12), height: rem(12) }} />
              </Badge>
            </Flex>
            <span>{description}</span>
            <Flex gap="sm" align="center">
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "30px",
                  color: "#009f7f",
                }}
              >
                {salePrice}
              </span>
              <span style={{ textDecoration: "line-through", opacity: "0.7" }}>
                {" "}
                {price}
              </span>
            </Flex>
            <Flex align="center" gap="lg">
              <Button
                style={{
                  height: "50px",
                  width: "fit-content",
                  padding: "15px 20px",
                  marginRight: "20px",
                  fontWeight: "lighter",
                  borderRadius: "10px",
                  backgroundColor: "#009f7f",
                  color: "#fff",
                }}                
                onClick={handleAdd}
              >Thêm vào giỏ hàng</Button>
              <span style={{ fontSize: "16px", opacity: "0.7" }}>
                còn lại {available}
              </span>
            </Flex>
          </Flex>
          <Flex direction="column" justify="center" gap="lg">
            <Flex align="center">
              <span style={{ fontWeight: "bolder", marginRight: "10px" }}>
                Loại:
              </span>
              {categories.map((category) => {
                return <Badge 
                  color= "#009f7f" 
                  variant="light" 
                  style={{fontWeight: "lighter", marginRight: "10px" }}>{category}</Badge>;
              })}
            </Flex>
            <Flex align="center">
              <span style={{ fontWeight: "bolder", marginRight: "10px" }}>
                Người bán:
              </span>
              <NavLink
                to="/shop-product"
                style={{ color: "#009f7f", textDecoration: "underline" }}
              >
                {seller}
              </NavLink>
            </Flex>
          </Flex>
        </Flex>
      </div>
      <Flex {...stylex.props(styles.detail)} direction="column" gap="lg">
        <span style={{ fontWeight: "bolder", fontSize: "20px" }}>Chi tiết</span>
        <span>{description}</span>
      </Flex>
    </div>
  );
};

