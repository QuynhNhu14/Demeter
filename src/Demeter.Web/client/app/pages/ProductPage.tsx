import { Flex, Pagination, Select, Badge, rem, Button, Rating, UnstyledButton} from "@mantine/core";
import { ProductList } from "../components/ProductList";
import { NavLink, useParams} from "react-router-dom";
import { IconArrowLeft, IconCircleCheck, IconHeart, IconHeartFilled, IconMinus, IconPlus, IconStarFilled, IconThumbDown, IconThumbUp } from "@tabler/icons-react";
import * as stylex from "@stylexjs/stylex";
import { useState, useEffect } from "react";
import { Product } from "../models/products";
import { getProductById } from "../services/products";

const styles = stylex.create({
  ProductPage: {
    width: "100%",
    padding: "0 30px 10px 30px",
  },
  ProductDetail: {
    width: "100%",
    padding: "20px",
  },
  BackHomeButton: {
    position: "relative",
    top: "30px",
    color: "#009f7f",
    textDecoration: "none",
    fontSize: "16px",
    display: "flex",
  },
  rating: {
    padding: "20px",
    borderBottom: "1px solid #e7e7e7", 
  },
  review: {
    borderBottom: "1px solid #e7e7e7", 
  },
  reviewTitle: {
    height: "70px",
    borderBottom: "1px solid #e7e7e7", 
  },
  comment: {
    borderBottom: "1px solid #e7e7e7",
    margin: "0 20px",
    padding: "20px 0",
  },
  container: {
    width: "100%",
    padding: "20px",
  },
  description: {
    marginTop: "25px",
    width: "100%",
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "20px",
    borderBottom: "1px solid #e7e7e7",
  },
  imageContainer: {
    width: "50%",
    height: "auto",
    flex: "4",
    padding: "0 50px",
  },
  mainImage: {
    width: "100%",
    aspectRatio: "1 / 1",
    paddingBottom: "20px",
  },
  subImage: {
    width: "20%",
    border: "1px solid #e7e7e7",
    borderRadius: "10px",
    ':hover': {
      cursor: "pointer",
      opacity: "80%",
    },
  },
  infoContainer: {
    width: "50%",
    paddingLeft: "20px",
    flex: "5",
  },
  info: {
    paddingBottom: "20px",
    borderBottom: "1px solid #e7e7e7",
  },
  productTitle: {
    fontWeight: "bold",
    fontSize: "25px",
    color: "#000",
    ':hover': {
      color: "#009f7f",
      cursor: "pointer",
    },
  },
  heart: {
    width: "25px",
    height: "35px",
    backgroundColor: "#fff",
    borderRadius: "90px",
    border: "1px solid rgb(193, 193, 193)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  detail: {
    padding: "20px 0",
    borderBottom: "1px solid #e7e7e7",
  },
  elementLeftButton: {
    padding: "0 45px 0 0",
  },
  elementRightButton: {
    padding: "0 0 0 45px",
  }
})

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

export function ProductPage() {
  const { productId } = useParams();

  const [heart, setHeart] = useState<boolean>(false);

  const handleLike = () => {
    setHeart(!heart);
  };
  const [quantity, setQuantity] = useState<number>(0);
  const handleAddProduct = () => {
    setQuantity(quantity + 1);
  };

  const handleSubProduct = () => {
    setQuantity(quantity - 1);
  };

  const [data, setData] = useState<Product|null>();
  const fetchData = async () => {
    if(!productId) {
      return;
    }
    const data = await getProductById(productId);

    if (!data) {
      return;
    }
    setData(data);
  };
  
  useEffect(() => {
    fetchData();
    setHeart(false);
  }, [productId] );


  return (
    data && <div {...stylex.props(styles.ProductPage)}>
      <div {...stylex.props(styles.ProductDetail)}>
        <NavLink to="/home" {...stylex.props(styles.BackHomeButton)}>
          <IconArrowLeft />
          <span style={{ paddingLeft: "8px" }}>Quay lại</span>
        </NavLink>
        <div {...stylex.props(styles.container)}>
          <div {...stylex.props(styles.description)}>
            <Flex {...stylex.props(styles.imageContainer)} direction="column">
              <img
                {...stylex.props(styles.mainImage)}
                src={data?.imageUrl}
                alt="ProductImage"
              />

            </Flex>
            <Flex {...stylex.props(styles.infoContainer)} direction="column" gap="lg">
              <Flex {...stylex.props(styles.info)} direction="column" gap="sm">
                <Flex justify="space-between" align="center">
                  <span {...stylex.props(styles.productTitle)}>
                    {data?.name}
                  </span>
                  <UnstyledButton onClick={handleLike}> 
                    {heart ? <IconHeartFilled size={35} color="red"/> : <IconHeart size={35}/>}
                  </UnstyledButton>
                </Flex>
                <Flex justify="space-between">
                  <span style={{ fontSize: "14px", opacity: "0.7" }}>
                  2 đánh giá
                  </span>
                  <Badge variant="gradient" style={{ fontSize: "14px", margin: "0" }}>
                    {data?.rate} <IconStarFilled style={{ width: rem(12), height: rem(12) }} />
                  </Badge>
                </Flex>
                <span>{data?.description}</span>
                <Flex gap="sm" align="center">
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "30px",
                      color: "#009f7f",
                    }}
                  >
                    {data.discountedPrice ? data.discountedPrice + "đ" : data.baseUnitPrice + "đ"}
                  </span>
                  {data.discountedPrice && <span style={{ textDecoration: "line-through", opacity: "0.7" }}>
                    {" "}
                    {data?.baseUnitPrice}
                  </span>}
                </Flex>
                <Flex align="center" gap="lg">
                  {quantity === 0 ? (
                  <Button 
                  justify="center"
                  variant="gradient"
                  size="compact-lg"
                  radius="md" 
                  leftSection={<IconMinus size={14}/>} 
                  rightSection={<IconPlus size={14} />} 
                  onClick={handleAddProduct} >
                    Thêm vào giỏ hàng
                  </Button>
                  ) : (
                  <Button 
                  justify="center"
                  variant="gradient"
                  size="compact-lg"
                  radius="md" 
                  >
                    <span
                      {...stylex.props(styles.elementLeftButton)}
                      onClick={handleSubProduct} >
                    <IconMinus />
                    </span>
                    <span>{quantity}</span>
                    <span
                    {...stylex.props(styles.elementRightButton)}
                      onClick={handleAddProduct}
                    >
                      <IconPlus/>
                    </span>
                  </Button> )}
                  <span style={{ fontSize: "16px", opacity: "0.7" }}>
                    còn lại 18 sản phẩm
                  </span>
                </Flex>
              </Flex>
              <Flex direction="column" justify="center" gap="lg">
                <Flex align="center">
                  <span style={{ fontWeight: "bolder", marginRight: "10px" }}>
                    Loại:
                  </span>
                    return <Badge 
                      color= "#009f7f" 
                      variant="light" 
                      style={{fontWeight: "lighter", marginRight: "10px" }}>{data?.category}</Badge>;
                </Flex>
                <Flex align="center">
                  <span style={{ fontWeight: "bolder", marginRight: "10px" }}>
                    Người bán:
                  </span>
                  <NavLink
                    to="/shop-product"
                    style={{ color: "#009f7f", textDecoration: "underline" }}
                  >
                    {data?.vendor?.name}
                  </NavLink>
                </Flex>
              </Flex>
            </Flex>
          </div>
          <Flex {...stylex.props(styles.detail)} direction="column" gap="lg">
            <span style={{ fontWeight: "bolder", fontSize: "20px" }}>Chi tiết</span>
            <span>{data?.description}</span>
          </Flex>
        </div>
        
        <Flex {...stylex.props(styles.rating)} direction="column" gap="lg">
          <span style={{ fontWeight: "bolder", fontSize: "20px" }}>
            Đánh giá & Nhận xét của {data?.name}
          </span>
          <Rating readOnly={true} value={data?.rate}/> 
          <Flex align="center">
          Đánh giá cho sản phẩm: {data?.rate} <IconStarFilled color="orange"/>
          </Flex>
        </Flex>
        <Flex {...stylex.props(styles.review)} direction="column">
          <Flex {...stylex.props(styles.reviewTitle)} align="center">
            <Flex
              flex="3"
              style={{
                fontWeight: "bolder",
                fontSize: "20px",
                paddingLeft: "20px",
              }}
            >
              Nhận xét ({reviews.length})
            </Flex>
            <Flex
              flex="1"
              align="center"
              justify="center"
              style={{
                borderLeft: "1px solid #e7e7e7",
                height: "100%",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <span>Lọc theo:</span>
              <Select
                defaultValue="Gần đây"
                style={{ width: 200 }}
                bordered={false}
                data={['Gần đây', 'Thấp đến Cao', 'Cao đến Thấp']}
                // onChange={handleChange}
              />
            </Flex>
            <Flex               
              flex="1"
              align="center"
              justify="center"
              style={{
                borderLeft: "1px solid #e7e7e7",
                height: "100%",
                paddingLeft: "20px",
              }}>
              <span>Lọc theo:</span>
              <Select
                defaultValue="Tất cả sao"
                style={{ width: 200 }}
                bordered={false}
                data={['Tất cả sao', '5 Sao', '4 Sao', '3 sao', '2 sao', '1 sao']}
                // onChange={handleChange}
              />
            </Flex>
          </Flex>
          <Flex direction="column" justify="flex-end">
            {reviews.map((review) => (
              <Flex {...stylex.props(styles.comment)} justify="space-between">
                <Flex
                  direction="column"
                  gap="sm"
                >
                  <span >
                    <Rating readOnly={true} value={review.rating}/>
                  </span>
                  <span style={{ fontSize: "12px", opacity: 0.8 }}>
                    bởi {review.by}
                    <IconCircleCheck color="green" />
                  </span>
                  <span style={{ padding: "10px 0", fontSize: "16px" }}>
                    {review.comment}
                  </span>
                  <span style={{ fontSize: "12px", opacity: 0.8 }}>
                    Ngày: {review.date}
                  </span>
                </Flex>
                <Flex
                  align="flex-end"
                  gap="lg"
                  style={{ opacity: 0.6 }}
                >
                  <Flex
                    align="center"
                    gap="sm"
                  >
                    <IconThumbUp />
                    {review.likes}
                  </Flex>
                  <Flex
                    align="center"
                    gap="sm"
                  >
                    <IconThumbDown />
                    {review.dislikes}
                  </Flex>
                </Flex>
              </Flex>
            ))}
            <Flex align="center" justify="space-between">
              <span style={{ fontSize: "12px", opacity: 0.6, padding: "20px" }}>
                Trang 1 trên 1
              </span>
              <Pagination color="#009f7f" defaultCurrent={1} total={1} />
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="column" gap="lg">
          <span style={{ fontWeight: "bolder", fontSize: "20px" }}>
            Sản phẩm tương tự
          </span>
          <ProductList/> 
        </Flex>
      </div>
    </div>
  );
};
