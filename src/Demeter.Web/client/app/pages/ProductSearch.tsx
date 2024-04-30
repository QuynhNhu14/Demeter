import { Box, Text} from "@mantine/core";
import { ProductList } from "../components/ProductList";
import { useSearchParams } from "react-router-dom";

export function ProductSearch() {
    const [searchParams] = useSearchParams()

    return (
        <Box p="xl">
            <Text>
                Kết quả tìm kiếm
            </Text>
            <ProductList search={searchParams.get("name") ?? undefined}/>
        </Box>
    )
};