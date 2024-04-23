import { Autocomplete, em} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function FuzzySearch() {
  const placeholder = "Tìm kiếm sản phẩm của bạn ở đây";
  const maxDropdownHeight = 200;
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState<string>("");
  const [suggestion, setSuggestion] = useState<string[]>([]);

  const getSuggestions = (value: string) => {
    setSearchText(value);
    if (value.length > 0) {
      const data = ["Apple", "Banana", "Cherry", "Grape", "Mango", "Orange", "Peach", "Pear", "Pineapple", "Strawberry", "Watermelon"];
      setSuggestion(data);
    }
  }

  const handleSearch = () => {
    navigate(`/search?name=${searchText}`);
  }

  const submitEnter = (event: KeyboardEvent) => {
    event.key === "Enter" && handleSearch();
  }

  const onOptionSubmit = (value: string) => {
    navigate(`/search?name=${value}`);
  }

  return (
    <Autocomplete
      placeholder={placeholder}
      leftSection={<IconSearch stroke={1.5} />}
      leftSectionWidth={34}
      onChange={getSuggestions}
      data={suggestion}
      maxDropdownHeight={maxDropdownHeight}
      limit={5}
      w={em(400)}
      onKeyDown={submitEnter}
      onOptionSubmit={onOptionSubmit}
    />
  );
}
