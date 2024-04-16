import { Flex} from "@mantine/core";
import { ShopInfo } from "../components/ShopInfo";
import "./ShopProduct.css";
import { ProductList } from "../components/ProductList";

export const ShopProduct: React.FC<{ shopId?: string }> = ({ shopId }) => {
  return (
    <div>
      <Flex>
        <Flex style={{ flex: "3" }}>
          <ShopInfo shopId={shopId ? shopId : "1"} />
        </Flex>
        <Flex
          vertical
          gap="large"
          style={{ flex: "10", padding: "24px 24px 0 0" }}
        >
          <img
            src="https://www.lithospos.com/storage/app/media/veg_banner.jpg"
            alt="shop banner"
            className="ShopBanner"
          />
          <ProductList shopId={shopId} />
        </Flex>
      </Flex>
    </div>
  );
};
