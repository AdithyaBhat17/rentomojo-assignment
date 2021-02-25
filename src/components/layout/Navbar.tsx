import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, Grid, Heading, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  return (
    <Flex
      as="header"
      py="5"
      px="10"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading fontWeight="black">
        <Link to="/">mojo.</Link>
      </Heading>
      <Button onClick={toggleColorMode}>
        {isDark ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Flex>
  );
}
