import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const { colorMode, toggleColorMode } = useColorMode();

  const path = pathname === "/" ? "users" : pathname.replace("/", "");

  const isDark = colorMode === "dark";

  return (
    <Flex
      as="header"
      py="5"
      px="10"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid gridTemplateColumns="1fr 1fr" gridGap="10" alignItems="center">
        <Heading fontWeight="black" textTransform="uppercase">
          <Link to="/">Mojo</Link>
        </Heading>
        <Text color="gray.400" fontWeight="500" textTransform="capitalize">
          {path}
        </Text>
      </Grid>
      <Button onClick={toggleColorMode}>
        {isDark ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Flex>
  );
}
