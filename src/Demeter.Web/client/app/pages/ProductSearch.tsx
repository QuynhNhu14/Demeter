import { Box, Text} from "@mantine/core";
import { ProductList } from "../components/ProductList";
import { useSearchParams } from "react-router-dom";


export function ProductSearch() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log("params", searchParams);

    return (
        <Box p="xl">
            <Text>
                Kết quả tìm kiếm
            </Text>
            <ProductList search={searchParams.get("name") ?? undefined}/>
        </Box>
    )
};