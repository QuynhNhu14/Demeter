import "./ProductDetail.css";
import "../../App.css";
import { ProductDescription } from "../../components/ProductDescription/ProductDescription";
import { Flex, Pagination, Select, Badge } from "@mantine/core";
import { ProductList } from "../../components/ProductList/ProductList";
import { NavLink } from "react-router-dom";
// import {
//   IconArrowLeft,
//   IconCheckCircle,
//   IconDislike,
//   IconLike,
//   IconStar,
// } from '@tabler/icons-react';
import { Rating } from "../../components/Rating/Rating";
// import { BsThreeDotsVertical } from "react-icons/bs";
import { Footer } from "../../components/Footer/Footer";
import { IconArrowLeft } from "@tabler/icons-react";

type ProductPageProps = {
  productId?: string;
};

const ItemDetail = {
  productId: "1",
  productName: "Cà rốt",
  unit: "1kg",
  description:
    "Cà rốt là một loại rau quả được yêu thích với vị ngọt tự nhiên và màu sắc tươi sáng. Với hàm lượng chất xơ cao, vitamin A và các chất chống oxy hóa, cà rốt không chỉ mang lại lợi ích cho sức khỏe mà còn là nguyên liệu tuyệt vời cho các món ăn chế biến và nấu nướng.",
  price: "20.000 đ",
  salePrice: "16.000 đ",
  discountPercent: "20%",
  available: "18 sản phẩm",
  categories: ["Trái cây & Rau củ", "Rau củ"],
  seller: "Nông sản Demeter",
  rate: { rating: 4.67, ratingStar: [2, 1, 0, 0, 0], ratingNumber: 3 },
  image: [
    "https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenkhanh/2020/09/07/ca_rot_vi_thuoc_chua_2.jpg",
    "https://suckhoedoisong.qltns.mediacdn.vn/thumb_w/1200/324455921873985536/2021/8/10/ava-carot-1628613142139653627209-20-0-660-1024-crop-1628613159334685556069.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/carrots-royalty-free-image-1684505309.jpg?crop=0.68723xw:1xh;center,top&resize=640:*",
    "https://static-images.vnncdn.net/files/publish/2022/10/31/mua-ca-rot-nen-chon-cu-sam-mau-hay-nhat-mau-nguoi-trong-nhac-nho-5-meo-04fd1ee0880744f98a3b3677dffba535.jpg",
  ],
};

const reviews = [
  {
    rating: 5,
    by: "Khách hàng 1 ",
    comment: "Cà rốt ở đây rất tươi. Tôi rất thích chúng!",
    date: "18/03/2022",
    likes: "5",
    dislikes: "2",
  },
  {
    rating: 4,
    by: "Khách hàng 2 ",
    comment: "Tôi rất thích cà rốt của cửa hàng này nhưng giao hàng hơi lâu",
    date: "25/03/2022",
    likes: "4",
    dislikes: "0",
  },
];

export const ProductPage: React.FC<ProductPageProps> = ({ productId }) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="ProductPage">
      <div className="ProductDetail">
        <NavLink to="/home" className="BackHomeButton">
          <IconArrowLeft />
          <span style={{ paddingLeft: "8px" }}>Quay lại</span>
        </NavLink>
        <ProductDescription productInfo={ItemDetail} />
        <Flex className="ProductDetail--Rating" vertical gap="large">
          <span style={{ fontWeight: "bolder", fontSize: "20px" }}>
            Đánh giá & Nhận xét của {ItemDetail.productName}
          </span>
          <Rating rate={ItemDetail.rate} />
        </Flex>
        <Flex className="ProductDetail--Review" vertical>
          <Flex className="ProductDetail--Review__title" align="center">
            <Flex
              flex="3"
              style={{
                fontWeight: "bolder",
                fontSize: "20px",
                paddingLeft: "20px",
              }}
            >
              Product Reviews ({reviews.length})
            </Flex>
            <Flex
              flex="1"
              align="center"
              justify="center"
              style={{
                borderLeft: "1px solid #e7e7e7",
                height: "100%",
                paddingLeft: "20px",
              }}
            >
              <span style={{ opacity: 0.8 }}>Lọc theo:</span>
              <Select
                defaultValue="Recent"
                style={{ width: 200 }}
                bordered={false}
                onChange={handleChange}
                options={[
                  { value: "Recent", label: "Gần đây" },
                  {
                    value: "Ratings: Low to High",
                    label: "Đánh giá: Thấp đến Cao",
                  },
                  {
                    value: "Rating: High to Low",
                    label: "Đánh giá: Cao đến Thấp",
                  },
                ]}
              />
            </Flex>
            <Flex align="center" justify="center">
              <span style={{ opacity: 0.8 }}>Lọc theo:</span>
              <Select
                defaultValue="All Star"
                style={{ width: 200 }}
                bordered={false}
                onChange={handleChange}
                options={[
                  { value: "All Star", label: "Tất cả" },
                  { value: "5 Star", label: "5 Sao" },
                  { value: "4 Star", label: "4 Sao" },
                  { value: "3 Star", label: "3 Sao" },
                  { value: "2 Star", label: "2 Sao" },
                  { value: "1 Star", label: "1 Sao" },
                ]}
              />
            </Flex>
          </Flex>
          <Flex vertical justify="flex-end">
            {reviews.map((review) => (
              <Flex className="ProductDetail--comment" justify="space-between">
                <Flex
                  className="ProductDetail--comments__left"
                  vertical
                  gap="small"
                >
                  <Badge
                    color="#009f7f"
                    style={{
                      fontSize: "16px",
                      padding: "5px 10px",
                      width: "fit-content",
                      borderRadius: "20px",
                    }}
                  >
                    {review.rating} <IconStar />
                  </Badge>
                  <span style={{ fontSize: "12px", opacity: 0.8 }}>
                    bởi {review.by}
                    <IconCheckCircle />
                  </span>
                  <span style={{ padding: "10px 0", fontSize: "16px" }}>
                    {review.comment}
                  </span>
                  <span style={{ fontSize: "12px", opacity: 0.8 }}>
                    Ngày: {review.date}
                  </span>
                </Flex>
                <Flex
                  className="ProductDetail--right"
                  align="flex-end"
                  gap="large"
                  style={{ opacity: 0.6 }}
                >
                  <Flex
                    className="ProductDetail--right--icon"
                    align="center"
                    gap="small"
                  >
                    <IconLike />
                    {review.likes}
                  </Flex>
                  <Flex
                    className="ProductDetail--right--icon"
                    align="center"
                    gap="small"
                  >
                    <IconDislike />
                    {review.dislikes}
                  </Flex>
                  <span className="ProductDetail--right--icon">
                    <BsThreeDotsVertical />
                  </span>
                </Flex>
              </Flex>
            ))}
            <Flex align="center" justify="space-between">
              <span style={{ fontSize: "12px", opacity: 0.6, padding: "20px" }}>
                Trang 1 trên 1
              </span>
              <Pagination defaultCurrent={1} total={1} />
            </Flex>
          </Flex>
        </Flex>
        <Flex className="ProductDetail--Related" vertical gap="large">
          <span style={{ fontWeight: "bolder", fontSize: "20px" }}>
            Sản phẩm tương tự
          </span>
          <ProductList categoryId={"1"} />
        </Flex>
      </div>
      <Footer />
    </div>
  );
};
