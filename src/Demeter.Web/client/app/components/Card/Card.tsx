import { Button } from "../Button/Button";
import { useEffect, useRef, useState } from 'react';
import { Badge, Flex, Modal, Tag } from 'antd';
import { ProductDetail } from "../../pages/ProductDetail/ProductDetail";
import "./Card.css";
import * as React from "react";
import cardImg from "../../../assets/bingoi.png";
import { AiOutlinePlus } from "react-icons/ai";

const ItemDetail={
    productId: "1",
    productName: "Bí ngòi",
    unit: "1kg",
    description: "Cà rốt là một loại rau quả được yêu thích với vị ngọt tự nhiên và màu sắc tươi sáng. Với hàm lượng chất xơ cao, vitamin A và các chất chống oxy hóa, cà rốt không chỉ mang lại lợi ích cho sức khỏe mà còn là nguyên liệu tuyệt vời cho các món ăn chế biến và nấu nướng.",
    price: "40.000 đ",
    salePrice: "30.000 đ",
    discountPercent: "25%",
    available: "25 sản phẩm",
    categories: ["Trái cây & Rau củ", "Rau củ"],
    seller: "Cửa hàng nông sản",
    rate: {rating: 4.67, ratingStar: [2, 1, 0, 0, 0], ratingNumber: 3},
    image: ["https://kenh14cdn.com/thumb_w/600/203336854389633024/2023/7/30/photo1690686445025-1690686445165419799095.png",
    "https://suckhoedoisong.qltns.mediacdn.vn/thumb_w/1200/324455921873985536/2021/8/10/ava-carot-1628613142139653627209-20-0-660-1024-crop-1628613159334685556069.jpg", 
    "https://hips.hearstapps.com/hmg-prod/images/carrots-royalty-free-image-1684505309.jpg?crop=0.68723xw:1xh;center,top&resize=640:*", 
    "https://static-images.vnncdn.net/files/publish/2022/10/31/mua-ca-rot-nen-chon-cu-sam-mau-hay-nhat-mau-nguoi-trong-nhac-nho-5-meo-04fd1ee0880744f98a3b3677dffba535.jpg"],
}
type CardProps = {
    productId: string
}
export const Card: React.FC<CardProps> = ({productId}) => {
    const [quantity, setQuantity] = useState<number>(0);

    const handleAddProduct = () => {
        setQuantity(quantity + 1);
    }

    const handleSubProduct = () => {
        setQuantity(quantity - 1);
    }

    return (
        <Flex className="ProductCard" vertical>
            <div className="ProductCard--Image">
                {ItemDetail.discountPercent && <Tag color="#009f7f">- {ItemDetail.discountPercent}</Tag>}
                <img src={cardImg} alt="product image"/>
            </div>
            <Flex vertical gap="small" align="flex-start" style={{ padding: '20px'}}>
                {
                    ItemDetail.salePrice ? 
                    <Flex gap="small" align="center">
                        <span style={{ fontWeight: '600', fontSize: '18px'}}>{ItemDetail.salePrice}</span>
                        <span style={{ textDecoration: 'line-through', opacity: '0.5', fontSize: '14px'}} > {ItemDetail.price}</span>
                    </Flex>
                    : <span style={{ fontWeight: '600', fontSize: '20px'}}>{ItemDetail.price}</span>
                }
                <span style={{ opacity: '0.8', fontSize: '16px'}}>{ItemDetail.productName}</span>
                {
                    quantity === 0 ?
                    <button className="ProductCard--button" onClick={handleAddProduct}>
                        <span className="ProductCard--button__add">
                            Thêm
                        </span>
                        <span className="ProductCard--button__addIcon">
                            +
                        </span>
                    </button> :
                    <button className="ProductCard--button">
                        <span className="ProductCard--button__icon leftIcon" onClick={handleSubProduct}>
                            -
                        </span>
                        <span className="ProductCard--button__quantity">
                            {quantity}
                        </span>
                        <span className="ProductCard--button__icon rightIcon" onClick={handleAddProduct}>
                            +
                        </span>
                    </button>
                }
            </Flex>
        </Flex>
    )
}