import { SearchIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { ChangeEvent } from "react";

export interface SearchProps {
  updateSearchTerm: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export default function SearchBox({
  updateSearchTerm,
  placeholder,
}: SearchProps) {
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";

  return (
    <InputGroup
      maxWidth={{ sm: "100%", lg: "30%" }}
      borderColor={isDark ? "brand.400" : "brand.600"}
    >
      <Input
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
