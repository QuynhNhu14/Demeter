import { Autocomplete, em, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

export function FuzzySearch() {
  const placeholder = "Tìm kiếm sản phẩm của bạn ở đây";
  const maxDropdownHeight = 200;
  // const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState<string[]>([]);

  const performSearch = (value: string) => {
    if (result.length === 0) {
      // use value to call search api

      // set result
      setResult(["React", "Angular", "Vue", "Svelte"]);
    }
  };

  return (
    <Autocomplete
      placeholder={placeholder}
      leftSection={<IconSearch stroke={1.5} />}
      leftSectionWidth={34}
      data={result}
      maxDropdownHeight={maxDropdownHeight}
      onChange={performSearch}
      limit={5}
      w={em(400)}
    />
  );
}
