import { Container, Flex, Image } from "@mantine/core";
import { ShopInfo } from "../components/ShopInfo";
import { ProductList } from "../components/ProductList";
import { useUserSession } from "../hooks/useUserSession";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ShopProduct: React.FC<{ shopId?: string }> = ({ shopId }) => {
  const { loggedIn } = useUserSession();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loggedIn) {
      navigate("/home");
    }
  }, [loggedIn]);
  
  return (
    <div>
      <Flex>
        <Flex flex={2}>
          <ShopInfo shopId={shopId ? shopId : "1"} />
        </Flex>
        <Container align="center">
          <Image
            src="https://www.lithospos.com/storage/app/media/veg_banner.jpg"
            alt="shop banner"
            w={"100%"}
            h={"25%"}
            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          />
          <ProductList shopId={shopId} />
        </Container>
      </Flex>
    </div>
  );
};
