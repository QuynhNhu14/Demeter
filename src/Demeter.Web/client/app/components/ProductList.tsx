import { Card, Flex } from "@mantine/core";
import { useEffect, useState } from "react";
import { Product } from "../models/products";
import { getAllProducts } from "../services/products";
import React from "react";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      {/* <Badge>{product.discountPercent}</Badge> */}

      <div className="ProductCard--Image">
        <img src={product.image} alt="product image" />
      </div>
      <Flex
        gap="sm"
        justify="flex-start"
        align="center"
        direction="column"
        wrap="wrap"
        style={{ padding: "20px", width: "100%" }}
      >
        {/* {product.sale ? (
          <div className="ProductCard--price">
            <Flex gap="sm" align="center">
              <span style={{ fontWeight: "500", fontSize: "18px" }}>
                {product.baseUnitPrice - product.baseUnitPrice * product.sale}
              </span>
              <span
                style={{
                  textDecoration: "line-through",
                  opacity: "0.5",
                  fontSize: "14px",
                }}
              >
                {" "}
                {product.baseUnitPrice}
              </span>
            </Flex>
            <Badge color="#F9C127" style={{ marginRight: "0" }}>
              {product.rate ?? 0} <IconStarFilled />
            </Badge>
          </div>
        ) : (
          <span style={{ fontWeight: "600", fontSize: "20px" }}>
            {product.baseUnitPrice}
          </span>
        )} */}
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
    <div className="ProductList">
      <Flex
        className="ProductList--products"
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
