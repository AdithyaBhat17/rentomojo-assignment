import { SearchIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { memo } from "react";
import { SearchProps } from "../../types/components";

function SearchBox({
  updateSearchTerm,
  placeholder,
  isFullWidth = false,
  disabled = false,
}: SearchProps) {
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";

  return (
    <InputGroup
      maxWidth={{ sm: "100%", lg: isFullWidth ? "100%" : "30%" }}
      borderColor={isDark ? "brand.400" : "brand.600"}
    >
      <Input
        disabled={disabled}
        type="text"
        placeholder={placeholder}
        onChange={updateSearchTerm}
      />
      <InputRightElement
        padding="5"
        children={
          <Button h="1.75rem" size="sm">
            <SearchIcon />
          </Button>
        }
      />
    </InputGroup>
  );
}

export default memo(SearchBox);
