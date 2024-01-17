import "./ProductDetail.css";
import "../../App.css";
import { Flex, Tag } from "antd";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import {StarFilled, HeartOutlined} from '@ant-design/icons';
import { RelatedProductList } from "../../components/ProductList/RelatedProductList";
import { ProductDescription } from "../../components/ProductDescription/ProductDescription";

type ProductDetailProps = {
    productId: string
}

const ItemDetail=[
    {
        productId: "1",
        productName: "Cà rốt",
        unit: "1kg",
        description: "Cà rốt là một loại rau quả được yêu thích với vị ngọt tự nhiên và màu sắc tươi sáng. Với hàm lượng chất xơ cao, vitamin A và các chất chống oxy hóa, cà rốt không chỉ mang lại lợi ích cho sức khỏe mà còn là nguyên liệu tuyệt vời cho các món ăn chế biến và nấu nướng.",
        price: "20.000 đ",
        salePrice: "16.000 đ",
        discountPercent: "20%",
        available: "18 sản phẩm",
        categories: ["Trái cây & Rau củ", "Rau củ"],
        seller: "Nông sản Demeter",
        rate: {rating: 4.67, ratingStar: [2, 1, 0, 0, 0], ratingNumber: 3},
        image: ["https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg",
        "https://suckhoedoisong.qltns.mediacdn.vn/thumb_w/1200/324455921873985536/2021/8/10/ava-carot-1628613142139653627209-20-0-660-1024-crop-1628613159334685556069.jpg", 
        "https://hips.hearstapps.com/hmg-prod/images/carrots-royalty-free-image-1684505309.jpg?crop=0.68723xw:1xh;center,top&resize=640:*", 
        "https://static-images.vnncdn.net/files/publish/2022/10/31/mua-ca-rot-nen-chon-cu-sam-mau-hay-nhat-mau-nguoi-trong-nhac-nho-5-meo-04fd1ee0880744f98a3b3677dffba535.jpg"],
    },
    {
        productId: "1",
        productName: "Cà rốt",
        unit: "1kg",
        description: "Cà rốt là một loại rau quả được yêu thích với vị ngọt tự nhiên và màu sắc tươi sáng. Với hàm lượng chất xơ cao, vitamin A và các chất chống oxy hóa, cà rốt không chỉ mang lại lợi ích cho sức khỏe mà còn là nguyên liệu tuyệt vời cho các món ăn chế biến và nấu nướng.",
        price: "20.000 đ",
        salePrice: "16.000 đ",
        discountPercent: "20%",
        available: "18 sản phẩm",
        categories: ["Trái cây & Rau củ", "Rau củ"],
        seller: "Nông sản Demeter",
        rate: {rating: 4.67, ratingStar: [2, 1, 0, 0, 0], ratingNumber: 3},
        image: ["https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg",
        "https://suckhoedoisong.qltns.mediacdn.vn/thumb_w/1200/324455921873985536/2021/8/10/ava-carot-1628613142139653627209-20-0-660-1024-crop-1628613159334685556069.jpg", 
        "https://hips.hearstapps.com/hmg-prod/images/carrots-royalty-free-image-1684505309.jpg?crop=0.68723xw:1xh;center,top&resize=640:*", 
        "https://static-images.vnncdn.net/files/publish/2022/10/31/mua-ca-rot-nen-chon-cu-sam-mau-hay-nhat-mau-nguoi-trong-nhac-nho-5-meo-04fd1ee0880744f98a3b3677dffba535.jpg"],
    }
]


export const ProductDetail: React.FC<ProductDetailProps> = ({productId}) => {
    const [selectedProduct, setSelectedProduct] = useState<number>(0);

    return (
        <div className="ProductDetail">
            <ProductDescription productInfo={ItemDetail[parseInt(selectedProduct)]}/>
            <Flex className="ProductDetail--Related" vertical gap="large">
                <span style={{fontWeight: "bolder", fontSize: "20px"}}>Sản phẩm tương tự</span>
            <RelatedProductList productId={ItemDetail[parseInt(selectedProduct)].productId} />
            </Flex> 
        </div>
    );
}